import React, { useEffect, useRef, useState } from 'react';
import '../index.css';
import "../Skills.css"

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
  iconHoverColor?: string;
}


const Skills: React.FC = () => {

  const icons: Icon[] = [
    {
      src: BiLogoReact,
      alt: "React",
      link: "https://react.dev/",
      iconHoverColor: '#000'
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
  const iconsContainerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLAnchorElement | null>(null);
  const doubledIcons = [...icons, ...icons];
  const [iconWidth, setIconWidth] = useState(0);

  const scrollSpeed = 0.9; // Adjust this value to control the scroll speed

  useEffect(() => {
    if (iconRef.current) {
      setIconWidth(iconRef.current.offsetWidth + 16); // Add 16px for the margin
    }
  }, []);

  useEffect(() => {
    const container = iconsContainerRef.current;
    const totalWidth = icons.length * iconWidth;
    const step = scrollSpeed;
    const scrollInterval = setInterval(() => {
      if (container) {
        if (container.scrollLeft >= totalWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += step;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, [iconWidth, icons.length]);

  return (
    <div>
      <h1 className='text-4xl font-bold mx-auto'>Skills</h1>
      <div className='text-center max-w-2xl mt-2  mx-auto'>
        <div ref={iconsContainerRef} className="icons-container flex flex-nowrap gap-8">
          {doubledIcons.map((icon: Icon, index: number) => (
            <a href={icon.link} key={index} target="_blank" rel="noopener noreferrer" title={icon.alt} ref={index === 0 ? iconRef : null}>
              {
                React.createElement(icon.src, { size: 40, title: icon.alt })
              }
            </a>
          ))}
        </div>
      </div>

      {/* <div className="mt-10 box__container">
        {
          icons.map((_, index) => (
              <div className="grid__box" key={index}>
                <div className='h-full m-3 rounded-lg flex flex-col justify-center items-center'>
                  {
                    React.createElement(_.src, { size: 40, title: _.alt })
                  }
                  <span className='text-white text-lg mt-2'>{_.alt}</span>
                </div>
                <span className='GridSection_joint__3AfU7 GridSection_bl__6vURw'></span>
                <span className='GridSection_joint__3AfU7 GridSection_br__AUY5M'></span>
                <span className='GridSection_joint__3AfU7 GridSection_tr__NMCvH'></span>
                <span className='GridSection_joint__3AfU7 GridSection_tl__AnAX2'></span>
              </div>
            )
          )
        }
      </div> */}
    </div>
  )
};



export default Skills;