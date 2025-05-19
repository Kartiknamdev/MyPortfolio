import React, { useState } from 'react'

const skillTabs = [
  { label: 'Front-end', active: true },
  { label: 'Back-end' },
  { label: 'Web Development' },
  { label: 'Software Development' },
];

const tools = [
  { icon: 'bx bxl-visual-studio', name: 'Visual Studio Code' },
  { icon: 'bx bxl-git', name: 'Git' },
  { icon: 'bx bxl-github', name: 'GitHub' },
  { icon: 'bx bxl-figma', name: 'Figma' },
  { icon: 'bx bxl-stripe', name: 'Spline' },
];

const mainSkills = [
  { name: 'HTML5', percent: 95 },
  { name: 'React', percent: 90 },
  { name: 'CSS', percent: 95 },
  { name: 'Javascript', percent: 85 },
  { name: 'Python', percent: 90 },
  { name: 'C/C++', percent: 85 },
  { name: 'Powerpoint', percent: 85 },
];

const moreSkills = [
  { name: 'Java', percent: 80 },
  { name: 'Node.js', percent: 75 },
  { name: 'Express.js', percent: 70 },
  { name: 'MongoDB', percent: 70 },
  { name: 'MySQL', percent: 70 },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Front-end');
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-center">
        <span className="text-[#e99b63]">Tools</span> <span className="text-white">and</span> <span className="text-[#b983ff]">Skills</span>
      </h2>
      <div className="flex gap-3 mt-6 mb-10 flex-wrap justify-center">
        {skillTabs.map(tab => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-4 py-1 rounded-full font-semibold text-sm transition-all duration-200 border border-[#2a2a2a] ${activeTab === tab.label ? 'bg-gradient-to-r from-[#e99b63] to-[#b983ff] text-white' : 'bg-[#232323] text-gray-400 hover:text-white'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
        {/* Tools */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Tools</h3>
          <ul className="flex flex-col gap-6">
            {tools.map(tool => (
              <li key={tool.name} className="flex items-center gap-4 text-white text-lg">
                <i className={`${tool.icon} text-2xl text-[#e99b63]`}></i>
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Skills */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Skills</h3>
          <ul className="flex flex-col gap-6">
            {mainSkills.map(skill => (
              <li key={skill.name} className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-white text-base font-semibold">{skill.name}</span>
                  <span className="text-[#b983ff] text-sm font-bold">{skill.percent}%</span>
                </div>
                <div className="w-full h-3 bg-[#232323] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#e99b63] via-[#b983ff] to-[#f2c94c] transition-all duration-700"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-[#e99b63] to-[#b983ff] text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            onClick={() => setShowModal(true)}
          >
            View More
          </button>
        </div>
      </div>
      {/* Modal for more skills */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 flex flex-col items-center" style={{backdropFilter: 'blur(16px)'}}>
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-[#e99b63] transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-white mb-6">More Skills</h3>
            <ul className="flex flex-col gap-6 w-full">
              {moreSkills.map(skill => (
                <li key={skill.name} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-base font-semibold">{skill.name}</span>
                    <span className="text-[#b983ff] text-sm font-bold">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-3 bg-[#232323] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#e99b63] via-[#b983ff] to-[#f2c94c] transition-all duration-700"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}

export default Skills