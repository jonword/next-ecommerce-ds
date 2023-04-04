import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

const Profile = () => {
  const { data: session, status } = useSession();

  return (
    <div className="h-screen w-full">
      {status === "authenticated" ? (
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
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-2xl">You are signed out.</p>
        </div>
      )}
    </div>
  );
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

// TODO: FIGURE OUT GETSERVERSESSION
