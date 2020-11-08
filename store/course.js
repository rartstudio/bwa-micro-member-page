// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    isLoading: false,
    userCourse : null,
    lessonVideo: null,
    chapterVideo : null,
})

export const mutations = {
    SET_COURSE(state,data){
        state.userCourse = data
    },
    SET_VIDEO(state,data){
        state.lessonVideo = data
    },
    SET_CHAPTER(state,data){
        state.chapterVideo = data
    }
}

export const actions = {
    fetchCourse({commit},id){
        return this.$axios.$get(`courses/${id}`)
            .then(response => {
                console.log(response.data)
                commit('SET_COURSE',response.data);
            })
            .catch(error => {
                if(error.errno == 'ECONNREFUSED'){
                    // commit('SET_ERROR_STATUS',true);
                }
            })
    },
    fetchLesson({commit},id){
        return this.$axios.$get(`lessons/${id}`)
            .then(response => {
                // console.log(response.data[0])
                commit('SET_VIDEO',response.data)
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    fetchChapter({commit},id){
        return this.$axios.$get(`chapters/${id}`)
            .then(response => {
                console.log(response)
                commit('SET_CHAPTER',response.data)
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}

export const getters = {
    getFirstVideo : state => {
        if(state.userCourse.chapters.length == 0) {
            return ''
        }
        return state.userCourse.chapters[0].lessons[0].video
    },
    getLessonName : state => {
        if(state.userCourse.chapters.length == 0) {
            return ''
        }
        return state.userCourse.chapters[0].lessons[0].name
    },
    getChapterName: state => {
        if(state.userCourse.chapters.length == 0) {
            return ''
        }
        return state.userCourse.chapters[0].name
    },
    getTypeCourse : state => {
        if (state.course.type == 'free') {
            return "Free"
        }
        if (state.course.type != 'free') {
            if(state.course.price != null) {
                return state.course.price
            }
            return 0
        }
    }
}