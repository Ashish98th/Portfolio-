import React from "react";
import PageHeaderContent from "../../Components/PageHeaderContent";
import {BsInfoCircleFill} from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './style.scss';
const Contact=()=>{
    return(
        <section id="contact" className="contact" >
        <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40}/>} 
        />
{/* Parent div  */}
        <div className="contact__content">

            {/* HeaderText */}
<Animate
play
duration={1}
delay={0}
start={{
    transform:"translateX(-200px)"
}}
end={{
    transform:"translateX(0px)"
}}
>

    {/* headerText is coming from left  */}
<h3 className="contact__content__header-text">Lets Talk</h3>


</Animate>

{/* Input Field  */}

<Animate
play
duration={1}
delay={0}
start={{
    transform:"translateX(200px)"
}}
end={{
    transform:"translateX(0px)"
}}
>

{/* Form  */}

<div className="contact__content__form">

<div className="contact__content__form__controlswrapper">

<div>
    <input required name="name" className="inputName" type={"text"}/>
    <label htmlFor="name" className="nameLabel">Name</label>
</div>
<div >
<input required name="email" className="inputEmail" type={"text"}/>
    <label htmlFor="email" className="emailLabel">Email</label>
</div>
<div>
<textarea rows="5" required name="description" className="inputDescription" type={"text"}/>
    <label htmlFor="description" className="descriptionLabel">Description</label>
</div>

</div>
<button>Submit</button>
</div>


</Animate>

        </div>
    </section>
    )
}
export default Contact;

