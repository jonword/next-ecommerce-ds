import React from "react";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4">
        <form className="flex flex-col w-60 gap-2">
          <label>Email:</label>
          <input className="border px-1 border-gray-600 rounded-sm" />
          <label>Username:</label>
          <input className="border px-1 border-gray-600 rounded-sm" />
          <label>Password:</label>
          <input className="border px-1 border-gray-600 rounded-sm" />
        </form>
        <div className="mt-2 flex flex-col gap-1 items-center">
          <button className="border w-32 text-white p-1 bg-zinc-700 hover:bg-emerald-800 duration-150">
            Create Account
          </button>
          <div className="flex gap-1">
            <p>Back to</p>
            <Link href="/login">
              <button className="hover:underline">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
