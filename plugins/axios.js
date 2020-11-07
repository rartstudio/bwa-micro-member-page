// export default function ({ $axios, redirect , app}) {

//     //get token
//     const cookieRes = app.$cookies.get('BWAMICRO:token')

//     // console.log($axios)
//     //check token if exist
//     if(cookieRes) {
//         $axios.onRequest(config => {
//             console.log('Making request to ' + config.url)
//             console.log(config)
//             $axios.setHeader('Authorization',cookieRes)
//         })
//         $axios.onError(error => {
//             console.log(error.response)
//             const code = parseInt(error.response && error.response.status)
//             if (code === 403) {
//                 app.$cookies.remove('BWAMICRO:token')
//                 app.$cookies.remove('BWAMICRO:user')
//                 app.$cookies.remove('BWAMICRO:refresh')
//                 redirect('/login')
//             }
//         })
//     }
//     else {
//         // 
//     }

    
  
//     // 
//   }