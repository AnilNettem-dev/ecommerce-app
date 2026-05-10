import {create} from 'zustand';
import { persist } from 'zustand/middleware';
type User = {
    id: string,
    name: string,
    email: string
}

type AuthState = {
    user: User | null;
    accessToken: string | null;
    hydrated: boolean;
    setHydrated: (value: boolean) => void;
    setAuth: (data: any) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            hydrated: false,
            setHydrated: (value) => 
                set({
                    hydrated: value
                }),
            setAuth: (data) => {
                set({
                    user: data.user,
                    accessToken: data.access_token,
                })
            },
            logout: () => {
                set({
                    user: null,
                    accessToken: null,
                })
            }
        }),
        {
            name: 'auth-storage',
            onRehydrateStorage: () => (state) => {
                state?.setHydrated(true);
            },
        }
    )
)