// src/pages/About.js

import React, { useState, useEffect } from 'react';
import HeaderFooter from '../components/HeaderFooter';

// Premium Inline CSS styles
const pageStyle = {
  minHeight: '100vh',
  fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: '1.6',
  color: '#333',
  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
};

const heroSectionStyle = {
  background: 'linear-gradient(135deg, #0a2463 0%, #3e92cc 100%)',
  color: 'white',
  padding: '8em 2em 6em',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
};

const heroOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(10, 36, 99, 0.8)',
};

const heroContentStyle = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '1000px',
  margin: '0 auto',
};

const mainHeadingStyle = {
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: '800',
  marginBottom: '1.5rem',
  background: 'linear-gradient(to right, #ffffff, #c2e6ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textTransform: 'uppercase',
  letterSpacing: '2px',
};

const subHeadingStyle = {
  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
  fontWeight: '300',
  marginBottom: '2rem',
  opacity: '0.9',
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
  background: 'white',
};

const headingStyle = {
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  marginBottom: '3rem',
  color: '#0a2463',
  fontWeight: '700',
  position: 'relative',
  display: 'inline-block',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

const underlineStyle = {
  content: '""',
  position: 'absolute',
  width: '80px',
  height: '5px',
  background: 'linear-gradient(to right, #0a2463, #3e92cc)',
  bottom: '-15px',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '3px',
};

const paragraphStyle = {
  fontSize: '1.15rem',
  lineHeight: '1.9',
  color: '#444',
  marginBottom: '2rem',
  textAlign: 'center',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const highlightTextStyle = {
  color: '#0a2463',
  fontWeight: '600',
  background: 'linear-gradient(transparent 70%, rgba(62, 146, 204, 0.3) 70%)',
  padding: '0 2px',
};

const missionVisionStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '4em',
  flexWrap: 'wrap',
  marginTop: '4em',
};

const missionVisionCardStyle = {
  flex: '1',
  minWidth: '300px',
  maxWidth: '400px',
  padding: '3em 2em',
  background: 'white',
  borderRadius: '20px',
  boxShadow: '0 15px 40px rgba(10, 36, 99, 0.1)',
  borderTop: '5px solid #0a2463',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  position: 'relative',
  overflow: 'hidden',
};

const cardIconStyle = {
  fontSize: '3.5rem',
  color: '#0a2463',
  marginBottom: '1.5rem',
  transition: 'all 0.3s ease',
};

const teamSectionStyle = {
  ...sectionStyle,
  background: 'linear-gradient(135deg, #f0f7ff 0%, #e2e8f0 100%)',
};

const roleTabsStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1em',
  marginBottom: '3em',
};

const tabButtonStyle = {
  padding: '12px 24px',
  backgroundColor: 'transparent',
  color: '#0a2463',
  border: '2px solid #0a2463',
  borderRadius: '30px',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontSize: '0.9rem',
};

const activeTabStyle = {
  ...tabButtonStyle,
  backgroundColor: '#0a2463',
  color: 'white',
  boxShadow: '0 5px 15px rgba(10, 36, 99, 0.3)',
};

const teamGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '3em',
  marginTop: '2em',
  justifyContent: 'center',
};

const memberCardStyle = {
  background: 'white',
  padding: '2.5em 2em',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(10, 36, 99, 0.1)',
  textAlign: 'center',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  borderTop: '4px solid #0a2463',
  position: 'relative',
  overflow: 'hidden',
};

const memberImageContainerStyle = {
  width: '160px',
  height: '160px',
  borderRadius: '50%',
  margin: '0 auto 1.5em',
  border: '4px solid #0a2463',
  padding: '4px',
  background: 'white',
  boxShadow: '0 5px 15px rgba(10, 36, 99, 0.2)',
  transition: 'all 0.3s ease',
};

const memberImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  transition: 'all 0.3s ease',
};

const memberNameStyle = {
  fontSize: '1.4rem',
  fontWeight: '700',
  color: '#0a2463',
  marginBottom: '0.5em',
};

const memberRoleStyle = {
  color: '#3e92cc',
  fontWeight: '600',
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '1em',
  padding: '5px 15px',
  background: 'rgba(62, 146, 204, 0.1)',
  borderRadius: '20px',
  display: 'inline-block',
};

const statsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '2em',
  marginTop: '4em',
  padding: '3em 2em',
  background: 'white',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(10, 36, 99, 0.1)',
};

const statItemStyle = {
  textAlign: 'center',
  padding: '1em',
  minWidth: '150px',
};

const statNumberStyle = {
  fontSize: '3rem',
  fontWeight: '800',
  color: '#0a2463',
  marginBottom: '0.5rem',
  background: 'linear-gradient(to right, #0a2463, #3e92cc)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const statLabelStyle = {
  fontSize: '1.1rem',
  color: '#555',
  fontWeight: '500',
};

const ctaSectionStyle = {
  ...sectionStyle,
  background: 'linear-gradient(135deg, #0a2463 0%, #3e92cc 100%)',
  color: 'white',
  padding: '6em 2em',
};

const ctaButtonStyle = {
  padding: '15px 40px',
  backgroundColor: 'white',
  color: '#0a2463',
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  fontWeight: '700',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontSize: '1.1rem',
  marginTop: '2em',
  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
};

// Animation keyframes
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

// Team data with more details
const teamMembers = {
  Faculty: [
    { 
      name: 'Dr. A. P. J. Abdul Kalam', 
      role: 'Senior Faculty', 
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Cardiology Specialist with 20+ years of experience'
    },
    { 
      name: 'Dr. C.V. Raman', 
      role: 'Faculty Member', 
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Interventional Cardiology Expert'
    },
  ],
  Adviser: [
    { 
      name: 'Dr. V. K. Singh', 
      role: 'Chief Adviser', 
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Strategic Advisor with 30+ years in healthcare'
    },
  ],
  Coordinator: [
    { 
      name: 'Ms. Surbhi Kumari', 
      role: 'Program Coordinator', 
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Event Management and Coordination Specialist'
    },
  ],
  'Office Bearer': [
    { 
      name: 'Mr. Rohan Sharma', 
      role: 'Office Bearer', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Administrative and Operations Management'
    },
  ],
  Members: [
    { 
      name: 'Priya Patel', 
      role: 'Active Member', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Cardiovascular Technologist'
    },
    { 
      name: 'Sameer Khan', 
      role: 'Technical Member', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Medical Equipment Specialist'
    },
    { 
      name: 'Anjali Gupta', 
      role: 'Research Member', 
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      description: 'Clinical Research Coordinator'
    },
  ],
};

const statsData = [
  { number: '500+', label: 'Professional Members' },
  { number: '25+', label: 'Years of Combined Experience' },
  { number: '15+', label: 'Cities Covered' },
  { number: '50+', label: 'Successful Events' },
];

