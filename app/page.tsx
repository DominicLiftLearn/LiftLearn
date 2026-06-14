import { BookOpen, Brain, Briefcase, Users } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Card } from "@/components/Card";
import { learningPaths, opportunities, projects } from "@/lib/data";

export default function Dashboard() {
  return (
    <main>
      <Nav />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-8 rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-300">AI learning for human potential</p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Learn skills, find opportunities, and build solutions for your community.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">LiftLearn combines an AI tutor, practical learning paths, opportunity matching, and local project collaboration.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/tutor" className="rounded-full bg-white px-5 py-3 font-bold text-slate-950">Ask the AI Tutor</a>
            <a href="/learn" className="rounded-full border border-white/30 px-5 py-3 font-bold text-white">Explore Learning Paths</a>
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-4">
          <Metric icon={<Brain />} label="Skill Score" value="38%" />
          <Metric icon={<BookOpen />} label="Lessons" value="12" />
          <Metric icon={<Briefcase />} label="Opportunities" value={String(opportunities.length)} />
          <Metric icon={<Users />} label="Projects" value={String(projects.length)} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-4 text-2xl font-black">Continue learning</h2>
            <div className="space-y-4">
              {learningPaths.slice(0, 3).map((path) => (
                <div key={path.title} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between"><b>{path.title}</b><span className="text-sm text-slate-500">{path.progress}%</span></div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full bg-slate-950" style={{ width: `${path.progress}%` }} /></div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h2 className="mb-4 text-2xl font-black">Recommended opportunities</h2>
            <div className="space-y-3">
              {opportunities.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-4">
                  <b>{item.title}</b>
                  <p className="text-sm text-slate-500">{item.type} · {item.country} · Deadline: {item.deadline}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <Card className="p-5"><div className="mb-3 text-slate-500">{icon}</div><p className="text-sm text-slate-500">{label}</p><p className="text-3xl font-black">{value}</p></Card>;
}
