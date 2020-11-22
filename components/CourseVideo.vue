<template>
    <div class="px-4 mt-8 md:mt-0 md:pl-12">
        <client-only>
            <div class="pl-12 md:pl-0">
                <h1 class="text-gray-900 font-medium md:font-semibold capitalize text-xl md:text-4xl md:mt-4">
                    {{ course.lessonVideo == null ? getLessonName : course.lessonVideo.name}}
                </h1>
                <p class="text-sm md:text-base text-gray-600 mb-10">
                    {{ course.chapterVideo == null ? getChapterName : course.chapterVideo.name}}
                </p>
            </div>
                <template v-if="!isNotMobile">
                    <youtube-media
                        :video-id="curVideo == null ? getFirstVideo : curVideo"
                        player-width="100%"
                        player-height="220"
                        :player-vars="{autoplay: 1}"
                    ></youtube-media>
                </template>
                <template v-else>
                    <youtube-media
                        :video-id="curVideo == null ? getFirstVideo : curVideo"
                        player-width="850"
                        player-height="450"
                        :player-vars="{autoplay: 1}"
                    ></youtube-media>
                </template>
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
            },
            isNotMobile(){
                return window.innerWidth >= 768 ? true : false
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>