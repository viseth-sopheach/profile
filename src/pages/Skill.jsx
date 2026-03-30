import { FaBootstrap, FaCss3, FaHtml5, FaPhp, FaReact, FaVuejs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";

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
    { name: "Php", icon: <FaPhp />, color: "text-indigo-300" },
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
                "glass-card group relative overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50",
                index % 3 === 1 ? "delay-1" : index % 3 === 2 ? "delay-2" : "",
              ].join(" ")}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className={`text-4xl ${skill.color}`}>{skill.icon}</div>
                {/* <span className="rounded-full border border-slate-600 bg-slate-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                  {skill.level}
                </span> */}
              </div>

              <h2 className="text-xl font-bold text-slate-50">{skill.name}</h2>
              <p className="mt-2 text-sm text-slate-300">
                Production-ready workflow, reusable components, and clean implementation.
              </p>

              {/* <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300"
                  style={{ width: skill.level === "Advanced" ? "88%" : "68%" }}
                />
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
