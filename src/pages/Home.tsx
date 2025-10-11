import React from 'react';
import Layout from '../components/HeaderFooter';
import ai from '../assets/images/a1.jpeg';
import ai5 from '../assets/images/a5.jpeg';
import ai2 from '../assets/images/a2.jpeg';
import ai6 from '../assets/images/a6.jpeg';


const HomePage = () => {
  return (
    <Layout>
      <div style={styles.container}>
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
        <section style={styles.hero}>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent} className="hero-content-responsive"> {/* Add class for MQ */}
            <div className="hero-text" style={styles.heroText}>
              <h1 style={styles.heroTitle} className="hero-title-responsive">
                Welcome to <span style={styles.highlight}>Cut Culture</span>
              </h1>
              <p style={styles.heroSubtitle} className="hero-subtitle-responsive">
                A modern barbershop where precision meets style. At Cut Culture, we don't just give haircuts, we create confidence. We are dedicated to clean fades, sharp lines, and timeless looks tailored to you.
              </p>
             <div style={styles.heroButtons} className="hero-buttons-responsive">
  <button
    className="primary-button"
    style={{...styles.primaryButton, ...styles.responsiveButton}}
    onClick={() => (window.location.href = "/BookingPage")}
  >
    Book Appointment
  </button>

  <button
    style={{...styles.secondaryButton, ...styles.responsiveButton}}
    onClick={() => (window.location.href = "/ServicesPage")}
  >
    View Services
  </button>
</div>

            </div>
            <div className="hero-image-responsive" style={styles.heroImage}> {/* Add class for MQ */}
              <div style={styles.imagePlaceholder}>
                <div style={styles.imageText}>Professional Barber at Work</div>
              </div>
            </div>
          </div>
          <div style={styles.scrollIndicator}>
            <div className="scroll-arrow" style={styles.scrollArrow}></div>
          </div>
        </section>

        {/* FEATURED SERVICES SECTION */}
        <section style={styles.services}>
          <div style={styles.sectionHeader} className="section-header-responsive">
            <h2 style={styles.sectionTitle} className="section-title-responsive">Featured Services</h2>
            <p style={styles.sectionSubtitle} className="section-subtitle-responsive">Premium grooming services tailored to your style</p>
          </div>
          
          <div style={styles.servicesGrid} className="services-grid-responsive">
            {/* Service Card 1 */}
           <div className="service-card" style={styles.serviceCard}>
  <div style={styles.serviceImage}>
    <div
      style={{
        ...styles.serviceImagePlaceholder,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${ai})`,
      }}
    ></div>
  </div>
  <div style={styles.serviceContent}>
    <h3 style={styles.serviceTitle}>Professional Haircuts</h3>
    <p style={styles.serviceDescription}>
      Expert haircuts with precision styling. From classic cuts to modern trends, we deliver perfection.
    </p>
    <div style={styles.serviceFeatures}>
      <span style={styles.feature}>Clean Fades</span>
      <span style={styles.feature}>Sharp Lines</span>
      <span style={styles.feature}>Style Consultation</span>
    </div>
  </div>
</div>


           <div className="service-card" style={styles.serviceCard}>
  <div style={styles.serviceImage}>
    <div
      style={{
        ...styles.serviceImagePlaceholder,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${ai5})`,
      }}
    ></div>
  </div>
  <div style={styles.serviceContent}>
    <h3 style={styles.serviceTitle}>Beard Trims & Grooming</h3>
    <p style={styles.serviceDescription}>
      Professional beard shaping and grooming to keep your facial hair looking sharp and well-maintained.
    </p>
    <div style={styles.serviceFeatures}>
      <span style={styles.feature}>Beard Shaping</span>
      <span style={styles.feature}>Hot Towel</span>
      <span style={styles.feature}>Oil Treatment</span>
    </div>
    {/* <button style={styles.serviceButton}>Learn More</button> */}
  </div>
