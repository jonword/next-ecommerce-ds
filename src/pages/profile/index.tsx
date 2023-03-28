import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex flex-col justify-center items-center">
        <p>Welcome, {session.user?.name}</p>
        <button onClick={() => signOut({ redirect: false, callbackUrl: "/" })}>
          Sign out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
      </div>
    );
  }
};

export default Profile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
