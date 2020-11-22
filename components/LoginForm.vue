<template>
    <div class="flex justify-start md:justify-center md:items-center pb-24">
        <div class="w-full md:w-3/12">
            <h1 class="text-4xl text-gray-900 mb-6">
                <span class="font-bold">Continue </span>Study,<br class="hidden md:block"/>
                Finish your <span class="font-bold">Goals</span>
            </h1>
            <p class="text-teal-500 mb-2">
                {{ this.$store.state.user.registerMessage ? this.$store.state.user.registerMessage : '' }}
            </p>
            <form @submit.prevent="login">
                <!-- v-model syntatic sugar
                    :value="user.email"
                    @input="(value) => { user.email = value }" 
                -->
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
                <template v-if="getPassError == 'user not found'">
                    <FormError :text="getPassError"/>
                </template>
                <FormButton>
                    <template v-slot:title>
                        Masuk
                    </template>
                </FormButton>
            </form>
        </div>
        <div class="w-1/12 hidden md:block"></div>
        <HeroParts>
            <template v-slot:images>
                <img 
                src="~/assets/images/tamara.jpg"
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
                user : {
                    email :'',
                    password: '',
                }
            }
        },
        computed: {
            ...mapGetters('user',['getEmailError','getPassError'])
        },
        methods : {
            login (){
                try{
                    this.$store.dispatch('user/fetchLogin',this.user)
                            .then(() => {
                                if(!this.$store.state.user.isError){
                                    this.$store.dispatch('user/fetchUser')
                                    this.$router.push({name: 'user'})
                                }
                            })
                }
                catch (e){

                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>