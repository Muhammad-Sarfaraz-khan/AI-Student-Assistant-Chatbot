import { useState } from "react";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I am your AI Student Assistant. Ask me about syllabus, exams, assignments, or AI concepts." }
  ]);
  const [input, setInput] = useState("");

 const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      const botMsg = {
        sender: "bot",
        text: data.answer,
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (err) {
      setMessages(prev => [...prev, {
        sender: "bot",
        text: "❌ Backend not connected",
      }]);
    }
  };

  return (
    <div className="app">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2> EduGenie</h2>
        <p><strong>Subject:</strong> Artificial Intelligence</p>
        <p><strong>Book:</strong> Stuart Russell</p>

        <div className="menu">
          <span>📘 Syllabus</span>
          <span>📝 Assignments</span>
          <span>🧠 Concepts</span>
          <span>📅 Exams</span>
        </div>
      </aside>

      {/* Chat Section */}
      <main className="chat-section">
        <header className="chat-header">
          AI Student Chatbot
        </header>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            placeholder="Ask anything about your AI course..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </main>
    </div>
  );
}
