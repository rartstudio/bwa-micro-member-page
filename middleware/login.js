export default ({ app,redirect }) => {
    const cookieRes = app.$cookies.get('BWAMICRO:token')

    if(cookieRes){
        redirect('/user')
    }
    else {
        redirect('/login')
    }
}

// await store.dispatch('user/setToken')
// const response = await store.dispatch('user/fetchUser',token)
// console.log(response);