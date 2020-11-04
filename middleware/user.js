// const cookie = process.client ? require('cookie-universal-nuxt') : undefined
export default ({ app,redirect }) => {
    
    const cookieRes = app.$cookies.get('BWAMICRO:token') 
    // const cookieRes = cookie.get('BWAMICRO:token') 
    
    if(!cookieRes) redirect('/login')
}