import React, { MouseEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import WorkInterface from "../Constant/WorkInterface";
import WorkData from "../Constant/Work"
import { FaLightbulb } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt'

interface WorkProps {
  title: string;
  isSideProject?: boolean;
  from?: string;
  to?: string;
  position: string;
  description: string;
}


const Work: React.FC = () => {
  return (
    <div className='flex flex-col gap-8'>
      {
        WorkData.map((v) => <Card work={v} key={v.title} />)
      }
    </div>
  )
};

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 15,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 500,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


interface CardProps {
  work: WorkInterface
}
const Card: React.FC<CardProps> = ({ work }) => {
  const box = React.useRef<HTMLDivElement>(null);
  const letters = React.useRef<HTMLDivElement>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,  // <-- Adjusted threshold
    delay: 100,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, work: WorkProps) => {
    const target = e.currentTarget;
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    const clientWidth = target.clientWidth;
    const clientHeight = target.clientHeight;

    // Calculate how far the pointer is from the center of the target element
    const xPos = (offsetX / clientWidth) - 0.5;
    const yPos = (offsetY / clientHeight) - 0.5;

    // Apply a CSS transform to the text elements based on pointer position
    const textElements = target.getElementsByClassName('tilt-text');
    Array.from(textElements).forEach((el: Element) => {
      const factor = 20; // Change this to control the tilt intensity
      const xTilt = xPos * factor;
      const yTilt = yPos * factor;
      (el as HTMLElement).style.transform = `rotateX(${yTilt}deg) rotateY(${xTilt}deg)`;
    });
  };

  return (
    <div ref={ref}>
      <Link to={`/${work.url || ''}`} className='w-full'>

        <Link to={`/${work.url || ''}`} className='w-full'>
          <Tilt options={defaultOptions}>
            <div
              className={`${inView ? 'opacity-100' : 'opacity-0'} relative bg-cardBg hover:bg-cardBgHover transition-all duration-700 rounded-xl p-6 shadow-md hover:shadow-lg cursor-pointer`}>
              <div className='h-full w-full absolute top-0 left-0 shadow-md' ref={box}></div>
              <div className="card-letters absolute top-0 left-0" ref={letters}></div>
              <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>{work.title}</h1>
                {work.isSideProject && <span className='text-sm text-lightTextColor' title='Side project'><FaLightbulb /></span>}
              </div>
              <p className='text-sm text-lightTextColor'>
                {!work.isSideProject && `${work.from} - ${work.to} |`}
                {" "}
                {work.position}
              </p>
              <p className='mt-4'>
                {work.description}
              </p>
            </div>
          </Tilt>
        </Link>

        {/* <Tilt options={defaultOptions}>
          <div
            className={`${inView ? 'opacity-100' : 'opacity-0'} relative bg-cardBg hover:bg-cardBgHover transition-all duration-700 rounded-xl p-6 shadow-md hover:shadow-lg cursor-pointer`}
            onMouseMove={(e) => handleMouseMove(e, work)}
            <div className='h-full w-full absolute top-0 left-0 shadow-md' ref={box}></div>
            <div className="card-letters absolute top-0 left-0" ref={letters}></div>
            <div className='flex justify-between items-center'>
              <h1 className='text-xl font-semibold tilt-text'>{work.title}</h1>
              {work.isSideProject && <span className='text-sm text-lightTextColor' title='Side project'><FaLightbulb /></span>}
            </div>
            <p className='text-sm text-lightTextColor'>
              {!work.isSideProject && `${work.from} - ${work.to} |`}
              {" "}
              {work.position}
            </p>
            <p className='mt-4'>
              {work.description}
            </p>
          </div>
        </Tilt> */}
      </Link>
    </div>
  )
};

export default Work;