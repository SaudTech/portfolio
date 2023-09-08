import React from 'react'

const FloatingNav: React.FC = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header
      className={`fixed flex items-center p-2 w-full lg:w-[39.15%] top-5 bg-opacity-25 backdrop-blur-lg bg-cardBgHover rounded-lg shadow-md z-40 transform transition-transform duration-300 ease-in-out ${showNavbar ? "" : "-translate-y-[300px]"
        }`}
    >
      <nav className="container mx-auto py-2">
        Navbar content (links, menu items, etc.)
      </nav>
    </header>)
}

export default FloatingNav