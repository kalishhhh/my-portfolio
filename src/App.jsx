import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [dark, setDark] = useState(true); // enable dark by default
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mock E-Commerce Cart",
      desc: "Full-stack cart system with quantity, products, and backend API integration.",
      tech: "React, Tailwind, Node.js, MongoDB",
      repo: "https://github.com/kalishhhh/mock-ecom-cart",
    },
    {
      id: 2,
      title: "Budget Tracker App",
      desc: "Dashboard, login/signup, and expense categories.",
      tech: "Flask, SQL, Python",
      repo: "https://github.com/kalishhhh/budget-tracker",
    },
    {
      id: 3,
      title: "API Mini Apps",
      desc: "Weather app, quote generator, image fetcher.",
      tech: "JavaScript, REST APIs",
      repo: "https://github.com/kalishhhh",
    },
  ];

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[#020617] text-gray-100 transition duration-300">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between max-w-6xl px-6 py-6 mx-auto">
          <div className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_6px]">
            Ishit
          </div>

          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>

            <button
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-lg border border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.7)]"
            >
              {dark ? "🌙" : "☀️"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <header className="flex flex-col items-center max-w-6xl gap-20 px-6 py-24 mx-auto md:flex-row">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <h1 className="text-5xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                Full-stack Developer
              </span>
              <br /> skilled in React, Node.js & Python
            </h1>

            <p className="max-w-xl mt-6 text-gray-400">
              Passionate about building real products, learning fast, and solving real-world problems.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/kalishhhh"
                className="px-6 py-2 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_12px_rgba(6,182,212,0.6)] transition"
              >
                GitHub
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_12px_rgba(168,85,247,0.6)] transition"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 max-w-md"
          >
            <div className="p-6 rounded-2xl bg-[#0f172a] border border-purple-500/40 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold shadow-[0_0_14px_rgba(168,85,247,0.8)]">
                  IK
                </div>

                <div>
                  <div className="text-lg font-semibold">Ishit — MCA (Ongoing)</div>
                  <div className="text-sm text-gray-400">Amritsar, Punjab</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-300">
                Looking for remote internships to build product features, fix bugs, and gain industry experience.
              </p>

              <div className="flex gap-3 mt-4">
                <a href="#projects" className="text-sm underline text-cyan-400">
                  See projects
                </a>

                <a
                  href="mailto:kaliaishit@gmail.com"
                  className="px-4 py-1 ml-auto border rounded-md border-cyan-500/40"
                >
                  Email Me
                </a>
              </div>
            </div>
          </motion.div>
        </header>

        {/* SKILLS */}
        <section id="skills" className="max-w-6xl px-6 py-16 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Skills
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              "C",
              "C++",
              "Python",
              "Java",
              "JavaScript",
              "TypeScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Tailwind CSS",
              "Git & GitHub",
              "REST API",
            ].map((skill) => (
              <div
                key={skill}
                className="p-3 rounded-xl border border-cyan-500/40 bg-[#0f172a] text-center hover:shadow-[0_0_12px_rgba(6,182,212,0.5)] transition text-gray-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl px-6 py-16 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-[#0f172a] border border-purple-500/40 hover:shadow-[0_0_16px_rgba(139,92,246,0.6)] transition"
              >
                <h3 className="text-xl font-semibold text-purple-300">{p.title}</h3>
                <p className="mt-2 text-gray-400">{p.desc}</p>
                <p className="mt-2 text-xs text-gray-500">Tech: {p.tech}</p>

                <div className="flex gap-3 mt-4">
                  <a href={p.repo} className="text-sm underline text-cyan-400">
                    Repo
                  </a>
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="px-3 py-1 text-sm border rounded-md border-cyan-500/40 hover:bg-cyan-500/10"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-[#0f172a] p-6 rounded-2xl border border-purple-500/40 shadow-[0_0_22px_rgba(168,85,247,0.6)] max-w-lg w-full">
              <h3 className="text-xl font-semibold text-purple-300">{selectedProject.title}</h3>
              <p className="mt-2 text-gray-400">{selectedProject.desc}</p>

              <p className="mt-4 text-xs text-gray-500">Tech: {selectedProject.tech}</p>

              <div className="flex justify-between mt-6">
                <a href={selectedProject.repo} className="underline text-cyan-400">
                  Open Repo
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-1 border rounded-md border-cyan-500/40 hover:bg-cyan-500/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl px-6 py-16 mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Contact
          </h2>

          <p className="text-gray-400">Email: kaliaishit@gmail.com</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              window.location.href = `mailto:kaliaishit@gmail.com?subject=Portfolio Contact&body=${form.message.value}`;
            }}
            className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2"
          >
            <input
              name="name"
              placeholder="Your name"
              className="p-3 rounded-lg bg-[#0f172a] border border-cyan-500/40"
            />
            <input
              name="email"
              placeholder="Your email"
              className="p-3 rounded-lg bg-[#0f172a] border border-cyan-500/40"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="md:col-span-2 p-3 rounded-lg bg-[#0f172a] border border-cyan-500/40"
            />
            <div className="flex justify-end md:col-span-2">
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_14px_rgba(168,85,247,0.8)]">
                Send
              </button>
            </div>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Ishit — Built with React & Tailwind
        </footer>
      </div>
    </div>
  );
}
