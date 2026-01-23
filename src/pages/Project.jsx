import { GiClick } from "react-icons/gi";
import qr from "../assets/qrcode.png";
import book from "../assets/bIcon.png";
import apple from "../assets/apple.png";

const projects = [
  {
    id: 1,
    image: book,
    title: "BookShop Site",
    link: "https://book-one-sage.vercel.app/",
    color: "bg-purple-600",
  },
  {
    id: 2,
    image: qr,
    title: "QR Code Generator",
    link: "https://qrgenerator-alpha-eight.vercel.app/",
    color: "bg-blue-600",
  },
  {
    id: 3,
    image: apple,
    title: "Phone Shop",
    link: "https://phoneshop-woad.vercel.app/",
    color: "bg-blue-600",
  },
];

const Project = () => {
  return (
    <div className="pb-10 pt-25 px-4 sm:px-6 md:px-10 min-h-screen bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-gray-400 text-lg">
            Work I have recently completed
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => window.open(project.link, "_blank")}
              className="group relative bg-gray-800 rounded-xl p-4 transform transition-all duration-300 hover:shadow-2xl cursor-pointer border border-gray-700 hover:border-gray-600 flex flex-col items-center"
            >
              <div className="w-full h-40 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-2 transform transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col items-center space-y-3">
                <h3 className="text-white font-semibold text-lg text-center">
                  {project.title}
                </h3>
                <div
                  className={`${project.color} p-2 rounded-full text-white text-xl transform group-hover:rotate-12 transition-transform duration-300`}
                >
                  <GiClick />
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
