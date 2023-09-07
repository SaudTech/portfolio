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
              <img alt="A photo of Saud" src="https://media.licdn.com/dms/image/C4D03AQEk-cBngWuENg/profile-displayphoto-shrink_800_800/0/1625651197413?e=1699488000&v=beta&t=PtNc79SrbVNZcBLwHrOcwte-lT5hQ5ySxbNOjDyFQGA" width="64" height="64" decoding="async" data-nimg="1" className="rounded-full" style={{ color: "transparent" }} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-medium text-white sm:text-4xl">Saud</h1>
          <h2 className="align-middle text-lg leading-6 text-rose-100/50">
            <span className="hidden sm:inline">Developer</span>
            {/* <span className="inline sm:hidden" title="Developer Experience">DX</span>  */}
            {" "} at <span className="font-medium text-rose-100/70">
              <span className="mr-px align-middle">
                {/* <span className="-my-2 inline-block text-[24px]">▲</span> */}
                <span className="-my-2 inline-block text-[24px]">
                  <img alt="Care365 Logo" src="https://res.cloudinary.com/dafq69nvu/image/upload/v1694063430/vizzhy-logo_drcojp.png" className='mb-1' width={26} height={26} />
                </span>
              </span>
              <span className='company-name-gradient-text'>
                Care365
              </span>
            </span>
          </h2>
        </div>
      </div>

      <div className='mt-8'>
        <p className='text-lg'>
          Welcome to my <RoughNotation show={showWorkspace} type="highlight" color="#4B2447">Digital Workspace</RoughNotation>, {" "}
          where I showcase my expertise in crafting{" "}
          <RoughNotation show={showUserFocused} type="underline" color="#532323">User-focused Applications</RoughNotation>.{" "}
          As a <RoughNotation show={showReactDev} type="circle" color="#8F2F70">React Developer</RoughNotation>, {" "}
          I thrive on turning complex problems into {" "}
          <RoughNotation show={showScalable} type="underline" color="#81C784">Scalable Solutions</RoughNotation>.{" "}
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