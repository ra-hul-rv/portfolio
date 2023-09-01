import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import useActiveSection from '@/Hooks/useActiveSection';

const Experience = () => {
  const theme='light'
  const {ref}=useActiveSection({sectionName:'Experience',threshold:1})

  return (
    <section id='experience' ref={ref} className='mt-10'>
        <SectionHeading>
            Experience
        </SectionHeading>
        <VerticalTimeline>
          {
            experiencesData.map((item,index) =>(
              <VerticalTimelineElement key={index}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
              >
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                  <p>{item.description}</p>
              </VerticalTimelineElement>
            ))
          }
        </VerticalTimeline>
    </section>
  )
}

export default Experience