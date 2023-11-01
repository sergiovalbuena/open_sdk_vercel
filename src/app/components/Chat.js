"use client";

import { useChat } from "ai/react";

export default function Chat() {
  //NEXTjs hace todo esto=
  const { messages, input, handleSubmit, handleInputChange } = useChat();

  return (
    <div className="">
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <p>
              {message.role === "user" ? "🐰" : "🧙🏼‍♂️"}
              {message.content}
            </p>
          </div>
        );
      })}

      <form className="fixed bottom-4" onSubmit={handleSubmit}>
        <label>Escribe a la abuelita para escuchar su consejo:</label>
        <input
          type="text"
          name="content"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
