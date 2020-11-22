<template>
    <StateLayout>
        <template v-slot:state-image>
            <img
                src="~assets/images/illustration-notfound.jpg"
                alt="Ooops we lost you"
                class="h-48 md:h-64"
            />    
        </template>
        <template v-slot:state-title>
            Opps! Server error
        </template>
        <template v-slot:state-subtitle>
            Mostly this cause by the server was busy, please try again later.
        </template>
        <template v-slot:state-link>
            Back to home
        </template>
    </StateLayout>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>