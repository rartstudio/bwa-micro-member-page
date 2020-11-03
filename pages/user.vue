<template>
    <div>
        authenticated page {{ this.user.userData }}
        <button class="px-2 py-3 bg-indigo-1000 text-white"@click="logout">
            keluar
        </button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        middleware: 'user',
        computed : {
            ...mapState(['user'])
        },
        mounted(){
            const token = this.$cookies.get('BWAMICRO:token')

            if(token) {
                this.$store.dispatch('user/setHeaderToken',token)
                this.$store.dispatch('user/fetchUser')
                    .then(response => {
                        if(this.$store.state.user.isError){
                            const refresh = this.$cookies.get('BWAMICRO:refresh')
                            const user = this.$cookies.get('BWAMICRO:user')
                            const data = {
                                refresh_token : refresh,
                                email : user.email
                            }
                            this.$store.dispatch('user/tokenRefresh',data)
                        }
                    })
            }
            else {
                this.$router.push('/login')
            }
        },
        methods: {
            logout (){
                this.$store.dispatch('user/fetchLogout')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>