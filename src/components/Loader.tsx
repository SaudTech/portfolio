import React, { useEffect, useState } from 'react'

const Loader: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
      setTimeout(() => {
        setHide(true);
      }, 500);
    }, 500);
  }, []);

  if(hide) return (<></>);
  return (<></>)
  return (
    <div className={`overflow-hidden fixed top-0 left-0 h-screen w-screen text-white z-50`}>
      {/* <div className={`z-40 grid place-items-center h-2/4 w-full bg-gradient-to-b from-[#C22A27] to-[#8F279A] transform transition-transform duration-700 ${animate ? 'translate-y-[-120%]' : ''}`}></div> */}
      <div className={`z-40 grid place-items-center h-2/4 w-full bg-black transform transition-transform duration-700 ${animate ? 'translate-y-[-120%]' : ''}`}></div>
      <div className={`z-40 grid place-items-center h-2/4 w-full bg-white transform transition-transform duration-700 ${animate ? 'translate-y-[120%]' : ''}`}></div>
      {/* <div className={`z-40 grid place-items-center h-2/4 w-full bg-[#5D2340] transform transition-transform duration-700 ${animate ? 'translate-y-[120%]' : ''}`}></div> */}
    </div>
  )
}

export default Loader