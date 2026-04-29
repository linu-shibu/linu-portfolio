"use client";

const projects = [
  {
    title: "E-Commerce Web App",
    desc: "Full-stack app with auth, cart, and checkout",
    tech: "React • Firebase",
    demo: "#",
    code: "#",
  },
  {
    title: "Operations Dashboard",
    desc: "Data dashboard with filters and real-time views",
    tech: "React • TypeScript",
    demo: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="border border-gray-800 p-5 rounded-lg">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
            <p className="text-gray-500 text-xs mt-2">{p.tech}</p>

            <div className="flex gap-4 mt-4 text-sm">
              <a href={p.demo} className="underline">Live</a>
              <a href={p.code} className="underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}