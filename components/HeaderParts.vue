<template>
    <header :class="[ToggleMenu ? 'fixed w-full -mx-4 px-4' : '','flex justify-between items-center']">
        <div style="height:47px">
            <Logo class="logo-micro absolute z-50"/>
        </div>
        <div class="flex md:hidden">
            <button @click="setToggleMenu(ToggleMenu)"
                :class="['toggle z-50', ToggleMenu ? 'active' : '']"
                >
            </button>
        </div>
        <ul :class="['items-center fixed inset-0 bg-gray-100 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible', ToggleMenu ? 'opacity-100 visible z-20' : 'opacity-0 invisible']">
            <li class="my-4 md:my-0">
                <a 
                    :href="home" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Home
                </a>
            </li>
            <li class="my-4 md:my-0">
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Pricing
                </nuxt-link>
            </li>
            <li class="my-4 md:my-0">
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Features
                </nuxt-link>
            </li>
            <li class="my-4 md:my-0">
                <nuxt-link 
                    to="/" 
                    :class="[mode == 'dark-mode' ? 'dark-mode' : mode]">
                    Story
                </nuxt-link>
            </li>
            <li class="my-8 md:my-0">
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
                },
                ToggleMenu: false
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
        methods: {
            setToggleMenu(toggle){
                return this.ToggleMenu = !toggle
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
.toggle {
    position: relative;
    width: 20px;
    height: 20px;
    z-index: 9999;
}
.toggle:focus {
    outline: none
}
.toggle:before,
.toggle:after{
    @apply right-0 absolute bg-gray-900 transition-all duration-200;
    content: "";
    height:3px;
    transform-origin:center;
}
.toggle:before{
    top:26%;
    width: 20px;
}
.toggle:after{
    top: 58%;
    width: 12px;
}
.toggle.active:before{
    transform: translateY(-50%) rotate(-45deg);
}
.toggle.active:after{
    transform: translateY(-50%) rotate(45deg);
}
.toggle.active:before, .toggle.active:after {
    width: 20px;
    top: 50%;
}

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