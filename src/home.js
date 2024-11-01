import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'; // Import the plugin
import './test.css';

const Home = () => {
  const [showShoe, setShowShoe] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false); // State for side navigation
  const shoeContainerRef = useRef(null);
  const shoeRefs = useRef([]);

  // Register the plugin
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
  }, []);

  useEffect(() => {
    if (showShoe) {
      const container = shoeContainerRef.current;
      const shoes = shoeRefs.current;

      const circleRadius = 470; // Adjust the radius to fit your container
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;

      shoes.forEach((shoe, index) => {
        const angleStep = (2 * Math.PI) / shoes.length;
        const initialAngle = index * angleStep; // Initial angle for each shoe

        // Create an animation timeline for each shoe
        gsap.timeline({ repeat: -1 })
          .to(shoe, {
            duration: 10, // Full circle takes 10 seconds
            motionPath: {
              path: [
                { x: centerX + circleRadius * Math.cos(initialAngle), y: centerY + circleRadius * Math.sin(initialAngle) },
                { x: centerX + circleRadius * Math.cos(initialAngle + Math.PI / 2), y: centerY + circleRadius * Math.sin(initialAngle + Math.PI / 2) },
                { x: centerX + circleRadius * Math.cos(initialAngle + Math.PI), y: centerY + circleRadius * Math.sin(initialAngle + Math.PI) },
                { x: centerX + circleRadius * Math.cos(initialAngle + (3 * Math.PI) / 2), y: centerY + circleRadius * Math.sin(initialAngle + (3 * Math.PI) / 2) },
              ],
            },
          });
      });
    }
  }, [showShoe]);

  const handleButtonClick = () => {
    setShowShoe(true);
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen); // Toggle side navigation
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="hamburger" onClick={toggleSideNav}>
            &#9776; {/* Hamburger icon */}
          </div>
          <div className="logo">SHO<span className="blue-text">E</span>XPRESS</div>
          <ul className="nav-links">
            <li><a href="#" className="blue-text">Home</a></li>
            <li><a href="#" className="blue-text">Shop</a></li>
            <li><a href="#" className="blue-text">Order</a></li>
            <li><a href="#" className="blue-text">Contact</a></li>
            <li><a href="#" className="blue-text">Log In</a></li>
          </ul>
          <div className="search-icon">
            <img src="search-icon.png" alt="Search Icon" />
          </div>
        </nav>

        {/* Side navigation */}
        <div className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Log In</a></li>
          </ul>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="left-container">
            <h1>Sports Shoes</h1>
            <h2>Men's Collection</h2>
            <p>Find your true style with shoexpress and explore the variety of playful, colorful designs!</p>
            <button onClick={handleButtonClick}>Book Now</button>
          </div>
          <div className="right-container">
            <div className="blue-circle-container">
              <div className="blue-circle">
                <div className="inner-circle"></div>
              </div>
            </div>
            {showShoe && (
              <div className="shoe-container" ref={shoeContainerRef}>
                <img ref={el => shoeRefs.current[0] = el} src="shoe.jpg" alt="Shoe 1" className="shoe" />
                <img ref={el => shoeRefs.current[1] = el} src="shoe1.png" alt="Shoe 2" className="shoe" />
                <img ref={el => shoeRefs.current[3] = el} src="shoe1.png" alt="Shoe 3" className="shoe" />
                <img ref={el => shoeRefs.current[4] = el} src="shoe1.png" alt="Shoe 3" className="shoe" />
                <img ref={el => shoeRefs.current[5] = el} src="shoe1.png" alt="Shoe 3" className="shoe" />
                <img ref={el => shoeRefs.current[6] = el} src="shoe1.png" alt="Shoe 3" className="shoe" />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
