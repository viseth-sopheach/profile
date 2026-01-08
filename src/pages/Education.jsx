import React from "react";

const Education = () => {
  return (
    <div className="pt-20 px-4 sm:px-6 md:px-10 min-h-screen bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a]">
      {/* Main Heading */}
      <h1 className="text-2xl sm:text-5xl md:text-4xl text-left ml-5 md:text-left pt-1 md:pt-10 text-white font-bold underline decoration-2 decoration-blue-400 underline-offset-6 hover:decoration-orange-310 transition-all duration-700">
        Education and Certificates
      </h1>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row mt-10 ">
        <div className="flex-1 px-4 md:pl-40 md:px-0 border-r-0 md:border-r border-white border-b md:border-b-0">
          <h2 className="text-white text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-4">
            <div className="text-white font-bold hover:bg-purple-400/10 py-5 px-4 rounded transition-all duration-100">
              <p>Bror Hut Primary School</p>
              <p>2012 - 2018</p>
            </div>
            <div className="text-white font-bold hover:bg-purple-400/10 py-5 px-4 rounded transition-all duration-100">
              <p>Tror Pang Chre Secondary School</p>
              <p>2018 - 2021</p>
            </div>
            <div className="text-white font-bold hover:bg-purple-400/10 py-5 px-4 rounded transition-all duration-100">
              <p>Meang High School</p>
              <p>2021 - 2024</p>
            </div>
            <div className="text-white font-bold hover:bg-purple-400/10 py-5 px-4 rounded transition-all duration-100">
              <p>ROYAL UNIVERSITY OF PHNOM PENH</p>
              <p>2015 - present</p>
              <p>I am a year II student</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="flex-1 px-4 md:pr-40 md:px-0 pb-5 ml-3 pt-8 md:pt-0">
          <h2 className="text-white text-3xl font-bold mb-6">Certificates</h2>
          <div className="space-y-4">
            <div className="text-white font-bold hover:bg-purple-400/30 py-5 px-4 rounded transition-all duration-100">
              <p>Diploma</p>
              <p>2021</p>
            </div>
            <div className="text-white font-bold hover:bg-purple-400/30 py-5 px-4 rounded transition-all duration-100">
              <p>
                BacII ទទូលបាននិទ្ទេស A លើមុខវិជ្ជា គណិតវិទ្យា រូបវិទ្យា
                និងគីមីវិទ្យា
              </p>
              <p>2024</p>
            </div>
            <div className="text-white font-bold hover:bg-purple-400/30 py-5 px-4 rounded transition-all duration-100">
              <p>
                សិស្សពូកែតែងនិពន្ធក្នុងទិវាជាតិអំណាន ២០២៣ ចំណាត់ថ្នាក់លេខ ៣
                ទូទាំងប្រទេស
              </p>
              <p>ពានរង្វាន់សម្ដេចតេជោ ហ៊ុន សែន</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
