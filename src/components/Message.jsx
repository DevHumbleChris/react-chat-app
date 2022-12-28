import React from "react";
import { auth } from "../firebaseConfig";

const style = {
  message: `shadow-xl m-4 py-2 px-3 rounded-md`,
  name: `text-xs`,
  sent: `text-white flex-row-reverse text-end float-right rounded-md`,
  received: `text-black float-left rounded-md`,
};

export default function Message({ message }) {
  return (
    <div>
      <div
        className={`${style.message}${
          message.uid === auth.currentUser.uid
            ? `${style.sent}`
            : `${style.received}`
        }`}
        style={{
          background: `${
            message.uid === auth.currentUser.uid ? "#ff758c" : "#7f3873"
          }`,
          color: "white",
        }}
      >
        <p className={style.name} style={{
          color: `${
            message.uid === auth.currentUser.uid ? "#7f3873" : "#ff758c"
          }`
        }}>
          {message.name}
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
}
