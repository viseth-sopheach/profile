const certificates = [
  {
    name: "C++ Certificate - Etec Center",
    date: "15-06-2025",
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

const educationHistory = [
  { school: "Bror Hut Primary School", year: "2012 - 2018" },
  { school: "Tror Pang Chre Secondary School", year: "2018 - 2021" },
  { school: "Meang High School", year: "2021 - 2024" },
  {
    school: "ROYAL UNIVERSITY OF PHNOM PENH",
    year: "2025 - Present",
    extra: "I am in my second year",
  },
];

const Education = () => {
  return (
    <section className="section-shell">
      <div className="content-wrap space-y-10">
        <header>
          <h1 className="section-title">Education and Certificates</h1>
        </header>

        <div className="grid gap-7 lg:grid-cols-2">
          <article className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Education</h2>
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:border-cyan-400/40 dark:bg-cyan-400/10 dark:text-cyan-200">
                Timeline
              </span>
            </div>

            <div className="space-y-4">
              {educationHistory.map((edu) => (
                <div key={edu.school} className="rounded-2xl border border-slate-300 bg-white/90 p-4 transition hover:border-cyan-400/60 dark:border-slate-700 dark:bg-slate-900/75">
                  <p className="wrap-break-word font-semibold text-slate-800 dark:text-slate-100">{edu.school}</p>
                  <p className="mt-1 text-sm text-cyan-700 dark:text-cyan-300">{edu.year}</p>
                  {edu.extra && <p className="mt-1 wrap-break-word text-sm text-slate-600 dark:text-slate-300">{edu.extra}</p>}
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Certificates</h2>
              <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-200">
                Achievements
              </span>
            </div>

            <div className="space-y-4">
              {certificates.map((item) => (
                <div key={`${item.name}-${item.date}`} className="rounded-2xl border border-slate-300 bg-white/90 p-4 transition hover:border-amber-300/50 dark:border-slate-700 dark:bg-slate-900/75">
                  <p className="wrap-break-word font-semibold text-slate-800 dark:text-slate-100">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.date}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;