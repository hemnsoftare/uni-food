"use client";
import Input from "@/components/auth/Input";
import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { z } from "zod";
const page = () => {
  const schema = z.object({
    email: z.string().min(10).email(),
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const valid = schema.safeParse(data);

    if (!valid.success) {
      const zodValid = {};
      valid.error.errors.forEach((item) => {
        zodValid[item.path[0]] = item.message; // Use the field name (e.g., 'email', 'name') as the key
      });
      console.log("Validation Errors:");
      console.log(zodValid);
    }
  };

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
        className="sm:min-w-[568px] min-w-[200px]  min-h-[400px] self-center m-12 pb-3  bg-pure-white rounded-lg border-2  border-primary-lm"
      >
        <div className="flex items-center px-8 justify-between">
          <TfiArrowCircleLeft size={32} />
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-primary-lm text-sub-heading-2-semiBold text-[27px]  ">
              Forget password
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
        <p className="text-gray-100 -mt-4 w-full text-center">
          Please enter your email to confirm your account
        </p>
        {/* inputs */}
        <div className="px-20 gap-3 self-end flex flex-col mt-20">
          <Input
            label="Email"
            icon={AiOutlineMail}
            placeholder="eg. johndoe@gmail"
            type="text"
            name="email"
            error=""
          />

          <button className="w-full py-3 mt-1      hover:bg-primary-lm/75 duration-300 transition-all text-white bg-primary-lm rounded-lg">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
