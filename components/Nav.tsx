import Link from "next/link";

const links = [
  ["Dashboard", "/"],
  ["Tutor", "/tutor"],
  ["Learn", "/learn"],
  ["Opportunities", "/opportunities"],
  ["Projects", "/projects"]
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-tight">LiftLearn</Link>
        <div className="hidden gap-5 text-sm font-medium text-slate-600 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-slate-950">{label}</Link>)}
        </div>
      </div>
    </nav>
  );
}
