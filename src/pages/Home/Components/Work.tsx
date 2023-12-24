import React from 'react';
import WorkData from "../Constant/Work"
import { Link } from 'react-router-dom';
import { GetDuration } from '../../../utils';

const Work: React.FC = () => {
  return (
    <div className='flex flex-col gap-8'>
      <h1 className='text-4xl font-bold mx-auto'>Work Experience</h1>
      {
        WorkData.map((v) => (
          <Link to={"/" + v.companyName} className='bg-black/30 rounded-md p-3 cursor-pointer'>
            <div className='z-20 rounded-md'>
              <div className='flex justify-between items-center'>
                <div>
                  <span className="text-xl">{v.position}</span>
                  {" - "}
                  <span className="text-lg">{v.companyName}</span>
                </div>
                <span className="text-base">{v.location}</span>
              </div>
              <span className='text-base'>{v.from} - {v.to} | {GetDuration(v.from, v.to)}</span>
            </div>
          </Link>
        ))
      }
    </div>
  )
};

export default Work;