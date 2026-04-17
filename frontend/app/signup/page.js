'use client';
import { PageMain } from "../components/PageMain";
import SignUpDesign from "../components/SignUpDesign";
import { useSearchParams } from 'next/navigation';
import axiosClient from "../axiosClient"; 

export default function SignUp() {
    const search_params = useSearchParams();
    const token = search_params.get("token");

        // Function to handle the signup form submission
    const onSignupSubmit = async (userData) => {
        // userData should contain email and password
        try {
            const payload = {
                email: userData.email,
                password: userData.password,
                token: token 
            };
            // Send the signup data to the backend for verification and account creation
            const response = await axiosClient("auth/verify-signup/", payload, "", "POST");
            // Handle the response from the backend
            if (response) {
                alert("Account created! Redirecting to login...");
                window.location.href = "/login"; // Or wherever your login page is
            }
        } catch (error) {
            console.error("Signup Error:", error);
            alert("Signup failed. The token might be invalid or the email is taken.");
        }
    }

// Handle the "no token" case
    if (!token) {
        return (
            <PageMain>
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-3xl font-bold text-red-500">Invalid or Missing Invitation Token</h1>
                </div>
            </PageMain>
        );
    }

    // Handle "token exists"
    return (
        <PageMain>
            <SignUpDesign onSubmit={onSignupSubmit} />
        </PageMain>
    );

};