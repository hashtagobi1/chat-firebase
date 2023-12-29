import React from "react";

type Props = {};

const Message = (props: Props) => {
  const [messages, setMessages] = React.useState([]);
  return (
    <div className="">
      <div className="flex items-center shadow-lg m-4 py-2 px-3 rounded-tl-full rounded-tr-full">
        <p className="fixed -mt-16 text-gray-600 text-xs"></p>
      </div>
    </div>
  );
};

export default Message;

// <p className="bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full">

// </p>
// // recieved
// <p className="bg-[#e5e5ea] text-black float-left rounded-br-full"></p>
