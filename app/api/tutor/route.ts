import OpenAI from "openai";
import { NextResponse } from "next/server";

const systemPrompt = `You are LiftLearn Tutor, a patient practical AI educator. Teach step by step, use simple language, adapt to the learner's level, give locally relevant examples, ask one check-for-understanding question, and avoid doing harmful or dishonest tasks.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ reply: "Tutor demo mode: add OPENAI_API_KEY to .env.local to enable live AI responses. Meanwhile, tell me your topic and I will guide you step by step once connected." });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      ...messages.map((m: { role: "user" | "assistant"; content: string }) => ({ role: m.role, content: m.content }))
    ],
    temperature: 0.5
  });

  return NextResponse.json({ reply: completion.choices[0]?.message?.content ?? "I could not generate a response." });
}
