<template>
    <aside class="transition-all duration-300 bg-indigo-1000 max-h-screen h-screen overflow-y-auto min-h-full" style="width:280px">
        <div class="max-h-screen h-screen fixed bg-indigo-1000 flex flex-col content-between z-50" style="width:280px">
            <div class="flex flex-col text-center mt-8">
                <div class="border border-indigo-500 rounded-full mx-auto p-2 inline-flex mb-3">
                    <div class="rounded-full overflow-hidden">
                        <slot name="avatar">
                        </slot>
                    </div>
                </div>
                <h6 class="text-white text-xl">
                    <slot name="username"></slot>
                </h6>
                <span class="text-indigo-500 text-sm mt-1">
                    <slot name="profession">Profession</slot>
                </span>
            </div>
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
                    <nuxt-link to="/settings" class="nav-link ">
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
    </aside>
</template>

<script>
    export default {
        data(){
            return {
                homePage: process.env.frontPage
            }
        },
        computed: {
            activeRoute(){
                this.$route.path
            }
        },
        methods : {
            logout (){
                this.$store.dispatch('user/fetchLogout')
            },
        }
    }
</script>

<style lang="scss" scoped>
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