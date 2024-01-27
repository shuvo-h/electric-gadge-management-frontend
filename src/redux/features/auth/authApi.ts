import { baseAPI } from "../../api/baseAPI";

export const authApi = baseAPI.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation({
            query: (userInfo) =>{
                return {
                    url: '/auth/login',
                    method: "POST",
                    body: userInfo,
                }
            },
        }),
        register: builder.mutation({
            query: (userInfo) =>{
                return {
                    url: '/auth/register',
                    method: "POST",
                    body: userInfo,
                }
            },
        }),
    })
})