<template>
    <section class="flex flex-col mt-8 pl-12">
        <h1 class="text-4xl text-gray-900 font-medium">
            <slot name="title"></slot>
        </h1>
        <p class="text-sm text-gray-600">
            <slot name="subtitle"></slot>
        </p>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>