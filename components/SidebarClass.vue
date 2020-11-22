<template>
    <aside :class="[ToggleMenu ? 'w-full': '','transition-all flex duration-300  max-h-screen overflow-y-auto min-h-full md:w-64']">
        <template v-if="isNotMobile">
            <div :class="[ToggleMenu ? ' fixed z-30 w-3/4': ' ','max-h-screen h-screen bg-indigo-1000 flex flex-col content-between overflow-y-auto']">
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
        </template>
        <template v-if="ToggleMenu">
            <div :class="[ToggleMenu ? ' fixed z-30 w-3/4': 'h-screen','max-h-screen  bg-indigo-1000 flex flex-col content-between overflow-auto']">
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
            <div @click="setToggleMenu(ToggleMenu)":class="[ToggleMenu ? ' fixed z-30 max-h-screen h-screen right-0 w-1/4': ' ','overlay bg-gray-900 z-30 opacity-25']">
            </div>
        </template>
        <div class="fixed flex md:hidden z-50" style="left: 20px; top:35px">
        <button @click="setToggleMenu(ToggleMenu)"
            :class="['toggle z-50', ToggleMenu ? 'active' : '']"
            >
        </button>
    </div>
    </aside>
</template>

<script>
import {mapState} from 'vuex'
import ArrowBack from "~/assets/images/icon-arrow-back.svg?inline";
    export default {
        data(){
            return {
                ToggleMenu: false,
                did: true
            }
        },
        components : {
            ArrowBack
        },
        computed : {
            ...mapState(['course']),
            isNotMobile(){
                if(typeof window == 'undefined'){
                    return false
                }
                return window.innerWidth >= 768 ? true : false
            }
        },
        methods : {
            setToggleMenu(toggle){
                return this.ToggleMenu = !toggle
            }
        }
    }
</script>

<style lang="scss" scoped>
.toggle {
    position: relative;
    width: 20px;
    height: 20px;
    z-index: 9999;
}
.toggle:focus {
    outline: none
}
.toggle:before,
.toggle:after{
    @apply right-0 absolute bg-indigo-500 transition-all duration-200;
    content: "";
    height:3px;
    transform-origin:center;
}
.toggle:before{
    top:26%;
    width: 20px;
}
.toggle:after{
    top: 58%;
    width: 12px;
}
.toggle.active:before{
    @apply bg-indigo-1000;
    transform: translateY(-50%) rotate(-45deg);
}
.toggle.active:after{
    @apply bg-indigo-1000;
    transform: translateY(-50%) rotate(45deg);
}
.toggle.active:before, .toggle.active:after {
    width: 20px;
    top: 50%;
}
</style>