</div>

            {/* Service Card 3 */}
            <div className="service-card" style={styles.serviceCard}>
              <div style={styles.serviceImage}>
                <div style={{...styles.serviceImagePlaceholder, backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
              
                </div>
              </div>
              <div style={styles.serviceContent}>
                <h3 style={styles.serviceTitle}>Signature Line-Ups</h3>
                <p style={styles.serviceDescription}>
                  Crisp, clean line-ups that define your look. Perfect for maintaining sharp edges and clean hairlines.
                </p>
                <div style={styles.serviceFeatures}>
                  <span style={styles.feature}>Edge Up</span>
                  <span style={styles.feature}>Hairline Design</span>
                  <span style={styles.feature}>Precision Work</span>
                </div>
                {/* <button style={styles.serviceButton}>Learn More</button> */}
              </div>
            </div>

            {/* Service Card 4 */}
          <div className="service-card" style={styles.serviceCard}>
  <div style={styles.serviceImage}>
    <div
      style={{
        ...styles.serviceImagePlaceholder,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${ai2})`,
      }}
    ></div>
  </div>
  <div style={styles.serviceContent}>
    <h3 style={styles.serviceTitle}>Premium Add-Ons</h3>
    <p style={styles.serviceDescription}>
      Enhance your grooming experience with our premium add-on services and luxury treatments.
    </p>
    <div style={styles.serviceFeatures}>
      <span style={styles.feature}>Hot Lather Shave</span>
      <span style={styles.feature}>Facial Massage</span>
      <span style={styles.feature}>Hair Treatment</span>
    </div>
    {/* <button style={styles.serviceButton}>Learn More</button> */}
  </div>
</div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaBackground}></div>
          <div style={styles.ctaContent} className="cta-content-responsive">
            <h2 style={styles.ctaTitle} className="cta-title-responsive">
              Ready for a Fresh Look?
            </h2>
            <p style={styles.ctaText} className="cta-text-responsive">
              Book your appointment today and experience the culture of precision grooming and exceptional service.
            </p>
            <div style={styles.ctaButtons} className="cta-buttons-responsive">
              <button
                className="primary-button"
                style={{...styles.primaryButton, ...styles.ctaPrimaryButton, ...styles.responsiveCtaButton}}
                onClick={() => (window.location.href = "/BookingPage")}
              >
                Book now
              </button>
              <button style={{...styles.secondaryButton, ...styles.ctaSecondaryButton, ...styles.responsiveCtaButton}}>Call:  (913) 313-0064</button>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION WITH REAL IMAGES */}
        <section style={styles.whyUs}>
          <div style={styles.sectionHeader} className="section-header-responsive">
            <h2 style={styles.sectionTitle} className="section-title-responsive">Why Choose Cut Culture?</h2>
            <p style={styles.sectionSubtitle} className="section-subtitle-responsive">Experience the difference of premium barber services</p>
          </div>
          
          <div style={styles.featuresGrid} className="features-grid-responsive">
            <div className="feature-item" style={styles.featureItem}>
  <div
    style={{
      ...styles.featureImage,
      backgroundImage: `url(${ai6})`,
    }}
  >
    <div style={styles.featureOverlay}></div>
    <div style={styles.featureContent}>
      <h3 style={styles.featureTitle}>Precision Cuts</h3>
      <p style={styles.featureDescription}>
        Every cut is executed with meticulous attention to detail and precision.
      </p>
    </div>
  </div>
</div>
            
            <div className="feature-item" style={styles.featureItem}>
              <div style={{...styles.featureImage, backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1677444546740-7092c86ac54d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                <div style={styles.featureOverlay}></div>
                <div style={styles.featureContent}>
                  <h3 style={styles.featureTitle}>Expert Barbers</h3>
                  <p style={styles.featureDescription}>
                    Our skilled barbers are trained in the latest techniques and styles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="feature-item" style={styles.featureItem}>
              <div style={{...styles.featureImage, backgroundImage: 'url(https://thumbs.dreamstime.com/b/men-s-grooming-tools-barber-shop-equipment-supplies-men-s-grooming-tools-barber-shop-equipment-supplies-wood-table-men-121160387.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                <div style={styles.featureOverlay}></div>
                <div style={styles.featureContent}>
                  <h3 style={styles.featureTitle}>Premium Products</h3>
                  <p style={styles.featureDescription}>
                    We use only the highest quality grooming products for exceptional results.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="feature-item" style={styles.featureItem}>
              <div style={{...styles.featureImage, backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                <div style={styles.featureOverlay}></div>
                <div style={styles.featureContent}>
                  <h3 style={styles.featureTitle}>Relaxing Environment</h3>
                  <p style={styles.featureDescription}>
                    Enjoy a comfortable, modern atmosphere designed for your relaxation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add CSS Animations and Media Queries */}
      <style jsx global>{`
        /* Global CSS for Box Sizing and Overflow Fix */
        html, body, #__next {
          overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
          max-width: 100%;
        }
      `}</style>
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

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          40% {
            transform: translateY(-10px) rotate(45deg);
          }
          60% {
            transform: translateY(-5px) rotate(45deg);
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

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .service-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .feature-item {
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-text {
          animation: slideInFromLeft 1s ease-out;
        }

        .hero-image-responsive {
          animation: slideInFromRight 1s ease-out;
        }

        .scroll-arrow {
          animation: bounce 2s infinite;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-item:hover {
          transform: scale(1.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .primary-button:hover {
          animation: pulse 0.5s ease-in-out;
        }

        /* --- MOBILE RESPONSIVENESS (Media Queries) --- */

        /* Max width 768px (Tablets and Smaller) */
        @media (max-width: 768px) {
          /* HERO SECTION */
          .hero-content-responsive {
            grid-template-columns: 1fr; /* Stack on mobile */
            padding: 0 1.5rem;
            gap: 2rem;
            /* Override inline style */
            grid-template-columns: 1fr !important;
          }

          .hero-text {
            order: 1; /* Text first */
          }
          
          /* CRITICAL FIX: Hide the large placeholder image completely */
          .hero-image-responsive {
            display: none !important;
            animation: none;
            order: 2; 
          }

          .hero-title-responsive {
            font-size: 2.5rem !important; /* Smaller title */
            text-align: center;
          }

          .hero-subtitle-responsive {
            font-size: 1rem !important;
            text-align: center;
            max-width: 100%;
          }

          .hero-buttons-responsive {
            justify-content: center; /* Center buttons */
          }
          
          [style*="hero"] {
              min-height: 80vh !important; /* Shorter hero section */
          }
          
          /* SECTION HEADERS */
          .section-header-responsive {
             margin-bottom: 3rem !important;
             padding: 0 1.5rem !important;
          }

          .section-title-responsive {
            font-size: 2rem !important;
          }
          
          .section-subtitle-responsive {
            font-size: 0.9rem !important;
          }

          /* GRIDS */
          .services-grid-responsive,
          .features-grid-responsive {
            grid-template-columns: 1fr !important; /* Force single column on mobile */
            padding: 0 1.5rem !important;
          }

          /* CTA SECTION */
          .cta-content-responsive {
              padding: 0 1.5rem !important;
          }
          .cta-title-responsive {
            font-size: 2rem !important;
          }
          
          .cta-text-responsive {
            font-size: 1rem !important;
          }
          
          .cta-buttons-responsive {
            flex-direction: column !important; /* Stack buttons */
            align-items: center;
            gap: 1rem;
          }
          
          /* Buttons */
          [style*="responsiveButton"],
          [style*="responsiveCtaButton"] {
            width: 90% !important; /* Make buttons take up most of the width */
            padding: 0.8rem 1.5rem !important; /* Smaller padding */
            font-size: 1rem !important;
          }
          
          [style*="featureItem"] {
            height: 250px !important; /* Shorter height for feature cards */
          }
        }
      `}</style>
    </Layout>
  );
};

