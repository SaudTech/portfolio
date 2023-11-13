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
    document.title = 'Saud | Developer at Vizzhy'
  }, [])

  return (
    <div>

      <div className='custom-grid'>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1 flex flex-col gap-8">
          <FloatingNav noBackButton={true} />
          <div ref={ref} className={`transition-opacity duration-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <Introduction />
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>
      <div className='w-full text-center my-20'>
        <Skills />
      </div>
      <div className='custom-grid'>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1 flex flex-col gap-8">
          <Work />

          <Footer />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}

export default Home