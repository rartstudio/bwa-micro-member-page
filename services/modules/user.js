import {apiClient} from '@/services/config.js'

export default {
    postLogin(credentials){
        return apiClient.post('/users/login',credentials);
    }
}