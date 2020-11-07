<template>
    <div>
        <template v-if="$fetchState.pending">
            <div class="vld-parent" ref="loadingContainer"></div>
        </template>
        <template v-else-if="$fetchState.error">
            error when get data
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
                    You have successfully joined our 
                    <strong>
                        {{ course.userCourse.name ? course.userCourse.name : 'Class Name'}}
                    </strong>
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
        computed: {
            ...mapState(['course'])
        },
        async fetch(){
            // let loader = this.$loading.show({
            //     // Optional parameters
            //     container: this.fullPage ? null : this.$refs.loadingContainer,
            //     color : '#161A4F'
            // });

            // console.log(this.$route.params.id)
            await this.$store.dispatch('course/fetchCourse',this.$route.params.id)

            // await loader.hide()
        }
    }
</script>

<style lang="scss" scoped>

</style>