<template>
    <div>
        <section class="flex col mt-8 mb-4">
            <div class="flex justify-start items-center -mx-5">
                <div class="w-auto text-center px-5">
                    <div class="rounded-full overflow-hidden w-24 h-24">
                        <template v-if="user.avatar">
                            <img :src="user.avatar" alt="preview" class="object-cover w-full h-full">
                        </template>
                        <template v-else>
                            <DefaultUser class="fill-indigo-500" style="width:90px;height:90px">
                            </DefaultUser>
                        </template>
                    </div>
                </div>
                <div class="w-full flex flex-col">
                    <span class="text-gray-600">Add your picture ...</span>
                    <div>
                        <input @change="handleImage" type="file" accept="image/*" ref="inputImage" class="hidden">
                        <button 
                        @click="openImage"
                        class="bg-gray-300 transition-all duration-200 shadow-inner text-white px-6 py-3 mt-3 hover:bg-gray-400 focus:outline-none">
                            Browse
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <form @submit.prevent="update">
                <!-- v-model syntatic sugar
                    :value="user.email"
                    @input="(value) => { user.email = value }" 
                -->
                <FormInput 
                    label="Full Name" 
                    v-model="name"
                    type="text"
                    placeholder="Your Name"
                    id="userName"
                    :error="getNameError"
                />
                <template v-if="getNameError">
                    <FormError :text="getNameError.message"/>
                </template>
                <FormInput 
                    label="Email Address" 
                    v-model="email"
                    type="email"
                    placeholder="Your Email Address"
                    id="userEmail"
                    :error="getEmailError"
                />
                <template v-if="getEmailError">
                    <FormError :text="getEmailError.message"/>
                </template>
                <FormInput
                    label="Password"
                    v-model="password"
                    type="password"
                    id="userPassword"
                    placeholder="Your Password"
                    :error="getPassError"
                />
                <template v-if="getPassError">
                    <FormError :text="getPassError.message"/>
                </template>
                
                <FormSelect
                    label="Occupation"
                    v-model="profession"
                    :selectedProfession="profession"
                    :occupations="occupations"
                    id="userOccupation"
                    :empty="isEmpty"
                />
                <template v-if="user.profession == 'others'">
                    <FormInput 
                        label="Other Occupation" 
                        v-model="otherProfession"
                        type="text"
                        placeholder="Other Occupations"
                        id="otherOccupations"
                    />
                </template>
                <FormButton>
                    <template v-slot:title>
                        Ubah
                    </template>
                </FormButton>
        </form>
    </div>
</template>

<script>
import DefaultUser from "~/assets/images/default-avatar.svg?inline"
import {mapGetters} from 'vuex'
    export default {
        components: {
            DefaultUser
        },
        data (){
            return {
                occupations: ['Web Designer','Front End Developer','Back End Developer','others'],
                user : {
                    name: '',
                    email : '',
                    password: '',
                    avatar: '',
                    profession: '',
                },
                otherProfession: ''
            }
        },
        computed : {
            ...mapGetters('user',['getNameError','getEmailError','getPassError','getName','getEmail','getProfession','getUploadAvatar']),
            name :{
                get () {
                    return this.getName
                },
                set (value) {
                    this.user.name = value   
                }
            },
            email: {
                get () {
                    return this.getEmail
                },
                set (value) {
                    this.user.email = value   
                }
            },
            password : {
                get () {
                    return ''
                },
                set (value) {
                    this.user.password = value   
                }
            },
            profession : {
                get () { 
                    if(this.user.profession){
                        return this.user.profession
                    }
                    else {
                        let others = this.occupations.indexOf(this.getProfession);
                        if(others == -1) {
                            this.otherProfession = this.getProfession
                            return this.user.profession = "others"
                        }
                        return this.getProfession
                    }
                },
                set (value) {
                    this.user.profession = value
                }
            },
            isEmpty (){
                return this.user.profession == '' ? true : false
            },
            
        },
        methods : {
            openImage(){
                let inputImage = this.$refs.inputImage;
                inputImage.click();
            },
            handleImage(e){
                const selectedImage = e.target.files[0];
                this.createBase64Image(selectedImage)
            },
            createBase64Image(fileObject){
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.user.avatar = e.target.result
                }
                reader.readAsDataURL(fileObject)
            },
            async update (){
                console.log(this.user)
                const token = this.$cookies.get('BWAMICRO:token')
                try {
                    if(this.user.avatar){
                        const images = {
                            image : this.user.avatar
                        }
                        await this.$store.dispatch('user/fetchAvatar',images);
                    }
                    await this.$store.dispatch('user/setHeaderToken',token);
                    await this.$store.dispatch('user/fetchUser')

                    if(this.$store.state.user.isError){
                        const refresh = this.$cookies.get('BWAMICRO:refresh')
                        const user = this.$cookies.get('BWAMICRO:user')
                        const data = {
                            refresh_token : refresh,
                            email : user.email
                        }
                        
                        await this.$store.dispatch('user/tokenRefresh',data)
                        
                        //if any error will delete and push user to login again
                        if(this.$store.state.user.isError){
                            this.$cookies.remove('BWAMICRO:token')
                            this.$cookies.remove('BWAMICRO:user')
                            this.$cookies.remove('BWAMICRO:refresh')
                            loader.hide();
                            this.$router.push('/login')
                        }

                        //if no error when refreshing
                        const newToken = this.$cookies.get('BWAMICRO:token')
                        await this.$store.dispatch('user/setHeaderToken',newToken)
                    }

                    this.user.name = this.user.name == '' ? this.getName : this.user.name
                    this.user.email = this.user.email == '' ? this.getEmail : this.user.email
                    if(this.user.profession == 'others'){
                        this.user.profession = this.otherProfession
                    }
                    this.user.avatar = `http://${this.getUploadAvatar}`
                    await this.$store.dispatch('user/fetchUpdateProfile',this.user);
                    if(!this.$store.state.user.isError){
                        await this.$store.dispatch('user/fetchLogout')
                    }
                }
                catch (e){
                    console.log(e)
                }
            }
        },
        beforeDestroy(){
            this.$store.commit('user/SET_ERROR',false)
            this.$store.commit('user/SET_ERROR_NOTIF',null)
            this.$store.commit('user/SET_SUBMIT_ERROR')
        }
    }
</script>

<style lang="scss" scoped>

</style>