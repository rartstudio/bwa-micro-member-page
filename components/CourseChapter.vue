<template>
    <li>
        <span class="relative block py-3 px-5 bg-indigo-800 text-white text-left">
            {{ chapter.name }}
        </span>
        <CourseLesson 
            @video="lessonVideo"
            v-for="lesson in chapter.lessons" 
            :key="`${chapter.id}-${lesson.id}`"
            :lesson="lesson"
        />
    </li>
</template>

<script>
    export default {
        props: {
            chapter : {
                type: Object
            }
        },
        methods : {
            async lessonVideo(id) {
                const token = this.$cookies.get('BWAMICRO:token')
                await this.$store.dispatch('user/setHeaderToken',token)
                console.log(id)
                await this.$store.dispatch('course/fetchChapter',this.chapter.id)
                await this.$store.dispatch('course/fetchLesson',id)
                this.$router.push(`/skill/${this.$store.state.course.userCourse.id}/${this.$store.state.course.lessonVideo.id}`)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>