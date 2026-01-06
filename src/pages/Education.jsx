import React from "react";

const Education = () => {
  return (
    <div className="pt-10 px-4 sm:px-6 md:px-10 min-h-screen bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a]">
      {/* Main Heading */}
      <h1 className="text-2xl sm:text-5xl md:text-4xl text-left ml-5 md:text-left pt-1 md:pt-10 text-white font-bold underline decoration-2 decoration-blue-400 underline-offset-6 hover:decoration-orange-310 transition-all duration-700">
        Education and Certificates
      </h1>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        {/* Education Section */}
        <div className="flex-1 px-4 md:pl-40 md:px-0">
          <h2 className="text-white text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-4">
            <div className="font-bold hover:bg-purple-400/10 py-5 px-4 rounded transition-all duration-100">
              <p className="text-white">Bror Hut Primary School</p>
              <p className="text-white">2012 - 2018</p>
            </div>
            <div className="font-bold hover:bg-purple-400/10 py-5 px-4 rounded transition-all duration-100">
              <p className="text-white">Tror Pang Chre Secondary School</p>
              <p className="text-white">2018 - 2021</p>
            </div>
            <div className="font-bold hover:bg-purple-400/10 py-5 px-4 rounded transition-all duration-100">
              <p className="text-white">Meang High School</p>
              <p className="text-white">2021 - 2024</p>
            </div>
            <div className="font-bold hover:bg-purple-400/10 py-5 px-4 rounded transition-all duration-100">
              <p className="text-white">RUPP</p>
              <p className="text-white">2015 - present</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="flex-1 px-4 md:pr-40 md:px-0 pb-5">
          <h2 className="text-white text-3xl font-bold mb-6">Certificates</h2>
          <div className="space-y-4">
            <div className="font-bold hover:bg-purple-400/30 py-5 px-4 rounded transition-all duration-100">
              <p className="text-white">Diploma</p>
              <p className="text-white">2021</p>
            </div>
            <div className="font-bold hover:bg-purple-400/30 py-5 px-4 rounded transition-all duration-100">
              <p className="text-white">BacII</p>
              <p className="text-white">2024</p>
            </div>
            <div className="font-bold hover:bg-purple-400/30 py-5 px-4 rounded transition-all duration-100">
              <p className="text-white">
                សិស្សពូកែតែងនិពន្ធក្នុងទិវាជាតិអំណាន ២០២៣ ចំណាត់ថ្នាក់លេខ ៣
                ទូទាំងប្រទេស
              </p>
            </div>
            {/* Add more certificates here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
