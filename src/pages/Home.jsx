import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import cv from "../assets/cv.png";
import img from "../assets/seth.png";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa";

const Home = () => {
  const [showCV, setShowCV] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "I am a front-end developer";

  const sideIcons = [
    { icon: <FaReact className="text-cyan-400 w-12 h-12" /> },
    { icon: <RiTailwindCssLine className="text-sky-400 w-12 h-12" /> },
    { icon: <FaJava className="text-sky-200 w-12 h-12" />},
    { icon: <FaVuejs className="text-sky-200 w-12 h-12" />,}
  ];

  const bottomIcons = [
    { icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },
    { icon: <FaCss3 className="text-blue-500 w-12 h-12" /> },
    { icon: <IoLogoJavascript className="text-yellow-400 w-12 h-12" /> },
    { icon: <FaBootstrap className="text-purple-500 w-12 h-12" /> },
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseEnd = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseEnd);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      } else {
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
    link.download = "Viseth.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-20 md:pt-16 flex flex-col md:flex-row bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a] min-h-screen">
      <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-20 py-8 flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white pb-2">
          Welcome to my portfolio
        </h1>
        <h1 className="pt-6 text-lg sm:text-xl md:text-2xl text-white pb-2">
          ខ្ញុំបាទឈ្មោះ សុភាជ វិសិដ្ឋ ជានិស្សិតឆ្នាំទី២
          នៃសកលវិទ្យាល័យភូមិន្ទភ្នំពេញ ដេប៉ាតាម៉ង់ Computer Science
        </h1>
        <h1 className="pt-6 text-2xl md:text-3xl font-bold text-white pb-2">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="pt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
          My goal is to become a full-stack developer specializing in web and
          mobile applications, while building a professional career with a
          degree in Computer Science.
        </p>
        <div className="pt-10 flex gap-10">
          <button
            onClick={() => setShowCV(true)}
            className="hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] duration-300 flex gap-4 items-center text-white bg-green-500 hover:bg-orange-500 transition rounded-lg p-2"
          >
            VIEW MY CV <FaEye />
          </button>
          <button
            onClick={download}
            className="hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] duration-300 flex gap-2 items-center text-white bg-green-400 hover:bg-orange-500 transition rounded-lg p-2"
          >
            DOWNLOAD MY CV <IoMdDownload />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-8">
        <div className="flex items-end">
          <div className="p-2 flex flex-col gap-5 items-end">
            {sideIcons.map((item, index) => (
              <div key={index}>{item.icon}</div>
            ))}
          </div>
          <img
            className="w-64 rounded-full shadow-lg"
            src={img}
            alt="Profile"
          />
        </div>
        <div className="flex gap-4 pt-4">
          {bottomIcons.map((item, index) => (
            <div key={index}>{item.icon}</div>
          ))}
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
