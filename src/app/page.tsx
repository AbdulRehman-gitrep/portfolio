"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "InTrack",
    category: "FULL-STACK INTERNTOOLS SYSTEM",
    description:
      "Internship management platform with role-based access for admins, interns, line managers, and buddies, covering tasks, reports, feedback, dashboards, JWT authentication, and activity tracking.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "Tailwind"],
    metrics: [
      ["ACCESS", "Admin / Intern / Manager / Buddy"],
      ["SECURITY", "JWT + RBAC"],
      ["WORKFLOW", "Reports + Feedback"],
    ],
  },
  {
    number: "02",
    title: "Lightweight TMS",
    category: "LOGISTICS / OPERATIONS PLATFORM",
    description:
      "Transportation management proof of concept covering shipment intake, carrier quoting, load consolidation, tendering, delivery tracking, exceptions, and proof-of-delivery documents.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker", "TypeORM"],
    metrics: [
      ["PORTALS", "Admin / Dispatcher / Carrier"],
      ["FLOW", "Quote to Delivery"],
      ["OPS", "Tracking + Exceptions"],
    ],
  },
  {
    number: "03",
    title: "CSIT Connect",
    category: "MERN COMMUNITY PLATFORM",
    description:
      "Alumni-student bridge platform with responsive UI, Reddit-style threaded discussions, voting, secure authentication, and role-based job posting for faculty and alumni.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    href: "https://csit-connect.vercel.app",
    metrics: [
      ["STACK", "MERN"],
      ["LIVE", "Vercel Deployment"],
    ],
  },
  {
    number: "04",
    title: "LeetRank",
    category: "BACKEND / GRAPHQL LEADERBOARD",
    description:
      "NED Computer Science LeetCode ranking system with official GraphQL API integration, scheduled performance updates, and an admin dashboard for leaderboard management.",
    tech: ["Node.js", "Express.js", "MongoDB", "GraphQL"],
    href: "https://leetrank.vercel.app",
    metrics: [
      ["API", "LeetCode GraphQL"],
      ["SCOPE", "NED CS Leaderboard"],
    ],
  },
];

const skillBlocks = [
  {
    title: "Frontend Architecture",
    badge: "FRONTEND",
    stat: "RESPONSIVE",
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    description: "Building clean, responsive interfaces with motion, reusable components, and strong user-facing polish.",
    wide: true,
  },
  {
    title: "Backend Systems",
    badge: "BACKEND",
    stat: "JWT / RBAC",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs", "JWT", "bcrypt"],
    description: "Designing role-based workflows, secure authentication, and maintainable server-side modules.",
  },
  {
    title: "Databases",
    badge: "DATABASES",
    stat: "SQL + NOSQL",
    items: ["PostgreSQL", "MongoDB", "MySQL", "TypeORM", "Mongoose"],
    description: "Working with relational and document databases, schema design, and database-driven application flows.",
  },
  {
    title: "Tools & Delivery",
    badge: "TOOLS",
    stat: "DOCKER READY",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Vercel"],
    description: "Using practical tooling to develop, test, version, containerize, and deploy production-ready web apps.",
    wide: true,
  },
];

const experienceItems = [
  {
    year: "JUN - AUG 2026",
    title: "Software Engineering Intern",
    org: "JBS - Karachi, Pakistan",
    text: "Built InTrack and a lightweight TMS using Next.js, React.js, NestJS, PostgreSQL, TypeORM, and Docker with role-based portals, authentication, notifications, and document workflows.",
  },
  {
    year: "DEC 2025 - FEB 2026",
    title: "Data Science Intern",
    org: "10Pearls - Remote",
    text: "Worked on data processing and analysis tasks in a collaborative enterprise environment while contributing to data-focused workflows and technical documentation.",
  },
];

const educationItems = [
  {
    year: "EXPECTED JUN 2027",
    title: "Bachelor of Computer Science",
    org: "NED University of Engineering & Technology",
    text: "Final year Computer Science undergraduate with a CGPA of 3.566/4.00, focused on full-stack engineering, backend systems, databases, and practical software delivery.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-7 flex items-center gap-4"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#d4af37]">
        {children}
      </span>
      <span className="h-px w-20 bg-gradient-to-r from-[#d4af37] via-[#8c6d4f]/60 to-transparent" />
    </motion.div>
  );
}

