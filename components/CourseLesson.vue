<template>
    <div>
        <li class="relative flex-items-center py-3 px-5 transition-all duration-200 w-full cursor-pointer text-left hover:text-white text-indigo-500 truncate ..." @click="lessonVideo">
            {{ lesson.name }}
        </li>
    </div>
</template>

<script>
    export default {
        props : {
            lesson : {
                type: Object
            }
        },
        methods : {
            lessonVideo(){
                this.$emit('video',this.lesson.id)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>