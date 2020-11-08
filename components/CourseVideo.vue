<template>
    <div class="pl-12">
        <client-only>
                <h1 class="text-gray-900 font-semibold capitalize text-4xl mt-4">
                    {{ course.lessonVideo == null ? getLessonName : course.lessonVideo.name}}
                </h1>
                <p class="text-gray-600 mb-10">
                    {{ course.chapterVideo == null ? getChapterName : course.chapterVideo.name}}
                </p>
                <youtube-media
                    :video-id="curVideo == null ? getFirstVideo : curVideo"
                    player-width="850"
                    player-height="450"
                    :player-vars="{autoplay: 1}"
                ></youtube-media>
        </client-only>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
    export default {
        computed : {
            ...mapState(['course']),
            ...mapGetters('course',['getFirstVideo','getLessonName','getChapterName']),
            curVideo(){
                if(this.$store.state.course.lessonVideo == null){
                    return null
                }
                return this.$store.state.course.lessonVideo.video
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>