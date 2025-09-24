// src/pages/Committees.js

import React, { useState, useEffect } from 'react';
import HeaderFooter from '../components/HeaderFooter';

// Consistent Color Scheme with Contact Page
const colors = {
  primary: '#004d40',       // Deep teal green
  secondary: '#00796b',     // Medium teal
  accent: '#c53030',        // Professional red
  light: '#f7fafc',         // Light background
  dark: '#2d3748',          // Dark text
  text: '#4a5568',          // Medium text
  white: '#ffffff',         // White
  gray: '#718096',          // Gray
  lightGreen: '#e0f2f1'     // Light green background
};

// Premium Inline CSS styles matching Contact page
const pageStyle = {
  minHeight: '100vh',
  fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: '1.6',
  color: colors.text,
  background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
};

const heroSectionStyle = {
  background: 'linear-gradient(135deg, #004d40 0%, #00796b 100%)',
  color: colors.white,
  padding: '8em 2em 6em',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
};

const heroPatternStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: '0.1',
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
};

const heroContentStyle = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '1000px',
  margin: '0 auto',
};

const mainHeadingStyle = {
  fontSize: 'clamp(2.8rem, 5vw, 4rem)',
  fontWeight: '800',
  marginBottom: '1.5rem',
  background: 'linear-gradient(to right, #ffffff, #b2dfdb)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '-0.5px',
  lineHeight: '1.2',
};

const subHeadingStyle = {
  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
  fontWeight: '300',
  marginBottom: '3rem',
  opacity: '0.95',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: '1.6',
};

const sectionStyle = {
  padding: '6em 2em',
  textAlign: 'center',
  position: 'relative',
};

const contentSectionStyle = {
  ...sectionStyle,
  background: 'transparent',
};

const headingStyle = {
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  marginBottom: '3rem',
  color: colors.primary,
  fontWeight: '700',
  position: 'relative',
  letterSpacing: '-0.5px',
};

const underlineStyle = {
  content: '""',
  position: 'absolute',
  width: '80px',
  height: '4px',
  background: 'linear-gradient(to right, #00796b, #004d40)',
  bottom: '-15px',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '2px',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.8',
  color: colors.text,
  marginBottom: '3rem',
  textAlign: 'center',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const committeeGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '3em',
  marginTop: '4em',
  maxWidth: '1300px',
  margin: '0 auto',
};

const committeeCardStyle = {
  background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
  padding: '3em 2.5em',
  borderRadius: '20px',
  boxShadow: '0 20px 50px rgba(0, 77, 64, 0.08)',
  textAlign: 'left',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  border: '1px solid rgba(0, 150, 136, 0.1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
};

const committeeCardHoverStyle = {
  ...committeeCardStyle,
  transform: 'translateY(-12px) scale(1.02)',
  boxShadow: '0 30px 60px rgba(0, 77, 64, 0.15)',
  borderColor: 'rgba(0, 150, 136, 0.3)',
};

const committeeHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1.5rem',
};

const committeeNameStyle = {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: colors.primary,
  margin: '0',
  flex: '1',
  lineHeight: '1.3',
  letterSpacing: '-0.3px',
};

const committeeStatusStyle = {
  color: colors.accent,
  fontWeight: '600',
  fontSize: '0.9rem',
  padding: '8px 16px',
  background: 'rgba(197, 48, 48, 0.1)',
  borderRadius: '20px',
  marginLeft: '1rem',
  whiteSpace: 'nowrap',
  border: '1px solid rgba(197, 48, 48, 0.2)',
};

const committeeDescriptionStyle = {
  fontSize: '1.1rem',
  color: colors.text,
  lineHeight: '1.7',
  marginTop: '1.5rem',
  opacity: '0',
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'all 0.4s ease',
  borderTop: `1px solid ${colors.lightGreen}`,
  paddingTop: '0',
};

const expandedDescriptionStyle = {
  ...committeeDescriptionStyle,
  opacity: '1',
  maxHeight: '300px',
  paddingTop: '2rem',
};

const expandIconStyle = {
  color: colors.primary,
  fontSize: '1.3rem',
  fontWeight: 'bold',
  transition: 'transform 0.3s ease',
  marginLeft: '1rem',
};

const expandedIconStyle = {
  ...expandIconStyle,
  transform: 'rotate(180deg)',
};

const statsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '3em',
  marginTop: '4em',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '4em 3em',
  background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
  borderRadius: '20px',
  boxShadow: '0 20px 50px rgba(0, 77, 64, 0.08)',
  border: '1px solid rgba(0, 150, 136, 0.1)',
};

const statItemStyle = {
  textAlign: 'center',
  padding: '2em 1em',
};

const statNumberStyle = {
  fontSize: '3rem',
  fontWeight: '800',
  color: colors.primary,
  marginBottom: '1rem',
  display: 'block',
  background: 'linear-gradient(135deg, #00796b, #004d40)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const statLabelStyle = {
  fontSize: '1.1rem',
  color: colors.text,
  fontWeight: '600',
  letterSpacing: '0.5px',
};

const ctaSectionStyle = {
  ...sectionStyle,
  background: 'linear-gradient(135deg, #004d40 0%, #00796b 100%)',
  color: colors.white,
  clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)',
};

const ctaButtonStyle = {
  padding: '1.4em 3em',
  background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
  color: colors.primary,
  border: 'none',
  borderRadius: '12px',
  fontSize: '1.1rem',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)',
  marginTop: '2em',
  position: 'relative',
  overflow: 'hidden',
};

