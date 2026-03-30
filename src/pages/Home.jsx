import { useEffect, useState } from "react";
import { FaBootstrap, FaCss3, FaEye, FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { IoLogoJavascript, IoMdDownload } from "react-icons/io";
import { RiTailwindCssLine } from "react-icons/ri";
import cv from "../assets/cv.png";
import profileImage from "../assets/seth.png";

const Home = () => {
  const [showCV, setShowCV] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "I am a front-end developer";

  const sideIcons = [
    { name: "React", icon: <FaReact className="h-7 w-7 text-cyan-300" /> },
    { name: "Tailwind", icon: <RiTailwindCssLine className="h-7 w-7 text-sky-300" /> },
    { name: "Java", icon: <FaJava className="h-7 w-7 text-orange-300" /> },
    { name: "Vue", icon: <FaVuejs className="h-7 w-7 text-emerald-300" /> },
    { name: "Php", icon: <FaPhp className="h-7 w-7 text-blue-500" /> },
  ];

  const bottomIcons = [
    { name: "HTML", icon: <FaHtml5 className="h-7 w-7 text-orange-400" /> },
    { name: "CSS", icon: <FaCss3 className="h-7 w-7 text-blue-400" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="h-7 w-7 text-yellow-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="h-7 w-7 text-purple-400" /> },
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 35 : 75;
    const pauseEnd = 1800;

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseEnd);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      } else {
        setText((current) =>
          isDeleting
            ? current.slice(0, -1)
            : fullText.slice(0, current.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Viseth-CV.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const requestToViseth = () => {
    window.open("https://t.me/viseth_sopheach", "_blank");
  };

  return (
    <section className="section-shell soft-grid">
      <div className="content-wrap grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center">
        <div className="relative min-w-0 glow-dot teal space-y-6 rounded-3xl border border-slate-700/70 bg-slate-900/55 p-6 shadow-2xl backdrop-blur-md sm:p-9">
          <p className="inline-flex items-center rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200">
            Full Stack Web Developer
          </p>

          <h1 className="text-3xl font-extrabold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Welcome to my portfolio
          </h1>

          <p className="max-w-full wrap-anywhere text-base leading-relaxed text-slate-300 sm:text-lg">
            ខ្ញុំបានឈ្មោះ សុភាជ វិសិដ្ឋ ជានិស្សិតឆ្នាំទី២ នៃសកលវិទ្យាល័យភូមិន្ទភ្នំពេញ ដេប៉ាតាំង Computer Science
          </p>

          <h2 className="min-h-14 text-xl font-bold text-slate-100 sm:text-2xl">
            {text}
            <span className="ml-1 animate-pulse text-cyan-300">|</span>
          </h2>

          <p className="max-w-2xl wrap-anywhere text-sm leading-relaxed text-slate-300 sm:text-base">
            My goal is to become a full-stack developer specializing in web and mobile applications,
            while building a professional career with a degree in Computer Science.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2 sm:gap-3">
            <button
              type="button"
              onClick={requestToViseth}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 max-[420px]:w-full max-[420px]:justify-center"
            >
              Contact me ...
            </button>
            {/* <button
              type="button"
              onClick={() => setShowCV(true)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200 max-[420px]:w-full max-[420px]:justify-center"
            >
              VIEW MY CV <FaEye className="text-base" />
            </button>
            <button
              type="button"
              onClick={downloadCv}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20 max-[420px]:w-full max-[420px]:justify-center"
            >
              DOWNLOAD MY CV <IoMdDownload className="text-lg" />
            </button> */}
          </div>
        </div>

        <div className="relative min-w-0 glow-dot amber">
          <div className="glass-card overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="flex min-w-0 flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <div className="grid grid-cols-4 gap-2 sm:block sm:space-y-3">
                {sideIcons.map((item, index) => (
                  <div
                    key={item.name}
                    className={[
                      "flex h-12 w-12 items-center justify-center rounded-xl border border-slate-600 bg-slate-800/80",
                      "animate-[float_5s_ease-in-out_infinite]",
                      index === 1 ? "delay-1" : index === 2 ? "delay-2" : "",
                    ].join(" ")}
                    title={item.name}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>

              <img
                className="max-w-full rounded-2xl border border-slate-600/70 object-cover shadow-2xl w-40 sm:w-56 md:w-64"
                src={profileImage}
                alt="Sopheach Viseth"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {bottomIcons.map((item, index) => (
                <div
                  key={item.name}
                  className={[
                    "flex h-12 items-center justify-center rounded-xl border border-slate-600 bg-slate-800/75",
                    "animate-[float_5s_ease-in-out_infinite]",
                    index === 1 ? "delay-1" : index === 2 ? "delay-2" : index === 3 ? "delay-3" : "",
                  ].join(" ")}
                  title={item.name}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showCV && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
          <div className="glass-card relative w-full max-w-5xl rounded-2xl p-4 sm:p-6">
            <button
              type="button"
              onClick={() => setShowCV(false)}
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-500 bg-slate-900 text-slate-100 transition hover:border-rose-400 hover:text-rose-300"
              aria-label="Close CV preview"
            >
              X
            </button>
            <div className="max-h-[85vh] overflow-auto rounded-xl border border-slate-700 bg-slate-950 p-3">
              <img src={cv} alt="Viseth CV" className="mx-auto h-auto max-h-[80vh] w-full max-w-4xl object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
