import React from 'react';
import Introduction from './Components/Introduction';
import Skills from './Components/Skills';

const Home: React.FC = () => {
  return (
    <div className='custom-grid'>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
      <div className="col-span-1 flex flex-col gap-8">
        <Introduction />
        <Skills />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  )
}

export default Home