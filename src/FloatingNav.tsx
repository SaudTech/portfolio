import React from 'react'
import SocialMediaButton from './pages/Home/Components/SocialMediaButton';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'

type FloatingNavProps = {
  noBackButton?: boolean;
};

const FloatingNav: React.FC<FloatingNavProps> = ({ noBackButton }) => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  React.useEffect(() => {
    if (window.location.pathname !== '/') {
      setShowNavbar(true);
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed flex items-center p-2  w-full lg:w-[39.15%] top-5 bg-opacity-25 backdrop-blur-lg bg-cardBgHover rounded-xl shadow-md z-40 transform transition-transform duration-300 ease-in-out 
        ${showNavbar ? "" : "-translate-y-[300px]"}
      `}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className='flex items-center gap-2'>

          {!noBackButton && <Link to="/"><IoIosArrowBack /></Link>}
          <Link to="/" title='View Home Page'>
            <div className="hover:scale-105 transition-all duration-200 hover:shadow-lg rounded-full bg-gradient-to-tl from-purple/60 to-pink/60 p-[1.5px]">
              <div className="rounded-full p-px h-[38px] w-[38px]">
                <img alt="A photo of Saud" src="https://res.cloudinary.com/dafq69nvu/image/upload/v1703667893/profile-picture.png" width="38" height="38" decoding="async" data-nimg="1" className="rounded-full" style={{ color: "transparent" }} />
              </div>
            </div>
          </Link>
        </div>

        <div className='flex items-center gap-6 sm:mr-0 mr-10'>
          <SocialMediaButton type="linkedin" label='Linkedin' small />
          <SocialMediaButton type="github" label='Github' small />
        </div>
      </nav>
    </header>
  )
}

export default FloatingNav