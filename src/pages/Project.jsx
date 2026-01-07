import { GiClick } from "react-icons/gi";

const Project = () => {
  return (
    <div className="min-h-screen bg-black flex gap-4 pt-10 px-4 sm:px-6 md:px-10 bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a]">
      <div className="pt-10 text-5xl text-white border-r border-white">
        <p className="text-4xl">This is my BookShop Project</p>
        <img className="w-2xs brightness-0 invert" src="https://www.svgrepo.com/show/34989/books-stack-of-three.svg" alt="Book Image" />
        <button
          className="hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] duration-300 flex gap-4 items-center text-white bg-purple-950 hover:bg-orange-500 transition rounded-lg p-2"
          onClick={() =>
            window.open("https://book-one-sage.vercel.app/", "_blank")
          }
        >
          <a href="">
            <p className="text-2xl flex gap-3">Click Here To See BookShop Site <GiClick /></p>
          </a>
        </button>
      </div>
      <div className="pt-10 text-5xl text-white">world</div>
    </div>
  );
};

export default Project;
