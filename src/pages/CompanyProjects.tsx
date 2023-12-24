import { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom';
import WorkData from "./Home/Constant/Work";
import WorkListInterface from './Home/Constant/WorkListInterface';
import FloatingNav from '../FloatingNav';
import ScrollFadeDiv from '../components/ScrollFadeDiv';
import { GetDuration } from '../utils';
import Footer from '../components/Footer/Footer';
const CompanyProjects = () => {

  const companyName = useLocation().pathname.split('/')[1];
  const [company, setCompany] = useState<WorkListInterface | null>(null);

  const retrieveCompany = useCallback(() => {
    const company = WorkData.find((company) => company.companyName === companyName.replace(/%20/g, ' '));
    if (!company) return window.location.href = '/';
    setCompany(company);
  }, [companyName]);
  
  useEffect(() => {
    retrieveCompany();
  }, [retrieveCompany]);
  


  return (
    <div className='custom-grid'>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>

      <div className="col-span-1 flex flex-col gap-8">
        <FloatingNav />
        {company && <>
          <ScrollFadeDiv threshold={0}>
            <div>
              <h1 className="text-6xl font-bold">{company.companyName}</h1>

              <div className='mt-5'>
                <div className='text-xl flex gap-2'>
                  <span className='font-bold text-lightTextColor'>Role:</span>
                  <span className='text-white'>{company.position}</span>
                </div>
                <div className='text-xl flex gap-2'>
                  <span className='font-bold text-lightTextColor'>Duration:</span>
                  <span className='text-white text-center flex flex-col'>
                    <span>{GetDuration(company.from, company.to)}</span>
                    <span className='text-base text-lightTextColor'>{company.from} - {company.to}</span>
                  </span>
                </div>
              </div>

            </div>
          </ScrollFadeDiv>
          <h1>Projects I've worked on...</h1>
          {
            company.projects.map((v) => (
              <ScrollFadeDiv threshold={0}>
                <div className='mb-2 bg-black/30 p-3 z-20 rounded-md'>
                  <div className='mb-5 flex justify-between items-center'>
                    <span className="text-2xl font-bold">{v.title}</span>
                  </div>
                  <span className="text-base">{v.description}</span>
                  <div className='mt-5 flex gap-2'>
                    <span className='font-bold text-lightTextColor'>Technologies:</span>
                    <span className='text-white'>{v.technologies?.join(" - ")}</span>
                  </div>
                </div>
              </ScrollFadeDiv>
            ))
          }
        </>}

        <Footer />
      </div>

      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  )
}

export default CompanyProjects