import { authService } from "@/services/auth/auth.service";
import { useAuthStore } from "@/store/auth.store";

export const login = async(data: {
    email: string,
    password: string
}) => {
    const res = await authService.login(data);
    useAuthStore.getState().setAuth(res);
    return res;
};
