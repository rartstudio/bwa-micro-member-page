<template>
    <div>
        <section class="container mx-auto pt-10 px-4">    
            <HeaderParts :mode="'light-mode'"/>
        </section>
        <section class="container mx-auto pt-10 px-4">
            <LoginForm/>
        </section>
        <section class="mt-24 bg-indigo-1000 py-12">
            <FooterPart/>
        </section>
    </div>
</template>

<script>
    export default {
        middleware: ['login'],
        beforeDestroy(){
            this.$store.commit('user/SET_ERROR',false)
            this.$store.commit('user/SET_ERROR_NOTIF',null)
            this.$store.commit('user/SET_SUBMIT_ERROR')
        }
    }
</script>

<style lang="scss" scoped>

</style>