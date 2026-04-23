"use client";
import axiosClient from "../axiosClient";
import { PageMain } from "../components/PageMain";
import SignUpDesign from "../components/SignUpDesign";


export default function Login() {
  const onSignupSubmit = async (userData) => {
    // userData should contain email and password
    try {
      const payload = {
        email: userData.email,
        password: userData.password
      };
      // Send the signup data to the backend for verification and account creation
      const response = await axiosClient(
        "auth/verify-signup/",
        payload,
        "",
        "GET",
      );
      // Handle the response from the backend
      if (response) {
        alert("Account created! Redirecting to login...");
        window.location.href = "/login"; // Or wherever your login page is
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup failed. The token might be invalid or the email is taken.");
    }
  };

  return (
    <PageMain>
      <SignUpDesign onSubmit={onSignupSubmit} nameChange={"Login"} />
    </PageMain>
  );
}
