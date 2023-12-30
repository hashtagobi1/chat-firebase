import { db } from "@/db/firebase";
import { useAuth, useUser } from "@clerk/nextjs";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

type Props = {
  scroll: React.RefObject<HTMLSpanElement>;
};

type Inputs = {
  messageInput: string;
};
const SendMessage = ({ scroll }: Props) => {
  const { user } = useUser();
  const auth = useAuth();
  const [input, setInput] = React.useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.messageInput === "") {
      toast.error("Message field cannot be blank.");
    }

    await addDoc(collection(db, "messages"), {
      text: input,
      name: user?.fullName,
      userID: user?.id,
      timestamp: serverTimestamp(),
      sessionID: auth.sessionId,
      messageID: uuidv4(),
    })
      .then((docRef) => {
        const thing = docRef.converter?.toFirestore(docRef);
        console.log({ thing });
        toast.success("Message sent!");
        setInput("");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        toast.error("Error sending message.");
      });
    scroll?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-14 w-full p-2 justify-between items-center flex text-xl "
    >
      <input
        {...register("messageInput", { required: true })}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Message"
        className="border-2 p-3 outline-none rounded-lg border-none border-gray-400  w-full"
      />
      <button
        type="submit"
        // disabled={!input}
        className={` ${
          input
            ? "cursor-pointer bg-blue-500"
            : "bg-blue-200 cursor-not-allowed"
        }   w-2/5 text-white ease-in-out duration-500 transition-all p-3 h-14  rounded-lg`}
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
