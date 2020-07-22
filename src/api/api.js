import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/',
    headers: {
        "API-KEY": "8f69922e-6791-41d4-8961-9f207bed1eeb"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    FollowUnfollow(tipe, id){
        switch (tipe) {
            case 'Unfollow':
                return instance.delete(`1.0/follow/${id}`)

            case 'Follow':
                return instance.post(`1.0/follow/${id}`)
        }
    },
    getProfile(userId){
        return instance.get(`1.0/profile/${userId}`)
    }
}
export const authAPI = {
    authMe(){
        return instance.get(`1.0/auth/me`)
    }

}
