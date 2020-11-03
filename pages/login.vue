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
        beforeRouteUpdate(to,from,next){ 
            const token = this.$cookies.get('BWAMICRO:token')

            if(!token) {   
                next()
            }

            next(false)
        }
    }
</script>

<style lang="scss" scoped>

</style>