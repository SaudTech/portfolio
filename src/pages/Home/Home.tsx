import React from 'react';
import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Work from './Components/Work';
import FloatingNav from '../../FloatingNav';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Saud | Developer at Care365'
  }, [])
  
  return (
    <div className='custom-grid'>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
      <div className="col-span-1 flex flex-col gap-8">
        <FloatingNav />

        <Introduction />
        <Skills />
        <Work />

        <Footer />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  )
}

export default Home