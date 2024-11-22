import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-gray-15 w-full flex flex-col ">
      <Image
        src={"/Saga_logo.png"}
        alt="image"
        width={75}
        height={67}
        className="ml-2 mt-2 hidden sm:block"
      />
      <div className="flex flex-col items-center justify-normal w-full ">
        <h1 className="text-primary-lm text-sub-heading-1-bold">
          Just one more step !{" "}
        </h1>
        <p className="text-gray-100  text-body-3-semiBold">
          We’ve sent you an confirmation link to your email to confirm your
          acocount
        </p>
        <Image
          src={"/pana.png"}
          alt="image for wate "
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default page;
