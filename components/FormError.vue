<template>
    <p class="text-red-600 mb-4 text-sm">{{text}}</p>
</template>

<script>
    export default {
        props : {
            text : {
                type : [String,Boolean,Object]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>