import React from 'react';
import '../index.css';

import {SiReactrouter} from 'react-icons/si';
import {
  BiLogoReact,
  BiLogoRedux,
  BiLogoJavascript,
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
  // const icons: Icon[] = [
  //   {
  //     src: "https://res.cloudinary.com/dafq69nvu/image/upload/v1694063158/react-logo.svg",
  //     alt: "React",
  //     link: "https://react.dev/"
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dafq69nvu/image/upload/v1694064580/redux-original_nr5qrk.svg",
  //     alt: "Redux",
  //     link: "https://redux.js.org/"
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dafq69nvu/image/upload/v1694064567/javascript-original_hcd0z3.svg",
  //     alt: "JavaScript",
  //     link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dafq69nvu/image/upload/v1694064886/git-icon.svg",
  //     alt: "Git",
  //     link: "https://redux.js.org/"
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dafq69nvu/image/upload/v1694064978/html5-original-wordmark_y9dnzt.svg",
  //     alt: "HTML5",
  //     link: "https://redux.js.org/"
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dafq69nvu/image/upload/v1694064984/css3-original-wordmark_fmso72.svg",
  //     alt: "CSS3",
  //     link: "https://redux.js.org/"
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dafq69nvu/image/upload/v1694064988/sass-original_vejomj.svg",
  //     alt: "SCSS",
  //     link: "https://redux.js.org/"
  //   },
  // ];
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
      <div className="flex justify-center gap-8">
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