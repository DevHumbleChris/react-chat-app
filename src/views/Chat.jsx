import React from "react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import Messages from "../components/Messages";
import ChatHeader from "../components/ChatHeader";

export default function Chat() {
  const [user, loading] = useAuthState(auth);
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));

  const logOut = () => {
    localStorage.setItem("authenticated", "false");
    signOut(auth);
  };

  if (loading) return <div>Loading</div>;

  if (!authenticated) return <Navigate to="/login" replace />;
  return (
    <div className="max-w-[720px] mt-2 mx-auto shadow-xl h-[90vh]">
      <ChatHeader />
      <Messages />
    </div>
  );
}
