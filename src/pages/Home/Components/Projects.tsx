import React from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";
import TechBadge from "../../../components/TechBadge";

const content = [
  {
    title: "Emvive",
    subtitle: "KSA E-Invoicing Solution",
    duration: {
      start: "2020",
      end: "2022",
      total: "2 years",
    },
    location: "Saudi Arabia (Remote)",
    role: "Senior Frontend Developer",
    technologies: ["React", "Zatca API", "JWT", "Data Visualization", "TypeScript"],
    description: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm opacity-80">
          <span className="px-2 py-1 bg-neutral-800 rounded-full">2 Years</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-full">Saudi Arabia (Remote)</span>
        </div>
        <p className="text-sm leading-relaxed">
          Spearheaded the development of a comprehensive Zatca-compliant e-invoicing platform.
          Implemented complex business logic for tax compliance, secure authentication systems,
          and advanced data visualization dashboards for financial reporting.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {["React", "Zatca API", "JWT", "TypeScript", "React-Charts"].map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
    ),
    color: "var(--neutral-900)",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dafq69nvu/image/upload/v1714333999/Zatca-Emvive.svg"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="Zatca Logo"
        />
      </div>
    ),
  },
  {
    title: "Vizzhy",
    subtitle: "Healthcare Technology Startup",
    duration: {
      start: "2022",
      end: "2023",
      total: "1 year 6 months",
    },
    location: "Remote",
    role: "Frontend Developer",
    technologies: ["React", "Azure Speech Services", "Socket.io", "JWT"],
    description: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm opacity-80">
          <span className="px-2 py-1 bg-neutral-800 rounded-full">6 Months</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-full">India (Remote)</span>
        </div>
        <p className="text-sm leading-relaxed">
          Led frontend development initiatives implementing critical healthcare platform features
          including video conferencing between doctor and patient, and real-time chat systems. Integrated Azure Cognitive Services for speech-to-text
          and text-to-speech capabilities, enhancing accessibility and user experience.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {["React", "Azure Speech", "Socket.io", "JWT"].map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        <a
          href="https://www.linkedin.com/company/vizzhyvsk/"
          target="_blank"
          className="inline-block text-xs text-blue-400 hover:text-blue-300 transition-colors mt-2"
        >
          View on LinkedIn →
        </a>
      </div>
    ),
    color: "var(--neutral-900)",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white relative group">
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
        <img
          src="https://res.cloudinary.com/dafq69nvu/image/upload/v1714333999/Vizzhy-Logo.jpg"
          className="h-full w-full object-contain"
          alt="Vizzhy company logo"
        />
      </div>
    ),
  },
  {
    title: "Wellyfe",
    subtitle: "Healthcare Communication Platform",
    duration: {
      start: "2021",
      end: "2022",
      total: "1 year",
    },
    location: "Remote",
    role: "Full Stack Developer",
    technologies: ["React", "Express", "Twilio", "Node.js", "MongoDB"],
    description: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm opacity-80">
          <span className="px-2 py-1 bg-neutral-800 rounded-full">6 Months</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-full">India (Remote)</span>
        </div>
        <p className="text-sm leading-relaxed">
          Developed a comprehensive patient-doctor platform with seamless communication features.
          Implemented Twilio-powered video calling and SMS notifications, built RESTful APIs
          with Express, and created interactive data visualizations for medical analytics.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {["React", "Express", "Twilio Video", "Twilio SMS", "Node.js", "MongoDB"].map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
    ),
    color: "var(--black)",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dafq69nvu/image/upload/v1714334001/Doctor-Wellyfe.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="A healthcare startup"
        />
      </div>
    ),
  },
];

const Projects: React.FC = () => {
  return (
    <div className="w-full mt-16 max-w-7xl mx-auto px-4">
      <div className="text-left mb-12">
        <h2 className="text-sm uppercase tracking-wider text-neutral-400 mb-2">Experience</h2>
        <h1 className="text-4xl font-bold">Work History</h1>
      </div>
      <StickyScroll content={content} />
    </div>
  );
};

export default Projects;
