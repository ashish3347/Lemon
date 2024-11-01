import React from 'react';

const Promo = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={{ ...styles.heading, ...styles.heading1 }}>BLACK</h1>
        <h1 style={{ ...styles.heading, ...styles.heading2 }}>TO</h1>
        <h1 style={{ ...styles.heading, ...styles.heading3 }}>POWER</h1>
        <h1 style={{ ...styles.heading, ...styles.heading4 }}>FRIDAY</h1>
      </div>
      <div style={styles.discountText}>70% OFF</div>
      <img
        src="./shoe1.png"
        alt="Shoe Promo"
        style={styles.shoeImage}
      />
      <button style={styles.shopNowButton}>Shop Now →</button>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '800px',
    backgroundColor: '#056276',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    color: '#ffffff',
    overflow: 'hidden',
    marginTop: '555px',
  },
  textContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '80%',
    color: '#000000',
    opacity: 0.1,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  heading: {
    margin: 0,
    fontSize: '8rem', // Larger font size
  },
  heading1: {
    marginLeft: '-240px', // No shift for the first word
  },
  heading2: {
    marginLeft: '100px', // Slight right shift
  },
  heading3: {
    marginLeft: '140px', // More right shift
  },
  heading4: {
    marginLeft: '410px', // Maximum right shift
  },
  discountText: {
    position: 'absolute',
    color: '#000000',
    top: '10%',
    right: '10%',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  shoeImage: {
    position: 'relative',
    width: '800px',
    height: 'auto',
    transform: 'rotate(-20deg)',
  },
  shopNowButton: {
    position: 'absolute',
    bottom: '10%',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#00535a',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    marginLeft:'-940px'
  },
};

export default Promo;
