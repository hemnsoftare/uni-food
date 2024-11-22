import Input from "@/components/auth/Input";
import Image from "next/image";

import React from "react";
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
        <div className="px-20 gap-3 flex flex-col mt-[100px]">
          <Input
            label="New Password"
            icon={CiLock}
            placeholder="New password"
            type="password"
            name="password"
          />
          <Input
            label="Re enter new password"
            icon={CiLock}
            placeholder="Re enter new password"
            type="password"
            name="password"
          />

          <button className="w-full py-3 mt-6 mb-3 hover:bg-primary-lm/75 duration-300 transition-all text-white bg-primary-lm rounded-lg">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
