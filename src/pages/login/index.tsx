import React from "react";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div className="flex flex-col justify-center items center">
          <p>Welcome, {session.user?.name}</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p>You are not signed in.</p>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      )}
    </>
  );
};

export default Login;
