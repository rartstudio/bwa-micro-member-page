<template>
    <div>
        <HeaderTitle>
            <template v-slot:title>My Class</template>
            <template v-slot:subtitle>Continue your learning to pursue your dream</template>
        </HeaderTitle>
        <section class="flex flex-col mt-8 pl-12">
                <div class="flex flex-wrap justify-start items-center -mx-4">
                    <ItemCourse v-for="courses in user.myCourses" :item="courses.course" :key="courses.id"/>
                </div>
        </section>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        
        computed: {
            ...mapState(['user'])
        },
        mounted (){
            let loader = this.$loading.show({
                // Optional parameters
                container: this.fullPage ? null : this.$refs.loadingContainer,
                color : '#161A4F'
            });

            const token = this.$cookies.get('BWAMICRO:token')
            this.$store.dispatch('user/setHeaderToken',token)
            this.$store.dispatch('user/fetchMyCourses',this.$store.state.user.userData.id)
            loader.hide()
        }
    }
</script>

<style lang="scss" scoped>

</style>