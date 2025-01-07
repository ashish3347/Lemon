// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import gsap from 'gsap';
// import './App.css';


// const App = () => {
//   // const [showShoe, setShowShoe] = useState(false);

//   // useEffect(() => {
//   //   if (showShoe) {
//   //     gsap.fromTo('.shoe', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
//   //     gsap.fromTo('.shoe-container', { scale: 0 }, { scale: 1, duration: 1, delay: 0.5 });
//   //   }
//   // }, [showShoe]);

//   // const handleButtonClick = () => {
//   //   setShowShoe(true);
//   // };

//   return (
//     <div>
//       <header>
//         <div className="logo">Shoexpress</div>
//         <nav>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Shop</a></li>
//             <li><a href="#">Order</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Log In</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <h1>Sports Shoes</h1>
//         <h2>Men's Collection</h2>
//         <p>Find your true style with shoexpress and explore the variety of playful, colorful designs!</p>
//         <button >Shop Now</button>
//         <div className="shoe-container">
//           <img src="shoe.jpg" alt="Men's Sports Shoe" className="shoe" />
//         </div>
//       </main>
//     </div>
//   );
// };


// gsap.to("#shoe-container",{
//   x:1000

// })

// export default App;



import React from "react";
import "./style_code.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <a href="index_code.html">
        <img src="images/logoo.png" alt="PlayVault Logo" />
      </a>
    </div>

    <div className="navbar-right">
      <button className="location-btn">
        <span className="icon">
          <img
            src="images/Location.png"
            alt="icon"
            style={{ width: "18px", height: "18px" }}
          />
        </span>
        <span id="location">Mumbai</span>
      </button>
      <button className="sign-in-btn">Sign in</button>
    </div>
  </nav>
);

const SportsGallery = () => (
  <div className="container">
    <h2>Popular Sports</h2>
    <div className="sports-gallery">
      {[
        { name: "Cricket", img: "images/cricket.jpg", link: "/turf-near-you" },
        { name: "Football", img: "images/football.jpg", link: "football.html" },
        { name: "Badminton", img: "images/badminton.jpg", link: "badminton.html" },
        { name: "Table Tennis", img: "images/tabletennis.jpg", link: "tabletennis.html" },
        { name: "Swimming", img: "images/swimming.jpg", link: "swimming.html" },
        { name: "Lawn Tennis", img: "images/lawntennis.jpg", link: "lawntennis.html" },
        { name: "Volleyball", img: "images/volleyball.jpg", link: "volleyball.html" },
        { name: "Gym", img: "images/gym.jpg", link: "gym.html" },
        { name: "Cycling", img: "images/gym.jpg", link: "cycling.html" },
        { name: "Archery", img: "images/gym.jpg", link: "archery.html" },
      ].map((sport, index) => (
        <a href={sport.link} className="sport-item" key={index}>
          <img src={sport.img} alt={sport.name} />
          <p>{sport.name}</p>
        </a>
      ))}
    </div>
  </div>
);

const TurfNearYou = () => (
  <div className="turf_near_you_box">
    <div className="turf-header">
      <h2>Turf Near You</h2>
      <a href="#">See All</a>
    </div>
    <div className="turf_near_you_gallery">
      {[
        { name: "Akshay Turf", location: "Dombivli East", distance: "0.8 Km", link: "Akshay_turf.html" },
        { name: "Bhargav Turf", location: "Dombivli East", distance: "0.8 Km", link: "Bhargav_turf.html" },
        { name: "Rohan Turf", location: "Dombivli East", distance: "1.2 Km", link: "Rohan_turf.html" },
        { name: "Akshay Turf", location: "Dombivli East", distance: "0.2 Km", link: "Akshay_turf.html" },
        { name: "Bhargav Turf", location: "Dombivli East", distance: "0.8 Km", link: "Bhargav_turf.html" },
        { name: "Rohan Turf", location: "Dombivli East", distance: "1.2 Km", link: "Rohan_turf.html" },
      ].map((turf, index) => (
        <a href={turf.link} className="turf_img" key={index}>
          <img src="images/turf_1.png" alt={turf.name} />
          <div className="turf_name_distance">
            <h3>{turf.name},</h3>
            <h4>{turf.location}</h4>
            <span>{turf.distance}</span>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<SportsGallery />} />
      <Route path="/turf-near-you" element={<TurfNearYou />} />
    </Routes>
  </Router>
);

export default App;
