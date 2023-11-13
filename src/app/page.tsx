"use client";

import { Card } from "@/components/Card";

export default function Home() {

  return (
    <>
      <main className="mt-16 mb-10 flex flex-col items-center justify-between p-2">
        <h1 className="text-6xl"> Authorization demo with clerk. </h1>
      </main>
      <div className="container px-5 py-12 mx-auto flex flex-col lg:flex-row justify-between">
        <Card title="Sign in" description="Login your exxting account, just enter your email and password. " signType="signIn" />
        <Card title="Sign up" description="Create the new account just enter the basis information like name, email, username, password" signType="signUp" />
      </div>

    </>
  )
}
