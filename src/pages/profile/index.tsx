import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const Profile = () => {
  const { data: session, status } = useSession();

  return (
    <div className="h-screen w-full">
      {status === "authenticated" ? (
        <div className="flex p-4 flex-col justify-center items-center">
          <div className="flex justify-between h-full w-full px-4">
            <p className="text-2xl font-bold">Hi, {session.user?.name}</p>
            <button
              onClick={() =>
                signOut({ redirect: false, callbackUrl: "/login" })
              }
            >
              Sign out
            </button>
          </div>
          <div className="mt-10 h-screen">
            <ul className="flex gap-6 text-xl">
              <li className="hover:border-b-2 pb-2 border-b-gray-600 hover:cursor-pointer">
                Feed
              </li>
              <li className="hover:border-b-2 pb-2 border-b-gray-600 hover:cursor-pointer">
                Orders
              </li>
              <li className="hover:border-b-2 pb-2 border-b-gray-600 hover:cursor-pointer">
                Account
              </li>
            </ul>
          </div>
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
  const session = await getServerSession(context.req, context.res, authOptions);
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
