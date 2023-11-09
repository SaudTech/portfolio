import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import SocialMediaButton from './SocialMediaButton';


const Introduction: React.FC = () => {
  const [showWorkspace, setShowWorkspace] = React.useState(false);
  const [showUserFocused, setShowUserFocused] = React.useState(false);
  const [showReactDev, setShowReactDev] = React.useState(false);
  const [showScalable, setShowScalable] = React.useState(false);

  React.useEffect(() => {
    const timers = [
      setTimeout(() => setShowWorkspace(true), 500),
      setTimeout(() => setShowUserFocused(true), 1200),
      setTimeout(() => setShowReactDev(true), 1600),
      setTimeout(() => setShowScalable(true), 2300),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-6">
        <div className="rounded-full bg-gradient-to-tl from-purple/30 to-pink/30 shadow-lg p-[3px]">
          <div className="rounded-full bg-gradient-to-tl from-purple to-pink shadow-lg p-[3px]">
            <div className="rounded-full p-px h-[64px] w-[64px]">
              <img alt="A photo of Saud" src="https://res.cloudinary.com/dafq69nvu/image/upload/v1694073652/profile-picture.jpg" width="64" height="64" decoding="async" data-nimg="1" className="rounded-full" style={{ color: "transparent" }} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-medium text-white sm:text-4xl">Saud</h1>
          <h2 className="align-middle text-lg leading-6 text-rose-100/50">
            <span className="">Developer</span>
            {" "} at {" "}
            <a href="https://vizzhy.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <span className="font-medium text-rose-100/70">
                <span className="mr-px align-middle">
                  {/* <span className="-my-2 inline-block text-[24px]">▲</span> */}
                  <span className="-my-2 inline-block text-[24px]">
                    <img alt="Vizzhy Logo" src="https://res.cloudinary.com/dafq69nvu/image/upload/v1694063430/vizzhy-logo_drcojp.png" className='mb-1' width={26} height={26} />
                  </span>
                </span>
                <span className='company-name-gradient-text'>
                  Vizzhy
                </span>
              </span>
            </a>
          </h2>
        </div>
      </div>

      <div className='mt-8'>
        <p className='text-lg'>
          Welcome to my <RoughNotation show={showWorkspace} type="highlight" color="#4B2447"><span className="whitespace-nowrap">Digital Workspace</span></RoughNotation>, {" "}
          where I showcase my expertise in crafting{" "}
          <RoughNotation show={showUserFocused} type="underline" color="#532323">
            <span className="whitespace-nowrap">User-focused Applications</span>
          </RoughNotation>.{" "}
          As a <RoughNotation show={showReactDev} type="circle" color="#8F2F70"><span className="whitespace-nowrap">React Developer</span></RoughNotation>, {" "}
          I thrive on turning complex problems into {" "}
          <RoughNotation show={showScalable} type="underline" color="#81C784"><span className="whitespace-nowrap">Scalable Solutions</span></RoughNotation>.{" "}
          Join me as I navigate the ever-evolving landscape of technology,{" "}
          product development, and career growth.{" "}
        </p>
      </div>

      <div className='w-full flex gap-3 mt-8'>
        <SocialMediaButton type="linkedin" label='Linkedin' />
        <SocialMediaButton type="github" label='Github' />
      </div>
    </div>
  )
}

export default Introduction