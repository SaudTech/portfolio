import React from 'react'
import FloatingNav from '../../FloatingNav'
import Footer from '../../components/Footer/Footer'
import { GetDuration } from '../../utils';
import NotCompleted from '../../components/NotCompleted';
import ScrollFadeDiv from '../../components/ScrollFadeDiv';


const Vizzhy: React.FC = () => {
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
        <ScrollFadeDiv threshold={0.25}>
          <p>
            Vizzhy is an AI-powered platform focused on combating metabolic diseases. It uses multi-omics data and IoT technology to offer personalized, data-driven care plans that address the root causes of metabolic issues.
          </p>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <div id='what_was_my_role'>
            <Question text="What is my role?" />
            <p>
              I'm a Frontend Developer specializing in enhancing user experiences and feature optimization. One of my major projects involves developing ASR, an innovation that aims to make Vizzhy hands-free and more interactive. Leveraging Microsoft Azure, this feature aims to simplify user input and provide accessible, real-time insights.
            </p>
          </div>
        </ScrollFadeDiv>
        <Footer />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  )
};

const Question = ({ text }: { text: string }) => <h1 className='font-medium leading-loose text-2xl mb-5'>{text}</h1>;

export default Vizzhy