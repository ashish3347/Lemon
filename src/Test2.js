import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './home.css';

const Test2 = () => {
    const shoeContainerRef = useRef(null);
    const shoeRefs = useRef([]);

    useEffect(() => {
        const container = shoeContainerRef.current;
        const shoes = shoeRefs.current;
        const circleRadius = 425; // Adjust the circle radius as needed
        const centerX = container.offsetWidth / 2; // Centering based on the container width
        const centerY = container.offsetHeight / 2; // Centering based on the container height
        const angleStep = (2 * Math.PI) / shoes.length; // Angle step for positioning shoes
        const targetIndex = 3; // Index for the target position (fourth position)

        // Position shoes in a circular pattern initially
        shoes.forEach((shoe, index) => {
            const angle = index * angleStep;
            const x = centerX + circleRadius * Math.cos(angle) - shoe.offsetWidth / 2;
            const y = centerY + circleRadius * Math.sin(angle) - shoe.offsetHeight / 2;

            shoe.style.position = 'absolute';
            shoe.style.left = `${x}px`;
            shoe.style.top = `${y}px`;
        });

        // Define and start the repeating animation
        const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.7 }); // Add a delay between each loop

        shoes.forEach((shoe, index) => {
            const nextIndex = (index + 1) % shoes.length;
            const angle = nextIndex * angleStep;

            // Calculate the next position for each shoe
            const x = centerX + circleRadius * Math.cos(angle) - shoe.offsetWidth / 2;
            const y = centerY + circleRadius * Math.sin(angle) - shoe.offsetHeight / 2;

            // Scale only the shoe reaching the target position
            const scaleValue = nextIndex === targetIndex ? 1.2 : 1;

            timeline.to(shoe, {
                left: `${x}px`,
                top: `${y}px`,
                scale: scaleValue,
                duration: 1,
                ease: "circ.inOut",
            }, "<"); // "<" makes all animations start simultaneously
        });

        // Cleanup on component unmount
        return () => {
            gsap.killTweensOf(shoes); // Stop all animations if the component is unmounted
        };
    }, []);

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo">ShoExpress</div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Order</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                    <div className="search-icon">
                        <img src="search-icon.png" alt="Search Icon" />
                    </div>
                </nav>
            </header>

            <main>
                <div className="container">
                <div className="small-blue-circle"></div>
                    <div className="left-container">
                    
                        <h1 className="title">Sports Shoes</h1>
                        <h2 className="subtitle">
                            <span className="blue-text">Men's</span> Collection
                        </h2>
                        <p className="description">
                            Find your true style with ShoeXpress <br />
                            and explore the variety of playful, <br />
                            colorful designs!
                        </p>
                        <button className="book-now-button">Book Now</button>
                    </div>
                    <div className="right-container">
                    
                        <div className="blue-circle-container">
                            <div className="blue-circle">
                                <div className="inner-circle"></div>
                            </div>
                        </div>
                        <div className='shoess'>
                            <div className="shoe-container" ref={shoeContainerRef}>
                                <img ref={el => shoeRefs.current[0] = el} src="shoe1.png" alt="Shoe 1" className="shoe" />
                                <img ref={el => shoeRefs.current[1] = el} src="shoe1.png" alt="Shoe 2" className="shoe" />
                                <img ref={el => shoeRefs.current[2] = el} src="shoe1.png" alt="Shoe 3" className="shoe" />
                                <img ref={el => shoeRefs.current[3] = el} src="shoe1.png" alt="Shoe 1" className="shoe" />
                                <img ref={el => shoeRefs.current[4] = el} src="shoe1.png" alt="Shoe 2" className="shoe" />
                                <img ref={el => shoeRefs.current[5] = el} src="shoe1.png" alt="Shoe 3" className="shoe" />
                            </div>


                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Test2;
