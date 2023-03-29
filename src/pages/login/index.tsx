import React from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth/next";
import Nextauth from "../api/auth/[...nextauth]";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="h-[500px] flex w-full  items-center justify-center">
      <div className="border h-40 w-96">
        <div className="flex flex-col justify-center items-center">
          <p>You are not signed in.</p>
          <button onClick={() => signIn("google", { callbackUrl: "/profile" })}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, Nextauth);

  if (session) {
    return { redirect: { destination: "/profile" } };
  }
  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
