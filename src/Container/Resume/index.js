import React from "react";
import PageHeaderContent from "../../Components/PageHeaderContent";
import {BsInfoCircleFill} from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { data } from "./utils";
import './style.scss';
import {MdWork} from 'react-icons/md';
const Resume=()=>{
    return(
        <section id="resume" className="resume" >
        <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40}/>} 
        />

        <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__headertext">EXPERIENCE</h3>

          {/* Vertical Timeline  */}
          <VerticalTimeline
          layout="{1-column}"
          lineColor="var(--yellow-theme-main-color)"
          >
            {
                data.experience.map((item,i)=>(
                     <VerticalTimelineElement
                    key={i}
                    contentStyle={{
                      background:'none',
                      color:'var(--yellow-theme-sub-text-color)',
                      border:'1.5px solid var( --yellow-theme-main-color)'
                    }}
                      // date="2020-2023"
                    icon={<MdWork/>}
                    iconStyle={{
                      background: 'black',
                      color:'var( --yellow-theme-main-color)'
                    }}
                    className="timeline__experience__vertical-timeline-element">

                <div className="vertical-timeline-element-title-wrapper">
                 <h3 className="vertical-timeline-element-title">{item.title}</h3>
                 <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
                 <h5 className="vertical-timeline-element-date">{item.date}</h5>

               
                </div>
                <p className="description">{item.description}</p>
                </VerticalTimelineElement>
                
                ))}

          </VerticalTimeline>
            </div>

            {/* Education  */}
            
            <div className="timeline__education">
            <h3 className="timeline__education__headertext"> EDUCATION</h3>

         {/* Vertical Timeline  */}
         <VerticalTimeline
          layout="{1-column}"
          lineColor="var(--yellow-theme-main-color)"
          >
        {
                data.education.map((item,i)=>(
                     <VerticalTimelineElement
                    key={i}
                    contentStyle={{
                      background:'none',
                      color:'var(--yellow-theme-sub-text-color)',
                      border:'1.5px solid var( --yellow-theme-main-color)'
                    }}

                    // date="2020-2023"
                    icon={<MdWork/>}
                    iconStyle={{
                      background: 'black',
                      color:'var( --yellow-theme-main-color)'
                    }}
                    className="timeline__education__vertical-timeline-element">

                <div className="vertical-timeline-element-title-wrapper">
                 <h3 className="vertical-timeline-element-title">{item.title}</h3>
                 <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
                 <h5 className="vertical-timeline-element-date">{item.date}</h5>

              
                </div>
                <p className="description">{item.description}</p>

                </VerticalTimelineElement>
                
                ))}
                   </VerticalTimeline>
                  

        </div>
        </div>
    </section>
    )
}
export default Resume;

