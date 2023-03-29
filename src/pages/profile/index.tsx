import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="h-screen w-full">
        <div className="flex p-4 flex-col justify-center items-center">
          <div>
            <p>Welcome, {session.user?.name}</p>
          </div>
          <button
            onClick={() => signOut({ redirect: false, callbackUrl: "/login" })}
          >
            Sign out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <p className="text-2xl">You are signed out.</p>
      </div>
    );
  }
};

export default Profile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

// TODO: FIGURE OUT GETSERVERSESSION
