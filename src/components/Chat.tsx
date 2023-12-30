"use client";
import React, { useEffect } from "react";
import Message from "./Message";
import { useQuery } from "react-query";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  addDoc,
  FieldValue,
} from "firebase/firestore";
import { db } from "@/db/firebase";
import SendMessage from "./SendMessage";

type Props = {};

type Messages = {
  text: string;
  name?: string | null;
  userID?: string;
  timestamp: FieldValue;
  sessionID?: string | null;
  messageID: string;
};

const Chat = (props: Props) => {
  const [messages, setMessages] = React.useState<Messages[]>([]);
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
  return (
    <>
      <div className="flex flex-col p-2 relative">
        {messages &&
          messages.map((message) => (
            <Message key={message.messageID} message={message} />
          ))}
      </div>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
