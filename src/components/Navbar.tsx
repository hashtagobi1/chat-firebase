"use client";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const auth = useAuth();
  const user = useUser();
  return (
    <div className="bg-gray-300 h-20 flex justify-between w-full items-center p-4">
      <h1 className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[##FE4567] to bg-black">
        Hey.XYZ App Demo
      </h1>
      {user.isSignedIn && (
        <div className="flex items-center gap-8">
          <h2 className="text-2xl">Welcome {user.user.firstName}</h2>
          {user.user.imageUrl && (
            <Image
              alt={`Profile Image for ${user.user.firstName}`}
              src={user.user.imageUrl}
              width={45}
              className="rounded-lg"
              height={45}
            />
          )}
        </div>
      )}
      {user.isSignedIn ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default Navbar;
