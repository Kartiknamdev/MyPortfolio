import React from 'react'

const Resume = () => {
  return (<section id="resume" className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-center transition-all duration-300 hover:text-[#e99b63]"> My Resume</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#e99b63] to-[#f2c94c] rounded-full mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
          {/* Education */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-xl flex flex-col transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <i className="bx bx-book-open text-[#e99b63] transition-transform duration-300 group-hover:rotate-12"></i> Education
            </h3>
            <div className="flex flex-col gap-6">
              <div className="group p-4 rounded-lg transition-all duration-300 hover:bg-[#242424] cursor-default">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-3 h-3 rounded-full bg-gradient-to-br from-[#e99b63] to-[#f2c94c] transition-transform duration-300 group-hover:scale-125"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#e99b63]">Bachelor of Technology in Computer Science with specialization in CyberSecurity</h4>
                    <span className="text-[#e99b63] text-sm font-medium">2022 - 2026</span>
                    <p className="text-white/80 text-sm mt-1">IES College of Technology, Bhopal</p>
                  </div>
                </div>
              </div>
              <div className="group p-4 rounded-lg transition-all duration-300 hover:bg-[#242424] cursor-default">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-3 h-3 rounded-full bg-gradient-to-br from-[#e99b63] to-[#f2c94c] transition-transform duration-300 group-hover:scale-125"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#e99b63]">Higher Secondary School</h4>
                    <span className="text-[#e99b63] text-sm font-medium">2021 - 2022</span>
                    <p className="text-white/80 text-sm mt-1">Maharishi Vidya Mandir, Bhopal</p>

                    <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#e99b63] mt-4">Class 10th</h4>
                    <span className="text-[#e99b63] text-sm font-medium">2019 - 2020</span>
                    <p className="text-white/80 text-sm mt-1">Maharishi Vidya Mandir, Bhopal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-xl flex flex-col transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <i className="bx bx-briefcase text-[#e99b63] transition-transform duration-300 group-hover:rotate-12"></i> Experience
            </h3>
            <div className="flex flex-col gap-6">
              <div className="group p-4 rounded-lg transition-all duration-300 hover:bg-[#242424] cursor-default">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-3 h-3 rounded-full bg-gradient-to-br from-[#e99b63] to-[#f2c94c] transition-transform duration-300 group-hover:scale-125"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#e99b63]">Networking Intern</h4>
                    <span className="text-[#e99b63] text-sm font-medium">Jan 2025 - Mar 2025</span>
                    <p className="text-white/80 text-sm mt-1">PaloAlto Networks</p>
                    <ul className="list-disc ml-5 text-white/70 text-xs mt-1">
                      <li className="transition-colors duration-300 hover:text-white">Got hands on experience of Cybersecurity fundamentals, How SOCs operate, and cloud security </li>
                      <li className="transition-colors duration-300 hover:text-white">Deep dive into Networking, Security operations, Cloud Security Frameworks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group p-4 rounded-lg transition-all duration-300 hover:bg-[#242424] cursor-default">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-3 h-3 rounded-full bg-gradient-to-br from-[#e99b63] to-[#f2c94c] transition-transform duration-300 group-hover:scale-125"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#e99b63]">Ethical Hacking workshop</h4>
                    <span className="text-[#e99b63] text-sm font-medium">March 2025</span>
                    <p className="text-white/80 text-sm mt-1">Completed an Ethical Hacking workshop, gaining hands-on experience in packet sniffing, Metasploit, and cybersecurity techniques.</p>
                    <ul className="list-disc ml-5 text-white/70 text-xs mt-1">
                     <li className="transition-colors duration-300 hover:text-white">Gained hands-on experience in packet sniffing and network analysis</li><li className="transition-colors duration-300 hover:text-white">Worked with Metasploit for penetration testing and vulnerability assessment</li><li className="transition-colors duration-300 hover:text-white">Explored various cybersecurity techniques and ethical hacking methodologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Resume