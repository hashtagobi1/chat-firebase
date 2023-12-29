import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-gray-800 h-20 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl">Chat App</h1>
    </div>
  );
};

export default Navbar;
