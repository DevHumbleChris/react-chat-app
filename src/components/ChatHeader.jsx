import React from "react";

export default function ChatHeader() {
  return (
    <div className="h-12 bg-[#ff758c] p-3 flex items-center justify-between">
      <h1>Chat Group</h1>
      <button className="bg-[#7f3873] text-white p-2 rounded-xl">
        Logout
      </button>
    </div>
  );
}
