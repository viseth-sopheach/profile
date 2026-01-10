const certificates = [
  {
    name: "C++ Certificate - Etec Center",
    date: "15-06-2025"
  },
  {
    name: "Web-Frontend Development Certificate - Etect Center",
    date: "15-11-2025",
  },
  {
    name: "BacII និទ្ទេស B ( ទទួលបាននិទ្ទេស A លើមុខវិជ្ជា គណិតវិទ្យា រូបវិទ្យានិងគីមីវិទ្យា )",
    date: "2024",
  },
  {
    name: "ជាប់ការប្រឡងប្រជែងសិស្សពូកែតែងនិពន្ធក្នុងទិវាជាតិអំណាន ២០២៣ ចំណាត់ថ្នាក់លេខ ៣ ទូទាំងប្រទេស ទទួលបានពានសម្រិត",
    date: "11-03-2023",
  },
  {
    name: "Diploma",
    date: "2021",
  },
];

const Education = () => {
  return (
    <div className="pt-20 px-4 sm:px-6 md:px-10 min-h-screen bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a]">
      <h1 className="text-2xl sm:text-5xl md:text-4xl ml-5 pt-1 md:pt-10 text-white font-bold underline decoration-blue-400 underline-offset-6">
        Education and Certificates
      </h1>
      <div className="flex flex-col md:flex-row mt-10">
        {/* Education */}
        <div className="flex-1 px-4 md:pl-40 border-b md:border-b-0 md:border-r border-white">
          <h2 className="text-white text-3xl font-bold mb-6">Education</h2>
          {[
            { school: "Bror Hut Primary School", year: "2012 - 2018" },
            { school: "Tror Pang Chre Secondary School", year: "2018 - 2021" },
            { school: "Meang High School", year: "2021 - 2024" },
            {
              school: "ROYAL UNIVERSITY OF PHNOM PENH",
              year: "2025 - Present",
              extra: "I am in my second year",
            },
          ].map((edu, index) => (
            <div
              key={index}
              className="text-white font-bold hover:bg-purple-400/10 py-5 px-4 rounded transition-all"
            >
              <p>{edu.school}</p>
              <p>{edu.year}</p>
              {edu.extra && <p>{edu.extra}</p>}
            </div>
          ))}
        </div>
        {/* Certificates */}
        <div className="flex-1 px-4 md:pr-40 pt-8 md:pt-0">
          <h2 className="text-white text-3xl font-bold mb-6">Certificates</h2>
          {certificates.map((item, index) => (
            <div
              key={index}
              className="text-white font-bold hover:bg-purple-400/30 py-5 px-4 rounded transition-all mb-4"
            >
              <p>{item.name}</p>
              <p className="text-sm text-gray-300">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
