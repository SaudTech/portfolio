import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="w-full mt-16 max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-sm uppercase tracking-wider text-neutral-300 mb-2">Get in touch</h2>
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-sm mb-6 text-neutral-300">
        I'm always open to discussing new projects or opportunities.
      </p>
      <a
        href="mailto:Saaud266@gmail.com"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-md text-white"
      >
        Email Me
      </a>
    </div>
  );
};

export default Contact;
