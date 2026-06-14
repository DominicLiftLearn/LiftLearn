import { Nav } from "@/components/Nav";
import { Card } from "@/components/Card";
import { learningPaths } from "@/lib/data";

export default function LearnPage() {
  return <main><Nav /><div className="mx-auto max-w-6xl px-6 py-10"><h1 className="mb-2 text-4xl font-black">Learning paths</h1><p className="mb-8 text-slate-600">Structured pathways that turn knowledge into practical capability.</p><div className="grid gap-5 md:grid-cols-2">{learningPaths.map((path) => <Card key={path.title}><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase text-slate-600">{path.category}</span><h2 className="mt-4 text-2xl font-black">{path.title}</h2><p className="mt-2 text-slate-600">{path.lessons} lessons · {path.level}</p><div className="mt-5 h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full bg-slate-950" style={{ width: `${path.progress}%` }} /></div><button className="mt-5 rounded-full bg-slate-950 px-5 py-3 font-bold text-white">Start path</button></Card>)}</div></div></main>;
}
