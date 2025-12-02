import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";

type Msg = { id: number; from: "user" | "bot"; text: string };

export default function Chatbot() {
  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, from: "bot", text: "Hello! I'm Farm Helper. Ask me about crops, pests, or dosage." }
  ]);
  const [text, setText] = useState("");
  const idRef = useRef(2);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  function send() {
    if (!text.trim()) return;
    const userMsg: Msg = { id: idRef.current++, from: "user", text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setText("");

    // simple simulated bot reply (replace with API)
    setTimeout(() => {
      const reply: Msg = { id: idRef.current++, from: "bot", text: `Simulated reply: I recommend checking local extension services for ${userMsg.text}.` };
      setMessages(prev => [...prev, reply]);
    }, 700);
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <main className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-bold">Farm Helper Chatbot</h2>
        <p className="text-slate-600 mt-1">Ask about pests, fertilizers, dosages and more.</p>

        <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
          <div className="h-80 overflow-auto p-4 space-y-3">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`${m.from === "user" ? "bg-green-600 text-white" : "bg-slate-100 text-slate-800"} max-w-[80%] p-3 rounded-lg`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t flex gap-3">
            <input value={text} onChange={e => setText(e.target.value)} onKeyDown={e => { if (e.key === "Enter") send(); }} placeholder="Type your message..." className="flex-1 p-2 border rounded" />
            <button onClick={send} className="bg-green-600 text-white px-4 py-2 rounded">Send</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
