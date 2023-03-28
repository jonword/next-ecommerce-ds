import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { redirect } from "next/dist/server/api-utils";

const Profile = () => {
  return <div>Profile</div>;
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
