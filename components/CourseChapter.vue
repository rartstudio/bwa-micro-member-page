<template>
    <li>
        <span class="relative block py-3 px-5 bg-indigo-800 text-white text-left">
            {{ chapter.name }}
        </span>
        <CourseLesson 
            v-for="lesson in chapter.lessons" 
            :key="`${chapter.id}-${lesson.id}`"
            :lesson="lesson" :chapterCur="chapter.id"
        />
    </li>
</template>

<script>
    export default {
        props: {
            chapter : {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>