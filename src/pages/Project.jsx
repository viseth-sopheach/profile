import { GiClick } from "react-icons/gi";
import qr from "../assets/qrcode.png";

const projects = [
  {
    id: 1,
    image: "https://freesvg.org/img/1488216538.png",
    title: "Click Here To See BookShop Site",
    link: "https://book-one-sage.vercel.app/",
  },
  {
    id: 2,
    image: qr,
    title: "QR Code Generator Site",
    link: "https://qrgenerator-alpha-eight.vercel.app/",
  },
];

const Project = () => {
  return (
    <div className="pt-25 px-4 sm:px-6 md:px-10 min-h-screen bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a]">
      <h1 className="text-white text-2xl md:text-4xl justify-center text-center">
        These are my project !!!
      </h1>
      <div className="w-auto ml-0 md:ml-20 pt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-150 rounded-xl shadow-md hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transform transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-t-xl overflow-hidden">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="p-4 flex flex-col grow justify-between">
              <button
                className="hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] duration-300 flex gap-4 items-center text-white bg-purple-950 hover:bg-orange-500 transition rounded-lg p-2"
                onClick={() => window.open(project.link, "_blank")}
              >
                <p className="text-[8px] md:text-2xl flex gap-3">
                  {project.title} <GiClick />
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
