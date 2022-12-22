import React from "react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

export default function Chat() {
  const [user, loading] = useAuthState(auth);

  if (loading) <div>Loading</div>;

  if (user === 'null') <Navigate to="/login" replace />;
  return <div>Chat</div>;
}
