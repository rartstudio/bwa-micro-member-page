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
            // let loader = this.$loading.show({
            //     // Optional parameters
            //     container: this.fullPage ? null : this.$refs.loadingContainer,
            //     color : '#161A4F'
            // });

            // console.log(this.$route.params.id)
            await this.$store.dispatch('course/fetchCourse',this.$route.params.id)
            this.loadingState = false
            // await loader.hide()
        }
    }
</script>

<style lang="scss" scoped>

</style>