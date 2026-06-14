"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Card } from "@/components/Card";

type Message = { role: "user" | "assistant"; content: string };

export default function TutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi, I am your LiftLearn tutor. What skill or topic do you want to learn today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const nextMessages = [...messages, { role: "user" as const, content: input.trim() }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });
      const data = await res.json();
      setMessages([...nextMessages, { role: "assistant", content: data.reply ?? "I could not generate a response." }]);
    } catch {
      setMessages([...nextMessages, { role: "assistant", content: "The tutor is not connected yet. Add your OPENAI_API_KEY to .env.local and restart the app." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main><Nav /><div className="mx-auto max-w-4xl px-6 py-10"><h1 className="mb-2 text-4xl font-black">AI Tutor</h1><p className="mb-8 text-slate-600">Ask questions, request examples, generate quizzes, or build a learning plan.</p><Card className="min-h-[560px]"><div className="mb-6 h-[390px] space-y-4 overflow-y-auto rounded-2xl bg-slate-50 p-4">{messages.map((msg, i) => <div key={i} className={`max-w-[85%] rounded-2xl p-4 ${msg.role === "user" ? "ml-auto bg-slate-950 text-white" : "bg-white text-slate-800"}`}><p className="whitespace-pre-wrap">{msg.content}</p></div>)}{loading && <div className="rounded-2xl bg-white p-4 text-slate-500">Thinking...</div>}</div><div className="flex gap-3"><input className="flex-1 rounded-full border border-slate-300 px-5 py-3 outline-none focus:border-slate-950" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder="Example: Teach me percentages using market examples" /><button onClick={sendMessage} className="rounded-full bg-slate-950 px-6 py-3 font-bold text-white">Send</button></div></Card></div></main>
  );
}
