import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-row w-full h-[50px] mt-6 ml-8 items-center">
      <Link href="/">
        <h1 className="pr-8 text-text-yellow">Home</h1>
      </Link>
      <Link href="/game-store">
        <h1 className="pr-8 text-text-grey">Game Store</h1>
      </Link>

      <div className="flex pl-[73vw] flex-row items-center gap-5">
        <Link href="/package" className="w-[40px] h-[40px]">
          <Image
            src="/package.svg"
            width={40}
            height={40}
            alt="#"
            className="mr-5"
          />
        </Link>
        <Link href="/settings" className="w-[40px] h-[40px]">
          <Image
            src="/Setting.svg"
            width={40}
            height={40}
            alt="#"
            className="mr-5"
          />
        </Link>
        <Link href="/user" className="w-[60px] h-[60px]">
          <Image src="/Lol.svg" width={60} height={60} alt="#" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
