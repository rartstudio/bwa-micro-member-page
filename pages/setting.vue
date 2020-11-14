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
                                    Settings
                                </template>
                                <template v-slot:subtitle>
                                    Secure your information
                                </template>
                            </HeaderTitle>
                        </section>
                        <div class="w-4/12 pl-12 mt-5">
                            <SettingForm/>
                        </div>
                </main>
            </div>
        </template>
    </div>
</template>

<script>
import DefaultAvatar from "~/assets/images/default-avatar.svg?inline"
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
        async fetch(){

            let loader = this.$loading.show({
                // Optional parameters
                container: this.fullPage ? null : this.$refs.loadingContainer,
            });

            const token = this.$cookies.get('BWAMICRO:token')

            await this.$store.dispatch('user/setHeaderToken',token)
            await this.$store.dispatch('user/fetchUser')

            await loader.hide()
        },
        //we can have one fetch for each component, 
        //fetch hooks are called in sequence of their hierarchy.
        
    }
</script>

<style lang="scss" scoped>

</style>