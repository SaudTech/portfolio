import React from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";
import TechBadge from "../../../components/TechBadge";

const content = [
  {
    title: "AutoSyncReel",
    subtitle: "Sync Reels across multiple social media platforms",
    status: "In Development",
    links: {
      demo: "https://autosyncreel.vercel.app",
      github: "https://github.com/yourusername/autosyncreels",
    },
    duration: {
      start: "2024",
      end: "current",
      total: "In progress",
    },
    role: "Creator & Developer",
    technologies: [
      "Next.js",
      "TypeScript",
      "Instagram API",
      "YouTube API",
      "TikTok API",
    ],
    description: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">
            Active Development
          </span>
          <span className="px-3 py-1 bg-neutral-800 rounded-full">
            Personal Project
          </span>
        </div>
        <p className="text-sm leading-relaxed">
          A powerful tool that allows users to schedule and post reels across
          Instagram, YouTube Shorts, and TikTok. This allows users to save time and focus on creating content.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {["Next.js", "TypeScript", "Social APIs", "Cloud Functions"].map(
            (tech) => (
              <TechBadge key={tech} tech={tech} />
            )
          )}
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <a
            href="https://autosyncreel.site?username=saud&password=saud"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Live Demo </span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 3h6v6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 14L21 3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <p className="text-sm text-neutral-400">
            Username: saud
            <br />
            Password: saud
          </p>
        </div>
      </div>
    ),
    color: "var(--neutral-900)",
    content: (
      <div className="relative h-full w-full group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl" />
        <img
          src="https://res.cloudinary.com/dafq69nvu/image/upload/v1742231085/HomePageOf_AutoSyncReel.png"
          className="w-full h-full object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
          alt="AutoSyncReel Dashboard Preview"
        />
      </div>
    ),
  },
  {
    title: "Kenroz",
    subtitle: "School Management System",
    status: "Finished (as per client request)",
    links: {
      demo: "https://kenroz.vercel.app",
    },
    duration: {
      start: "2023",
      end: "2024",
      total: "6 months",
    },
    role: "Full Stack Developer",
    technologies: ["React.js", "Express.js", "MongoDB", "TypeScript"],
    description: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
            Finished (as per client request)
          </span>
          <span className="px-3 py-1 bg-neutral-800 rounded-full">
            Full Stack Project
          </span>
        </div>
        <p className="text-sm leading-relaxed">
          A comprehensive school management platform that bridges communication
          between parents, teachers, and school officials. Features include
          real-time notifications, assignment tracking, attendance management,
          and progress reporting.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            "Next.js",
            "Node.js",
            "MongoDB",
            "TypeScript",
          ].map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4">
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Project not live</span>
          </a>
        </div>
      </div>
    ),
    color: "var(--neutral-900)",
    content: (
      <div className="relative h-full w-full group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl" />
        <div className="relative h-full w-full flex items-center justify-center p-6">
          <img
            src="https://res.cloudinary.com/your-cloudinary/kenroz-preview.png"
            className="w-full h-full object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            alt="Kenroz Dashboard Preview"
          />
        </div>
      </div>
    ),
  },
];

const SideProjects: React.FC = () => {
  return (
    <div className="w-full mt-16 max-w-7xl mx-auto px-4">
      <div className="text-left mb-12">
        <h2 className="text-sm uppercase tracking-wider text-neutral-400 mb-2">
          Portfolio
        </h2>
        <h1 className="text-4xl font-bold">Side Projects</h1>
      </div>
      <StickyScroll content={content} />
    </div>
  );
};

export default SideProjects;
