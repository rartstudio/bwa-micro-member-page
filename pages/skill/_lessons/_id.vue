<template>
    <div>
        <template v-if="loadingState">
            
        </template>
        <template v-else>
            <div class="flex">
                <SidebarClass/>
                <CourseVideo/>
            </div>
        </template>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        data() {
            return {
                loadingState: true
            }
        },
        computed: {
            ...mapState(['course'])
        },
        async fetch(){
            this.loadingState = true
            const token = this.$cookies.get('BWAMICRO:token')
            await this.$store.dispatch('user/setHeaderToken',token)
            await this.$store.dispatch('course/fetchCourse',this.$route.params.lessons)
            // await this.$store.dispatch('course/fetchLesson',this.$route.params.id)
            // await this.$store.dispatch('course/fetchChapter',this.$store.state.course.lessonVideo.chapter_id)
            this.loadingState = false
        }
    }
</script>

<style lang="scss" scoped>

</style>