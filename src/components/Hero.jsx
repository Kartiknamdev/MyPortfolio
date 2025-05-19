import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row items-start justify-between min-h-[calc(90vh-6rem)] lg:mt-20">
      {/* Left Side Content */}
      <div data-aos="fade-right"
      data-aos-offset='300'
      data-aos-easing="ease-in-sine" className="flex flex-col max-w-xl ml-[10%] lg:ml-[12%] z-10 mt-10 lg:mt-0">
        {/* Introducing Button */}
        <div className="relative w-fit h-10 mb-6">
          <div className="w-full h-full bg-gradient-to-r from-[#e99b63] to-[#f2c94c] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full text-white flex items-center px-4">
            <div className="flex items-center gap-2">
              <i className="bx bx-diamond"></i>
              Hello Hello
            </div>
          </div>
        </div>
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 leading-tight">
          Hi I'm
          <br /> Kartik Namdev
        </h1>
        {/* Subheading */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[28rem] mb-8">
          I'm a 3rd Year Computer Science Student
          <br />
          Passionate about learning new technologies
        </p>
        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <a className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-base font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] flex items-center gap-2" href="#">
            Contact me
            <i className="bx bx-link-external"></i>
          </a>
          <a className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-base font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white flex items-center gap-2" href="#">
            Explore my projects
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>
      {/* Right Side 3D Model */}
      <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0 w-full max-w-full lg:max-w-none lg:justify-end">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-60 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[36rem]">
          <Spline 
            data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="w-full h-full" scene="https://prod.spline.design/sRa14KhGUTfwhxt1/scene.splinecode" />
        </div>
      </div>
    </main>
  );
};

export default Hero;