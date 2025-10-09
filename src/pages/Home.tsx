import React from 'react';
import Layout from '../components/HeaderFooter';

const HomePage = () => {
  return (
    <Layout>
      <div style={styles.container}>
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
        <section style={styles.hero}>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <h1 style={styles.heroTitle}>
                Welcome to <span style={styles.highlight}>Cut Culture</span>
              </h1>
              <p style={styles.heroSubtitle}>
                A modern barbershop where precision meets style. At Cut Culture, we don't just give haircuts, we create confidence. We are dedicated to clean fades, sharp lines, and timeless looks tailored to you.
              </p>
              <div style={styles.heroButtons}>
                <button style={styles.primaryButton}>Book Appointment</button>
                <button style={styles.secondaryButton}>View Services</button>
              </div>
            </div>
            <div style={styles.heroImage}>
              <div style={styles.imagePlaceholder}>
                <div style={styles.imageText}>Professional Barber at Work</div>
              </div>
            </div>
          </div>
          <div style={styles.scrollIndicator}>
            <div style={styles.scrollArrow}></div>
          </div>
        </section>

        {/* FEATURED SERVICES SECTION */}
        <section style={styles.services}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Featured Services</h2>
            <p style={styles.sectionSubtitle}>Premium grooming services tailored to your style</p>
          </div>
          
          <div style={styles.servicesGrid}>
            {/* Service Card 1 */}
            <div style={styles.serviceCard}>
              <div style={styles.serviceImage}>
                <div style={{...styles.serviceImagePlaceholder, backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
                  
                </div>
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
                <button style={styles.serviceButton}>Learn More</button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div style={styles.serviceCard}>
              <div style={styles.serviceImage}>
                <div style={{...styles.serviceImagePlaceholder, backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://plus.unsplash.com/premium_photo-1661288508630-829e930528e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
                  
                </div>
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
                <button style={styles.serviceButton}>Learn More</button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div style={styles.serviceCard}>
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
                <button style={styles.serviceButton}>Learn More</button>
              </div>
            </div>

            {/* Service Card 4 */}
            <div style={styles.serviceCard}>
              <div style={styles.serviceImage}>
                <div style={{...styles.serviceImagePlaceholder, backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://plus.unsplash.com/premium_photo-1661507216779-62e4fd5b1957?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
                </div>
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
                <button style={styles.serviceButton}>Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaBackground}></div>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>
              Ready for a Fresh Look?
            </h2>
            <p style={styles.ctaText}>
              Book your appointment today and experience the culture of precision grooming and exceptional service.
            </p>
            <div style={styles.ctaButtons}>
              <button style={styles.ctaPrimaryButton}>Book Now</button>
              <button style={styles.ctaSecondaryButton}>Call:  (913) 313-0064</button>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION WITH REAL IMAGES */}
        <section style={styles.whyUs}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Why Choose Cut Culture?</h2>
            <p style={styles.sectionSubtitle}>Experience the difference of premium barber services</p>
          </div>
          
          <div style={styles.featuresGrid}>
            <div style={styles.featureItem}>
              <div style={{...styles.featureImage, backgroundImage: 'url(https://images.unsplash.com/photo-1599351431529-5a74f50ef2e7?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                <div style={styles.featureOverlay}></div>
                <div style={styles.featureContent}>
                  <h3 style={styles.featureTitle}>Precision Cuts</h3>
                  <p style={styles.featureDescription}>
                    Every cut is executed with meticulous attention to detail and precision.
                  </p>
                </div>
              </div>
            </div>
            
            <div style={styles.featureItem}>
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
            
            <div style={styles.featureItem}>
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
            
            <div style={styles.featureItem}>
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

      {/* Add CSS Animations */}
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

        .hero-image {
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
    gridTemplateColumns: '1fr 1fr',
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
  
  serviceIcon: {
    fontSize: '3rem',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: '50%',
    padding: '1rem',
    backdropFilter: 'blur(10px)'
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
  
  serviceButton: {
    backgroundColor: 'transparent',
    color: '#D4AF37',
    border: '2px solid #D4AF37',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%'
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