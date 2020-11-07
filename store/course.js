// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    isLoading: false,
    userCourse : null
})

export const mutations = {
    SET_COURSE(state,data){
        state.userCourse = data
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
    }
}

export const getters = {
    getFirstVideo : state => {
        if(state.course.chapters.length == 0) {
            return ''
        }
        return state.course.chapters[0].lessons[0].video
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