import React from 'react';
import { useInView } from 'react-intersection-observer';
import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Work from './Components/Work';
import FloatingNav from '../../FloatingNav';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });


  React.useEffect(() => {
    document.title = 'Saud | Developer at Care365'
  }, [])

  return (
    <div className='custom-grid'>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
      <div className="col-span-1 flex flex-col gap-8">
        <FloatingNav />

        <div ref={ref} className={`transition-opacity duration-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <Introduction />
        </div>
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