// src/pages/Events.js

import React, { useState, useEffect } from 'react';
import HeaderFooter from '../components/HeaderFooter';

// Professional Color Scheme
const colors = {
  primary: '#1a365d', // Deep navy blue
  secondary: '#2b6cb0', // Professional blue
  accent: '#c53030', // Professional red
  light: '#f7fafc',
  dark: '#2d3748',
  text: '#4a5568',
  white: '#ffffff',
  gray: '#718096'
};

// Premium Inline CSS styles
const pageStyle = {
  minHeight: '100vh',
  fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: '1.6',
  color: colors.text,
  background: colors.white,
};

const heroSectionStyle = {
  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  color: colors.white,
  padding: '6em 2em 4em',
  textAlign: 'center',
  position: 'relative',
};

const heroContentStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2,
};

const mainHeadingStyle = {
  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
  fontWeight: '800',
  marginBottom: '1.5rem',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  lineHeight: '1.2',
};

const subHeadingStyle = {
  fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
  fontWeight: '400',
  marginBottom: '2rem',
  opacity: '0.95',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: '1.6',
};

const sectionStyle = {
  padding: '5em 2em',
  textAlign: 'center',
  position: 'relative',
};

const contentSectionStyle = {
  ...sectionStyle,
  background: colors.white,
};

const altSectionStyle = {
  ...sectionStyle,
  background: colors.light,
};

const headingStyle = {
  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
  marginBottom: '3rem',
  color: colors.primary,
  fontWeight: '700',
  position: 'relative',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

const underlineStyle = {
  content: '""',
  position: 'absolute',
  width: '80px',
  height: '4px',
  background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
  bottom: '-15px',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '2px',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: colors.text,
  marginBottom: '3rem',
  textAlign: 'center',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
  gap: '2.5em',
  marginTop: '3em',
  maxWidth: '1200px',
  margin: '0 auto',
};

const cardStyle = {
  background: colors.white,
  borderRadius: '8px',
  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
  textAlign: 'left',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  cursor: 'pointer',
};

const cardHoverStyle = {
  ...cardStyle,
  transform: 'translateY(-5px)',
  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
};

const eventImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  transition: 'all 0.3s ease',
};

const eventContentStyle = {
  padding: '2em',
};

const eventTitleStyle = {
  fontSize: '1.3rem',
  fontWeight: '700',
  color: colors.primary,
  marginBottom: '1rem',
  lineHeight: '1.3',
};

const eventDateStyle = {
  fontSize: '1rem',
  color: colors.accent,
  fontWeight: '600',
  marginBottom: '0.5rem',
  padding: '4px 12px',
  background: 'rgba(197, 48, 48, 0.1)',
  borderRadius: '4px',
  display: 'inline-block',
};

const eventLocationStyle = {
  fontSize: '0.95rem',
  color: colors.gray,
  fontWeight: '500',
  marginBottom: '1.5rem',
  fontStyle: 'italic',
};

const eventDescriptionStyle = {
  fontSize: '1rem',
  color: colors.text,
  lineHeight: '1.6',
  marginBottom: '1.5rem',
};

const registerButtonStyle = {
  padding: '10px 24px',
  backgroundColor: colors.primary,
  color: colors.white,
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontSize: '0.9rem',
  width: '100%',
};

const comingSoonCardStyle = {
  ...cardStyle,
  background: colors.light,
  border: `2px dashed ${colors.secondary}`,
  textAlign: 'center',
  padding: '3em 2em',
};

const comingSoonStyle = {
  color: colors.secondary,
  fontStyle: 'italic',
  fontWeight: '600',
  fontSize: '1.1rem',
  padding: '8px 20px',
  background: 'rgba(43, 108, 176, 0.1)',
  borderRadius: '4px',
  display: 'inline-block',
  marginBottom: '1rem',
};

const galleryGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5em',
  marginTop: '3em',
  maxWidth: '1200px',
  margin: '0 auto',
};

const galleryImageContainerStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
  height: '220px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const galleryImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'all 0.3s ease',
};

const imageOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(transparent, rgba(26, 54, 93, 0.8))`,
  display: 'flex',
  alignItems: 'flex-end',
  padding: '1.5em',
  color: colors.white,
  opacity: '0',
  transition: 'all 0.3s ease',
};

const imageCaptionStyle = {
  fontSize: '1rem',
  fontWeight: '600',
  transform: 'translateY(20px)',
  transition: 'all 0.3s ease',
};

const statsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2em',
  marginTop: '4em',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '3em 2em',
  background: colors.white,
  borderRadius: '8px',
  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
};

const statItemStyle = {
  textAlign: 'center',
  padding: '1em',
};

const statNumberStyle = {
  fontSize: '2.5rem',
  fontWeight: '800',
  color: colors.primary,
  marginBottom: '0.5rem',
  display: 'block',
};

const statLabelStyle = {
  fontSize: '1rem',
  color: colors.text,
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const ctaSectionStyle = {
  ...sectionStyle,
  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  color: colors.white,
};

const ctaButtonStyle = {
  padding: '14px 36px',
  backgroundColor: colors.white,
  color: colors.primary,
  border: `2px solid ${colors.white}`,
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontSize: '1rem',
  marginTop: '2em',
};

// Event data with relevant images
const upcomingEvents = [
  { 
    title: 'Annual Conference 2025', 
    date: 'December 05, 2025', 
    location: 'Hyderabad International Convention Center',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Our flagship event featuring renowned speakers, workshops, and latest advancements in cardiovascular technology.'
  },
  { 
    title: 'Advanced ECG Workshop', 
    date: 'November 15, 2025', 
    location: 'Bangalore Medical Institute',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Comprehensive workshop on advanced ECG interpretation techniques for cardiovascular technologists.'
  },
  { 
    title: 'Interventional Cardiology Masterclass', 
    date: 'October 20, 2025', 
    location: 'Delhi Heart Center',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Hands-on training session on the latest interventional cardiology procedures and equipment.'
  },
];

const previousEvents = [
  { 
    title: 'Cardiology Summit 2024', 
    date: 'March 10, 2024', 
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Annual cardiology summit with international speakers and cutting-edge research presentations.'
  },
  { 
    title: 'Interventional Cardiology Course', 
    date: 'September 22, 2023', 
    location: 'Chennai',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Comprehensive course covering advanced techniques in interventional cardiology.'
  },
  { 
    title: 'Cardiovascular Tech Expo', 
    date: 'June 15, 2023', 
    location: 'Kolkata',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Exhibition of latest cardiovascular technology and equipment from leading manufacturers.'
  },
];

const galleryImages = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
    caption: 'Annual Conference 2024' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
    caption: 'Workshop Session' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
    caption: 'Networking Event' 
  },
  { 
    id: 4, 
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
    caption: 'Technical Exhibition' 
  },
  { 
    id: 5, 
    src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
    caption: 'Expert Panel Discussion' 
  },
  { 
    id: 6, 
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
    caption: 'Award Ceremony' 
  },
];

const statsData = [
  { number: '50+', label: 'Events Organized' },
  { number: '5000+', label: 'Participants' },
  { number: '100+', label: 'Expert Speakers' },
  { number: '15+', label: 'Cities Covered' },
];

function Events() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleImageHover = (index) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = colors.secondary;
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = colors.primary;
    e.target.style.transform = 'translateY(0)';
  };

  const handleCtaHover = (e) => {
    e.target.style.backgroundColor = colors.light;
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleCtaLeave = (e) => {
    e.target.style.backgroundColor = colors.white;
    e.target.style.transform = 'translateY(0)';
  };

  return (
    <HeaderFooter>
    <div style={pageStyle}>
      
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <h1 style={mainHeadingStyle}>Events & Conferences</h1>
          <p style={subHeadingStyle}>
            Join us for transformative educational experiences, networking opportunities, and the latest advancements in cardiovascular technology.
          </p>
        </div>
      </section>

      {/* CME's Section */}
      <section style={altSectionStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={headingStyle}>
            Continuing Medical Education
            <div style={underlineStyle}></div>
          </h2>
          <div style={gridContainerStyle}>
            <div style={comingSoonCardStyle}>
              <h3 style={eventTitleStyle}>CME Programs</h3>
              <p style={comingSoonStyle}>Advanced CME content coming soon</p>
              <p style={{...paragraphStyle, fontSize: '1rem', marginTop: '1rem'}}>
                Stay tuned for our comprehensive Continuing Medical Education programs designed for cardiovascular professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section style={contentSectionStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={headingStyle}>
            Upcoming Events
            <div style={underlineStyle}></div>
          </h2>
          <p style={paragraphStyle}>
            Mark your calendars for these exciting upcoming events featuring leading experts in cardiovascular technology.
          </p>
          <div style={gridContainerStyle}>
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                style={hoveredCard === index ? cardHoverStyle : cardStyle}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  style={{
                    ...eventImageStyle,
                    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div style={eventContentStyle}>
                  <h3 style={eventTitleStyle}>{event.title}</h3>
                  <div style={eventDateStyle}>{event.date}</div>
                  <p style={eventLocationStyle}>{event.location}</p>
                  <p style={eventDescriptionStyle}>
                    {event.description}
                  </p>
                  <button 
                    style={registerButtonStyle}
                    onMouseEnter={handleButtonHover}
                    onMouseLeave={handleButtonLeave}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Events Section */}
      <section style={altSectionStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={headingStyle}>
            Past Events
            <div style={underlineStyle}></div>
          </h2>
          <p style={paragraphStyle}>
            Relive the success of our previous events that have shaped the cardiovascular technology landscape.
          </p>
          <div style={gridContainerStyle}>
            {previousEvents.map((event, index) => (
              <div
                key={index}
                style={hoveredCard === index + 10 ? cardHoverStyle : cardStyle}
                onMouseEnter={() => handleCardHover(index + 10)}
                onMouseLeave={handleCardLeave}
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  style={{
                    ...eventImageStyle,
                    transform: hoveredCard === index + 10 ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div style={eventContentStyle}>
                  <h3 style={eventTitleStyle}>{event.title}</h3>
                  <div style={eventDateStyle}>{event.date}</div>
                  <p style={eventLocationStyle}>{event.location}</p>
                  <p style={eventDescriptionStyle}>
                    {event.description}
                  </p>
                  <button 
                    style={registerButtonStyle}
                    onMouseEnter={handleButtonHover}
                    onMouseLeave={handleButtonLeave}
                  >
                    View Photos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={contentSectionStyle}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={headingStyle}>
            Our Event Impact
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

      {/* Events Gallery Section */}
      <section style={altSectionStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={headingStyle}>
            Events Gallery
            <div style={underlineStyle}></div>
          </h2>
          <p style={paragraphStyle}>
            Capturing memorable moments from our events, conferences, and workshops.
          </p>
          <div style={galleryGridStyle}>
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                style={{
                  ...galleryImageContainerStyle,
                  transform: hoveredImage === index ? 'translateY(-5px)' : 'translateY(0)'
                }}
                onMouseEnter={() => handleImageHover(index)}
                onMouseLeave={handleImageLeave}
              >
                <img 
                  src={image.src} 
                  alt="Event Gallery" 
                  style={{
                    ...galleryImageStyle,
                    transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div style={{
                  ...imageOverlayStyle,
                  opacity: hoveredImage === index ? 1 : 0
                }}>
                  <div style={{
                    ...imageCaptionStyle,
                    transform: hoveredImage === index ? 'translateY(0)' : 'translateY(20px)'
                  }}>
                    {image.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{...headingStyle, color: colors.white}}>
            Stay Updated
            <div style={{...underlineStyle, background: `linear-gradient(to right, ${colors.white}, ${colors.accent})`}}></div>
          </h2>
          <p style={{...paragraphStyle, color: colors.white}}>
            Never miss an event! Subscribe to our newsletter for the latest updates on upcoming conferences and workshops.
          </p>
          <button 
            style={ctaButtonStyle}
            onMouseEnter={handleCtaHover}
            onMouseLeave={handleCtaLeave}
          >
            Subscribe to Newsletter
          </button>
        </div>
      </section>
    </div>
    </HeaderFooter>
  );
}

export default Events;