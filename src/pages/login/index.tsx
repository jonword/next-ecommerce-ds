import React from "react";
import { signIn, getProviders, getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth/next";
import NextAuth from "../api/auth/[...nextauth]";

const Login = () => {
  return (
    <div className="h-[500px] flex w-full  items-center justify-center">
      <div className="flex border h-36 w-80 flex-col justify-center items-center">
        <button
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
          className="border p-4"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    return { redirect: { destination: "/profile" } };
  }
  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
