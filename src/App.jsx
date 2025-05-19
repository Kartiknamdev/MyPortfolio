import Header from "./components/header";
import Hero from "./components/hero";
import Showcase from "./components/section/Showcase";
import Resume from "./components/section/Resume";
import Skills from "./components/section/Skills";
import Cta from "./components/section/CTA";
import About from "./components/section/About";
import Contact from "./components/section/Contact";

import AOS from "aos";
import 'aos/dist/aos.css';
import { use, useEffect } from "react";
export default function App() {

useEffect(() => {
  AOS.init({
    duration: 1500,
    once: true,
}) 
  });

  return (
    <main>
      <img className= "absolute top-0 right-0 opacity-60 -z-1"src="/image.png" alt="gradient-image" />


      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] rotate-[-30deg]
      z-10
      " ></div>

      <Header/>
      <Hero/>
      <section id="Showcase" className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20">
        <Showcase />
      </section>

      <section id="Resume" className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20">
        <Resume />
      </section>
       <section id="About" className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20">
        <About />
      </section>
      <section id="Skills" className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20">
        <Skills />
      </section>
      <section id="Cta" className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20">
        <Cta />
      </section>
      <section id="Contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20">
        <Contact />
      </section>

      <footer className="w-full bg-black py-10">
        <div className="flex flex-col items-center">
          <p className="text-white text-sm">© 2025 Kartik Namdev. All rights reserved.</p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/Kartiknamdev" className="text-white text-lg hover:text-yellow-300 "><i className='bx bxl-github'></i></a>
            <a href="https://www.linkedin.com/in/kartikknamdev/" className="text-white text-lg hover:text-yellow-300"><i className='bx bxl-linkedin'></i></a>
            <a href="https://x.com/KartikN69809009" className="text-white text-lg hover:text-yellow-300"><i className='bx bxl-twitter'></i></a>
            <a href="https://instagram.com/Kartikknamdev" className="text-white text-lg hover:text-yellow-300"><i className='bx bxl-instagram'></i></a>
          </div>
        </div>
      </footer>
      

      


    </main>

    
  )
}