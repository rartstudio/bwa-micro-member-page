// Take note that state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({
    userOrder : null,
})

export const mutations = {
    SET_ORDER(state,data){
        state.userOrder = data
    }
}

export const actions = {
    fetchOrder({commit},id){
        return this.$axios.$get(`orders/user_id=${id}`)
            .then(response => {
                // console.log(response.data)
                commit('SET_ORDER',response.data);
            })
            .catch(error => {
                if(error.errno == 'ECONNREFUSED'){
                    // commit('SET_ERROR_STATUS',true);
                }
            })
    }
}

export const getters = {
}