// // NavBar.jsx
// import React, { useState } from 'react';
// import Navbar

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header>
//       <div className="top-bar">
//         <div className="container">
//           <div className="contact-info">
//             <a href="tel:+917736013411" className="phone">
//               <i className="phone-icon"></i>+91 7736013411
//             </a>
//           </div>
//           <div className="top-links">
//             <a href="/blog">Blog</a>
//             <a href="/careers">Careers</a>
//             <a href="/success-stories">Success Stories</a>
//             <a href="/register" className="register-btn">Register Now</a>
//           </div>
//         </div>
//       </div>
//       <div className="main-nav">
//         <div className="container">
//           <div className="logo">
//             <a href="/">
//               <img src="/logo.png" alt="Synnefo Solutions Logo" />
//             </a>
//           </div>
//           <div className="mobile-menu-toggle" onClick={toggleMenu}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//           <nav className={isMenuOpen ? 'active' : ''}>
//             <ul className="nav-menu">
//               <li><a href="/about">About Us</a></li>
//               <li className="dropdown">
//                 <a href="/courses">Courses <i className="dropdown-icon"></i></a>
//               </li>
//               <li><a href="/placements">Placements</a></li>
//               <li><a href="/contact" className="contact-btn">Contact Us</a></li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NavBar;