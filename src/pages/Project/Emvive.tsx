import React from 'react'
import FloatingNav from '../../FloatingNav'
import Footer from '../../components/Footer/Footer'
import { GetDuration } from '../../utils';
import Question from '../../components/Question';
import Answer from '../../components/Answer';
import ScrollFadeDiv from '../../components/ScrollFadeDiv';


const Emvive: React.FC = () => {
  const startDate = "January 2022";
  const endDate = "May 2023";

  return (
    <div className='custom-grid'>
      <div className="col-span-1"></div>
      <div className="col-span-1">
        {/* <NotCompleted /> */}
      </div>
      <div className="col-span-1 flex flex-col gap-8">
        <FloatingNav />

        <ScrollFadeDiv threshold={0}>
          <div>
            <h1 className='text-4xl font-bold'>Emvive ~ Saudi E-Invoicing</h1>
            <p className='text-lightTextColor'>
              {startDate} - {endDate} | {GetDuration(startDate, endDate)}
            </p>
          </div>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <Answer>
            A Saudi e-invoicing platform that simplifies invoice generation and ensures compliance with Zatca requirements. Powered by Vue.js, it offers users the convenience of seamless invoice submission, leaving the rest to the platform's robust Zatca integration. Led the development effort as the lead frontend developer.
          </Answer>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <div id='what-is-my-role'>
            <Question text="What is my role?" />
            <Answer>
              As the Lead/Senior Frontend Developer, my primary responsibilities included developing, deploying, and maintaining the website to ensure its optimal performance. My role was pivotal in translating designs into functional user interfaces, ensuring a seamless user experience. I also played a crucial role in ensuring the platform's compliance with Zatca requirements, thereby contributing significantly to the project's success.
            </Answer>
          </div>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <div id='what-were-the-key-technologies-and-tools-used-in-the-project'>
            <Question text="What were the key technologies and tools used in the project?" />
            <Answer>
              The project heavily leveraged Vue.js along with Vuetify to create a user-friendly and compliant e-invoicing platform.
              Vue.js was instrumental in building a reactive and reusable UI, while Vuetify provided a suite of high-quality components,
              adhering to the platform's design specifications and ensuring a seamless user experience.
              These technologies were crucial in simplifying the invoice generation process and ensuring compliance with Zatca requirements.
            </Answer>
          </div>
        </ScrollFadeDiv>
        <Footer />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  )
};

export default Emvive