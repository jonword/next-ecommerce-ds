import React from "react";
import Link from "next/link";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import prisma from "@/lib/prisma";

type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const signupSchema: ZodType<SignupData> = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      username: z.string().min(2).max(30),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const submitData = async (data: SignupData) => {
    console.log("USER CREATED", data);
    try {
      await fetch("/api/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[500px] border flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4">
        <form
          className="flex flex-col w-60 gap-2"
          onSubmit={handleSubmit(submitData)}
          method="POST"
        >
          <label>First Name:</label>
          {errors.firstName && (
            <span className="text-red-600">{errors.firstName.message}</span>
          )}
          <input
            className="border px-1 border-gray-600 rounded-sm"
            type="text"
            {...register("firstName")}
          />

          <label>Last Name:</label>
          {errors.lastName && (
            <span className="text-red-600">{errors.lastName.message}</span>
          )}
          <input
            className="border px-1 border-gray-600 rounded-sm"
            type="text"
            {...register("lastName")}
          />
          <label>Email:</label>
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
          <input
            className="border px-1 border-gray-600 rounded-sm"
            type="email"
            {...register("email")}
          />
          <label>Username:</label>
          {errors.username && (
            <span className="text-red-600">{errors.username.message}</span>
          )}
          <input
            className="border px-1 border-gray-600 rounded-sm"
            type="text"
            {...register("username")}
          />
          <label>Password:</label>
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
          <input
            className="border px-1 border-gray-600 rounded-sm"
            type="password"
            {...register("password")}
          />
          <label>Confirm Password:</label>
          {errors.confirmPassword && (
            <span className="text-red-600">
              {errors.confirmPassword.message}
            </span>
          )}
          <input
            className="border px-1 border-gray-600 rounded-sm"
            type="password"
            {...register("confirmPassword")}
          />
          <div className="mt-2 flex flex-col gap-1 items-center">
            <button
              className="border w-32 text-white p-1 bg-zinc-700 hover:bg-emerald-800 duration-150"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="flex gap-1 items-center">
          <p>Back to</p>
          <Link href="/login">
            <button className="hover:underline">
              <span className="text-lg">Login</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
