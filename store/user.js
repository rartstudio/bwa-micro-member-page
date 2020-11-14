/* eslint-disable */
// import UserService from "@/services/modules/user.js";
import moment from 'moment';
// import cookies from 'js-cookie';

// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    isError: false,
    isLoading: false,
    course : null,
    token: null,
    userData: null,
    error : null,
    submitError : null,
    myCourses: null
})

export const mutations = {
    SET_MY_COURSES(state,data){
        state.myCourses = data
    },
    SET_COURSES(state,data){
        state.courses = data
    },
    SET_ERROR_NOTIF(state,data){
        state.error = data
    },
    SET_SUBMIT_ERROR(state, data){
        state.submitError = data
    },
    SET_ERROR(state,data){
        state.isError = data
    },
    SET_USER(state,data){
        state.userData = data
    },
    SET_TOKEN(state,data){
        state.token = data
    },
    REMOVE_TOKEN(state){
        state.token =  null
    },
    REMOVE_USER(state){
        state.user = null
    },

    UPDATE_NAME(state,value){
        state.userData.name = value
    },
    UPDATE_EMAIL(state,value){
        state.userData.email = value
    },
    UPDATE_PROFESSION(state,value){
        state.userData.profession = value
    },
    UPDATE_PASSWORD(state,value){
        state.userData.password = value
    }
}

export const actions = {
    setHeaderToken({commit},token){
        // Overrides `Authorization` header with new value
        this.$axios.setHeader('Authorization',token)
        commit('SET_TOKEN',token)
    },
    setCookieToken({commit},token){
        //format('ddd, DD MMM YYYY HH:mm:ss ZZ');
        const expiredTime = moment().add(7,'days')
        const data = JSON.stringify(token)
        this.$cookies.set('BWAMICRO:token',data,{expires: expiredTime._d})
    },
    setCookieUser({commit},user){
        const expiredTime = moment().add(7,'days')
        const data = JSON.stringify(user);
        this.$cookies.set('BWAMICRO:user',data,{expires: expiredTime._d})
    },
    setCookieRefresh({commit},token){
        const expiredTime = moment().add(7,'days')
        const data = JSON.stringify(token)
        this.$cookies.set('BWAMICRO:refresh',data,{expires: expiredTime._d})
    },
    fetchAvatar(data){
        return this.$axios.$post(process.env.imageUrl,data)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    fetchUser({commit,dispatch}){
        return this.$axios.$get('users')
            .then(response => {
                commit('SET_USER',response.data)
                const userCookie = {
                    name: response.data.name,
                    thumbnail: response.data.avatar,
                    email: response.data.email,
                    id : response.data.id
                }
                dispatch('setCookieUser',userCookie)
                commit('SET_ERROR',false)
            })
            .catch(error => {
                commit('SET_ERROR',true)
                if(error.response.status == 403) {
                    commit('SET_ERROR_NOTIF',error.response.data.message)
                }
            })
    },
    fetchLogout({state}){
        return this.$axios.$post('users/logout',state.userData.id)
            .then(response => {
                this.$cookies.remove('BWAMICRO:token')
                this.$cookies.remove('BWAMICRO:refresh')
                this.$cookies.remove('BWAMICRO:user')
                this.$axios.setHeader('Authorization','')
                window.location.href = process.env.frontPage;
            })
            .catch(e => console.log(e))
    },
    tokenRefresh({dispatch,commit},credential){
        return this.$axios.$post('refresh-tokens',credential)
            .then(response => {
                dispatch('setCookieToken',response.data.token)
                commit('SET_ERROR',false)
            })
            .catch(error => {
                commit('SET_ERROR',true)
                if(error.response.status == 403) {
                    commit('SET_ERROR_NOTIF','sesi login telah berakhir ')
                }
            })
        
    },
    fetchRegister({commit},credential){
        // console.log(credential);
        return this.$axios.$post('users/register',credential)
            .then(response => {
                commit('SET_ERROR',false)
            })
            .catch(error => {
                commit('SET_SUBMIT_ERROR',error.response.data.message)
                commit('SET_ERROR',true)
            })
    },
    fetchLogin({commit,dispatch},credential){
        return this.$axios.$post('users/login',credential)
            .then(response => {
                dispatch('setCookieToken',response.data.token)
                dispatch('setCookieRefresh',response.data.refresh_token)
                dispatch('setHeaderToken',response.data.token)
                // dispatch('fetchUser')
                commit('SET_ERROR',false)
                // this.$router.push('/user')
            })
            .catch(error => {                
                commit('SET_ERROR',true)
                if(error.response.status == 404) {
                    commit('SET_ERROR_NOTIF',error.response.data.message)
                }
                commit('SET_SUBMIT_ERROR',error.response.data.message)
            })
    },
    fetchMyCourses({commit},id){
        return this.$axios.$get(`my-courses?user_id=${id}`)
            .then(response => {
                commit('SET_MY_COURSES',response.data)
            })
    }
}

export const getters = {
    getErrorText : state => {
        return state.error
    },
    getError : state => {
        return state.isError
    },
    getNameError : state => {
        let error = state.submitError
        if(error) {
            let result = error.filter(item => item.field == 'name')
            return result[0]
        }
        return false
    },
    getEmailError : state => {
        let error = state.submitError
        if(error) {
            let result = error.filter(item => item.field == 'email')
            return result[0]
        }
        return false
    },
    getPassError : state => {
        let error = state.submitError
        if(error){
            let result = error.filter(item => item.field == 'password')
            return result[0]
        }
        return false
    }
}