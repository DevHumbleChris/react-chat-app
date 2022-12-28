import React from "react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import ChatHeader from "../components/ChatHeader";
import Chat from "../components/Chat";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));

  const logOut = () => {
    localStorage.setItem("authenticated", "false");
    signOut(auth);
  };

  if (loading) return <div>Loading</div>;

  if (!authenticated) return <Navigate to="/login" replace />;
  return (
    <div className="max-w-[720px] mt-2 mx-auto shadow-xl h-[90vh] relative">
      <ChatHeader />
      <Chat />
    </div>
  );
}
