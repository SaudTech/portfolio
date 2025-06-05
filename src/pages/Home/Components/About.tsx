import React from "react";
import TechBadge from "../../../components/TechBadge";

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "RESTful APIs"]
  },
  {
    category: "Tools & Services",
    technologies: ["Git", "Azure Services", "Twilio", "JWT", "Socket.io"]
  }
];

const About: React.FC = () => {
  return (
    <div id="about" className="w-full mt-16 max-w-7xl mx-auto px-4">
      <div className="text-left mb-8">
        <h2 className="text-sm uppercase tracking-wider text-neutral-300 mb-2">Introduction</h2>
        <h1 className="text-4xl font-bold">About Me</h1>
      </div>

      <div className="grid md:grid-cols-[2fr,1fr] gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-neutral-800 rounded-full">Software Engineer</span>
              <span className="px-3 py-1 bg-neutral-800 rounded-full">Hyderabad, India</span>
            </div>
            
            <p className="text-sm leading-relaxed opacity-90">
              I'm a software engineer specializing in building full-stack web applications 
              with a focus on performance, accessibility, and user experience. With a 
              journey that began in 2019, I've transformed my curiosity into a passion 
              for creating impactful digital solutions.
            </p>

            <p className="text-sm leading-relaxed opacity-90">
              My experience spans from healthcare platforms to financial systems, 
              where I've implemented complex features like real-time communication, 
              secure authentication, and data visualization. I'm constantly exploring 
              new technologies and best practices to deliver robust solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Technical Expertise</h3>
            <div className="space-y-4">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-2">
                  <h4 className="text-sm text-neutral-300">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-neutral-800/50 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Quick Facts</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>3+ years of development experience</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Worked in healthcare & fintech</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Full-stack web development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Remote collaboration expert</span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Currently</h3>
            <p className="text-sm opacity-90">
              Open to new opportunities and interesting projects that challenge me 
              to grow and innovate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
