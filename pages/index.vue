<template>
    <StateLayout link="/login">
        <template v-slot:state-image>
            <img
                src="~assets/images/illustration-private.jpg"
                alt="Ooops we lost you"
                class="h-64"
            />    
        </template>
        <template v-slot:state-title>
            Wow! How are you here?
        </template>
        <template v-slot:state-subtitle>
            Seems like you do not have access for this page. We are sorry.
        </template>
        <template v-slot:state-link>
            Logging me In
        </template>
    </StateLayout>
</template>

<script>
    export default {
        middleware: 'index'
    }
</script>

<style lang="scss" scoped>

</style>