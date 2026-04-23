"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosClient from "../axiosClient";
import { PageMain } from "../components/PageMain";
import SignUpDesign from "../components/SignUpDesign";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Prepare the payload for the login request
      const payload = {
        username: username,
        password: password
      };

      // call the login endpoint in urls.py
      const response = await axiosClient("api/login/", payload, "", "POST");

      // check if the response contains the access token
      if (response && response.access) {
        // save tokens for authenticated requests 
        localStorage.setItem("access_token", response.access);
        localStorage.setItem("refresh_token", response.refresh);

        alert("Login Successful!");
        // Redirect to the trucks page after successful login
        router.push("/trucks");
      }
      // handle login failure
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

return (
    <PageMain>
      <SignUpDesign></SignUpDesign>
    </PageMain>
  );
}
