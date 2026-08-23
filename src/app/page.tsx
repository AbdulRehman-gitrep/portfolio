"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useState } from "react";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#0a0a0f]" />,
});

const projects = [
  {
    tag: "FULLSTACK",
    name: "InTrack - Internship Tracking System",
    description:
      "Full-stack internship management platform with role-based access for admins, interns, line managers, and buddies.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
  },
  {
    tag: "LOGISTICS",
    name: "Lightweight Transportation Management System",
    description:
      "TMS proof of concept covering shipment intake, carrier quoting, consolidation, tendering, tracking, and proof-of-delivery documents.",
    tech: ["Next.js", "NestJS", "Docker", "Cloudinary"],
  },
  {
    tag: "MERN",
    name: "CSIT Connect",
    description:
      "Alumni-student bridge platform with threaded discussions, voting, secure authentication, and role-based job posting.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    href: "https://csit-connect.vercel.app",
  },
  {
    tag: "BACKEND",
    name: "LeetRank",
    description:
      "NED CS LeetCode leaderboard using the official GraphQL API, scheduled stat updates, and an admin dashboard.",
    tech: ["Node.js", "Express.js", "MongoDB", "GraphQL"],
    href: "https://leetrank.vercel.app",
  },
];

const skills = [
  { label: "Next.js", tone: "primary" },
  { label: "React", tone: "primary" },
  { label: "TypeScript", tone: "primary" },
  { label: "NestJS", tone: "primary" },
  { label: "Node.js", tone: "secondary" },
  { label: "Express", tone: "secondary" },
  { label: "MongoDB", tone: "secondary" },
  { label: "PostgreSQL", tone: "secondary" },
  { label: "MySQL", tone: "secondary" },
  { label: "REST APIs", tone: "neutral" },
  { label: "JWT / RBAC", tone: "neutral" },
  { label: "Tailwind CSS", tone: "neutral" },
  { label: "Docker", tone: "neutral" },
  { label: "Postman", tone: "neutral" },
  { label: "Git", tone: "neutral" },
];

const stats = [
  ["3.566", "CGPA at NED University"],
  ["2027", "Expected graduation"],
  ["4", "Featured projects"],
  ["2", "Industry internships"],
];