const ctaButtonHoverStyle = {
  transform: 'translateY(-3px) scale(1.02)',
  boxShadow: '0 15px 35px rgba(255, 255, 255, 0.3)',
};

// Committees data
const committeesData = [
  { 
    name: 'Organizing Committee', 
    content: 'Coming Soon', 
    description: 'Responsible for planning and executing all major events, conferences, and organizational activities. Ensures smooth coordination between different teams and maintains the overall organizational structure for cardiovascular technology advancement.'
  },
  { 
    name: 'Working Committee', 
    content: 'Coming Soon', 
    description: 'Oversees daily operations and ensures smooth functioning of all organizational activities. Manages workflow, coordinates tasks, and maintains operational efficiency across all departments dedicated to cardiovascular care.'
  },
  { 
    name: 'Financial Management Committee', 
    content: 'Coming Soon', 
    description: 'Manages financial resources, budgeting, and ensures fiscal responsibility across all operations. Handles fund allocation, financial reporting, and compliance with financial regulations in the healthcare sector.'
  },
  { 
    name: 'Academic Committee', 
    content: 'Coming Soon', 
    description: 'Develops educational programs, training modules, and academic standards for members. Organizes workshops, seminars, and continuous medical education programs for professional development in cardiovascular technology.'
  },
  { 
    name: 'Radiation Safety Committee', 
    content: 'Coming Soon', 
    description: 'Ensures compliance with radiation safety protocols and promotes safe practices in cardiovascular interventions. Monitors safety standards and implements protective measures for staff and patients during procedures.'
  },
  { 
    name: 'Life Protection Committee', 
    content: 'Coming Soon', 
    description: 'Focuses on patient safety, emergency protocols, and life-saving techniques in cardiovascular care. Develops safety guidelines and emergency response procedures for critical situations.'
  },
  { 
    name: 'Branding & Technical Committee', 
    content: 'Coming Soon', 
    description: 'Handles brand management, technical advancements, and innovation in cardiovascular technology. Promotes the organization and implements new technological solutions for better patient outcomes.'
  },
  { 
    name: 'Placement Committee', 
    content: 'Coming Soon', 
    description: 'Facilitates career opportunities, job placements, and professional development for members. Connects cardiovascular technology professionals with employment opportunities in leading healthcare institutions.'
  },
  { 
    name: 'Regulatory Committee', 
    content: 'Coming Soon', 
    description: 'Ensures compliance with healthcare regulations and maintains ethical standards in practice. Monitors regulatory changes and ensures organizational adherence to medical standards.'
  },
  { 
    name: 'Compliance Committee', 
    content: 'Coming Soon', 
    description: 'Monitors adherence to legal requirements and internal policies across all organizational activities. Conducts audits and ensures regulatory compliance in cardiovascular technology practices.'
  },
];

const statsData = [
  { number: '10+', label: 'Specialized Committees' },
  { number: '50+', label: 'Expert Members' },
  { number: '100%', label: 'Quality Commitment' },
  { number: '24/7', label: 'Dedicated Service' },
];

function Committees() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <HeaderFooter>
    <div style={pageStyle}>

      
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroPatternStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={mainHeadingStyle}>Our Committees</h1>
          <p style={subHeadingStyle}>
            Dedicated teams working together to advance cardiovascular technology and patient care through specialized expertise and collaborative effort in the medical field.
          </p>
        </div>
      </section>

      {/* Committees Section */}
      <section style={contentSectionStyle}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <h2 style={headingStyle}>
            Specialized Committees
            <div style={underlineStyle}></div>
          </h2>
          <p style={paragraphStyle}>
            SNICT's success is driven by our dedicated committees, each focusing on specific aspects of our mission to advance cardiovascular technology, education, and patient care through specialized expertise.
          </p>

          <div style={committeeGridStyle}>
            {committeesData.map((committee, index) => (
              <div
                key={index}
                style={hoveredCard === index ? committeeCardHoverStyle : committeeCardStyle}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <div style={committeeHeaderStyle}>
                  <h3 style={committeeNameStyle}>{committee.name}</h3>
                  <span style={committeeStatusStyle}>{committee.content}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{ fontSize: '1rem', color: colors.secondary, fontStyle: 'italic', fontWeight: '500' }}>
                    {expandedCard === index ? 'Click to collapse details' : 'Click to expand details'}
                  </span>
                  <span style={expandedCard === index ? expandedIconStyle : expandIconStyle}>
                    ▼
                  </span>
                </div>
                <div style={expandedCard === index ? expandedDescriptionStyle : committeeDescriptionStyle}>
                  {committee.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={sectionStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={headingStyle}>
            Committee Impact
            <div style={underlineStyle}></div>
          </h2>
          <div style={statsContainerStyle}>
            {statsData.map((stat, index) => (
              <div key={index} style={statItemStyle}>
                <span style={statNumberStyle}>{stat.number}</span>
                <span style={statLabelStyle}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{...headingStyle, color: colors.white}}>
            Join Our Committees
            <div style={{...underlineStyle, background: 'linear-gradient(to right, #ffffff, #b2dfdb)'}}></div>
          </h2>
          <p style={{...paragraphStyle, color: colors.white}}>
            Interested in contributing your expertise to advance cardiovascular technology? Join one of our specialized committees and help shape the future of patient care and medical innovation.
          </p>
          <button 
            style={{
              ...ctaButtonStyle,
              ...(isButtonHovered ? ctaButtonHoverStyle : {})
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={() => window.location.href = '/contact'}
          >
            Express Your Interest
          </button>
        </div>
      </section>
    </div>
    </HeaderFooter>
  );
}

export default Committees;