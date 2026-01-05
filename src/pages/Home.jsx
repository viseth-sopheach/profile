import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import cv from "../assets/cv.png";

const Home = () => {
  const [showCV, setShowCV] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "I am a front-end developer";

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseEnd = 2000; // Pause at end before deleting

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), pauseEnd);
      } else if (isDeleting && text === "") {
        // Start typing again
        setIsDeleting(false);
      } else {
        // Type or delete next character
        setText((current) =>
          isDeleting
            ? current.slice(0, -1)
            : fullText.slice(0, current.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);
  const download = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "My_CV.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a] min-h-screen">
      <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-20 py-8 flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white pb-2">
          Welcome to my portfolio
        </h1>
        <h1 className="text-lg sm:text-xl md:text-2xl text-white pb-2">
          ខ្ញុំបាទឈ្មោះ សុភាជ វិសិដ្ឋ ជានិស្សិតឆ្នាំទី២
          នៃសកលវិទ្យាល័យភូមិន្ទភ្នំពេញ ដេប៉ាតាម៉ង់ Computer Science
        </h1>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white pb-2">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
          My goal is to become a full-stack developer specializing in web and
          mobile applications, while building a professional career with a
          degree in Information Technology.
        </p>
        <div className="flex gap-10 pt-5">
          <button
            onClick={() => setShowCV(true)}
            className="hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] duration-300 flex gap-4 items-center text-white bg-green-500 hover:bg-orange-500 transition rounded-lg p-2"
          >
            VIEW MY CV
            <FaEye />
          </button>
          <button
            onClick={download}
            className="hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] duration-300 flex gap-2 items-center text-white bg-green-400 hover:bg-orange-500 transition rounded-lg p-2"
          >
            DOWNLOAD MY CV
            <IoMdDownload />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-8">
        <div className="flex items-end ">
          <div className="p-2 flex flex-col gap-5 items-end">
            <img
              className="w-12"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
            />
            <img
              className="w-12"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="Tailwind"
            />
            <img src="" alt="" />
          </div>
          <img
            className="w-64 rounded-full shadow-lg"
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
            alt="Profile"
          />
        </div>
        <div className="flex gap-4 pt-4">
          <img
            className="w-12"
            src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
            alt="HTML"
          />
          <img
            className="w-12"
            src="https://images.icon-icons.com/844/PNG/512/CSS3_icon-icons.com_67069.png"
            alt="CSS"
          />
          <img
            className="w-12"
            src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
            alt="JS"
          />
          <img
            className="w-12"
            src="https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png"
            alt="Bootstrap"
          />
        </div>
      </div>
      {showCV && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-[#1b0227] rounded-xl shadow-2xl max-w-5xl w-full mx-4 p-6">
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-orange-500 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold"
            >
              X
            </button>

            {/* CV Container */}
            <div className="flex justify-center items-center max-h-[85vh] overflow-auto">
              <img
                src={cv}
                alt="My CV"
                className="max-h-[80vh] w-auto rounded-lg shadow-md object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
