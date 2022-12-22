import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthentification } from "../store/slices/authSlice";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (result) => {
      if (result) {
        localStorage.setItem("authenticated", "true");
        toast.info("Login Successfully!");
        dispatch(setAuthentification());
        navigate("/");
      }
    });

    return () => {
      unsub();
    };
  }, []);
  const googleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="relative py-16">
      <ToastContainer />

      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-3xl border border-gray-100bg-white shadow-2xl shadow-gray-600/10">
            <div className="p-8 py-3 sm:p-16">
              <div className="space-y-4">
                <img
                  src="https://the-coding-montana.vercel.app/_next/image?url=%2Fimages%2Fthe-coding-montana.png&w=1920&q=75"
                  loading="lazy"
                  className="w-48 mx-auto"
                  alt="the-coding-montana logo"
                />
                <h2 className="text-xl text-center font-bold text-gray-800">
                  Welcome to the Group Chat App (React) <br />
                </h2>
              </div>
              <div className="my-6 grid space-y-4 space-x-2">
                <button
                  onClick={googleSignin}
                  className="group relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100"
                >
                  <span className="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      className="absolute left-0 w-5"
                      alt="google logo"
                    />
                    <span>Continue with Google</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
