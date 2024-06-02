import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-center bg-black/40 p-3 rounded-md">
      <h1 className="text-3xl font-bold">About me.</h1>
      <p className="text-sm max-w-md font-semibold mx-auto text-left mt-3">
        I'm a software engineer based in Hyderabad, India. I specialize in
        building full-stack websites and applications that are fast, accessible, easy
        to use and manage.
      </p>

      <p className="text-sm max-w-md font-semibold mx-auto text-left mt-3">
        I started my journey as a software engineer in 2019 as a fun challenge to pass the time. I've been hooked ever since. I've worked on a variety of projects, ranging from simple websites to complex web applications. I'm always looking for new opportunities to learn and grow as a developer.
      </p>
    </div>
  );
};

export default About;
