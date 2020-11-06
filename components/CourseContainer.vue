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
        }
    }
</script>

<style lang="scss" scoped>

</style>