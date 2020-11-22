<template>
    <StateLayout>
        <template v-slot:state-image>
            <img
                class="h-48 md:h-64"
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
        <template v-slot:state-button>
            <a class="cursor-pointer bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
            :href="homePage"
            rel="noopener noreferrer">
                Back to home
            </a>
        </template>
        <template v-slot:state-link>
            Back to home
        </template>
    </StateLayout>
</template>

<script>
    export default {
        data(){
            return {
                homePage: process.env.frontPage
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>