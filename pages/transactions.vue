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
                <SidebarUser/>
                <main class="flex-1">
                    <template v-if="user.transactions.length != 0">
                        <section class="flex flex-col">
                            <HeaderTitle>
                                <template v-slot:title>
                                    Transactions
                                </template>
                                <template v-slot:subtitle>
                                    Keep on tract what you've invested
                                </template>
                            </HeaderTitle>
                        </section>
                        <section class="flex flex-wrap flex-col mt-8 px-4 md:pl-14 md:w-11/12">
                            <TransactionCard v-for="transaction in user.transactions" :key="transaction.id" :transaction="transaction"/>
                        </section>
                    </template>
                    <template v-else>
                            <StateLayout>
                                <template v-slot:state-image>
                                    <img
                                        class="h-48 md:h-64"
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
                </main>
            </div>
        </template>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import DefaultAvatar from "~/assets/images/default-avatar.svg?inline"
    export default {
        middleware: 'user',
        components : {
            DefaultAvatar
        },
        computed: {
            ...mapState(['user'])
        },
        fetchOnServer: false,
        data(){
            return {
                homePage: process.env.frontPage,
                fullPage: false
            }
        },
        async fetch(){

            let loader = this.$loading.show({
                // Optional parameters
                container: this.fullPage ? null : this.$refs.loadingContainer,
            });

            const token = this.$cookies.get('BWAMICRO:token')

            await this.$store.dispatch('user/setHeaderToken',token)
            await this.$store.dispatch('user/fetchUser')
            await this.$store.dispatch('user/fetchUserTransactions')

            await loader.hide()
        },
        //we can have one fetch for each component, 
        //fetch hooks are called in sequence of their hierarchy.
        
    }
</script>

<style lang="scss" scoped>

</style>