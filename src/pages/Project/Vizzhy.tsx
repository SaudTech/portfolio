import React from 'react'
import FloatingNav from '../../FloatingNav'
import Footer from '../../components/Footer/Footer'
import { useInView } from 'react-intersection-observer';
import { GetDuration } from '../../utils';
import { motion } from 'framer-motion';
import NotCompleted from '../../components/NotCompleted';
import ScrollFadeDiv from '../../components/ScrollFadeDiv';




const Vizzhy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,  // <-- Adjusted threshold
    delay: 100,
  });

  const startDate = "August 2023";
  const endDate = "Present";

  return (
    <div className='custom-grid'>
      <div className="col-span-1"></div>
      <div className="col-span-1"><NotCompleted /></div>
      <div className="col-span-1 flex flex-col gap-8">
        <FloatingNav />

        <ScrollFadeDiv threshold={0}>
          <div>
            <h1 className='text-4xl font-bold'>Vizzhy ~ Healthcare</h1>
            <p className='text-lightTextColor'>
              {startDate} - {endDate} | {GetDuration(startDate, endDate)}
            </p>
          </div>
        </ScrollFadeDiv>
        <Footer />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  )
}

export default Vizzhy