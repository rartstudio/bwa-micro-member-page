<template>
    <section class="h-screen flex flex-col items-center">
        <slot name="state-image"></slot>
        <h1 class="text-3xl text-gray-900 mt-12">
            <slot name="state-title"></slot>
        </h1>
        <p class="text-lg text-gray-600 mt-4 mb-8 mx-auto text-center">
            <slot name="state-subtitle"></slot>
        </p>
        <nuxt-link to="" class="cursor-pointer bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5">
            <slot name="state-link"></slot>
        </nuxt-link>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>