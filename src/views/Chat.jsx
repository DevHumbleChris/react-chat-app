import React from "react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

export default function Chat() {
  const [user, loading] = useAuthState(auth);
  const authenticated = JSON.parse(localStorage.getItem('authenticated'))

  const logOut = () => {
    localStorage.setItem('authenticated', 'false')
    signOut(auth)
  }

  if (loading) return <div>Loading</div>;

  if (!authenticated) return <Navigate to="/login" replace />;
  return <div>
    <button onClick={logOut}>Signout</button>
  </div>;
}
