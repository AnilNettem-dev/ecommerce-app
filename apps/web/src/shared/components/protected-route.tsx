'use client'

import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute ({
    children,
}:{
    children: React.ReactNode
}){
    const router = useRouter();
    const hydrated = useAuthStore(
        (state) => state.hydrated
    )
    const accessToken = useAuthStore(
        (state) => state.accessToken
    )

    useEffect(() => {
        if(hydrated && !accessToken){
            router.push('/');
        }
    },[hydrated, accessToken, router]);

    if(!hydrated) return null;
    if(!accessToken) return null;

    return <>{children}</>
}