<template>
    <div>
        <template v-if="$fetchState.pending">
            <div class="vld-parent" ref="loadingContainer"></div>
        </template>
        <template v-else-if="$fetchState.error">
            error while fetching data
        </template>
        <template v-else>
            <div class="flex">
                <SidebarUser>
                    <template v-slot:avatar>
                        <template v-if="user.userData.avatar">
                            <client-only>
                                <img
                                    class="object-cover w-24 h-24"
                                    :src="user.userData.avatar"
                                    :alt="user.userData.name"
                                />
                            </client-only>
                        </template>
                        <template v-else>
                            <DefaultAvatar class="fill-indigo-500 w-24 h-24"/>
                        </template>
                    </template>
                    <template v-slot:username>
                        {{ user.userData.name }}
                    </template>
                    <template v-slot:profession>{{user.userData.profession}}</template>
                </SidebarUser>
                <main class="flex-1">
                    <div class="px-4">
                        <template v-if="user.myCourses">
                            <CourseContainer/>
                        </template>
                        <template v-else>
                            <StateLayout>
                                <template v-slot:state-image>
                                    <img
                                        class="h-64"
                                        src="~assets/images/illustration-myclass-empty.jpg"
                                        alt="Ooops we lost you"
                                    />    
                                </template>
                                <template v-slot:state-title>
                                    Time to Invest
                                </template>
                                <template v-slot:state-subtitle>
                                    It seems you don’t have any class yet so <br/> let’s get them and grow your skills
                                </template>
                                <template v-slot:state-button>
                                    <a class="cursor-pointer bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
                                    :href="`${homePage}/courses`"
                                    rel="noopener noreferrer">
                                        Find Courses
                                    </a>
                                </template>
                            </StateLayout>
                        </template>
                    </div>
                </main>
            </div>
        </template>
    </div>
</template>

<script>
import DefaultAvatar from "~/assets/images/default-avatar.svg?inline"
import {mapState} from 'vuex'
    export default {
        middleware: 'user',
        components : {
            DefaultAvatar
        },
        fetchOnServer: false,
        data(){
            return {
                homePage: process.env.frontPage,
                fullPage: false
            }
        },
        computed : {
            ...mapState(['user'])
        },
        //we can have one fetch for each component, 
        //fetch hooks are called in sequence of their hierarchy.
        async fetch(){

            let loader = this.$loading.show({
                // Optional parameters
                container: this.fullPage ? null : this.$refs.loadingContainer,
                color : '#161A4F'
            });

            const token = this.$cookies.get('BWAMICRO:token')

            await this.$store.dispatch('user/setHeaderToken',token)
            await this.$store.dispatch('user/fetchUser')
            await this.$store.dispatch('user/fetchMyCourses',this.$store.state.user.userData.id)
            await loader.hide()
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
                    this.$router.push('/login')
                }

                //if no error when refreshing
                const newToken = this.$cookies.get('BWAMICRO:token')
                await this.$store.dispatch('user/setHeaderToken',newToken)
                await this.$store.dispatch('user/fetchUser')
                await this.$store.dispatch('user/fetchMyCourses',this.$store.state.user.userData.id)
            }
        },
        methods: {
            library (){
                window.location.href = process.env.frontPage;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>