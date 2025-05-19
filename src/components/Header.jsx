import 'boxicons/css/boxicons.min.css';
const Header = () => {
    // function to toggle the mobile menu
    const toggleMenu = () =>{

        const mobileMenu = document.getElementById('mobileMenu')

        //hidden claass
        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden')
            

        }
        else{
            mobileMenu.classList.add('hidden');
        }
    }
  return (
    <header data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex justify-between
    items-center py-4 px-4 lg:px-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
            My Portfolio
        </h1>

        <nav className="hidden md:flex items-center gap-8">
            <a 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" className="text-base tracking-wider
             transition-colors hover:text-gray-300 z-50"
            href="#About">
                About
            </a>
            <a 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"className="text-base tracking-wider
             transition-colors hover:text-gray-300 z-50"
            href="#Resume">
                Education
            </a>
            <a
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000" className="text-base tracking-wider
             transition-colors hover:text-gray-300 z-50"
            href="#Showcase">
                Projects
            </a>
            <a 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500"className="text-base tracking-wider
             transition-colors hover:text-gray-300 z-50"
            href="#Contact">
                Contact
            </a>


        </nav>

        <button className="hidden md:block bg-gradient-to-r from-[#e99b63] to-[#f2c94c] text-white
        py-3 px-6 rounded-full border-none font medium transition-all
        duration-300 hover:bg-white cursor-pointer z-50">
            Buy Me a Coffee 
        
        </button>
{/* for mobile screens */}
        <button onClick={toggleMenu} className="md:hidden text-3xl p-2 z-50" href="">
            <i class='bx  bx-menu'></i> 
        </button>

        <div id = 'mobileMenu' className="hidden fixed top-16 bottom-0 right-0 left-0
        p-5 md:hidden z-40 bg-black bg-opacity-70
        backdrop-blur- md">
            <nav className='flex flex-col gap-6 items-center'>
                 <a className="text-base tracking-wider
             transition-colors hover:text-gray-300 z-50"
            href="#">
                Home
            </a>
            <a className="text-base tracking-wider
             transition-colors hover:text-gray-300 z-50"
            href="#">
                About
            </a>
            <a className="text-base tracking-wider
             transition-colors hover:text-gray-300 z-50"
            href="#">
                Projects
            </a>
            <a className="text-base tracking-wider
             transition-colors hover:text-gray-300 z-50"
            href="#">
                Contact
            </a>
            </nav>
        </div>


       
    </header>
  )
}

export default Header