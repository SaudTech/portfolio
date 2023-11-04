import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import WorkInterface from "../Constant/WorkInterface";
import WorkData from "../Constant/Work"
import { FaLightbulb } from "react-icons/fa"
import { Link } from 'react-router-dom';
import "../../playground.css"


const Work: React.FC = () => {
  return (
    <div className='flex flex-col gap-8'>
      {
        WorkData.map((v) => <Card work={v} key={v.title} />)
      }
    </div>
  )
};


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


  return (
    <div ref={ref}>
      <Link to={`/${work.url || ''}`} className='w-full'>
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
      </Link>
    </div>
  )
};

export default Work;