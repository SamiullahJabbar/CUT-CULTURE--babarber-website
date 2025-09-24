// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import HeaderFooter from '../components/HeaderFooter';
import homeBanner from '../assets/images/img.png';

// Enhanced Professional Color Scheme
const colors = {
  primary: '#1a365d', // Deep navy blue
  secondary: '#2d6bc9', // Professional blue
  accent: '#e53e3e', // Professional red
  light: '#f7fafc',
  dark: '#2d3748',
  text: '#4a5568',
  white: '#ffffff'
};

// Enhanced Inline CSS styles with premium professional look
const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: '1.6',
  color: colors.text,
  overflowX: 'hidden',
  background: colors.white,
};

const bannerContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
};

const bannerImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(0.6) sepia(0.2) hue-rotate(200deg)',
  transition: 'transform 12s ease-in-out, filter 1.5s ease',
  transform: 'scale(1.1)',
};

const bannerOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(45deg, rgba(26, 54, 93, 0.8) 0%, rgba(45, 107, 201, 0.6) 100%)`,
};

const bannerTextStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: colors.white,
  textAlign: 'center',
  textShadow: '2px 2px 12px rgba(0,0,0,0.5)',
  width: '90%',
  maxWidth: '1200px',
  animation: 'fadeInUp 1.8s ease-out 0.5s both',
  zIndex: 2,
};

const companyNameStyle = {
  fontSize: 'clamp(3rem, 7vw, 6rem)',
  fontWeight: '800',
  letterSpacing: '3px',
  marginBottom: '1rem',
  background: `linear-gradient(to right, ${colors.white}, #a0c4ff, ${colors.white})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textTransform: 'uppercase',
  animation: 'glow 3s ease-in-out infinite alternate',
  position: 'relative',
  display: 'inline-block',
};

const companyNameAfterStyle = {
  content: '""',
  position: 'absolute',
  width: '100%',
  height: '4px',
  background: `linear-gradient(to right, transparent, ${colors.white}, transparent)`,
  bottom: '-12px',
  left: '0',
  borderRadius: '50%',
  filter: 'blur(1px)',
};

const taglineStyle = {
  fontSize: 'clamp(1.2rem, 3vw, 2rem)',
  fontWeight: '300',
  letterSpacing: '1.5px',
  marginBottom: '2.5rem',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: '1.5',
  opacity: '0.95',
  animation: 'fadeIn 2s ease-out 1s both',
};

const ctaButtonStyle = {
  padding: '16px 40px',
  fontSize: '1.1rem',
  fontWeight: '600',
  backgroundColor: 'transparent',
  color: colors.white,
  border: `2px solid rgba(255,255,255,0.9)`,
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  textTransform: 'uppercase',
  letterSpacing: '1.2px',
  marginTop: '2rem',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
};

const ctaButtonBeforeStyle = {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '-100%',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
  transition: 'left 0.6s ease',
};

const scrollIndicatorStyle = {
  position: 'absolute',
  bottom: '30px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: colors.white,
  fontSize: '2rem',
  animation: 'bounce 2s infinite',
  cursor: 'pointer',
  zIndex: 2,
};

const sectionStyle = {
  padding: '5em 2em',
  textAlign: 'center',
  position: 'relative',
};

const textSectionStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
};

const headingStyle = {
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  marginBottom: '2rem',
  color: colors.primary,
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
  height: '4px',
  background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
  bottom: '-12px',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '2px',
  animation: 'expandWidth 1s ease-out 0.5s both',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: colors.text,
  marginBottom: '2rem',
  textAlign: 'center',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const visionMissionContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '3em',
  flexWrap: 'wrap',
  marginTop: '4em',
};

const visionMissionCardStyle = {
  padding: '3em 2.5em',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(26, 54, 93, 0.1)',
  flex: '1',
  minWidth: '320px',
  maxWidth: '450px',
  backgroundColor: colors.white,
  borderTop: `5px solid ${colors.accent}`,
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
};

const visionMissionCardBeforeStyle = {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  opacity: '0',
  transition: 'opacity 0.4s ease',
  zIndex: -1,
};

const cardIconStyle = {
  fontSize: '3.5rem',
  color: colors.accent,
  marginBottom: '1.5rem',
  transition: 'all 0.4s ease',
  filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))',
};

const eventsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
  gap: '2.5em',
  marginTop: '4em',
};

