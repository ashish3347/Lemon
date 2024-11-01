import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Products</h3>
                    <ul>
                        <li>Shoes</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Category</h3>
                    <ul>
                        <li>Men</li>
                        <li>New In</li>
                        <li>Weekly Pick</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Company Info</h3>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Payment Options</li>
                        <li>Track Order</li>
                        <li>Support</li>
                        <li>Vouchers</li>
                        <li>Size Charts</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Follow us</h3>
                    <div className="social-icons">
                        <img src="instagram-icon.png" alt="Instagram" />
                        <img src="facebook-icon.png" alt="Facebook" />
                        <img src="youtube-icon.png" alt="YouTube" />
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <ul>
                    <li>Data settings</li>
                    <li>Cookie settings</li>
                    <li>Privacy Policy</li>
                    <li>Terms And Conditions</li>
                    <li>Imprint</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
