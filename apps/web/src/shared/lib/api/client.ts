import { useAuthStore } from "@/store/auth.store";

const BASE_URL = 'http://localhost:3001';



type requestOptions = RequestInit & {
    auth?: boolean;
};

export async function ApiCLient<T>(
    endpoint: string,
    options: requestOptions
):Promise<T>{
    const {auth = false, headers, ...rest} = options;
    const accessToken = useAuthStore.getState().accessToken;

    const response = await fetch(
        `${BASE_URL}${endpoint}`,
        {
            ...rest,
            headers: {
                'content-type': 'application/json',
                ...(
                    auth && accessToken ?
                        {Authorization: `Bearer ${accessToken}`}
                        :
                        {}
                ),
                ...headers
            },
        },
    );

    if(!response.ok){
        throw Error('API Error')
    }
    return response.json();
}