// Enhanced Professional Styles with Animations
const styles = {
  container: {
    width: '100%',
    overflow: 'hidden'
  },
  
  // Custom mobile button styles to ensure they override inline styles
  responsiveButton: {
    padding: '1rem 2rem', // Base style
    fontSize: '1.1rem', // Base style
  },
  responsiveCtaButton: {
      padding: '1.2rem 2.5rem',
      fontSize: '1.1rem',
  },

  // HERO SECTION WITH BACKGROUND IMAGE
  hero: {
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    padding: '2rem 0'
  },
  
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(45,45,45,0.6) 100%)',
    zIndex: 1
  },
  
  heroContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Desktop Default
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2
  },
  
  heroText: {
    color: 'white',
    animation: 'slideInFromLeft 1s ease-out'
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
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
    color: '#FFFFFF',
    maxWidth: '90%',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },
  
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  
  primaryButton: {
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
    animation: 'pulse 2s infinite'
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#D4AF37',
    border: '2px solid #D4AF37',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  
  heroImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'slideInFromRight 1s ease-out'
  },
  
  imagePlaceholder: {
    width: '100%',
    height: '400px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #D4AF37',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
  },
  
  imageText: {
    color: '#D4AF37',
    fontSize: '1.2rem',
    fontWeight: '500'
  },
  
  scrollIndicator: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2
  },
  
  scrollArrow: {
    width: '30px',
    height: '30px',
    borderRight: '2px solid #D4AF37',
    borderBottom: '2px solid #D4AF37',
    transform: 'rotate(45deg)',
    animation: 'bounce 2s infinite'
  },

  // SERVICES SECTION
  services: {
    padding: '6rem 0',
    backgroundColor: '#ffffff',
    position: 'relative'
  },
  
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '800px',
    margin: '0 auto 4rem auto',
    padding: '0 2rem',
    animation: 'fadeInUp 0.8s ease-out'
  },
  
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6'
  },
  
  servicesGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid #f0f0f0',
    animation: 'fadeInUp 0.6s ease-out'
  },
  
  serviceImage: {
    height: '200px',
    overflow: 'hidden'
  },
  
  serviceImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  
  serviceContent: {
    padding: '2rem'
  },
  
  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  
  serviceDescription: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  },
  
  serviceFeatures: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  },
  
  feature: {
    backgroundColor: '#f8f9fa',
    color: '#1a1a1a',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '500',
    border: '1px solid #e9ecef'
  },

  // CTA SECTION
  ctaSection: {
    padding: '5rem 0',
    backgroundColor: '#1a1a1a',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
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
    // This style is inherited from primaryButton, just for documentation
  },
  
  ctaSecondaryButton: {
    // This style is inherited from secondaryButton, just for documentation
  },

  // WHY CHOOSE US SECTION WITH IMAGES
  whyUs: {
    padding: '6rem 0',
    backgroundColor: '#f8f9fa'
  },
  
  featuresGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  
  featureItem: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeInUp 0.8s ease-out',
    height: '300px',
    position: 'relative'
  },
  
  featureImage: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end'
  },
  
  featureOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.3) 50%, transparent 100%)',
    zIndex: 1
  },
  
  featureContent: {
    position: 'relative',
    zIndex: 2,
    padding: '2rem',
    color: 'white',
    width: '100%'
  },
  
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '1rem'
  },
  
  featureDescription: {
    color: '#FFFFFF',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  }
};

export default HomePage;