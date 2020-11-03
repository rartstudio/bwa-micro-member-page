export default ({store,redirect }) => {
    if(!store.state.user.userData){
        redirect('/user')
    }
    redirect('/login')
}

// await store.dispatch('user/setToken')
// const response = await store.dispatch('user/fetchUser',token)
// console.log(response);