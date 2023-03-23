import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4">
        <form className="flex flex-col w-40 gap-2">
          <label>Username:</label>
          <input className="border px-1 border-gray-600 rounded-sm" />
          <label>Password:</label>
          <input className="border px-1 border-gray-600 rounded-sm" />
        </form>
        <div className="mt-2 flex flex-col gap-1 items-center">
          <button className="border text-white p-1 px-3 bg-zinc-700 hover:bg-emerald-800 duration-150">
            Login
          </button>
          <div className="flex gap-2 items-center">
            <p>Dont have an account?</p>
            <Link href="/signup">
              <button className="hover:underline">
                <span className="text-lg">Sign up</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
