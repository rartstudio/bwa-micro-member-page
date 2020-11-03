<template>
    <header class="flex justify-between items-center">
        <div style="height:47px">
            <Logo class="logo-micro"/>
        </div>
        <ul class="flex items-center">
            <li>
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Home
                </nuxt-link>
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
                <a
                    :href="'/'+link.path"
                    :class="['btn-login']">
                    {{ text }}
                </a>
                <!-- <nuxt-link 
                    to="/"
                    target="_blank"
                    rel="noopener noereferrer" 
                    class="text-lg text-white font-medium px-6 py-3  ml-6 inline-flex items-center duration-200 transition-all hover:bg-indigo-800 hover:text-teal-500">
                    
                    <span class="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
                        <img
                            class="object-cover w-8 h-8 inline-block"
                        />
                        <img
                            class="fill-indigo-500 w-8 h-8 inline-block"
                        />
                    </span>
                    Hi,
                </nuxt-link> -->
            </li>
        </ul>
    </header>
</template>

<script>
import Logo from "~/assets/images/logo.svg?inline"
    export default {
        data(){
            return {
                login : 'localhost:3002',
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