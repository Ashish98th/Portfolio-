import React from "react";
import {BrowserRouter,Link,Route,Routes,useLocation} from "react-router-dom";
import './App.scss';
import Particles from "react-tsparticles";  
import {loadFull} from "tsparticles";
import particles from "./utils.js/particles";
import Navbar from "./Components/navbar";
import Home from "./Container/Home";
import Contact from "./Container/Contact";
import About from "./Container/About";
import Resume from "./Container/Resume";
import Skills from "./Container/Skills";
import Portfolio from "./Container/Portfolio";

function App(){

  const location =useLocation();

    const handleInit=async (main)=> {
      await loadFull(main)
    }  

    const renderParticleInHomePage= location.pathname ==="/";
  return (
    <div className="App">

{renderParticleInHomePage &&
     <Particles id="particles" options={particles} init={handleInit}/>
}
      {/* Particles js */}
     
     
      <Navbar/>
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home/>} />
        {/* index will check if the path is exactly true then only render the Home Component */}
        
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
      </div>
     
    </div>
  );
}


export default App;
