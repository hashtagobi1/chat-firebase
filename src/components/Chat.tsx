"use client";
import { db } from "@/db/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AnimatePresence, motion } from "framer";
import React, { useEffect } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useUser } from "@clerk/nextjs";

type Props = {};

export type MessageType = {
  text: string;
  name?: string | null;
  userID?: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
  sessionID?: string | null;
  messageID?: string;
};

const Chat = (props: Props) => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const { user } = useUser();
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
      <div className="flex flex-col py-8 px-4 relative">
        {messages.length > 0 && user?.id ? (
          messages.map((message) => (
            <motion.div
              initial={{ opacity: 0, y: -100, scale: 1 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.72, scale: 1 },
              }}
            >
              <Message key={message.messageID} message={message} />
            </motion.div>
          ))
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -300, scale: 1 }}
              animate={{ opacity: 1, y: 0, transition: { scale: 1 } }}
              exit={{ opacity: 0, y: -300, transition: { scale: 0 } }}
              className="items-center flex justify-center"
            >
              <div className="h-32 max-w-md text-3xl px-8 py-4 animate-pulse items-center flex justify-center shadow-sm border rounded-md ">
                <p>Send a message! ✉️</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {user ? (
        <SendMessage scroll={scroll} />
      ) : (
        <p className="opacity-80 text-gray-700">
          Please sign in to send a message
        </p>
      )}
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
