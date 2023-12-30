"use client";
import { SignInButton, SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const auth = useAuth();
  const user = useUser();
  return (
    <div className="bg-gray-300 flex-col md:flex-row md:text-xl  flex justify-between w-full items-center p-20 py-4">
      <div className="flex md:flex-col gap-3">
        <div className="flex gap-4 items-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-gray-700 text-transparent bg-clip-text">
            Chat Demo
          </h1>
        </div>
        <Link
          target="_blank"
          href={"http://www.twitter.com/obiwritescode"}
          className="flex items-center gap-6"
          passHref
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          <span className="text-sm text-gray-800 opacity-70 italic underline">
            {" "}
            Developed by /obiwritescode
          </span>
        </Link>
      </div>
      {user.isSignedIn && (
        <div className="flex items-center justify-between gap-8">
          <h2 className="">Welcome {user.user.firstName}</h2>
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
      <div className="bg-white rounded-md mt-8 p-3 md:text-xl">
        {user.isSignedIn ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  );
};

export default Navbar;
