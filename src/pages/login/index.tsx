import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="h-[500px] flex w-full  items-center justify-center">
      <div className="border h-40 w-96">
        {session ? (
          <div className="flex flex-col justify-center items-center">
            <p>Welcome, {session.user?.name}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <p>You are not signed in.</p>
            <button onClick={() => signIn("google")}>Sign in</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
