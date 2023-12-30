import { convertTimestamp } from "@/utils/convertTimestamp";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { MessageType } from "./Chat";
type Props = {
  message: MessageType;
};

const Message = ({ message }: Props) => {
  const user = useUser();
  const messageClass = message.userID == user?.user?.id;
  return (
    <div className="">
      <div
        className={`
                ${
                  messageClass
                    ? "  flex-row-reverse text-end float-right rounded-bl-full"
                    : "  float-left rounded-br-full"
                } mt-5`}
      >
        {user.user?.imageUrl ? (
          <Image
            src={user?.user?.imageUrl || ""}
            width={30}
            height={30}
            className="object-cover rounded-full"
            alt={`Display picture for: ${user?.user?.fullName}`}
          />
        ) : (
          <span className="rounded-full py-2 px-3 uppercase bg-white text-black">
            {user.user?.fullName?.slice(0, 1)}
          </span>
        )}
      </div>
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
          <span className="text-black">
            {convertTimestamp(message.timestamp)}
          </span>
        </p>
        <p className="text-md">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
