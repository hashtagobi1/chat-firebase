import { useAuth, useUser } from "@clerk/nextjs";
import React from "react";
import { MessageType } from "./Chat";
import moment from "moment";
type Props = {
  message: MessageType;
};

const Message = ({ message }: Props) => {
  const {timestamp} = message;

  if(!timestamp) return null; 
  const { seconds, nanoseconds } = timestamp

  const milliseconds = seconds * 1000 + nanoseconds / 1000000; // Convert to milliseconds
  const date = moment(milliseconds);
  const formattedDate = date.format("MMM Do 'YY, hh:mma"); // Format the date

  console.log({ date });

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
          Sent by: {message.name?.split(" ")[0]} on{" "}
          <span className="text-black">{formattedDate}</span>
        </p>
        <p className=" text-md">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
