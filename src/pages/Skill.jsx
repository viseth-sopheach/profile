import { FaBootstrap, FaCss3, FaHtml5, FaPhp, FaReact, FaVuejs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";

const Skill = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-400" },
    { name: "CSS", icon: <FaCss3 />, color: "text-blue-400" },
    { name: "JavaScript", icon: <IoLogoJavascript />, color: "text-yellow-400" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-400" },
    { name: "Tailwind CSS", icon: <RiTailwindCssLine />, color: "text-cyan-300" },
    { name: "React JS", icon: <FaReact />, color: "text-cyan-300" },
    { name: "Vue JS", icon: <FaVuejs />, color: "text-emerald-300" },
    { name: "Java", icon: <FaJava />, color: "text-orange-300" },
    { name: "PHP", icon: <FaPhp />, color: "text-indigo-300" },
    { name: "Laravel", icon: <FaLaravel />, color: "text-indigo-300" },
    { name: "MySQL", icon: <GrMysql />, color: "text-indigo-300" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-indigo-300" },
  ];

  return (
    <section className="section-shell">
      <div className="content-wrap space-y-10">
        <header className="space-y-3">
          <h1 className="section-title">My Skills</h1>
          <p className="section-subtitle">Technologies I work with</p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className={[
                "glass-card group relative overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(8,145,178,0.18)] hover:border-cyan-300/50",
                index % 2 === 0 ? "glow-dot teal" : "glow-dot amber",
                index % 3 === 1 ? "delay-1" : index % 3 === 2 ? "delay-2" : "",
              ].join(" ")}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent opacity-80" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="inline-flex rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:border-cyan-400/25 dark:bg-cyan-400/10 dark:text-cyan-200">
                    Skill
                  </span>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">{skill.name}</h2>

                  {/* <p className="max-w-[22ch] text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Practical experience building interfaces and features with {skill.name}.
                  </p> */}
                </div>

                <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lg shadow-slate-200/70 backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-slate-950/30">
                  <div className={`text-4xl transition duration-300 group-hover:scale-110 ${skill.color}`}>{skill.icon}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
