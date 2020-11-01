/* eslint-disable */
// import UserService from "@/services/modules/user.js";


// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    isLoading: false,
    course : null,
})

export const mutations = {
    SET_COURSES(state,course){
        state.courses = course
    }
}

export const actions = {
    async fetchUser({commit}){
        const userdata = await this.$axios.$get('users')
        return userdata
    },
    async fetchLogin({commit,dispatch},credential){
        const response = await this.$axios.$post('users/login',credential)
        this.$axios.setHeader('Authorization',response.data.token)
        const userdata =  await dispatch('fetchUser')
        localStorage.setItem("BWAMICRO:token",JSON.stringify({
            ...response.data,
            email : userdata.data.email
        }))
        console.log(userdata);
        //axios standar package
        // return UserService.postLogin(credential)
        //     .then(response => {
        //         console.log(response)
        //         commit('SET_COURSE',response.data.data);
        //     })
        //     .catch(error => {
        //         if(error.errno == 'ECONNREFUSED'){
        //             commit('SET_ERROR_STATUS',true);
        //         }
        //         commit('SET_ERROR_CODE',404);
        //     })
    }
}

export const getters = {
    
}