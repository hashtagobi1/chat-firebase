"use client";
import React, { useEffect } from "react";
import Message from "./Message";
import { useQuery } from "react-query";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../db/firebase";
import { set } from "firebase/database";

type Props = {};
const getMessages = async () => {};

const Chat = (props: Props) => {
  const [messages, setMessages] = React.useState([]);
  const {} = useQuery("messages", () => {});

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages: any = [];
      querySnapshot.forEach((doc) => {
        messages.push({
          ...doc.data(),
          id: doc.id,
        });
        setMessages(messages);
      });
      return () => unsubscribe();
    });
  }, []);
  const scroll = React.useRef<HTMLSpanElement>(null);
  console.log({ messages });
  return (
    <>
      <div className="flex flex-col p-2 relative">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </div>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
