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
                        <section class="flex flex-wrap flex-col mt-8 pl-14 w-11/12">
                            <TransactionCard v-for="transaction in user.transactions" :key="transaction.id" :transaction="transaction"/>
                        </section>
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