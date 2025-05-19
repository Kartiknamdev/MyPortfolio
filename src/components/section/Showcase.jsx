import React from 'react'

const Showcase = () => {
  const showcaseProjects = [
    {
      image: "/landing page2.jpg",
      title: "PeerTask - A Microtask Platform",
      desc: "Built with MERN stack is a platform where students can collab with their peers to exchange favors for a small-task.",
      large: true,
      link: "https://peertask-platform.vercel.app"
    },
    {
      image: "/Skrappemind.png",
      title: "SkrappeMind - AI powered webscraping tool",
      desc: "A simple web scraping tool for OEM vulnerabilities built purely in Python with Streamlit for a minimal interface.",
      large: false,
      link: "https://skrappemind.streamlit.app"
    },
    {
      image: "/SecureSight.png",
      title: "SecureSight - Cybersecurity Dashboard",
      desc: "A dashboard with Cybersecurity tools to make learning fun and interactive.",
      large: false,
      link: "https://kartiknamdev.github.io/SecureSight/"
    },
  ];

  return (
    <div id="projects" className='app-showcase'>
        <div className='w-full'
        >
          <section id="showcase" className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-center">Project Showcase</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#e99b63] to-[#f2c94c] rounded-full mb-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
              {/* Large left project */}
              <a 
                href={showcaseProjects[0].link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="lg:row-span-2 bg-[#181818] rounded-2xl overflow-hidden flex flex-col justify-between relative shadow-xl lg:col-span-2 p-0 h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              >
                <div className="relative flex-1 w-full h-full">
                  <img src={showcaseProjects[0].image} alt={showcaseProjects[0].title} className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-90 m-0 p-0 transition-opacity duration-300 hover:opacity-100" />
                </div>
                <div className="p-6 relative z-10 bg-gradient-to-t from-[#181818] via-[#181818cc] to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">{showcaseProjects[0].title}</h3>
                  <p className="text-white/80 text-base">{showcaseProjects[0].desc}</p>
                </div>
              </a>
              {/* Top right project */}
              <a 
                href={showcaseProjects[1].link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#181818] rounded-2xl overflow-hidden flex flex-col justify-end relative shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              >
                <img src={showcaseProjects[1].image} alt={showcaseProjects[1].title} className="w-full h-48 object-cover opacity-90 transition-opacity duration-300 hover:opacity-100" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{showcaseProjects[1].title}</h3>
                  <p className="text-white/80 text-base">{showcaseProjects[1].desc}</p>
                </div>
              </a>
              {/* Bottom right project */}
              <a 
                href={showcaseProjects[2].link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#181818] rounded-2xl overflow-hidden flex flex-col justify-end relative shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              >
                <img src={showcaseProjects[2].image} alt={showcaseProjects[2].title} className="w-full h-48 object-cover opacity-90 transition-opacity duration-300 hover:opacity-100" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{showcaseProjects[2].title}</h3>
                  <p className="text-white/80 text-base">{showcaseProjects[2].desc}</p>
                </div>
              </a>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Showcase