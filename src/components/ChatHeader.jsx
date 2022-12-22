import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebaseConfig";

export default function ChatHeader() {
  const logOut = () => {
    localStorage.setItem("authenticated", "false");
    signOut(auth);
  };
  return (
    <div className="h-12 bg-[#ff758c] p-3 flex items-center justify-between">
      <h1 className="text-white">Chat Group App</h1>
      <button onClick={logOut} className="bg-[#7f3873] text-white p-2 rounded-xl">Logout</button>
    </div>
  );
}
