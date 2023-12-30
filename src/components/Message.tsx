import { useAuth, useUser } from "@clerk/nextjs";
import React from "react";

type Props = {
  message: any;
};

const Message = ({ message }: Props) => {
  console.log({ message });
  const user = useUser();
  const messageClass = message.userID == user?.user?.id;
  console.log({ user });
  return (
    <div className="">
      <div
        className={`
      ${
        messageClass
          ? "bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full"
          : "bg-[#e5e5ea] text-black float-left rounded-br-full"
      }
      
      flex items-center shadow-lg m-4 py-2 px-3 rounded-tl-full rounded-tr-full`}
      >
        <p className="absolute italics -mt-16 opacity-40 text-gray-600 text-xs">
          Sent by: {message.name}
        </p>
        <p className=" text-md">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
