import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './home.css';

const Test = () => {
    const shoeContainerRef = useRef(null);
    const shoeRefs = useRef([]);

    useEffect(() => {
        const container = shoeContainerRef.current;
        const shoes = shoeRefs.current;
        const circleRadius = 401; // Adjust the circle radius as needed
        const centerX = container.offsetWidth / 4;
        const centerY = container.offsetHeight / 4;
        const angleStep = (2 * Math.PI) / shoes.length;

        // Function to position shoes initially on the circle
        shoes.forEach((shoe, index) => {
            const angle = index * angleStep;
            const x = centerX + circleRadius * Math.cos(angle) - shoe.offsetWidth / 2;
            const y = centerY + circleRadius * Math.sin(angle) - shoe.offsetHeight / 2;

            shoe.style.position = 'absolute';
            shoe.style.left = `${x}px`;
            shoe.style.top = `${y}px`;
        });

        
        const tl = gsap.timeline({ repeat: -1 }); // Repeat infinitely with delay
        const animateShoe = (shoe, index) => {
            const currentAngle = index * angleStep;
            const nextAngle = currentAngle + angleStep;
            const targetPosition = { left: -400, top: 11.032 };
            const nextX = centerX + circleRadius * Math.cos(nextAngle) - shoe.offsetWidth / 2;
            const nextY = centerY + circleRadius * Math.sin(nextAngle) - shoe.offsetHeight / 2;

            

        // Animate all shoes to move in a circular path
        tl.to(container, {
            // rotate:360
         duration: 10, // Adjust duration for the speed of revolution
            ease: "linear",
            transformOrigin: "center center" // Set the transform origin to the center
        });
        };

      // Sequentially animate shoes moving to the fourth position
      shoes.forEach((shoe, index) => {
        // Calculate the target (fourth) position
        const fourthIndex = 3; // 0-based index for the fourth position
        const nextIndex = (index + 1) % shoes.length;
        const targetAngle = nextIndex * angleStep;
        
        const targetX = centerX + circleRadius * Math.cos(targetAngle) - shoe.offsetWidth / 2;
        const targetY = centerY + circleRadius * Math.sin(targetAngle) - shoe.offsetHeight / 2;

        // Calculate the angle for the shoe's current position
        const currentAngle = index * angleStep; 
        const currentX = centerX + circleRadius * Math.cos(currentAngle) - shoe.offsetWidth / 2;
        const currentY = centerY + circleRadius * Math.sin(currentAngle) - shoe.offsetHeight / 2;

        // Move each shoe to the fourth position one at a time
        tl.to(shoe, {
            left: `${targetX}px`,
            top: `${targetY}px`,
            duration: 1,
            scale: 1.2, // Slightly increase size
            ease: "circ.inOut",
        })
        .add(gsap.to({}, { duration: 3 })) // Pause for 3 seconds
        .to(shoe, {
            left: `${currentX}px`, // Move to the next position (next index)
            top: `${currentY}px`,
            scale: 1, // Reset scale
            duration: 1,
            ease: "circ.inOut",
        });
    });

    // Start the rotation animation of the container
    gsap.to(container, {
        // rotation: 360,
        duration: 10, // Adjust duration for the speed of revolution
        ease: "linear",
        transformOrigin: "center center",
        repeat: -1, // Repeat indefinitely
    });

}, []);

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo">ShoeXpress</div>
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
                    <div className="left-container">
                        <h1>Sports Shoes</h1>
                        <h2>Men's Collection</h2>
                        <p>Find your true style with shoexpress and explore the variety of playful, colorful designs!</p>
                        <button >Book Now</button>
                    </div>
                    <div className="right-container">
                        <div className="blue-circle">
                            <div className="inner-circle"></div>
                        </div>
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
            </main>
        </div>
    );
};

export default Test;