const eventCardStyle = {
  backgroundColor: colors.white,
  borderRadius: '12px',
  boxShadow: '0 8px 25px rgba(26, 54, 93, 0.08)',
  padding: '2.5em',
  textAlign: 'left',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  borderLeft: `4px solid ${colors.accent}`,
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
};

const eventCardAfterStyle = {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  opacity: '0',
  transition: 'opacity 0.4s ease',
  zIndex: -1,
};

const eventDateStyle = {
  backgroundColor: colors.accent,
  color: colors.white,
  padding: '8px 18px',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '600',
  display: 'inline-block',
  marginBottom: '1.5rem',
  boxShadow: '0 4px 12px rgba(229, 62, 62, 0.3)',
};

const buttonStyle = {
  padding: '12px 28px',
  backgroundColor: colors.primary,
  color: colors.white,
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  marginTop: '2em',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontSize: '0.9rem',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
};

const buttonBeforeStyle = {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '-100%',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
  transition: 'left 0.5s ease',
  zIndex: -1,
};

const galleryGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5em',
  marginTop: '4em',
};

const galleryImageContainerStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
  height: '260px',
  cursor: 'pointer',
};

const galleryImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'all 0.5s ease',
  filter: 'brightness(0.9)',
};

const imageCaptionStyle = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  background: `linear-gradient(transparent, rgba(26, 54, 93, 0.9))`,
  color: colors.white,
  padding: '1.2rem',
  transform: 'translateY(100%)',
  transition: 'transform 0.4s ease',
  textAlign: 'center',
  fontSize: '1rem',
  fontWeight: '500',
};

const statsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop: '4em',
  gap: '1.5em',
};

const statItemStyle = {
  textAlign: 'center',
  padding: '1.5em',
  minWidth: '180px',
};