function About() {
  const [activeRole, setActiveRole] = useState('Faculty');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTabClick = (role) => {
    setActiveRole(role);
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 36, 99, 0.2)';
    
    const image = e.currentTarget.querySelector('.member-image');
    if (image) {
      image.style.transform = 'scale(1.1)';
    }
    
    const imageContainer = e.currentTarget.querySelector('.member-image-container');
    if (imageContainer) {
      imageContainer.style.transform = 'scale(1.05)';
      imageContainer.style.borderColor = '#3e92cc';
    }
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 10px 30px rgba(10, 36, 99, 0.1)';
    
    const image = e.currentTarget.querySelector('.member-image');
    if (image) {
      image.style.transform = 'scale(1)';
    }
    
    const imageContainer = e.currentTarget.querySelector('.member-image-container');
    if (imageContainer) {
      imageContainer.style.transform = 'scale(1)';
      imageContainer.style.borderColor = '#0a2463';
    }
  };

  const handleMissionCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 36, 99, 0.15)';
    
    const icon = e.currentTarget.querySelector('.card-icon');
    if (icon) {
      icon.style.transform = 'scale(1.1)';
      icon.style.animation = 'float 2s ease-in-out infinite';
    }
  };

  const handleMissionCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 15px 40px rgba(10, 36, 99, 0.1)';
    
    const icon = e.currentTarget.querySelector('.card-icon');
    if (icon) {
      icon.style.transform = 'scale(1)';
      icon.style.animation = 'none';
    }
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-3px)';
    e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
  };

  return (
    <HeaderFooter>
    <div style={pageStyle}>
      <style>{animationStyles}</style>
      
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={mainHeadingStyle}>About SNICT</h1>
          <p style={subHeadingStyle}>
            Society of Neo Interventional Cardiovascular Technologists - Pioneering excellence in cardiovascular care through innovation, education, and collaboration.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section style={contentSectionStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={headingStyle}>
            Our Story
            <div style={underlineStyle}></div>
          </h2>
          <p style={paragraphStyle}>
            <span style={highlightTextStyle}>SNICT Indian association</span> is primarily formed with an intention of learning and improving the knowledge of cardiovascular technologists in line with newer advances in the field of cardiology. It was founded in <span style={highlightTextStyle}>2025 by a group of cardiovascular technologists in Andhra Pradesh</span>.
          </p>
          <p style={paragraphStyle}>
            The group was formed with an idea of educating technicians with newer treatment options. SNICT is formed to discuss complicated procedures/techniques and learning from our experiences. We also intend to conduct meetings/annual conferences with an intention of exchanging ideas and fostering professional growth.
          </p>

          {/* Mission & Vision Cards */}
          <div style={missionVisionStyle}>
            <div 
              style={missionVisionCardStyle}
              onMouseEnter={handleMissionCardHover}
              onMouseLeave={handleMissionCardLeave}
            >
              <div style={cardIconStyle} className="card-icon">🎯</div>
              <h3 style={{...headingStyle, fontSize: '1.8rem', marginBottom: '1.5rem'}}>Our Mission</h3>
              <p style={paragraphStyle}>
                To advance the field of cardiovascular interventions through innovation, education and collaboration, improving patient outcomes and quality of life.
              </p>
            </div>
            <div 
              style={missionVisionCardStyle}
              onMouseEnter={handleMissionCardHover}
              onMouseLeave={handleMissionCardLeave}
            >
              <div style={cardIconStyle} className="card-icon">👁️</div>
              <h3 style={{...headingStyle, fontSize: '1.8rem', marginBottom: '1.5rem'}}>Our Vision</h3>
              <p style={paragraphStyle}>
                Transforming cardiovascular care through innovation, collaboration and excellence, personalized, compassionate and cutting-edge interventions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={sectionStyle}>
        <div style={statsContainerStyle}>
          {statsData.map((stat, index) => (
            <div key={index} style={statItemStyle}>
              <div style={statNumberStyle}>{stat.number}</div>
              <div style={statLabelStyle}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={teamSectionStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={headingStyle}>
            Meet Our Team
            <div style={underlineStyle}></div>
          </h2>
          <p style={paragraphStyle}>
            Our dedicated team of professionals is committed to advancing cardiovascular technology and education.
          </p>

          {/* Role Tabs */}
          <div style={roleTabsStyle}>
            {Object.keys(teamMembers).map((role) => (
              <button
                key={role}
                style={activeRole === role ? activeTabStyle : tabButtonStyle}
                onClick={() => handleTabClick(role)}
                onMouseEnter={(e) => {
                  if (activeRole !== role) {
                    e.target.style.backgroundColor = '#0a2463';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeRole !== role) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#0a2463';
                  }
                }}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div style={teamGridStyle}>
            {teamMembers[activeRole].map((member, index) => (
              <div
                key={index}
                style={memberCardStyle}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div style={memberImageContainerStyle} className="member-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={memberImageStyle}
                    className="member-image"
                  />
                </div>
                <h4 style={memberNameStyle}>{member.name}</h4>
                <p style={memberRoleStyle}>{member.role}</p>
                <p style={{...paragraphStyle, fontSize: '0.95rem', marginBottom: '0'}}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{...headingStyle, color: 'white'}}>
            Join Our Community
            <div style={{...underlineStyle, background: 'linear-gradient(to right, #ffffff, #a0d0ff)'}}></div>
          </h2>
          <p style={{...paragraphStyle, color: 'white', fontSize: '1.2rem'}}>
            Become part of SNICT and contribute to the advancement of cardiovascular technology and patient care.
          </p>
          <button 
            style={ctaButtonStyle}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Become a Member Today
          </button>
        </div>
      </section>
    </div>
    </HeaderFooter>
  );
}

export default About;