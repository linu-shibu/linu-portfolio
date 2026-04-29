"use client";

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400">
        <div>
          <p className="text-white mb-2">Frontend</p>
          React, TypeScript
        </div>
        <div>
          <p className="text-white mb-2">Backend</p>
          Spring Boot, APIs
        </div>
        <div>
          <p className="text-white mb-2">Database</p>
          MySQL
        </div>
        <div>
          <p className="text-white mb-2">Infra</p>
          Linux, Ansible
        </div>
      </div>
    </section>
  );
}