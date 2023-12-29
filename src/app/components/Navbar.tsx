"use client";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const auth = useAuth();
  const user = useUser();
  return (
    <div className="bg-gray-400 h-20 flex justify-between w-full items-center p-4">
      <h1 className=" text-3xl">Chat App</h1>
      {user.isSignedIn && (
        <h2 className="text-2xl">Welcome {user.user.firstName}</h2>
      )}
      {user.isSignedIn ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default Navbar;
