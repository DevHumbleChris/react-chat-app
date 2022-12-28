import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import SendMessage from "./SendMessage";

export default function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsub();
  }, []);
  return (
    <>
      <div className="flex flex-col relative h-[75vh] overflow-x-scroll">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
}
