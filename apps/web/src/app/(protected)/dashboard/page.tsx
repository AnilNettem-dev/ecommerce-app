'use client';

import { authService } from "@/services/auth/auth.service";

export default function DashboardPage(){
    const getProfile = async () => {
        const data = await authService.profile();

        console.log(data);
    };
    return (
        <div className="p-10">
            <button
                onClick={getProfile}
                className="bg-black text-white p-2"
            >
                Get Profile
            </button>
        </div>
    )
}