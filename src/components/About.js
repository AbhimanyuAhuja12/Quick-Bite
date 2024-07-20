// import burgerImage from "./burgerImage.png"
// import "../ComponentsStyling.css/about.css"
// const About = () => {
//     return (
//       <div className="about-container">
//         <div className="about-left">
//           <h1>
//             Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
//           </h1>
//           <h4>
//             "Better you will feel if you eat a <span></span> healthy meal"
//           </h4>
//         </div>
//         <div className="about-right">
//           <img src={burgerImage} alt="Food Image" />
//         </div>
//       </div>
//     );
//   };


//   export default About;


import React from 'react'
import User from "./Users"
import UserClass from './UserClass'

function About() {
  return (
    <div>
      <h1 className=''>about</h1>

   <UserClass name ={'ABHIMANYU AHUJA'} location={'dehradhun'}/> 
    </div>
  )
}

export default About
