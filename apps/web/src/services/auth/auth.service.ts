/* import { authMock } from './auth.mock';

export const authService = {
  login: authMock.login,
  profile: authMock.profile,
};
 */
import { ApiCLient } from "@/shared/lib/api/client";

export const authService = {
    login: async(data: {email: string, password: string}) => {
        return ApiCLient<({access_token: string, refresh_token: string})>(
            '/auth/login',{
                'method': 'POST',
                'body': JSON.stringify(data),
        })
    },
    profile: async() => {
        return ApiCLient(
            '/auth/profile',
            {
                'auth': true
            },
        )
    },
}