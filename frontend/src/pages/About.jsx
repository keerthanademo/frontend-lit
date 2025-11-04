// src/components/About.jsx

import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import { FaGamepad, FaCrown, FaLightbulb, FaUserCheck } from 'react-icons/fa';
import illustrationImage from '../assets/3ppepnb.png';

// A simple custom hook to detect screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};


const About = () => {
  // We'll consider anything <= 1024px as a "smaller device" for layout changes
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  const features = [
    { icon: <FaGamepad size={30} />, text: 'Play to Win' },
    { icon: <FaCrown size={30} />, text: 'Curated Luxury' },
    { icon: <FaLightbulb size={30} />, text: 'Stay Ahead of Trends' },
    { icon: <FaUserCheck size={30} />, text: 'Elevate Your Style' }
  ];
  
  // Define the image component once to reuse it
  const Illustration = ({ className }) => (
    <div className={className}>
      <img src={illustrationImage} alt="About Us Illustration" />
    </div>
  );

  return (
    <div className="about-page">
      {/* 
        This is the core change: we use a ternary operator.
        If it's a small screen, render the mobile-first layout.
        Otherwise, render the original desktop layout.
      */}
      {isSmallScreen ? (
        // --- MOBILE LAYOUT (Image between paragraphs) ---
        <div className="about-main-section-mobile">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
             LIT by Faslit Accor Private Limited is India’s first-of-its-kind fashion gaming platform — 
                where style meets strategy, and your fashion sense becomes your edge.
          </p>
          
          <Illustration className="about-illustration-mobile" />
          
          <p className="about-description">
            Explore the HOUSE OF LIT, our curated e-commerce experience, 
            where every product is handpicked for quality, exclusivity, 
            and global appeal. Unlock access to coveted pieces, insider sales, and rewards just by playing the LIT game.
            </p>
            <p className="about-description">
              We’re not just building a brand — we’re cultivating taste, 
              building community, and redefining how luxury is experienced.
            </p>
        </div>
      ) : (
        // --- DESKTOP LAYOUT (Original side-by-side) ---
        <div className="about-main-section">
          <div className="about-text-content">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                LIT by Faslit Accor Private Limited is India’s first-of-its-kind fashion gaming platform — 
                where style meets strategy, and your fashion sense becomes your edge. </p>
            <p className="about-description">
              Explore the HOUSE OF LIT, our curated e-commerce experience, 
              where every product is handpicked for quality, exclusivity, 
              and global appeal. Unlock access to coveted pieces, insider sales, and rewards just by playing the LIT game.
            </p>
            <p className="about-description">
              We’re not just building a brand — we’re cultivating taste, 
              building community, and redefining how luxury is experienced.
            </p>
          </div>
          <Illustration className="about-illustration" />
        </div>
      )}

      <div className="features-section">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;