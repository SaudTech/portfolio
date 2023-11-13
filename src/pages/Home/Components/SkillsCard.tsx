import React from 'react';
import "../Skills.css"
import { Tilt } from 'react-tilt';

type SkillsCardProps = {
  title: string;
  description: string;
};
const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 10,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 500,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


const SkillsCard: React.FC<SkillsCardProps> = (props) => {
  return (
    <Tilt options={defaultOptions}>
      <div className="relative mx-auto grid-item rounded-md overflow-hidden bg-[#2E2826] border-solid border hover:border-transparent border-white/20 p-3 min-w-[250px] w-[30%] grid place-items-center hover:h1-transform hover-target" style={{ aspectRatio: '4 / 5' }}>
        <h1 className="font-semibold text-xl transition-transform duration-300 transform hover-translate">{props.title}</h1>

        <div className='slide-box bg-black/50 backdrop-blur-sm transition-all duration-300 absolute bottom-0 min-h-full p-2 w-full bg-black rounded-md grid place-items-center text-lg'>
          {props.description}
        </div>
      </div>

    </Tilt>
  )
}

export default SkillsCard