export default function Home() {
  const [profileImageReady, setProfileImageReady] = useState(true);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 z-0">
          <HeroScene />
        </div>
        <div className="cyber-grid pointer-events-none fixed inset-0 z-[1]" />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_50%_36%,rgba(10,10,15,0.76)_0%,rgba(10,10,15,0.46)_24%,rgba(10,10,15,0.18)_44%,#0a0a0f_94%)]" />

        <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <a className="font-display text-xs font-bold uppercase tracking-[0.28em] text-cyan-200" href="#">
            Abdul Rehman
          </a>
          <div className="hidden items-center gap-7 font-display text-[10px] uppercase tracking-[0.26em] text-[#8888cc] md:flex">
            <a className="transition hover:text-cyan-200" href="#about">About</a>
            <a className="transition hover:text-cyan-200" href="#projects">Work</a>
            <a className="transition hover:text-cyan-200" href="#contact">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-6xl flex-col items-center justify-center px-5 pb-24 pt-8 text-center md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-[11px] uppercase tracking-[0.36em] text-[#00f5ff] drop-shadow-[0_0_18px_rgba(0,245,255,0.6)]"
          >
            Software Engineer | Full-Stack Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.8 }}
            className="mt-6 max-w-5xl font-display text-[clamp(42px,8vw,92px)] font-black uppercase leading-[0.95] text-[#e9e7ff] drop-shadow-[0_10px_34px_rgba(0,0,0,0.95)]"
          >
            Abdul
            <span className="block text-[#00f5ff] drop-shadow-[0_0_30px_rgba(0,245,255,0.45)]">
              Rehman
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base font-light leading-8 tracking-[0.08em] text-[#aaa9e8] drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)] md:text-lg"
          >
            Computer Science undergraduate at NED University building full-stack applications, REST APIs, role-based systems, and production-ready web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.75 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              className="sharp-button inline-flex h-12 items-center gap-2 bg-[#00f5ff] px-7 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#0a0a0f] transition hover:bg-cyan-200"
              href="#projects"
            >
              View Work
              <ArrowDown size={16} />
            </a>
            <a
              className="sharp-button inline-flex h-12 items-center gap-2 border border-[#00f5ff] bg-transparent px-7 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#00f5ff] transition hover:bg-cyan-300/10"
              href="#contact"
            >
              Get In Touch
              <Mail size={16} />
            </a>
          </motion.div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
            <span className="font-display text-[9px] uppercase tracking-[0.32em] text-[#5555aa]">
              Scroll
            </span>
            <span className="h-10 w-px bg-gradient-to-b from-[#00f5ff] to-transparent" />
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-[#0a0a0f]">
        <section id="about" className="mx-auto grid w-full max-w-6xl gap-10 overflow-hidden border-t border-[#1a1a2e] px-5 py-20 md:grid-cols-[1fr_0.85fr] md:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <p className="font-display text-[10px] uppercase tracking-[0.4em] text-[#7b2fff]">00 - About</p>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase text-[#e0e0ff]">Who I am</h2>
            <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#8888cc]">
              <p>
                I am a final year Computer Science undergraduate at NED University of Engineering and Technology with hands-on experience building full-stack applications using Next.js, React.js, NestJS, Node.js, PostgreSQL, and MongoDB.
              </p>
              <p>
                Through internships at JBS and 10Pearls, I have worked on RESTful API development, authentication, role-based access control, database design, Dockerized applications, and practical data workflows.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="sharp-button inline-flex h-11 items-center gap-2 border border-[#00f5ff] px-5 font-display text-[10px] uppercase tracking-[0.16em] text-cyan-200 transition hover:bg-cyan-300/10"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.65 }} className="grid gap-4">
            {profileImageReady ? (
              <div className="border border-[#2a2a4e] bg-[#1a1a2e] p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.png"
                  alt="Abdul Rehman portrait"
                  className="max-h-[520px] w-full object-contain"
                  onError={() => setProfileImageReady(false)}
                />
              </div>
            ) : (
              <div className="border border-[#2a2a4e] bg-[#1a1a2e] p-6">
                <p className="font-display text-[10px] uppercase tracking-[0.24em] text-[#00f5ff]">
                  Portrait Slot
                </p>
                <p className="mt-3 text-[13px] leading-6 text-[#8888cc]">
                  Add your photo as public/profile.png and it will appear here for every visitor.
                </p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(([value, label]) => (
                <div key={label} className="border border-[#2a2a4e] bg-[#1a1a2e] p-5">
                  <div className="font-display text-3xl font-black text-[#00f5ff]">{value}</div>
                  <div className="mt-2 text-xs leading-5 tracking-[0.05em] text-[#5555aa]">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-6xl border-t border-[#1a1a2e] px-5 py-20 md:px-8">
          <p className="font-display text-[10px] uppercase tracking-[0.4em] text-[#7b2fff]">01 - Experience</p>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase text-[#e0e0ff]">Industry exposure</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {[
              {
                role: "Software Engineering Intern - JBS",
                date: "Jun 2026 - Aug 2026",
                detail:
                  "Built InTrack and a lightweight TMS using Next.js, React.js, NestJS, PostgreSQL, TypeORM, and Docker. Developed role-based portals, authentication, notifications, document handling, Cloudinary, and Nodemailer integrations.",
              },
              {
                role: "Data Science Intern - 10Pearls",
                date: "Dec 2025 - Feb 2026",
                detail:
                  "Worked on data processing and analysis tasks in a collaborative enterprise environment, contributing to data-focused workflows, Agile collaboration, and technical documentation.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.58 }}
                className="border border-[#2a2a4e] bg-[#1a1a2e] p-6 transition hover:border-[#00f5ff]"
              >
                <p className="font-display text-[9px] uppercase tracking-[0.22em] text-[#7b2fff]">{item.date}</p>
                <h3 className="mt-4 text-base font-medium text-[#e0e0ff]">{item.role}</h3>
                <p className="mt-3 text-[13px] leading-6 text-[#8888cc]">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-6xl border-t border-[#1a1a2e] px-5 py-20 md:px-8">
          <p className="font-display text-[10px] uppercase tracking-[0.4em] text-[#7b2fff]">02 - Projects</p>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase text-[#e0e0ff]">Selected work</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={"href" in project ? project.href : "#"}
                target={"href" in project ? "_blank" : undefined}
                rel={"href" in project ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.58 }}
                className="group block border border-[#2a2a4e] bg-[#1a1a2e] p-6 transition hover:-translate-y-1 hover:border-[#00f5ff]"
              >
                <p className="font-display text-[9px] uppercase tracking-[0.22em] text-[#7b2fff]">{project.tag}</p>
                <h3 className="mt-4 text-base font-medium text-[#e0e0ff]">{project.name}</h3>
                <p className="mt-3 min-h-20 text-[13px] leading-6 text-[#8888cc]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="border border-[#2a2a4e] px-2 py-1 text-[10px] text-[#8888cc] group-hover:border-cyan-300/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="stack" className="mx-auto w-full max-w-6xl border-t border-[#1a1a2e] px-5 py-20 md:px-8">
          <p className="font-display text-[10px] uppercase tracking-[0.4em] text-[#7b2fff]">03 - Stack</p>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase text-[#e0e0ff]">Technologies</h2>
          <div className="mt-9 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <motion.span
                key={skill.label}
                whileHover={{ y: -3 }}
                className={`border px-4 py-2 font-display text-[10px] uppercase tracking-[0.13em] ${
                  skill.tone === "primary"
                    ? "border-cyan-300/40 text-[#00f5ff]"
                    : skill.tone === "secondary"
                      ? "border-violet-400/40 text-violet-300"
                      : "border-[#2a2a4e] text-[#8888cc]"
                }`}
              >
                {skill.label}
              </motion.span>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl border-t border-[#1a1a2e] px-5 py-20 md:px-8">
          <p className="font-display text-[10px] uppercase tracking-[0.4em] text-[#7b2fff]">04 - Contact</p>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase text-[#e0e0ff]">Let&apos;s build something</h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#8888cc]">
            Open to software engineering internships, junior developer roles, backend/full-stack projects, and collaborations around useful web products.
          </p>
          <a className="mt-8 block font-display text-xl font-bold text-[#00f5ff] transition hover:opacity-75" href="mailto:ar3450630@gmail.com">
            ar3450630@gmail.com
          </a>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="inline-flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-[#5555aa] transition hover:text-[#00f5ff]" href="tel:+923121191058">
              <Phone size={16} /> 0312-1191058
            </a>
            <a className="inline-flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-[#5555aa] transition hover:text-[#00f5ff]" href="https://github.com/AbdulRehman-gitrep" target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-[#5555aa] transition hover:text-[#00f5ff]" href="https://www.linkedin.com/in/abdul-rehman-21a7752a7" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-[#5555aa] transition hover:text-[#00f5ff]" href="/resume.pdf" target="_blank" rel="noreferrer">
              <Download size={16} /> Resume
            </a>
          </div>
        </section>

        <footer className="border-t border-[#1a1a2e] px-5 py-8 text-center font-display text-[9px] uppercase tracking-[0.32em] text-[#2a2a4e]">
          [ Abdul Rehman - Software Engineer - Karachi, Pakistan ]
        </footer>
      </div>
    </main>
  );
}
