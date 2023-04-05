import React from "react";
import PageHeaderContent from "../../Components/PageHeaderContent";
import {BsInfoCircleFill} from "react-icons/bs";
import {Animate} from "react-simple-animate";
import "./style.scss";
import {DiApple,DiAndroid} from 'react-icons/di';
import {FaDev,FaDatabase} from 'react-icons/fa';
const personalDetails = [
    {
      label: "Name",
      value: "Ashish Nath",
    },
    {
      label: "Age",
      value: "24",
    },
    {
      label: "Address",
      value: "India",
    },
    {
      label: "Email",
      value: "ashishnathofficial98@gmail.com",
    },
    {
      label: "Contact No",
      value: "+91 9957176546",
    },
  ];
  
  const jobSummary =
    "Front End Developer with 1 year of experience as a trainee in Newton School Web Development Program blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume.";
  

const About=()=>{
    return(
        <section id="about" className="about" >
            <PageHeaderContent
            headerText="About Me"
            icon={<BsInfoCircleFill size={40}/>} 
            />

            <div className="about__content">

{/* Personal Left side content  */}
                <div className="about__content__personalWrapper">          
                  <Animate 
            play
            duration={1.5}
            delay={1}
            start={{
                transform : 'translateX(-900px)'
            }}

            end={{
                transform: 'translateX(0px)'
            }}
            >
            <h3>Frontend Developer</h3>
            <p>{jobSummary}</p>
             </Animate>
             

{/* Personal Info  */}

<Animate 
            play
            duration={1.5}
            delay={1}
            start={{
                transform : 'translateX(500px)'
            }}

            end={{
                transform: 'translateX(0px)'
            }}
            >

             <h3 className="personalInformationHeadeText">Personal Information</h3>
             <ul>
             {
                personalDetails.map((item,index)=>
                    <li key={index}>
                     <span className="title">{item.label}</span>
                     <span className="value">{item.value}</span>
                    </li>
                )
             }
             </ul>

             </Animate></div>

{/* Services right side content  */}

{/* The div where cicrle is embedded  */}
                <div className="about__content__servicesWrapper">



                <Animate 
            play
            duration={1.5}
            delay={1}
            start={{
                transform : 'translateX(540px)'
            }}

            end={{
                transform: 'translateX(0px)'
            }}
            >


<div className="about__content__servicesWrapper__innerContent">

   {/* Four icons Four Divs  */}

                 <div>
                    <FaDev color="yellow" size={60}/>
                  </div>

                  <div>
                    <FaDatabase color="yellow" size={60}/>
                  </div>

                  <div>
                    <DiAndroid color="yellow" size={60}/>
                  </div>

                  <div>
                    <DiApple color="yellow" size={60}/>
                  </div>

                    </div>
          
          </Animate>
                </div>

        
            </div>
        </section>
        
       
    )
}
export default About;
