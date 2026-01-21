import { useState } from "react";
import Message from "./Message";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hi  I'm your AI Student Assistant.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages(m => [
        ...m,
        { text: "Answer will come from backend 🔥", sender: "bot" }
      ]);
    }, 800);
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, i) => (
          <Message key={i} {...msg} />
        ))}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about AI..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
