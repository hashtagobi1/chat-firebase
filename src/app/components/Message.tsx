import React from "react";

type Props = {
  message: any;
};

const Message = ({message}: Props) => {
  const [messages, setMessages] = React.useState([]);
  console.log({message})
  return (
    <div className="">
      <div className="flex items-center shadow-lg m-4 py-2 px-3 rounded-tl-full rounded-tr-full">
        <p className=" text-gray-600 text-xs">
            {message.text}
        </p>
        <p className=" text-gray-600 text-xs">
            {message.text}
        </p>
      </div>
    </div>
  );
};

export default Message;

// <p className="bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full">

// </p>
// // recieved
// <p className="bg-[#e5e5ea] text-black float-left rounded-br-full"></p>
