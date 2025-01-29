import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'; // Icons from react-icons

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-logo">MovieHub</p> 
          <div className="footer-links">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-middle">
          <p className="about-title">About MovieHub</p>
          <p className="about-text">
            MovieHub is your ultimate destination for streaming the best movies and TV shows.
            Enjoy a vast library of content, with personalized recommendations, easy navigation,
            and high-quality streaming. Join MovieHub today for endless entertainment.
          </p>
        </div>
        <div className="footer-right">
          <p>Contact Us</p>
          <div className="contact-info">
            <p><FaPhone /> +1 234 567 890</p>
            <p><FaEnvelope /> support@moviehub.com</p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Prime Video. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
