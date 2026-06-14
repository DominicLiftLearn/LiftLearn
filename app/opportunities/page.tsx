import { Nav } from "@/components/Nav";
import { Card } from "@/components/Card";
import { opportunities } from "@/lib/data";

export default function OpportunitiesPage() {
  return <main><Nav /><div className="mx-auto max-w-6xl px-6 py-10"><h1 className="mb-2 text-4xl font-black">Opportunity hub</h1><p className="mb-8 text-slate-600">Scholarships, grants, courses, internships, and work pathways matched to growth goals.</p><div className="grid gap-5">{opportunities.map((item) => <Card key={item.title}><div className="flex flex-col justify-between gap-4 md:flex-row md:items-center"><div><p className="text-sm font-bold uppercase text-slate-500">{item.type}</p><h2 className="text-2xl font-black">{item.title}</h2><p className="text-slate-600">{item.country} · Deadline: {item.deadline}</p></div><button className="rounded-full bg-slate-950 px-5 py-3 font-bold text-white">Save</button></div></Card>)}</div></div></main>;
}
