import React from "react";
import { RoughNotation } from "react-rough-notation";
import TechBadge from "../../../components/TechBadge";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/SaudTech",
    icon: "→",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saudzubedi",
    icon: "→",
  },
];

const Introduction: React.FC = () => {
  return (
    <div className="w-full mt-16 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm opacity-80">
              <span className="px-3 py-1 bg-neutral-800 rounded-full">
                Frontend Developer
              </span>
              <span className="px-3 py-1 bg-neutral-800 rounded-full">
                Full Stack Engineer
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="md:block hidden">
                <RoughNotation
                  type="highlight"
                  color="rgba(59, 130, 246, 0.2)"
                  animationDelay={300}
                  show={true}
                >
                  <span className="text-blue-400">Saud Zubedi</span>
                </RoughNotation>
              </span>
              <span className="md:hidden block">
                <RoughNotation
                  type="underline"
                  color="#60A5FA"
                  animationDelay={300}
                  show={true}
                >
                  <span className="text-blue-400">Saud Zubedi</span>
                </RoughNotation>
              </span>
            </h1>

            <h2 className="text-2xl text-neutral-400">
              <RoughNotation
                type="bracket"
                brackets={["left", "right"]}
                color="#60A5FA"
                strokeWidth={2}
                animationDelay={800}
                show={true}
              >
                Building digital experiences that matter
              </RoughNotation>
            </h2>
          </div>

          <p className="text-sm leading-relaxed opacity-90 max-w-xl">
            Passionate software engineer with{" "}
            <RoughNotation
              type="highlight"
              color="rgba(59, 130, 246, 0.2)"
              animationDelay={1200}
              show={true}
            >
              3+ years of experience
            </RoughNotation>{" "}
            in healthcare and fintech. I kickstarted my journey during the
            pandemic, focusing on building high-performance web applications
            using modern tech and best practices.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Express.js",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Azure",
            ].map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-blue-400 transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs">{link.icon}</span>
              </a>
            ))}
          </div>

          <div className="pt-8">
            <p
              onClick={() => {
                fetch(
                  "https://res.cloudinary.com/dafq69nvu/image/upload/v1742241624/Resume.pdf"
                )
                  .then((response) => response.blob())
                  .then((blob) => {
                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "Saud_Zubedi_Resume.pdf";
                    a.click();
                  });
              }}
              className="group inline-flex items-center gap-2 text-neutral-300 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              <span className="border-b-2 border-neutral-700 group-hover:border-blue-400 transition-colors duration-300">
                Download Resume
              </span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </p>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg" />
          <div className="absolute inset-0 backdrop-blur-3xl rounded-lg overflow-hidden">
            <div className="h-full w-full bg-neutral-800/50 flex items-center justify-center">
              <span className="text-8xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-8 border-t border-neutral-800 pt-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">3+</h3>
          <p className="text-sm text-neutral-400">Years of Experience</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">10+</h3>
          <p className="text-sm text-neutral-400">Projects Completed</p>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="animate-bounce flex items-center gap-2 text-sm text-neutral-400">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
