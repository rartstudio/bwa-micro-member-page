/* eslint-disable */
// import UserService from "@/services/modules/user.js";
import moment from 'moment';
// import cookies from 'js-cookie';

// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    isLoading: false,
    course : null,
    token: null,
    user: null
})

export const mutations = {
    SET_COURSES(state,data){
        state.courses = data
    },
    SET_USER(state,data){
        state.user = data
    },
    SET_TOKEN(state,data){
        state.token = data
    },
    REMOVE_TOKEN(state){
        state.token =  null
    },
    REMOVE_USER(state){
        state.user = null
    }
}

export const actions = {
    async fetchUser({commit,state,dispatch}){
        try{
            const token = this.$cookies.get('BWAMICRO:token')

            if(state.token){
                await dispatch('setHeaderToken',state.token)
            }

            else {
                await dispatch('setHeaderToken',token)
            }

            const response = await this.$axios.$get('users')
            const userCookie = {
                name: response.data.name,
                thumbnail: response.data.avatar,
                email: response.data.email
            }
            commit('SET_USER',response.data)
            dispatch('setCookieUser',userCookie)
        }
        catch (error){
            console.log(error)
        }
    },
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
    logout({state}){
        return this.$axios.$post('users/logout',state.user.id).then(response => {
            this.$cookies.remove('BWAMICRO:token')
            this.$cookies.remove('BWAMICRO:refresh')
            this.$cookies.remove('BWAMICRO:user')
            this.$router.push('/login')
            console.log('logout sukses')}).catch(e => console.log(e))
    },
    async tokenRefresh({commit,dispatch},credential){
        try {
            const response = await this.$axios.$post('refresh-tokens',credential)

            await dispatch('setCookieToken',response.data.token)

            dispatch('fetchUser')

            console.log('from token refresh')
        }
        catch (e){
            console.log(e)
        }
    },
    async fetchLogin({commit,dispatch},credential){

        try {
            const response = await this.$axios.$post('users/login',credential)

            await dispatch('setCookieToken',response.data.token)
            await dispatch('setCookieRefresh',response.data.refresh_token)

            //get user data from another action
            await dispatch('fetchUser')

            this.$router.push('/user')
            
        } catch (error) {
            console.log(error)
        }
    }
}

export const getters = {
    
}