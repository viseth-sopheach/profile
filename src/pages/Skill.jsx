import React from 'react'

const Skill = () => {
  const skills = [
    { name: 'HTML', icon: '📄', color: 'bg-orange-500' },
    { name: 'CSS', icon: '🎨', color: 'bg-blue-500' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-500' },
    { name: 'Bootstrap', icon: '🅱️', color: 'bg-purple-500' },
    { name: 'Tailwind CSS', icon: '💨', color: 'bg-cyan-500' },
    { name: 'React JS', icon: '⚛️', color: 'bg-blue-400' },
    { name: 'Vue JS', icon: '💚', color: 'bg-green-500' },
    { name: 'Java', icon: '☕', color: 'bg-red-500' }
  ]

  return (
    <div className="pb-10 pt-25 px-4 sm:px-6 md:px-10 min-h-screen bg-linear-to-r from-[#0b0217] via-[#06204a] to-[#10378a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">My Skills</h1>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl cursor-pointer border border-gray-700 hover:border-gray-600"
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className={`${skill.color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl transform group-hover:rotate-12 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold text-lg text-center">
                  {skill.name}
                </h3>
              </div>
              
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill