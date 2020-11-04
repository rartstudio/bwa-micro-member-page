export default ({ app,redirect }) => {
    const cookieRes = app.$cookies.get('BWAMICRO:token')

    if(cookieRes) redirect('/user')
}