function FilmTitle({ top, bottom }: { top: string; bottom?: string }) {
  return (
    <h2 className="select-none font-display text-5xl uppercase leading-[0.84] tracking-wide sm:text-6xl md:text-7xl lg:text-[5.5rem]">
      <span className="block bg-gradient-to-b from-white via-[#d5cbc0] to-[#605448] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
        {top}
      </span>
      {bottom ? (
        <span className="block bg-gradient-to-b from-[#f7e7c4] via-[#c99e5d] to-[#543b1a] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
          {bottom}
        </span>
      ) : null}
    </h2>
  );
}
function PortraitCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [11, -11]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-11, 11]), { damping: 18, stiffness: 220 });

  return (
    <div className="relative flex justify-center [perspective:1400px]">
      <motion.div
        animate={{ scale: hovered ? 1.08 : 1, opacity: hovered ? 0.35 : 0.16 }}
        className="absolute -inset-5 rounded-3xl bg-[conic-gradient(from_0deg,#d4af37,#8c6d4f,transparent,#d4af37)] blur-2xl"
      />
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(event) => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
          mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          mouseX.set(0);
          mouseY.set(0);
        }}
        initial={{ opacity: 0, scale: 0.92, y: 28 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        className="group relative border border-[#8c6d4f]/45 bg-[#120f0c]/80 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.95)] backdrop-blur-xl transition hover:border-[#d4af37]/80"
      >
        <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-[#d4af37]" />
        <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-[#d4af37]" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#d4af37]" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#d4af37]" />
        <div className="relative overflow-hidden bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.png" alt="Abdul Rehman" className="max-h-[560px] w-full object-contain brightness-95 contrast-105 transition duration-700 group-hover:brightness-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <span className="absolute bottom-4 right-4 font-display text-2xl uppercase text-[#f2d8a7] drop-shadow-[0_0_12px_rgba(242,216,167,0.5)] sm:text-3xl">
            Abdul Rehman
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function TimelinePanel({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: Array<{ year: string; title: string; org: string; text: string }>;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 82%", "end 35%"],
  });
  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 95,
    damping: 24,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.75 }}
      className="relative border border-[#8c6d4f]/40 bg-[#0e0c0a] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.9)] sm:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
      <h3 className="font-display text-4xl uppercase text-white sm:text-5xl">{title}</h3>
      <div ref={timelineRef} className="relative mt-8 space-y-8 pl-8">
        <div className="absolute bottom-3 left-[5px] top-2 w-px bg-[#8c6d4f]/30" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[5px] top-2 w-px bg-gradient-to-b from-[#d4af37] via-[#c99e5d] to-[#8c6d4f]/20 shadow-[0_0_10px_rgba(212,175,55,0.75)]"
        />
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-15% 0px -20% 0px" }}
            transition={{ delay: index * 0.08, duration: 0.65 }}
            className="group relative"
          >
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-[#d4af37] bg-[#0e0c0a] shadow-[0_0_14px_rgba(212,175,55,0.55)] transition group-hover:scale-125 group-hover:bg-[#d4af37]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">{item.year}</span>
            <h4 className="mt-2 font-display text-2xl uppercase leading-none text-white group-hover:text-[#f7e7c4] sm:text-3xl">
              {item.title}
            </h4>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#8c6d4f]">
              {item.org}
            </span>
            <p className="mt-3 text-sm font-light leading-7 text-[#a8988b]">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
export default function Home() {

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-[#e8dfd8] selection:bg-[#cbb59d] selection:text-black">

      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="fixed inset-0 z-0 flex items-center justify-end overflow-hidden bg-black">
          <video autoPlay muted loop playsInline className="h-screen w-auto max-w-none object-contain opacity-80">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black via-black/90 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,transparent,rgba(0,0,0,0.62)_54%,#000_94%)]" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-6 sm:px-12 lg:px-16">
          <header className="flex items-center justify-between">
            <a href="#" className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-[#ead8c7] transition hover:text-[#d4af37] sm:text-sm">
            Portfolio
            </a>
            <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.28em] text-[#c4b5a5] md:flex">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#work" className="hover:text-white">Projects</a>
              <a href="#skills" className="hover:text-white">Skills</a>
              <a href="#experience" className="hover:text-white">Experience</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <a href="#contact" className="border border-[#8c6d4f]/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#ead8c7] transition hover:border-[#d4af37]">
              Let&apos;s Talk
            </a>
          </header>

          <div className="my-auto max-w-3xl py-16">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16 } } }}>
              <motion.h1 variants={{ hidden: { opacity: 0, y: 22, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] } } }} className="font-display text-[clamp(4.2rem,12vw,10rem)] uppercase leading-[0.82] tracking-wide">
                <span className="block bg-gradient-to-b from-white via-[#d5cbc0] to-[#605448] bg-clip-text text-transparent">Abdul</span>
                <span className="block bg-gradient-to-b from-[#f7e7c4] via-[#c99e5d] to-[#543b1a] bg-clip-text text-transparent">Rehman</span>
              </motion.h1>
              <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9 } } }} className="mt-5 max-w-xl font-mono text-[11px] uppercase leading-7 tracking-[0.28em] text-[#c4b29e]">
                Software Engineer • Full-Stack Developer
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9 } } }} className="mt-5 max-w-xl text-sm font-light leading-8 tracking-wide text-[#a8988b]">
                Final year Computer Science undergraduate at NED University building full-stack applications, REST APIs, role-based workflows, and production-ready web experiences.
              </motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9 } } }} className="mt-8 flex flex-wrap gap-4">
                <a href="#work" className="border border-[#8c6d4f] bg-[#120f0c]/80 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-[#ead8c7] shadow-[0_0_25px_rgba(212,175,55,0.18)] transition hover:border-[#d4af37] hover:text-white">
                  Explore Work ↗
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="border border-[#8c6d4f]/40 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-[#bfa895] transition hover:border-[#d4af37] hover:text-[#ead8c7]">
                  Download Resume ↓
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-black px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
        <div className="absolute left-1/6 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[#d4af37]/10 blur-[160px]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>01 / About</SectionLabel>
            <FilmTitle top="Who I am?" bottom="Full-stack developer" />
            <p className="mt-8 max-w-2xl text-sm font-light leading-8 tracking-wide text-[#b3a497]">
              I&apos;m <span className="font-medium text-[#f3dbb3]">Abdul Rehman</span>, a final year Computer Science undergraduate at NED University with hands-on experience building full-stack applications using Next.js, React.js, NestJS, Node.js, PostgreSQL, and MongoDB.
            </p>
            <p className="mt-5 max-w-2xl text-sm font-light leading-8 tracking-wide text-[#b3a497]">
              Through internships at JBS and 10Pearls, I have worked on REST API development, authentication, role-based access control, database design, Dockerized applications, and practical data workflows.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#8c6d4f]/25 pt-6 sm:grid-cols-4">
              {[["3.566", "CGPA"], ["2027", "Graduation"], ["4", "Featured Projects"], ["2", "Internships"]].map(([value, label]) => (
                <div key={label}>
                  <div className="font-display text-4xl uppercase text-[#f4ebe2]">{value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#a8988b]">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5"><PortraitCard /></div>
        </div>
      </section>

      <section id="work" className="relative bg-black px-6 py-24 sm:px-12 lg:px-20">
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionLabel>02 / Projects</SectionLabel>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <FilmTitle top="Projects" bottom="" />
            <p className="max-w-sm text-sm font-light leading-7 text-[#a8988b]">A focused selection of full-stack, backend, and MERN projects built through internships and independent work.</p>
          </div>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.a key={project.title} href={project.href || "#"} target={project.href ? "_blank" : undefined} rel={project.href ? "noreferrer" : undefined} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.08, duration: 0.75 }} className="group relative block rounded-2xl border border-[#8c6d4f]/50 bg-[#0e0c0a] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.98)] transition hover:border-[#d4af37] sm:sticky sm:top-10 sm:p-10" style={{ zIndex: index + 1 }}>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent" />
                <span className="absolute -bottom-6 -right-2 font-display text-9xl text-[#ead8c7]/5">{project.number}</span>
                <div className="relative z-10 grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <div className="mb-4 flex items-center gap-3"><span className="font-mono text-xs font-bold text-[#d4af37]">{project.number} {"//"}</span><span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a8988b]">{project.category}</span></div>
                    <h3 className="font-display text-5xl uppercase leading-[0.9] text-white transition group-hover:text-[#f7e7c4] sm:text-6xl">{project.title}</h3>
                    <p className="mt-5 max-w-2xl text-sm font-light leading-8 tracking-wide text-[#bdb0a4]">{project.description}</p>
                    <div className="mt-8 flex flex-wrap gap-2 border-t border-[#8c6d4f]/25 pt-6">{project.tech.map((tech) => <span key={tech} className="border border-[#8c6d4f]/40 bg-[#16120e] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#e8d7c5]">{tech}</span>)}</div>
                  </div>
                  <div className="space-y-3 lg:col-span-5 lg:border-l lg:border-[#8c6d4f]/25 lg:pl-7">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-[#8c6d4f]">{"// Architecture Metrics"}</span>
                    {project.metrics.map(([label, value]) => <div key={label} className="grid gap-2 border border-[#8c6d4f]/25 bg-[#050403] p-3.5 sm:flex sm:items-center sm:justify-between"><span className="font-mono text-[10px] text-[#a8988b]">{label}</span><span className="break-words text-left font-mono text-[11px] font-medium leading-5 text-[#f7e7c4] sm:text-right">{value}</span></div>)}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative bg-black px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>03 / Skills</SectionLabel>
          <FilmTitle top="Technologies" bottom="Stack I use" />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {skillBlocks.map((block) => <motion.article key={block.title} whileHover={{ y: -5 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${block.wide ? "lg:col-span-7" : "lg:col-span-5"} group border border-[#8c6d4f]/35 bg-[#100d0b]/85 p-8 transition hover:border-[#d4af37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)]`}>
              <div className="mb-4 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">{block.badge}</span><span className="border border-[#8c6d4f]/40 bg-[#17130f] px-2.5 py-0.5 font-mono text-[10px] text-[#c4b5a5]">{block.stat}</span></div>
              <h3 className="font-display text-4xl uppercase tracking-wide text-white group-hover:text-[#f7e7c4]">{block.title}</h3>
              <p className="mt-3 max-w-xl text-sm font-light leading-7 text-[#a8988b]">{block.description}</p>
              <div className="mt-7 flex flex-wrap gap-2 border-t border-[#8c6d4f]/20 pt-4">{block.items.map((item) => <span key={item} className="border border-[#8c6d4f]/35 bg-[#171310] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#e8d7c5]">{item}</span>)}</div>
            </motion.article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="relative bg-black px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>04 / Experience and Education</SectionLabel>
          <FilmTitle top="Experience and" bottom="Education" />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <TimelinePanel title="Experience" items={experienceItems} />
            <TimelinePanel title="Education" items={educationItems} delay={0.12} />
          </div>
        </div>
      </section>

      <footer id="contact" className="relative bg-black px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionLabel>05 / Contact</SectionLabel><FilmTitle top="Let&apos;s build" bottom="something" /><p className="mt-7 max-w-md text-sm font-light leading-7 text-[#a8988b]">Open to software engineering internships, junior developer roles, backend/full-stack projects, and useful web product collaborations.</p></div>
          <div className="relative border border-[#8c6d4f]/40 bg-[#0a0806] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] lg:col-span-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
            <a href="mailto:ar3450630@gmail.com" className="block break-words font-mono text-2xl lowercase text-[#f7e7c4] transition hover:text-[#d4af37] sm:text-3xl">ar3450630@gmail.com</a>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a className="border border-[#8c6d4f]/35 bg-[#120f0c] p-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ead8c7] hover:border-[#d4af37]" href="tel:+923121191058"><Phone className="mb-3" size={18} />0312-1191058</a>
              <a className="border border-[#8c6d4f]/35 bg-[#120f0c] p-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ead8c7] hover:border-[#d4af37]" href="https://github.com/AbdulRehman-gitrep" target="_blank" rel="noreferrer"><Github className="mb-3" size={18} />GitHub</a>
              <a className="border border-[#8c6d4f]/35 bg-[#120f0c] p-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ead8c7] hover:border-[#d4af37]" href="https://www.linkedin.com/in/abdul-rehman-21a7752a7" target="_blank" rel="noreferrer"><Linkedin className="mb-3" size={18} />LinkedIn</a>
              <a className="border border-[#8c6d4f]/35 bg-[#120f0c] p-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ead8c7] hover:border-[#d4af37]" href="/resume.pdf" target="_blank" rel="noreferrer"><Download className="mb-3" size={18} />Resume</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t border-[#8c6d4f]/15 pt-8 text-center font-mono text-[10px] uppercase tracking-widest text-[#8c6d4f] sm:flex-row sm:text-left"><span>Portfolio // Abdul Rehman</span><span>© 2026 • Engineered by Abdul Rehman</span></div>
      </footer>
    </main>
  );
}



























