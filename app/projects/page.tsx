import { Nav } from "@/components/Nav";
import { Card } from "@/components/Card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return <main><Nav /><div className="mx-auto max-w-6xl px-6 py-10"><div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><h1 className="text-4xl font-black">Community projects</h1><p className="mt-2 text-slate-600">Turn learning into local action with collaborators and project guidance.</p></div><button className="rounded-full bg-slate-950 px-5 py-3 font-bold text-white">Create project</button></div><div className="grid gap-5 md:grid-cols-3">{projects.map((project) => <Card key={project.title}><p className="text-sm font-bold uppercase text-slate-500">{project.status}</p><h2 className="mt-3 text-2xl font-black">{project.title}</h2><p className="mt-2 text-slate-600">{project.location} · {project.members} members</p><button className="mt-5 rounded-full border border-slate-300 px-5 py-3 font-bold">View project</button></Card>)}</div></div></main>;
}
