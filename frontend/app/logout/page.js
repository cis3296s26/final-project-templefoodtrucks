'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function handleSignUp() {
    const router = useRouter();

    useEffect(() => {
        localStorage.clear()
        router.push("/")
    }, [])

    return (
        <h1>Logging out...</h1>
    );
}