import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, getProviders, getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth/next";
import NextAuth from "../api/auth/[...nextauth]";

const Login = () => {
  return (
    <div className="h-[500px] flex w-full items-center justify-center">
      <div className="flex border rounded-md shadow-md h-80 w-96 flex-col justify-center items-center gap-4">
        <button
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
          className="border p-4 flex items-center gap-2 hover:bg-sky-600 hover:text-white duration-200 shadow-md"
        >
          <FcGoogle />
          <p className="font-semibold">Sign In With Google</p>
        </button>
        <form className="flex flex-col gap-2">
          <label>Email:</label>
          <input className="border px-1" />
          <label>Password:</label>
          <input className="border px-1" />
        </form>
        <button className="border rounded-sm p-2 mt-2 w-24 text-white bg-zinc-700 hover:bg-emerald-900">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;

/* export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    return { redirect: { destination: "/profile" } };
  }
  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
} */
