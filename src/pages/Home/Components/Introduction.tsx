import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import SocialMediaButton from './SocialMediaButton';
import {
  BiLogoReact, BiLogoVuejs
} from 'react-icons/bi';

const Introduction: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = React.useState(0);

  React.useEffect(() => {
    const maxIndex = 5;
    const interval = setInterval(() => {
      setVisibleIndex(currentIndex => {
        if (currentIndex < maxIndex) {
          return currentIndex + 1;
        }
        clearInterval(interval);
        return currentIndex;
      });
    }, 700); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-6">
        <div className="rounded-full bg-gradient-to-tl from-purple/30 to-pink/30 shadow-lg p-[3px]">
          <div className="rounded-full bg-gradient-to-tl from-purple to-pink shadow-lg p-[3px]">
            <div className="rounded-full p-px h-[64px] w-[64px]">
              <img alt="A photo of Saud" src="https://res.cloudinary.com/dafq69nvu/image/upload/v1703667893/profile-picture.png" width="64" height="64" decoding="async" data-nimg="1" className="rounded-full" style={{ color: "transparent" }} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-medium text-white sm:text-4xl">Saud Zubedi</h1>
          <h2 className="align-middle text-lg leading-6 text-rose-100/50">
            <span className="flex items-center gap-2"><BiLogoReact size="25" title="React.js" /> React.js and <BiLogoVuejs size="25" title="Vue.js" />  Vue.js Developer</span>
          </h2>
        </div>
      </div>

      <div className='mt-8'>
        <p className='text-lg'>
          Frontend Developer with <RoughNotation show={visibleIndex >= 1} type="underline" color="#8F2F70">over 3+ years</RoughNotation> in <RoughNotation show={visibleIndex >= 2} type="highlight" color="#4B2447"><span className="whitespace-nowrap">React.js and Vue.js</span></RoughNotation>, I specialize in <RoughNotation show={visibleIndex >= 3} type="underline" color="#81C784"><span className="whitespace-nowrap">creating scalable, efficient, and user-centric web solutions</span></RoughNotation>. My focus is on delivering high-quality applications that enhance user experience and foster team collaboration. Committed to leveraging my skills for dynamic project execution and mentorship in the tech community.
        </p>
      </div>

      <div className='w-full flex gap-3 mt-8'>
        <SocialMediaButton type="upwork" label='Upwork' />
        <SocialMediaButton type="github" label='Github' />
      </div>
    </div>
  )
}

export default Introduction