const statNumberStyle = {
  fontSize: '3rem',
  fontWeight: '800',
  color: colors.primary,
  marginBottom: '0.5rem',
  background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const statLabelStyle = {
  fontSize: '1.1rem',
  color: colors.text,
  fontWeight: '500',
};

// Animation keyframes
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate(-50%, -30%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes glow {
    0% {
      text-shadow: 0 0 5px rgba(255,255,255,0.4);
    }
    100% {
      text-shadow: 0 0 15px rgba(255,255,255,0.6), 0 0 25px rgba(255,255,255,0.4);
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-15px) translateX(-50%);
    }
    60% {
      transform: translateY(-8px) translateX(-50%);
    }
  }
  
  @keyframes expandWidth {
    from { width: 0; }
    to { width: 80px; }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
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
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  @keyframes shine {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

// Updated dummy data without icons
const upcomingEvents = [
  { 
    title: 'CME on Advanced ECG', 
    date: '2025-11-15',
    description: 'Comprehensive workshop on advanced ECG interpretation techniques for cardiovascular technologists.',
  },
  { 
    title: 'Annual Conference 2025', 
    date: '2025-12-05',
    description: 'Our flagship event featuring renowned speakers, workshops, and latest advancements in cardiovascular technology.',
  },
  { 
    title: 'Interventional Cardiology Workshop', 
    date: '2025-10-20',
    description: 'Hands-on training session on the latest interventional cardiology procedures and equipment.',
  },
];

const previousEvents = [
  {
    title: 'Inaugural SNICT Symposium',
    date: '2025-05-10',
    description: 'A successful inaugural symposium bringing together leaders and innovators in cardiovascular technology.',
  },
  {
    title: 'Cardiology Tech Meetup',
    date: '2025-03-22',
    description: 'A regional meetup for technicians to network and share insights on new diagnostic tools.',
  },
  {
    title: 'Skills Training for Angiography',
    date: '2025-01-18',
    description: 'A hands-on workshop focused on refining skills for complex angiography procedures.',
  },
];

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Annual Conference 2024' },
  { id: 2, src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Workshop Session' },
  { id: 3, src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Networking Event' },
  { id: 4, src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Technical Exhibition' },
];

const statsData = [
  { number: '500+', label: 'Members' },
  { number: '25+', label: 'Events Organized' },
  { number: '15+', label: 'Cities' },
  { number: '50+', label: 'Expert Speakers' },
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced hover effects
  const handleCardMouseEnter = (e) => {
    e.target.style.transform = 'translateY(-12px) scale(1.02)';
    e.target.style.boxShadow = '0 20px 40px rgba(26, 54, 93, 0.15)';
    
    const before = e.target.querySelector('.card-before');
    if (before) before.style.opacity = '1';
    
    const content = e.target.querySelector('.card-content');
    if (content) content.style.color = colors.white;
  };

  const handleCardMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0) scale(1)';
    e.target.style.boxShadow = '0 10px 30px rgba(26, 54, 93, 0.1)';
    
    const before = e.target.querySelector('.card-before');
    if (before) before.style.opacity = '0';
    
    const content = e.target.querySelector('.card-content');
    if (content) content.style.color = 'inherit';
  };

  const handleImageMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.08)';
    e.target.style.filter = 'brightness(1.05)';
    
    const container = e.target.parentElement;
    const caption = container.querySelector('.image-caption');
    if (caption) caption.style.transform = 'translateY(0)';
  };

  const handleImageMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.filter = 'brightness(0.9)';
    
    const container = e.target.parentElement;
    const caption = container.querySelector('.image-caption');
    if (caption) caption.style.transform = 'translateY(100%)';
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = colors.secondary;
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 6px 15px rgba(45, 107, 201, 0.3)';
    
    const before = e.target.querySelector('.button-before');
    if (before) before.style.animation = 'shine 0.8s ease';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = colors.primary;
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
    
    const before = e.target.querySelector('.button-before');
    if (before) before.style.animation = 'none';
  };

  const handleCtaHover = (e) => {
    e.target.style.backgroundColor = colors.white;
    e.target.style.color = colors.primary;
    e.target.style.borderColor = colors.white;
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 8px 20px rgba(255,255,255,0.2)';
    
    const before = e.target.querySelector('.cta-before');
    if (before) before.style.left = '100%';
  };

  const handleCtaLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = colors.white;
    e.target.style.borderColor = 'rgba(255,255,255,0.9)';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
    
    const before = e.target.querySelector('.cta-before');
    if (before) before.style.left = '-100%';
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeaderFooter>
    <div style={pageStyle}>
      <style>{animationStyles}</style>
      
      {/* Hero/Banner Section */}
      <div style={bannerContainerStyle}>
        <div style={bannerOverlayStyle}></div>
        <img 
          src={homeBanner} 
          alt="SNICT Banner" 
          style={bannerImageStyle} 
          className="parallax"
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.12)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1.1)'}
        />
        <div style={bannerTextStyle}>
          <h1 style={companyNameStyle}>
            SNICT
            <span style={companyNameAfterStyle}></span>
          </h1>
          <h2 style={taglineStyle}>SOCIETY OF NEO INTERVENTIONAL CARDIOVASCULAR TECHNOLOGISTS</h2>
          <p style={{...paragraphStyle, color: 'white', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem', fontSize: '1.2rem'}}>
            Advancing cardiovascular care through innovation, education, and collaboration
          </p>
          <button 
            style={ctaButtonStyle}
            onMouseEnter={handleCtaHover}
            onMouseLeave={handleCtaLeave}
          >
            <span style={ctaButtonBeforeStyle} className="cta-before"></span>
            Explore Our Mission
          </button>
        </div>
        <div style={scrollIndicatorStyle} onClick={scrollToContent}>
          ↓
        </div>
      </div>

      {/* Stats Section */}
      <div style={{...sectionStyle, backgroundColor: colors.light, padding: '4em 2em'}}>
        <div style={statsContainerStyle}>
          {statsData.map((stat, index) => (
            <div key={index} style={statItemStyle}>
              <div style={statNumberStyle}>{stat.number}</div>
              <div style={statLabelStyle}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About SNICT Section */}
      <div style={sectionStyle}>
        <div style={{...textSectionStyle, display: 'flex', alignItems: 'center', gap: '4em', flexDirection: window.innerWidth < 768 ? 'column' : 'row'}}>
          <div style={{flex: '1'}}>
             <img 
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="About SNICT" 
              style={{
                width: '100%', 
                height: 'auto', 
                borderRadius: '12px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
          <div style={{flex: '1', textAlign: 'left'}}>
            <h2 style={{...headingStyle, textAlign: 'left'}}>
              About Us
              <div style={{...underlineStyle, left: '0', transform: 'translateX(0)'}}></div>
            </h2>
            <p style={{...paragraphStyle, textAlign: 'left', maxWidth: 'none', margin: 0}}>
              SNICT Indian association is primarily formed with an intention of learning and improving the knowledge of cardiovascular technologists in line with newer advances in the field of cardiology. It was founded in 2025 by a group of cardiovascular technologists in Andhra Pradesh. The group was formed with an idea of educating technicians with newer treatment options. The is formed to discuss complicated procedures/techniques and learning from our experiences. We also intend to conduct meetings/annual conferences with an intention of exchanging ideas.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div style={{...sectionStyle, backgroundColor: '#f0f7ff'}}>
        <h2 style={headingStyle}>
          Our Vision & Mission
          <div style={underlineStyle}></div>
        </h2>
        <div style={visionMissionContainerStyle}>
            <div 
              style={visionMissionCardStyle}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
                <div style={visionMissionCardBeforeStyle} className="card-before"></div>
                <div className="card-content">
                  <h3 style={{...headingStyle, fontSize: '1.6rem', marginBottom: '1.5rem', color: 'inherit'}}>VISION</h3>
                  <p style={{...paragraphStyle, textAlign: 'center', color: 'inherit'}}>
                      TRANSFORMING CARDIOVASCULAR CARE THROUGH INNOVATION, COLLABORATION AND EXCELLENCE, PERSONALIZED, COMPASSIONATE AND CUTTING-EDGE INTERVENTIONS.
                  </p>
                </div>
            </div>
            <div 
              style={visionMissionCardStyle}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
                <div style={visionMissionCardBeforeStyle} className="card-before"></div>
                <div className="card-content">
                  <h3 style={{...headingStyle, fontSize: '1.6rem', marginBottom: '1.5rem', color: 'inherit'}}>MISSION</h3>
                  <p style={{...paragraphStyle, textAlign: 'center', color: 'inherit'}}>
                      To advance the field of cardiovascular interventions through innovation, education and collaboration, improving patient outcomes and quality of life.
                  </p>
                </div>
            </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>
          Upcoming Events
          <div style={underlineStyle}></div>
        </h2>
        <div style={eventsGridStyle}>
          {upcomingEvents.map((event, index) => (
            <div 
              key={index} 
              style={eventCardStyle}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div style={eventCardAfterStyle} className="card-before"></div>
              <div style={eventDateStyle}>{event.date}</div>
              <h3 style={{marginBottom: '1.5rem', color: colors.primary, fontSize: '1.4rem'}}>{event.title}</h3>
              <p style={paragraphStyle}>{event.description}</p>
              <button 
                style={buttonStyle}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span style={buttonBeforeStyle} className="button-before"></span>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Events Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>
          Previous Events
          <div style={underlineStyle}></div>
        </h2>
        <div style={eventsGridStyle}>
          {previousEvents.map((event, index) => (
            <div 
              key={index} 
              style={eventCardStyle}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div style={eventCardAfterStyle} className="card-before"></div>
              <div style={eventDateStyle}>{event.date}</div>
              <h3 style={{marginBottom: '1.5rem', color: colors.primary, fontSize: '1.4rem'}}>{event.title}</h3>
              <p style={paragraphStyle}>{event.description}</p>
              <button 
                style={buttonStyle}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span style={buttonBeforeStyle} className="button-before"></span>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Events Gallery Section */}
      <div style={{...sectionStyle, backgroundColor: '#f0f7ff'}}>
        <h2 style={headingStyle}>
          Events Gallery
          <div style={underlineStyle}></div>
        </h2>
        <p style={{...paragraphStyle, textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem'}}>
          Take a look at some memorable moments from our past events and conferences.
        </p>
        <div style={galleryGridStyle}>
          {galleryImages.map((image) => (
            <div key={image.id} style={galleryImageContainerStyle}>
              <img 
                src={image.src} 
                alt="Event Gallery" 
                style={galleryImageStyle}
                onMouseEnter={handleImageMouseEnter}
                onMouseLeave={handleImageMouseLeave}
              />
              <div style={imageCaptionStyle} className="image-caption">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div style={{...sectionStyle, background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`, color: colors.white, padding: '6em 2em'}}>
        <div style={textSectionStyle}>
          <h2 style={{...headingStyle, color: colors.white, fontSize: '2.5rem'}}>
            Join Our Community
            <div style={{...underlineStyle, background: `linear-gradient(to right, ${colors.white}, #a0c4ff)`}}></div>
          </h2>
          <p style={{...paragraphStyle, color: colors.white, textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem'}}>
            Become a member of SNICT and be part of the advancement in cardiovascular technology
          </p>
          <button 
            style={{
              ...buttonStyle, 
              backgroundColor: colors.white, 
              color: colors.primary, 
              padding: '16px 40px',
              fontSize: '1rem',
              borderRadius: '50px',
              border: `2px solid ${colors.white}`,
              fontWeight: '600'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f0f7ff';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = colors.white;
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Become a Member
          </button>
        </div>
      </div>
    </div>
    </HeaderFooter>
  );
}

export default Home;