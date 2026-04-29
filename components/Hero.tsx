"use client";

export default function Hero() {
  return (
    <section className="py-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Linu Shibu
      </h1>
      <p className="text-xl text-gray-400 mb-6">
        Full-Stack Engineer building scalable web apps & dashboards
      </p>
      <p className="text-sm text-gray-500 mb-8">
        React • TypeScript • Spring Boot • APIs
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="bg-white text-black px-5 py-2 rounded-md">
        View Projects
        </a>

        <a href="#contact" className="border px-5 py-2 rounded-md">
        Contact Me
        </a>
      </div>
    </section>
  );
}