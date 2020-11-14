<template>
    <div>
        <li class="relative flex-items-center py-3 px-5 transition-all duration-200 w-full cursor-pointer text-left hover:text-white text-indigo-500 truncate ..." >
            <nuxt-link :to="routing">
                {{ lesson.name }}
            </nuxt-link>
        </li>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        props : {
            lesson : {
                type: Object
            },
            chapterCur: {
                type: [String,Number]
            }
        },
        computed : {
            ...mapState(['course']),
            routing (){
                let length = Object.keys(this.$route.params).length
                if (length == 2) {
                    return `${this.lesson.id}`
                }
                else {
                    return `${this.course.userCourse.id}/${this.lesson.id}`
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.nuxt-link-active {
    @apply text-teal-500;
}
</style>