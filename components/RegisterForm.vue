<template>
    <div class="flex justify-center items-center pb-24">
        <div class="w-3/12">
            <h1 class="text-4xl text-gray-900 mb-6">
                <span class="font-bold">Grow Skills</span>
                From, <br/>
                Anywhere
            </h1>
            <form @submit.prevent="register">
                <!-- v-model syntatic sugar
                    :value="user.email"
                    @input="(value) => { user.email = value }" 
                -->
                <FormInput 
                    label="Full Name" 
                    v-model="user.name"
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
                    v-model="user.email"
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
                    v-model="user.password"
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
                    v-model="user.profession"
                    :occupations="occupations"
                    id="userOccupation"
                    :empty="isEmpty"
                />
                <template v-if="user.profession == 'others'">
                    <FormInput 
                        label="Other Occupation" 
                        v-model="profession"
                        type="text"
                        placeholder="Your Name"
                        id="userName"
                    />
                </template>
                <FormButton>
                    <template v-slot:title>
                        Daftar
                    </template>
                </FormButton>
            </form>
        </div>
        <div class="w-1/12"></div>
        <HeroParts>
            <template v-slot:images>
                <img 
                    src="~/assets/images/james.jpg"
                    alt="Hero Image"
                    />
            </template>
        </HeroParts>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        data (){
            return {
                occupations: ['Web Designer','Frontend Developer','Backend Developer','others'],
                user : {
                    name: '',
                    email :'',
                    password: '',
                    profession: '',
                },
                profession: ''
            }
        },
        computed : {
            isEmpty (){
                return this.user.profession == '' ? true : false
            },
            ...mapGetters('user',['getNameError','getEmailError','getPassError'])
        },
        methods : {
            register (){
                if(this.user.profession == 'others'){
                    this.user.profession == this.profession
                }
                this.$store.dispatch('user/fetchRegister',this.user)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>