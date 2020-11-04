<template>
    <div>
        <template v-if="$fetchState.pending">
            loading user data
        </template>
        <template v-else-if="$fetchState.error">
            error while fetching data
        </template>
        <template v-else>
            authenticated page {{ this.user.userData }}
        </template>
        <button class="px-2 py-3 bg-indigo-1000 text-white"@click="logout">
            keluar
        </button>
        <button class="px-2 py-3 bg-indigo-1000 text-white"@click="library">
            Library
        </button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        middleware: 'user',
        fetchOnServer: false,
        computed : {
            ...mapState(['user'])
        },
        //we can have one fetch for each component, 
        //fetch hooks are called in sequence of their hierarchy.
        async fetch(){
            const token = this.$cookies.get('BWAMICRO:token')

            await this.$store.dispatch('user/setHeaderToken',token)
            await this.$store.dispatch('user/fetchUser')

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
            }
        },
        methods: {
            logout (){
                this.$store.dispatch('user/fetchLogout')
            },
            library (){
                window.location.href = process.env.frontPage;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>