import React, { useState, useRef } from 'react'; // useState को वापस लाना ज़रूरी है
import Layout from '../components/HeaderFooter';

// Define the hover styles once outside the component
const hoverStyles = {
  // Styles for valueCard: transform: translateY(-10px) scale(1.02);
  valueHover: { transform: 'translateY(-10px) scale(1.02)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
  // Styles for missionCard: transform: scale(1.03);
  missionHover: { transform: 'scale(1.03)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
  // CTA pulse is handled by CSS animation, no inline hover needed unless we change the animation approach
};

const AboutPage = () => {
  // Use States to manage hover effects for safe styling
  const [isMission1Hovered, setIsMission1Hovered] = useState(false);
  const [isMission2Hovered, setIsMission2Hovered] = useState(false);
  const [hoveredValueCard, setHoveredValueCard] = useState(null);
  
  // Ref is not strictly needed anymore since we're using state for hovers, but keeping it as per your code structure
  const mainContainerRef = useRef(null); 

  // Keeping the functions defined by you, but they are generally unnecessary 
  // if you're not doing logic based on the main container hover.
  const onMouseLeave = () => {
    if (mainContainerRef.current) {
        // console.log('Main container mouse left');
    }
  };
  
  const onMouseOver = () => {
    if (mainContainerRef.current) {
        // console.log('Main container mouse entered');
    }
  };

  return (
    <Layout>
      <div 
        style={styles.container}
        ref={mainContainerRef}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave} 
      >
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <h1 style={styles.heroTitle}>
                About <span style={styles.highlight}>Cut Culture</span>
              </h1>
              <p style={styles.heroSubtitle}>
                Where style meets community, and every cut tells a story of confidence and culture.
              </p>
            </div>
          </div>
        </section>

        {/* FOUNDER STORY SECTION */}
        <section style={styles.storySection}>
          <div style={styles.storyContent}>
            <div className="story-image" style={styles.storyImage}>
              <div style={{...styles.imageCard, backgroundImage: 'url(https://images.unsplash.com/photo-1536520002442-39764a41e987?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                <div style={styles.imageOverlay}></div>
                <div style={styles.imageText}>
                  <h3 style={styles.founderName}>Irvin Alcocer</h3>
                  <p style={styles.founderTitle}>Founder & Master Barber</p>
                </div>
              </div>
            </div>
            <div className="story-text" style={styles.storyText}>
              <h2 style={styles.sectionTitle}>Our Story</h2>
              <p style={styles.storyParagraph}>
                Cut Culture was founded in 2025 by Irvin Alcocer, a passionate barber and entrepreneur from Long Beach, California. At just 23 years old, Irvin has already built a strong reputation for precision cuts and a personal touch.
              </p>
              <p style={styles.storyParagraph}>
                A 2025 barber school graduate with two years of hands-on experience, Irvin discovered his love for cutting hair through building connections with clients. For him, barbering isn't just about the cut — it's about creating a space where people feel confident, respected, and part of a culture.
              </p>
              <p style={styles.storyParagraph}>
                Cut Culture is more than a shop. It's a community built on style and culture.
              </p>
              <div style={styles.founderStats}>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>2+</div>
                  <div style={styles.statLabel}>Years Experience</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>1000+</div>
                  <div style={styles.statLabel}>Happy Clients</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>23</div>
                  <div style={styles.statLabel}>Years Old</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION SECTION */}
        <section style={styles.missionSection}>
          <div style={styles.missionContent}>
            <div style={styles.missionGrid}>
              
              {/* Mission Card 1 */}
              <div 
                className="mission-card" 
                style={{
                  ...styles.missionCard,
                  ...(isMission1Hovered && hoverStyles.missionHover) // Apply hover style
                }}
                onMouseEnter={() => setIsMission1Hovered(true)} // Set state on hover
                onMouseLeave={() => setIsMission1Hovered(false)} // Reset state on leave
              >
                <div style={{...styles.missionImage, backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
                  <div style={styles.missionOverlay}></div>
                  <div style={styles.missionText}>
                    <h3 style={styles.missionTitle}>Our Mission</h3>
                    <p style={styles.missionDescription}>
                      To transform haircuts into confidence-building experiences, where every client leaves feeling empowered and looking their absolute best.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mission Card 2 */}
              <div 
                className="mission-card" 
                style={{
                  ...styles.missionCard,
                  ...(isMission2Hovered && hoverStyles.missionHover) // Apply hover style
                }}
                onMouseEnter={() => setIsMission2Hovered(true)} // Set state on hover
                onMouseLeave={() => setIsMission2Hovered(false)} // Reset state on leave
              >
                <div style={{...styles.missionImage, backgroundImage: 'url(https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
                  <div style={styles.missionOverlay}></div>
                  <div style={styles.missionText}>
                    <h3 style={styles.missionTitle}>Our Vision</h3>
                    <p style={styles.missionDescription}>
                      To create a barbering culture that celebrates individuality, builds community, and sets new standards for excellence in grooming services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section style={styles.valuesSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Values</h2>
            <p style={styles.sectionSubtitle}>The principles that guide everything we do</p>
          </div>
          
          <div style={styles.valuesGrid}>
            {/* Value Card 1 */}
            <div 
              className="value-card" 
              style={{
                ...styles.valueCard,
                ...(hoveredValueCard === 'precision' && hoverStyles.valueHover) // Apply hover style
              }}
              onMouseEnter={() => setHoveredValueCard('precision')} // Set state on hover
              onMouseLeave={() => setHoveredValueCard(null)} // Reset state on leave
            >
              <div style={{...styles.valueImage, backgroundImage: 'url(https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                <div style={styles.valueOverlay}></div>
                <div style={styles.valueContent}>
                  <h3 style={styles.valueTitle}>Precision</h3>
                  <p style={styles.valueDescription}>
                    Every cut is executed with meticulous attention to detail and artistic vision.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Value Card 2 */}
            <div 
              className="value-card" 
              style={{
                ...styles.valueCard,
                ...(hoveredValueCard === 'community' && hoverStyles.valueHover) // Apply hover style
              }}
              onMouseEnter={() => setHoveredValueCard('community')} // Set state on hover
              onMouseLeave={() => setHoveredValueCard(null)} // Reset state on leave
            >
              <div style={{...styles.valueImage, backgroundImage: 'url(https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                <div style={styles.valueOverlay}></div>
                <div style={styles.valueContent}>
                  <h3 style={styles.valueTitle}>Community</h3>
                  <p style={styles.valueDescription}>
                    We build relationships that go beyond the chair, creating a space where everyone belongs.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Value Card 3 */}
            <div 
              className="value-card" 
              style={{
                ...styles.valueCard,
                ...(hoveredValueCard === 'excellence' && hoverStyles.valueHover) // Apply hover style
              }}
              onMouseEnter={() => setHoveredValueCard('excellence')} // Set state on hover
              onMouseLeave={() => setHoveredValueCard(null)} // Reset state on leave
            >
              <div style={{...styles.valueImage, backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1677444546739-21b8aad351d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                <div style={styles.valueOverlay}></div>
                <div style={styles.valueContent}>
                  <h3 style={styles.valueTitle}>Excellence</h3>
                  <p style={styles.valueDescription}>
                    We never settle for good enough, always striving for perfection in every service.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Value Card 4 */}
            <div 
              className="value-card" 
              style={{
                ...styles.valueCard,
                ...(hoveredValueCard === 'innovation' && hoverStyles.valueHover) // Apply hover style
              }}
              onMouseEnter={() => setHoveredValueCard('innovation')} // Set state on hover
              onMouseLeave={() => setHoveredValueCard(null)} // Reset state on leave
            >
              <div style={{...styles.valueImage, backgroundImage: 'url(https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                <div style={styles.valueOverlay}></div>
                <div style={styles.valueContent}>
                  <h3 style={styles.valueTitle}>Innovation</h3>
                  <p style={styles.valueDescription}>
                    We stay ahead of trends while respecting the timeless art of traditional barbering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CULTURE SECTION */}
        <section style={styles.cultureSection}>
          <div style={styles.cultureContent}>
            <div className="culture-text" style={styles.cultureText}>
              <h2 style={styles.sectionTitle}>The Cut Culture Experience</h2>
              <div style={styles.cultureFeatures}>
                <div className="culture-feature" style={styles.cultureFeature}>
                  
                  <div>
                    <h4 style={styles.featureTitle}>Personalized Consultations</h4>
                    <p style={styles.featureDescription}>
                      Every service begins with a detailed consultation to understand your style and preferences.
                    </p>
                  </div>
                </div>
                
                <div className="culture-feature" style={styles.cultureFeature}>
              
                  <div>
                    <h4 style={styles.featureTitle}>Premium Products</h4>
                    <p style={styles.featureDescription}>
                      We use only the highest quality grooming products to ensure exceptional results.
                    </p>
                  </div>
                </div>
                
                <div className="culture-feature" style={styles.cultureFeature}>
                
                  <div>
                    <h4 style={styles.featureTitle}>Master Craftsmanship</h4>
                    <p style={styles.featureDescription}>
                      Our barbers are trained in both classic techniques and modern trends.
                    </p>
                  </div>
                </div>
                
                <div className="culture-feature" style={styles.cultureFeature}>
              
                  <div>
                    <h4 style={styles.featureTitle}>Community Focus</h4>
                    <p style={styles.featureDescription}>
                      We're more than a barbershop - we're a gathering place for the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="culture-image" style={styles.cultureImage}>
              <div style={{...styles.cultureImageCard, backgroundImage: 'url(https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
                <div style={styles.cultureImageOverlay}></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaBackground}></div>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>
              Experience the Culture
            </h2>
            <p style={styles.ctaText}>
              Ready to join the Cut Culture family? Book your appointment and discover why we're more than just a barbershop.
            </p>
            <div style={styles.ctaButtons}>
              {/* CTA Button - Pulse animation remains in CSS, safe to use */}
              <button className="cta-primary-button" style={styles.ctaPrimaryButton}>Book Your Cut</button>
              <button style={styles.ctaSecondaryButton}>Visit Our Shop</button>
            </div>
          </div>
        </section>
      </div>

      {/* Add CSS Animations - Hover styles removed from here to fix the error */}
      <style jsx>{`
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .story-image {
          animation: slideInLeft 1s ease-out;
        }

        .story-text {
          animation: slideInRight 1s ease-out;
        }

        .mission-card {
          animation: fadeInUp 0.8s ease-out;
        }

        .value-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .culture-feature {
          animation: fadeInUp 0.8s ease-out;
        }
        
        /* HOVER STYLES REMOVED FROM HERE TO FIX THE NULL ERROR: */
        /* .value-card:hover, .mission-card:hover, .cta-primary-button:hover rules removed */
        
        .cta-primary-button:hover {
          animation: pulse 0.5s ease-in-out;
        }
      `}</style>
    </Layout>
  );
};

// Professional Styles with Animations (Same as before)
const styles = {
  // ... (All existing styles are placed here) ...
  container: {
    width: '100%',
    overflow: 'hidden'
  },
  // HERO SECTION
  hero: {
    minHeight: '60vh',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    padding: '4rem 0'
  },
  
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(212,175,55,0.2) 100%)',
    zIndex: 1
  },
  
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2
  },
  
  heroText: {
    color: 'white'
  },
  
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  
  highlight: {
    color: '#D4AF37',
    background: 'linear-gradient(45deg, #D4AF37, #FFD700)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: 'none'
  },
  
  heroSubtitle: {
    fontSize: '1.3rem',
    lineHeight: '1.6',
    color: '#FFFFFF',
    maxWidth: '600px',
    margin: '0 auto',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },

  // STORY SECTION
  storySection: {
    padding: '6rem 0',
    backgroundColor: '#ffffff'
  },
  
  storyContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  },
  
  storyImage: {
    animation: 'slideInLeft 1s ease-out'
  },
  
  imageCard: {
    height: '500px',
    borderRadius: '12px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
  },
  
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.3) 50%, transparent 100%)',
    zIndex: 1
  },
  
  imageText: {
    position: 'absolute',
    bottom: '2rem',
    left: '2rem',
    zIndex: 2,
    color: 'white'
  },
  
  founderName: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '0.5rem'
  },
  
  founderTitle: {
    fontSize: '1.1rem',
    color: '#FFFFFF',
    opacity: 0.9
  },
  
  storyText: {
    animation: 'slideInRight 1s ease-out'
  },
  
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '2rem'
  },
  
  storyParagraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#666',
    marginBottom: '1.5rem'
  },
  
  founderStats: {
    display: 'flex',
    gap: '2rem',
    marginTop: '2rem'
  },
  
  statItem: {
    textAlign: 'center'
  },
  
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '0.5rem'
  },
  
  statLabel: {
    fontSize: '0.9rem',
    color: '#666',
    fontWeight: '500'
  },

  // MISSION SECTION
  missionSection: {
    padding: '6rem 0',
    backgroundColor: '#f8f9fa'
  },
  
  missionContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  
  missionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '2rem'
  },
  
  missionCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeInUp 0.8s ease-out',
    height: '300px'
  },
  
  missionImage: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end'
  },
  
  missionOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.4) 50%, transparent 100%)',
    zIndex: 1
  },
  
  missionText: {
    position: 'relative',
    zIndex: 2,
    padding: '2rem',
    color: 'white'
  },
  
  missionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '1rem'
  },
  
  missionDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#FFFFFF'
  },

  // VALUES SECTION
  valuesSection: {
    padding: '6rem 0',
    backgroundColor: '#ffffff'
  },
  
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '800px',
    margin: '0 auto 4rem auto',
    padding: '0 2rem'
  },
  
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6'
  },
  
  valuesGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  },
  
  valueCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeInUp 0.6s ease-out',
    height: '250px'
  },
  
  valueImage: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end'
  },
  
  valueOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.3) 50%, transparent 100%)',
    zIndex: 1
  },
  
  valueContent: {
    position: 'relative',
    zIndex: 2,
    padding: '1.5rem',
    color: 'white'
  },
  
  valueTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '0.5rem'
  },
  
  valueDescription: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#FFFFFF'
  },

  // CULTURE SECTION
  cultureSection: {
    padding: '6rem 0',
    backgroundColor: '#f8f9fa'
  },
  
  cultureContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  },
  
  cultureText: {
    animation: 'slideInLeft 1s ease-out'
  },
  
  cultureFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  
  cultureFeature: {
    display: 'flex',
    gap: '1rem',
    animation: 'fadeInUp 0.8s ease-out'
  },
  
  featureIcon: {
    fontSize: '2rem',
    flexShrink: 0
  },
  
  featureTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '0.5rem'
  },
  
  featureDescription: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6'
  },
  
  cultureImage: {
    animation: 'slideInRight 1s ease-out'
  },
  
  cultureImageCard: {
    height: '500px',
    borderRadius: '12px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
  },
  
  cultureImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(212,175,55,0.1) 0%, rgba(26,26,26,0.1) 100%)',
    borderRadius: '12px'
  },

  // CTA SECTION
  ctaSection: {
    padding: '5rem 0',
    backgroundColor: '#1a1a1a',
    position: 'relative',
    overflow: 'hidden'
  },
  
  ctaBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1593705114312-a0ee03a3f7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.2',
    zIndex: 1
  },
  
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2
  },
  
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1.5rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  
  ctaText: {
    fontSize: '1.2rem',
    color: '#CCCCCC',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },
  
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  
  ctaPrimaryButton: {
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    border: 'none',
    padding: '1.2rem 2.5rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
    animation: 'pulse 2s infinite'
  },
  
  ctaSecondaryButton: {
    backgroundColor: 'transparent',
    color: '#D4AF37',
    border: '2px solid #D4AF37',
    padding: '1.2rem 2.5rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  }
};


export default AboutPage;