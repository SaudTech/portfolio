import React from 'react';
import '../index.css';

import { SiReactrouter } from 'react-icons/si';
import {
  BiLogoReact,
  BiLogoRedux,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoFirebase,
} from 'react-icons/bi';

interface Icon {
  src: string;
  alt: string;
  className?: string | undefined;
  link: string;
};

const Skills: React.FC = () => {
  const icons: Icon[] = [
    {
      src: BiLogoReact,
      alt: "React",
      link: "https://react.dev/"
    },
    {
      src: BiLogoRedux,
      alt: "Redux",
      link: "https://redux.js.org/"
    },
    {
      src: SiReactrouter,
      alt: "React Router v6",
      link: "https://reactrouter.com/en/main"
    },
    {
      src: BiLogoFirebase,
      alt: "Firebase",
      link: "https://firebase.google.com/"
    },
    {
      src: BiLogoTypescript,
      alt: "TypeScript",
      link: "https://www.typescriptlang.org/"
    },
    {
      src: BiLogoJavascript,
      alt: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      src: BiLogoGit,
      alt: "Git",
      link: "https://git-scm.com/"
    },
    {
      src: BiLogoTailwindCss,
      alt: "Tailwind CSS",
      link: "https://tailwindcss.com/"
    },
    {
      src: BiLogoHtml5,
      alt: "HTML5",
      link: "https://www.w3.org/html/"
    },
    {
      src: BiLogoCss3,
      alt: "CSS3",
      link: "https://www.w3schools.com/css/ "
    },

  ];

  return (
    <div className='text-center'>
      <div className="flex flex-wrap justify-center gap-8 max-w-full">
        {icons.map((icon, index) => (
          <a href={icon.link} key={index} target="_blank" rel="noopener noreferrer" title={icon.alt}>
            {
              React.createElement(icon.src, { size: 40, title: icon.alt })
            }
          </a>
        ))}
      </div>
    </div>

  )

}

export default Skills