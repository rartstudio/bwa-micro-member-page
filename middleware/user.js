export default async ({ app,redirect,store }) => {
    const token = app.$cookies.get('BWAMICRO:token')
    
    
    if(token){
        const refresh = app.$cookies.get('BWAMICRO:refresh')
        const user = app.$cookies.get('BWAMICRO:user')
        const data = {
            refresh_token : refresh,
            email : user.email
        }

        store.dispatch('user/tokenRefresh',data)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
    }
    else {
        redirect('/login')
    }
}
