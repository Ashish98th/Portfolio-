// import React, { useState } from "react";
// import { FaBars, FaReact } from "react-icons/fa";
// import { HiX } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import "./styles.scss";
// const data = [
//   {
//     label: "HOME",
//     to: "/",
//   },
//   {
//     label: "ABOUT ME",
//     to: "/about",
//   },
//   {
//     label: "SKILLS",
//     to: "/skills",
//   },
//   {
//     label: "RESUME",
//     to: "/resume",
//   },
//   {
//     label: "PORTFOLIO",
//     to: "/portfolio",
//   },
//   {
//     label: "CONTACT",
//     to: "/contact",
//   },
// ];

// const Navbar = () => {
//   const [toggleIcon, setToggleIcon] = useState(false);

//   const handleToggleIcon = () => {
//     setToggleIcon(!toggleIcon);
//   };
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar__container">
//           <Link to={"/"} className="navbar__container__logo">
//             <FaReact size={30} />
//           </Link>
//         </div>
//         <ul
//           className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}
//         >
//           {data.map((item, key) => (
//             <li key={key} className="navbar__container__menu__item">
//               <Link
//                 className="navbar__container__menu__item__links"
//                 to={item.to}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="nav-icon" onClick={handleToggleIcon}>
//           {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

























































































































import React, { useState } from "react";
import {FaReact} from "react-icons/fa";
// import {HiX} from "react-icons/hi";
import {Link} from "react-router-dom";
import "./navbar.css";
import './style.scss';


const Navbar=()=>{
   const[toggleIcon,setToggleIcon]=useState(false);
    const handleToggleIcon=()=>{
   setToggleIcon(!toggleIcon);
    }
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
          <Link to="/" className="navbar__container__logo"><FaReact size={30}/></Link>
                </div>
            <ul className={`navbar__container_menu ${toggleIcon ? 'active':''}`}>
                <li className="home_link list_item"><Link to="/">HOME</Link></li>
                <li className="list_item"><Link className="navbar__container__menu__item__links" to="/About">ABOUT ME</Link></li>
                <li className="list_item"><Link to="/Skills">SKILLS</Link></li>
                <li className="list_item"><Link to="/Resume">RESUME</Link></li>
                <li className="list_item"><Link to="/portfolio">PORTFOLIO</Link> </li>
                <li className="list_item"><Link to="/Contact">CONTACT</Link></li>
            </ul>
            <div className="nav-icon" onClick={handleToggleIcon}>
                 {toggleIcon?<HiX size={30}/>:<FaBars size={30}/>}
            </div>
            </nav>
        </div>
    )
}
export default Navbar;
