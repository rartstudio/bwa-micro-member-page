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
        async mounted(){
            this.loadingState = true
            await this.$store.dispatch('course/fetchCourse',this.$route.params.id)
            this.loadingState = false
        }
    }
</script>

<style lang="scss" scoped>

</style>