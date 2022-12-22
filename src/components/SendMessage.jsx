import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";

export default function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[720px] flex text-xl absolute bottom-0"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 py-3"
      />
      <button
        type="submit"
        disabled={!message}
        className="px-4 py-3 transition duration-500 ease-in-out text-white bg-[#ff758c] hover:bg-blue-400 focus:outline-none"
      >
        send
      </button>
    </form>
  );
}
