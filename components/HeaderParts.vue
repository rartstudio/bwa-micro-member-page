<template>
    <header class="flex justify-between items-center">
        <div style="height:47px">
            <Logo class="logo-micro"/>
        </div>
        <ul class="flex items-center">
            <li>
                <a 
                    :href="home" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Home
                </a>
            </li>
            <li>
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Pricing
                </nuxt-link>
            </li>
            <li>
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Features
                </nuxt-link>
            </li>
            <li>
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Story
                </nuxt-link>
            </li>
            <li>
                <!-- <a
                    :href="'/'+link.path"
                    :class="['btn-login']">
                    {{ text }}
                </a> -->
                <nuxt-link 
                    :to="{...link}" 
                    :class="['btn-login']">
                    {{ text }}
                </nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>
import Logo from "~/assets/images/logo.svg?inline"
    export default {
        data(){
            return {
                home : process.env.frontPage,
                text: 'Daftar',
                link : {
                    path: '/register'
                }
            }
        },
        components: {
            Logo
        },
        props : {
            mode: {
                type: String,
                default : 'dark-mode'
            }
        },
        created(){
            let curRoute = this.$route.path;

            if(curRoute == '/login'){
                this.text="Daftar"
                this.link.path="register"
            }
            else {
                this.text="Masuk"
                this.link.path="login"
            }
        }
    }
</script>

<style>
.logo-micro path{
    fill: #132b50
}
.logo-micro circle{
    fill: #fe721c;
}
.light-mode {
    @apply text-black text-lg font-medium px-6 py-3
}
.light-mode:hover {
    @apply text-teal-500
}
.dark-mode {
    @apply text-white text-lg font-medium px-6 py-3
}
.dark-mode:hover {
    @apply text-teal-500
}
.btn-login {
    @apply bg-indigo-700 cursor-pointer transition-all duration-200 ml-6 text-white text-lg font-medium px-6 py-3
}
.btn-login:hover {
    @apply bg-indigo-600;
}
</style>