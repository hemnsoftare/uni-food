import Input from "@/components/auth/Input";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const page = () => {
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
        className="sm:min-w-[568px] min-w-[200px]  min-h-[400px] self-center -m-2 pb-3  bg-pure-white rounded-lg border-2  border-primary-lm"
      >
        <div className="flex items-center px-8 justify-between">
          <TfiArrowCircleLeft size={32} />
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-primary-lm text-sub-heading-2-semiBold text-[27px]  ">
              Sign In
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
          Please enter your information to sign in
        </p>
        {/* inputs */}
        <div className="px-20 gap-3 flex flex-col mt-3">
          <Input
            label="Email"
            icon={AiOutlineMail}
            placeholder="eg. johndoe@gmail"
            type="email"
            name="email"
          />
          <Input
            label="Password"
            icon={CiLock}
            placeholder="password"
            type="password"
            name="password"
          />
          <Link
            href={"/ForgetPassword"}
            className="mb-4 text-primary-lm hover:text-black duration-300 transition-all"
          >
            forget password
          </Link>
          <button className="w-full py-3 hover:bg-primary-lm/75 duration-300 transition-all text-white bg-primary-lm rounded-lg">
            Continue
          </button>
        </div>
        <p className="py-3 w-full text-center">
          Already have an account?{" "}
          <Link href={"/SignUp"} className="text-primary-lm ">
            {" "}
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default page;
