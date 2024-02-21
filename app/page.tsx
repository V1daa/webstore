"use client";
import React from "react";
import LandingPage from "./components/landing-page/page";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const HomePage = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default HomePage;
