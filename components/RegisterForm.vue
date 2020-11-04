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
                />
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
                <FormInput 
                    label="" 
                    v-model="user.name"
                    type="text"
                    placeholder="Your Name"
                    id="userName"
                />
                <FormButton>
                    <template v-slot:title>
                        Daftar
                    </template>
                </FormButton>
            </form>
        </div>
        <div class="w-1/12"></div>
        <HeroParts/>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                user : {
                    name: '',
                    email :'',
                    password: '',
                }
            }
        },
        methods : {
            register (){
                this.$store.dispatch('user/fetchLogin',this.user)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>