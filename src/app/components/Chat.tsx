"use client";
import React from "react";
import Message from "./Message";

type Props = {};

const Chat = (props: Props) => {
  const scroll = React.useRef<HTMLSpanElement>(null);
  return (
    <>
      <div className="flex flex-col p-2 relative">
        <Message />
      </div>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
