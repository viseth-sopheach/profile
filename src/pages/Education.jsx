import React from "react";

const Education = () => {
  return (
    <div
      className="pt-10 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row
		bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a] min-h-screen"
    >
      <div >
        <h1
          className="text-2xl sm:text-3xl md:text-2xl text-left ml-5 md:text-left pt-1 md:pt-10 text-white font-bold underline decoration-2 decoration-blue-400 underline-offset-6 hover:decoration-orange-300 transition-all duration-700 ">
          Education and Certificates
        </h1>
          <p className="text-white pt-8 ml-3">Education</p>
        <div className="ml-10">
          <div>
            <p className="text-white pt-5">សាលាបឋមសិក្សាប្រហ៊ូត</p>
            <p className="text-white">2012 - 2018</p>
          </div>
          <div>
            <p className="text-white pt-5">អនុវិទ្យាល័យត្រពាំងជ្រែ</p>
            <p className="text-white">2018 - 2021</p>
          </div>
          <div>
            <p className="text-white pt-5">វិទ្យាល័យមេសាង</p>
            <p className="text-white">2021 - 2024</p>
          </div>
          <div>
            <p className="text-white pt-5">សកលវវិទ្យាល័យភូមិន្តភ្នំពេញ</p>
            <p className="text-white">2015 - present</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education