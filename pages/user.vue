<template>
    <div>
        authenticated page
        <button class="px-2 py-3 bg-indigo-1000 text-white"@click="logout">
            keluar
        </button>
    </div>
</template>

<script>
    export default {
        middleware: 'user',
        methods: {
            logout (){
                this.$store.dispatch('user/logout')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>