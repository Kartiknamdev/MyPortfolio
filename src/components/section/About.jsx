import React from 'react';

const About = () => {
  return (
    <section className="w-full bg-black py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 transform transition-all duration-500 hover:translate-x-2">
          <h2 className="text-4xl font-bold text-white mb-6 transition-all duration-300 hover:text-[#e99b63]">About Me</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-4 transition-all duration-300 hover:text-white">
            Hi, I'm Kartik Namdev, a passionate developer with a love for creating
            beautiful and functional web applications. With a strong background in
            Python, Java, MERN stack, C/C++, I enjoy solving complex problems and
            bringing ideas to life through code.
          </p>
          <p className="text-lg text-white/80 leading-relaxed transition-all duration-300 hover:text-white">
            When I'm not coding, you can find me taking photos of nature or working with colours on a canvas. I'm
            always eager to learn new things and take on exciting challenges.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-64 h-64 bg-[#181818] rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <img 
              src="/PortfolioPfp.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;