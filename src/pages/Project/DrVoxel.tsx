import React from 'react'
import FloatingNav from '../../FloatingNav'
import Footer from '../../components/Footer/Footer'
import { GetDuration } from '../../utils';
import Question from '../../components/Question';
import Answer from '../../components/Answer';
import ScrollFadeDiv from '../../components/ScrollFadeDiv';


const DrVoxel: React.FC = () => {
  const startDate = "August 2022";
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
            <h1 className='text-4xl font-bold'>Dr.Voxel ~ Healthcare</h1>
            <p className='text-lightTextColor'>
              {startDate} - {endDate} | {GetDuration(startDate, endDate)}
            </p>
          </div>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <Answer>
            Dr. Voxel is a streamlined web application aimed at enhancing the process of diagnosing patients. It facilitates doctors in managing multiple clinics effortlessly, while enabling patients to book appointments, which can be initiated as video calls for added convenience. The application provides an organized view of patients' medical histories, aiding doctors in prescribing medications accurately. A notable feature is the earnings tracker for doctors, ensuring a clear financial overview. Moreover, doctors can create assistant profiles, delegating tasks to ensure smooth clinic operations, which showcases the app's comprehensive approach to healthcare management.
          </Answer>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <div id='what-is-my-role'>
            <Question text="What is my role?" />
            <Answer>
              As the Lead Developer on the Dr. Voxel project, I was entrusted with managing the development process and deployments. My role encompassed coordinating the workflow to ensure development milestones were met, while maintaining a high standard of quality throughout the project. A significant part of my duty was to implement the video calling functionality, initially using Twilio, and later transitioning to another server upon client request. Through effective teamwork and technical oversight, I played a vital role in advancing the project to its successful completion, ensuring it met the client's expectations and adhered to the specified timelines.            </Answer>
          </div>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <div id='what-were-the-key-technologies-and-tools-used-in-the-project'>
            <Question text="What were the key technologies and tools used in the project?" />
            <Answer>The key technologies utilized in this project were <a href='https://react.dev/' target='_blank'>React</a> for the frontend, <a href='https://spring.io/' target='_blank'>Spring Boot</a> with <a href='https://www.java.com/en/' target='_blank'>Java</a> for the backend, and Twilio initially for the video calling functionality before transitioning to another server as per the client's request.</Answer>
          </div>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <div id='how-did-i-manage-the-transition-from-twilio-to-another-service-and-what-were-the-learnings-from-this-experience'>
            <Question text="How did I manage the transition from Twilio to another service, and what were the learnings from this experience?" />
            <Answer>Managing the transition required a thorough understanding of the new service's capabilities and ensuring it met the project's requirements. The learning from this experience was the importance of adaptability and effective communication with the client their needs were met without compromising the project's quality.</Answer>
          </div>
        </ScrollFadeDiv>
        <ScrollFadeDiv threshold={0.25}>
          <div id='what-measures-did-you-take-to-maintain-the-quality-and-timeliness-of-the-project'>
            <Question text="What measures did you take to maintain the quality and timeliness of the project?" />
            <Answer>To ensure quality and timeliness, I prioritized understanding the functionality before diving into development, which significantly reduced the time spent on reworking features. I advocated for creating reusable components for commonly used sections, which not only kept the code clean, readable, and maintainable, but also saved time by reducing redundancy. Additionally, major tasks were broken down into smaller, manageable parts and distributed among team members, promoting efficiency and enabling a smoother workflow towards meeting project deadlines.</Answer>
          </div>
        </ScrollFadeDiv>
        <Footer />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  )
};

export default DrVoxel