<template>
    <aside class="transition-all flex duration-300 bg-indigo-1000 max-h-screen h-screen overflow-y-auto min-h-full md:w-64">
        <template v-if="isNotMobile">
            <div :class="[ToggleMenu ? ' fixed z-30': '','max-h-screen h-screen bg-indigo-1000 flex flex-col content-between w-full']">
                <template v-if="user.userData">
                    <div class="flex flex-col text-center mt-8">
                        <div class="border border-indigo-500 rounded-full mx-auto p-2 inline-flex mb-3">
                            <div class="rounded-full overflow-hidden">
                                <template v-if="user.userData.avatar">
                                    <client-only>
                                        <img
                                            class="object-cover w-24 h-24"
                                            :src="`${user.userData.avatar}`"
                                            :alt="user.userData.name"
                                        />
                                    </client-only>
                                </template>
                                <template v-else>
                                    <DefaultUser class="fill-indigo-500 w-24 h-24"/>
                                </template>
                            </div>
                        </div>
                        <h6 class="text-white text-xl">
                            {{ user.userData.name }}
                        </h6>
                        <span class="text-indigo-500 text-sm mt-1">
                            {{user.userData.profession ? user.userData.profession : 'Profession ?' }} 
                        </span>
                    </div>
                </template>
                <ul class="main-menu mt-12">
                    <li>
                        <nuxt-link to="/user" class="nav-link">
                            My Class
                        </nuxt-link>
                    </li>
                    <li>
                        <a :href="`${homePage}/courses`" class="nav-link">
                            Library
                        </a>
                    </li>
                    <li>
                        <nuxt-link to="/transactions" class="nav-link ">
                            Transactions
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/setting" class="nav-link ">
                            Settings
                        </nuxt-link>
                    </li>
                </ul>
                <div class="my-auto"></div>
                <ul class="main-menu mt-12">
                    <li>
                        <button class="nav-link" @click="logout">Logout</button>
                    </li>
                </ul>
            </div>
        </template>
        <template v-if="ToggleMenu">
            <div :class="[ToggleMenu ? ' fixed z-30 w-3/4': ' ','max-h-screen h-screen bg-indigo-1000 flex flex-col content-between']">
                <template v-if="user.userData">
                    <div class="flex flex-col text-center mt-8">
                        <div class="border border-indigo-500 rounded-full mx-auto p-2 inline-flex mb-3">
                            <div class="rounded-full overflow-hidden">
                                <template v-if="user.userData.avatar">
                                    <client-only>
                                        <img
                                            class="object-cover w-24 h-24"
                                            :src="`${user.userData.avatar}`"
                                            :alt="user.userData.name"
                                        />
                                    </client-only>
                                </template>
                                <template v-else>
                                    <DefaultUser class="fill-indigo-500 w-24 h-24"/>
                                </template>
                            </div>
                        </div>
                        <h6 class="text-white text-xl">
                            {{ user.userData.name }}
                        </h6>
                        <span class="text-indigo-500 text-sm mt-1">
                            {{user.userData.profession ? user.userData.profession : 'Profession ?' }} 
                        </span>
                    </div>
                </template>
                <ul class="main-menu mt-12">
                    <li>
                        <nuxt-link to="/user" class="nav-link">
                            My Class
                        </nuxt-link>
                    </li>
                    <li>
                        <a :href="`${homePage}/courses`" class="nav-link">
                            Library
                        </a>
                    </li>
                    <li>
                        <nuxt-link to="/transactions" class="nav-link ">
                            Transactions
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/setting" class="nav-link ">
                            Settings
                        </nuxt-link>
                    </li>
                </ul>
                <div class="my-auto"></div>
                <ul class="main-menu mt-12">
                    <li>
                        <button class="nav-link" @click="logout">Logout</button>
                    </li>
                </ul>
            </div>
            <div @click="setToggleMenu(ToggleMenu)":class="[ToggleMenu ? ' fixed z-30 max-h-screen h-screen right-0 w-1/4': ' ','overlay bg-gray-900 z-30 opacity-25']">
            </div>
        </template>
        <div class="fixed flex md:hidden z-50" style="left: 20px; top:35px">
            <button @click="setToggleMenu(ToggleMenu)"
                :class="['toggle z-50', ToggleMenu ? 'active' : '']"
                >
            </button>
        </div>
    </aside>
</template>

<script>
import DefaultUser from "~/assets/images/default-avatar.svg?inline"
import {mapState} from 'vuex'
    export default {
        data(){
            return {
                homePage: process.env.frontPage,
                ToggleMenu: false
            }
        },
        components: {
            DefaultUser
        },
        computed: {
            activeRoute(){
                this.$route.path
            },
            ...mapState(['user']),
            isNotMobile(){
                return window.innerWidth >= 768 ? true : false
            }
        },
        methods : {
            setToggleMenu(toggle){
                return this.ToggleMenu = !toggle
            },
            logout (){
                this.$store.dispatch('user/fetchLogout')
            },
        }
    }
</script>

<style lang="scss" scoped>
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
    @apply right-0 absolute bg-indigo-500 transition-all duration-200;
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
    @apply bg-indigo-1000;
    transform: translateY(-50%) rotate(-45deg);
}
.toggle.active:after{
    @apply bg-indigo-1000;
    transform: translateY(-50%) rotate(45deg);
}
.toggle.active:before, .toggle.active:after {
    width: 20px;
    top: 50%;
}

.nav-link {
    @apply relative flex items-center py-3 px-5 transition-all duration-200 w-full text-left text-indigo-500;
}
.nav-link:hover{
    @apply text-white
}
.nav-link:focus {
    @apply outline-none
}
.nuxt-link-active {
    @apply text-white bg-indigo-900 border-r-4 border-teal-500
}
</style>