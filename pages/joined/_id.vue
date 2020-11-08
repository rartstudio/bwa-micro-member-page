<template>
    <div>
        <template v-if="loadingState">
            loading
        </template>
        <template v-else>
            <StateLayout class="mt-16">
                <template v-slot:state-image>
                    <img
                        src="~assets/images/illustration-joined.jpg"
                        alt="Success join class"
                        class="h-64"
                    />    
                </template>
                <template v-slot:state-title>
                    Welcome to Class
                </template>
                <template v-slot:state-subtitle>
                    You have successfully joined our <br/>
                    <strong>
                        {{ course.userCourse.name ? course.userCourse.name : 'Class Name'}}
                    </strong>
                    Class
                </template>
                <template v-slot:state-link>
                    Start Learn
                </template>
            </StateLayout>
        </template>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                loadingState : true
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