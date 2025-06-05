import React from "react";

const Navbar: React.FC = () => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-30">
      <div className="max-w-7xl mx-auto px-4 flex justify-end py-3 gap-6 text-sm text-neutral-200">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-white transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
