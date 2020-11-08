<template>
    <aside class="bg-indigo-1000 max-h-screen h-screen overflow-y-auto transition-all duration-300 min-h-full" style="width: 250px">
        <div class="max-h-screen h-screen fixed bg-indigo-1000 flex flex-col content-between" style="width: 250px">
            <ul>
                <li>
                    <nuxt-link to="/" class="relative flex items-center py-3 px-5 w-full text-left text-white mb-12 mt-3 hover:bg-indigo-700">
                        <ArrowBack class="fill-white mr-2"/>
                        Back to home
                    </nuxt-link>
                </li>
                <CourseChapter 
                    v-for="chapter in course.userCourse.chapters" 
                    :key="`${course.userCourse.id }-${chapter.id}`"
                    :chapter="chapter"
                />
            </ul>
        </div>
    </aside>
</template>

<script>
import {mapState} from 'vuex'
import ArrowBack from "~/assets/images/icon-arrow-back.svg?inline";
    export default {
        components : {
            ArrowBack
        },
        computed : {
            ...mapState(['course'])
        }
    }
</script>

<style lang="scss" scoped>

</style>