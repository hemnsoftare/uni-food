"use client";
import Input from "@/components/auth/Input";
import { errorTypeCreateAccoount } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock, CiUser } from "react-icons/ci";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { object, z } from "zod";

const page = () => {
  const [error, seterror] = useState<{
    email: string;
    username: string;
    password: string;
    rePassword: string;
  }>({
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const zodData = object({
    email: z
      .string()
      .email("invald email format")
      .min(10, "the text greaate 10"),
    username: z.string().min(5, "need the text increasse 5 chacter"),
    password: z
      .string()
      .min(10, "The password must be at least 10 characters long")
      .refine((password) => /[A-Z]/.test(password), {
        message: "The password must contain at least one uppercase letter",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "The password must contain at least one number",
      })
      .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
        message: "The password must contain at least one special character",
      }),
    rePassword: z
      .string()
      .min(10, "The password must be at least 10 characters long")
      .refine((password) => /[A-Z]/.test(password), {
        message: "The password must contain at least one uppercase letter",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "The password must contain at least one number",
      })
      .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
        message: "The password must contain at least one special character",
      }),
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Collect form data from the form element
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()); // Convert FormData to an object

    // Validate using Zod
    const valid = zodData.safeParse(data);

    if (valid.success) {
      console.log("Validation successful:", valid.data);
      // Clear errors if validation passes
      seterror({
        email: "",
        username: "",
        password: "",
        rePassword: "",
      });
    } else {
      // Map Zod errors to the error state
      const zodErrors = valid.error.errors.reduce(
        (acc, error) => {
          const field = error.path[0]; // Get the field name (path[0])
          if (
            (field === "username" ||
              field === "email" ||
              field === "password" ||
              field === "rePassword") &&
            field in acc
          ) {
            acc[field as keyof typeof error] = error.message; // Map error message to the field
          }
          return acc;
        },
        {
          email: "",
          username: "",
          password: "",
          rePassword: "",
        }
      );

      seterror(zodErrors); // Update the error state with Zod validation errors
    }
  };
  console.log(error);
  return (
    <div className="flex h-screen w-full bg-gray-15  flex-col items-start justify-start">
      <Image
        src={"/Saga_logo.png"}
        alt="image"
        width={75}
        height={67}
        className="ml-2 mt-2 hidden sm:block"
      />
      <form
        action=""
        onSubmit={handleSubmit}
        className="sm:min-w-[568px] min-w-[200px]  min-h-[400px] self-center -m-2 pb-3  bg-pure-white rounded-lg border-2  border-primary-lm"
      >
        <div className="flex items-center px-8 justify-between">
          <TfiArrowCircleLeft size={32} />
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-primary-lm text-sub-heading-2-semiBold text-[27px]  ">
              Create my account
            </h1>
          </div>
          <Image
            src={"/burger_1.png"}
            alt="image"
            width={88}
            height={88}
            className="object-contain relative     -right-20 -top-12"
          />
        </div>
        <p className="text-gray-100 -mt-8 w-full text-center">
          Please enter your information to create an account
        </p>
        {/* inputs */}
        <div className="px-20 gap-3 flex flex-col mt-3">
          <Input
            label="Username"
            icon={CiUser}
            placeholder="eg. John Doe"
            type="text"
            name="username"
            error={error.username}
          />
          <Input
            label="Email"
            icon={AiOutlineMail}
            placeholder="eg. johndoe@gmail"
            type="email"
            name="email"
            error={error.email}
          />
          <Input
            label="Password"
            icon={CiLock}
            placeholder="password"
            type="password"
            name="password"
            error={error.password}
          />
          <Input
            label="Re enter password"
            icon={CiLock}
            placeholder="Re enter password"
            type="password"
            name="rePassword"
            error={error.rePassword}
          />
          <button className="w-full py-3 hover:bg-primary-lm/75 duration-300 transition-all text-white bg-primary-lm rounded-lg">
            Continue
          </button>
        </div>
        <p className="py-3 w-full text-center">
          Already have an account?{" "}
          <Link href={"/SignIn"} className="text-primary-lm ">
            {" "}
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default page;
