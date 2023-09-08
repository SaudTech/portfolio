import React from 'react';
import WorkInterface from "../Constant/WorkInterface";
import WorkData from "../Constant/Work"
import { FaLightbulb } from "react-icons/fa"

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
  return (
    <div className='bg-cardBg hover:bg-cardBgHover transition-all rounded-lg p-6 shadow-md hover:shadow-lg cursor-pointer'>
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
  )
};

export default Work;