import React from 'react'
import FloatingNav from '../../FloatingNav'
import Footer from '../../components/Footer/Footer'
import Question from '../../components/Question';
import Answer from '../../components/Answer';
import NotCompleted from '../../components/NotCompleted';
import ScrollFadeDiv from '../../components/ScrollFadeDiv';


const Kenroz: React.FC = () => {
  return (
    <div className='custom-grid'>
      <div className="col-span-1"></div>
      <div className="col-span-1"><NotCompleted /></div>
      <div className="col-span-1 flex flex-col gap-8">
        <FloatingNav />

        <ScrollFadeDiv threshold={0}>
          <div>
            <h1 className='text-4xl font-bold'>Kenroz ~ School Management</h1>
            <p className='text-lightTextColor'>
              Full Stack Developer
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
              As a Full Stack Developer, I single-handedly took on the challenge of developing this comprehensive School Management platform. Utilizing Vue.js, Tailwind, and Vuetify for the frontend, and Spring Boot with Java for the backend, I engineered a system designed to foster collaborative interactions among school stakeholders. This personal project, aimed at evolving into a SAAS offering, showcases my holistic approach to development, encompassing both frontend and backend realms to create a solution that addresses the multi-faceted needs of educational institutions. Currently, the project is in progress, with a vision to simplify and enhance school management processes.
            </Answer>
          </div>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <div id='what-were-the-key-technologies-and-tools-used-in-the-project'>
            <Question text="What were the key technologies and tools used in the project?" />
            <Answer>
              The key technologies used in this project include Vue.js for building a reactive UI, Tailwind for styling, and Vuetify for a suite of high-quality components on the frontend. On the backend, Spring Boot and Java were utilized to create a robust and scalable architecture, ensuring smooth operation and data management. Each of these technologies played a crucial role in bringing my vision for an integrated school management platform closer to reality.
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

export default Kenroz