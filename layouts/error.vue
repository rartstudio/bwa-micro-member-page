<template>
    <StateLayout>
        <template v-slot:state-image>
            <img
                class="h-64"
                src="~assets/images/illustration-notfound.jpg"
                alt="Ooops we lost you"
            />    
        </template>
        <template v-slot:state-title>
            Opps! We’re lost
        </template>
        <template v-slot:state-subtitle>
            The page that you requested is not found in our system
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