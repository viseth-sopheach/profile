import { GiClick } from "react-icons/gi";
import apple from "../assets/apple.png";
import book from "../assets/bIcon.png";
import download from "../assets/download.png";
import qr from "../assets/qrcode.png";
import stock from "../assets/stock.png";

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
    stack: "JavaScript, API",
  },
  {
    id: 3,
    image: apple,
    title: "Phone Shop",
    link: "https://phoneshop-woad.vercel.app/",
    stack: "React Router",
  },
  // {
  //   id: 4,
  //   image: stock,
  //   title: "Stock Market",
  //   link: "https://stock-chi-lovat.vercel.app/",
  //   stack: "Charts, API",
  // },
  // {
  //   id: 5,
  //   image: download,
  //   title: "Video Downloader",
  //   link: "https://video-downloader-o6un.onrender.com/",
  //   stack: "Node, UI",
  // },
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
                "glass-card group relative cursor-pointer overflow-hidden rounded-3xl p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50",
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
              <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-contain p-4 transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="pt-4">
                <h2 className="text-xl font-bold text-slate-50">{project.title}</h2>
                <p className="mt-1 text-sm text-slate-300">{project.stack}</p>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-200">
                <span>Open Project</span>
                <GiClick className="text-xl text-cyan-300 transition group-hover:rotate-12" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
