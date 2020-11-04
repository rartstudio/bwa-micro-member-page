<template>
    <div class="flex justify-center items-center pb-24">
        <div class="w-3/12">
            <h1 class="text-4xl text-gray-900 mb-6">
                <span class="font-bold">Continue </span>Study,<br/>
                Finish your <span class="font-bold">Goals</span>
            </h1>
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
                />
                <FormInput
                    label="Password"
                    v-model="user.password"
                    type="password"
                    id="userPassword"
                    placeholder="Your Password"
                />
                <template v-if="getErrorText">
                    <span class="text-red-600 text-sm">{{getErrorText}}</span>
                </template>
                <FormButton>
                    <template v-slot:title>
                        Masuk
                    </template>
                </FormButton>
            </form>
        </div>
        <div class="w-1/12"></div>
        <HeroParts/>
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
            ...mapGetters('user',['getErrorText'])
        },
        methods : {
            async login (){
                try{
                    await this.$store.dispatch('user/fetchLogin',this.user)
                    if(!this.$store.state.user.isError){
                        await this.$store.dispatch('user/fetchUser')
                        await this.$router.push({name: 'user'})
                    }
                }
                catch (e){

                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>