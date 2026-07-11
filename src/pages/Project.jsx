import { GiClick } from "react-icons/gi";
import apple from "../assets/apple.png";
import book from "../assets/bIcon.png";
import git from "../assets/git.png";
import qr from "../assets/qrcode.png";
import rt from "../assets/reactjs.png";

const projects = [
  {
    id: 1,
    image: book,
    title: "BookShop Site",
    link: "https://book-one-sage.vercel.app/",
    stack: "React, Tailwind",
  },
  {
    id: 2,
    image: qr,
    title: "QR Code Generator",
    link: "https://qrgenerator-alpha-eight.vercel.app/",
    stack: "Vue, API, Tailwind",
  },
  {
    id: 3,
    image: apple,
    title: "Phone Shop",
    link: "https://phoneshop-woad.vercel.app/",
    stack: "React, API, Tailwind",
  },
  {
    id: 4,
    image: rt,
    title: "ReacjJS",
    link: "https://advance-reactjs-two.vercel.app/",
    stack: "React, Tailwind",
  },
  {
    id: 5,
    image: git,
    title: "Git",
    link: "https://git-interactive-guide.vercel.app/",
    stack: "React, Tailwind",
  }
];

const Project = () => {
  return (
    <section className="section-shell">
      <div className="content-wrap space-y-10">
        <header>
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            Recent work I have completed. I have finished {projects.length} projects.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => window.open(project.link, "_blank")}
              className={[
                "glass-card group relative cursor-pointer overflow-hidden rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_30px_90px_rgba(8,145,178,0.18)] dark:hover:border-cyan-300/50",
                index % 2 === 0 ? "glow-dot teal" : "glow-dot amber",
                index % 3 === 1 ? "delay-1" : index % 3 === 2 ? "delay-2" : "",
              ].join(" ")}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  window.open(project.link, "_blank");
                }
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent opacity-80" />

              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:border-cyan-400/25 dark:bg-cyan-400/10 dark:text-cyan-200">
                  Project
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  0{project.id}
                </span>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-lg shadow-slate-200/60 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80 dark:shadow-slate-950/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-contain p-5 transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="pt-5">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Built with <span className="font-semibold text-slate-800 dark:text-slate-100">{project.stack}</span>
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-300/80 bg-white/85 px-4 py-3 text-sm text-slate-700 transition group-hover:border-cyan-400/50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
                <span className="font-medium">Open Project</span>
                <GiClick className="text-xl text-cyan-700 transition duration-300 group-hover:translate-x-1 group-hover:rotate-12 dark:text-cyan-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;