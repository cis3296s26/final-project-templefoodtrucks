"use client"

import { useState, useEffect } from "react";
import { PageMain } from "../../components/PageMain";
import SignUpInfoDesign from "@/app/components/SignUpInfoDesign";
import axiosClient from "@/app/axiosClient";

export default function SignUp_Info() {
  const [truck, setTruck] = useState({});
  const [typeOfRequest, setTypeOfRequest] = useState("POST");

  useEffect(() => {
    async function getTruck() {
      let res = await axiosClient(
        "get_user/",
        null,
        localStorage["access_token"],
        "GET",
      );

      setTruck(res.truck);
      setTypeOfRequest("PUT");
    }

    if (localStorage["access_token"]) getTruck();
  }, []);

  return (
    <PageMain>
      <SignUpInfoDesign
        truckData={truck}
        typeOfRequest={typeOfRequest}
      ></SignUpInfoDesign>
    </PageMain>
  );
}
