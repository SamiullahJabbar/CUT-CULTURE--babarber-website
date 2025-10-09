import React, { useState, useEffect } from 'react';

// Social Icons Components
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.273 14.866 3.783 13.715 3.783 12.417s.49-2.448 1.343-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.853.875 1.343 2.026 1.343 3.323s-.49 2.448-1.343 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.72 0c-1.297 0-2.448-.49-3.323-1.297-.853-.875-1.343-2.026-1.343-3.323s.49-2.448 1.343-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.853.875 1.343 2.026 1.343 3.323s-.49 2.448-1.343 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={styles.container}>
      {/* ENHANCED HEADER WITH PROFESSIONAL STYLING */}
      <header style={{
        ...styles.header,
        ...(isScrolled && styles.headerScrolled)
      }}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <span style={styles.logoText}>CUT CULTURE</span>
            <div style={styles.logoSubtitle}>Premium Barbers</div>
          </div>
          
          {/* Mobile Menu Button */}
          <div 
            className="mobile-menu-button"
            style={{
              ...styles.mobileMenuButton,
              ...(isMobileMenuOpen && styles.mobileMenuButtonActive)
            }} 
            onClick={toggleMobileMenu}
          >
            <span style={{
              ...styles.menuBar,
              ...(isMobileMenuOpen && styles.menuBar1Active)
            }}></span>
            <span style={{
              ...styles.menuBar,
              ...(isMobileMenuOpen && styles.menuBar2Active)
            }}></span>
            <span style={{
              ...styles.menuBar,
              ...(isMobileMenuOpen && styles.menuBar3Active)
            }}></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={styles.nav}>
            <a href="#home" className="nav-link" style={styles.navLink}>Home</a>
            <a href="#about" className="nav-link" style={styles.navLink}>About</a>
            <a href="#services" className="nav-link" style={styles.navLink}>Services</a>
            <a href="#gallery" className="nav-link" style={styles.navLink}>Gallery</a>
            <a href="#booking" className="nav-link" style={styles.ctaButton}>Book Now</a>
          </nav>

          {/* Mobile Navigation */}
          <div style={{
            ...styles.mobileNav,
            ...(isMobileMenuOpen && styles.mobileNavOpen)
          }}>
            <div style={styles.mobileNavHeader}>
              <div style={styles.logo}>
                <span style={styles.logoText}>CUT CULTURE</span>
                <div style={styles.logoSubtitle}>Premium Barbers</div>
              </div>
            </div>
            <a href="#home" style={styles.mobileNavLink} onClick={toggleMobileMenu}>Home</a>
            <a href="#about" style={styles.mobileNavLink} onClick={toggleMobileMenu}>About</a>
            <a href="#services" style={styles.mobileNavLink} onClick={toggleMobileMenu}>Services</a>
            <a href="#gallery" style={styles.mobileNavLink} onClick={toggleMobileMenu}>Gallery</a>
            <a href="#booking" style={styles.mobileCtaButton} onClick={toggleMobileMenu}>Book Now</a>
            
            <div style={styles.mobileSocialLinks}>
              <a href="#" style={styles.mobileSocialLink}>
                <FacebookIcon />
              </a>
              <a href="#" style={styles.mobileSocialLink}>
                <InstagramIcon />
              </a>
              <a href="#" style={styles.mobileSocialLink}>
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        <div className="main-content" style={styles.mainContent}>
          {children}
        </div>
      </main>

      {/* ENHANCED FOOTER WITH QUICK LINKS */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          {/* Main Footer Grid */}
          <div style={styles.footerGrid}>
            {/* Brand Section */}
            <div style={styles.footerSection}>
              <div style={styles.footerLogo}>
                <span style={styles.footerLogoText}>CUT CULTURE</span>
                <div style={styles.footerLogoSubtitle}>Premium Barber Services</div>
              </div>
              <p style={styles.footerDescription}>
                Experience the finest barber services in Kansas City. Where style meets precision and every cut tells a story.
              </p>
              <div style={styles.socialLinks}>
                <a href="#" className="social-link" style={styles.socialLink}>
                  <FacebookIcon />
                </a>
                <a href="#" className="social-link" style={styles.socialLink}>
                  <InstagramIcon />
                </a>
                <a href="#" className="social-link" style={styles.socialLink}>
                  <TwitterIcon />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerHeading}>Quick Links</h4>
              <div style={styles.quickLinks}>
                <a href="#home" style={styles.quickLink}>Home</a>
                <a href="#about" style={styles.quickLink}>About Us</a>
                <a href="#services" style={styles.quickLink}>Services</a>
                <a href="#gallery" style={styles.quickLink}>Gallery</a>
                <a href="#booking" style={styles.quickLink}>Book Appointment</a>
                <a href="#contact" style={styles.quickLink}>Contact</a>
              </div>
            </div>
            
            {/* Services */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerHeading}>Our Services</h4>
              <div style={styles.serviceLinks}>
                <a href="#haircut" style={styles.serviceLink}>Classic Haircut</a>
                <a href="#beard" style={styles.serviceLink}>Beard Trim</a>
                <a href="#shave" style={styles.serviceLink}>Hot Towel Shave</a>
                <a href="#facial" style={styles.serviceLink}>Facial Treatment</a>
                <a href="#styling" style={styles.serviceLink}>Hair Styling</a>
                <a href="#color" style={styles.serviceLink}>Hair Coloring</a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerHeading}>Contact Info</h4>
              <div style={styles.contactInfo}>
                <div style={styles.contactItem}>
                  <span style={styles.contactLabel}>Address:</span>
                  <span style={styles.contactText}>123 Barber Street, Kansas City, KS</span>
                </div>
                <div style={styles.contactItem}>
                  <span style={styles.contactLabel}>Phone:</span>
                  <span style={styles.contactText}>913.313.0064</span>
                </div>
                <div style={styles.contactItem}>
                  <span style={styles.contactLabel}>Email:</span>
                  <span style={styles.contactText}>info@cutculture.com</span>
                </div>
                <div style={styles.contactItem}>
                  <span style={styles.contactLabel}>Hours:</span>
                  <span style={styles.contactText}>Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div style={styles.footerBottom}>
            <div style={styles.footerBottomContent}>
              <p style={styles.copyright}>
                © 2025 Cut Culture. All rights reserved. | Designed with precision
              </p>
              <div style={styles.legalLinks}>
                <a href="#privacy" style={styles.legalLink}>Privacy Policy</a>
                <a href="#terms" style={styles.legalLink}>Terms of Service</a>
                <a href="#cookies" style={styles.legalLink}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Add CSS Styles */}
      <style jsx>{`
        /* Enhanced Hover Effects */
        .nav-link:hover {
          color: #D4AF37 !important;
          transform: translateY(-2px) !important;
        }
        
        .social-link:hover {
          background-color: #D4AF37 !important;
          color: #1a1a1a !important;
          transform: translateY(-2px) !important;
        }

        /* Smooth transitions for all interactive elements */
        .nav-link, .social-link, .quick-link, .service-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        /* Media Queries */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-button {
            display: flex !important;
            position: absolute !important; 
            right: 2rem !important;
            top: 1.5rem !important;
          }
          
          .main-content {
            padding: 1rem !important;
            margin-top: 80px !important;
          }
        }
        
        @media (max-width: 480px) {
          .header-content {
            padding: 0 1rem !important;
          }
          
          .main-content {
            padding: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

// Enhanced Inline CSS with Professional Color Scheme
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Inter', 'Arial', sans-serif",
    backgroundColor: '#f8f9fa'
  },
  
  // HEADER STYLES
  header: {
    backgroundColor: '#1a1a1a',
    color: 'white',
    padding: '1rem 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(212, 175, 55, 0.1)'
  },
  
  headerScrolled: {
    padding: '0.75rem 0',
    backgroundColor: 'rgba(26, 26, 26, 0.98)',
    backdropFilter: 'blur(10px)'
  },
  
  headerContent: {
    maxWidth: '1400px', 
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    position: 'relative'
  },
  
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  
  logoText: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
    transition: 'all 0.3s ease',
    letterSpacing: '1px'
  },
  
  logoSubtitle: {
    fontSize: '0.7rem',
    color: '#CCCCCC',
    letterSpacing: '2px',
    marginTop: '2px',
    fontWeight: '300'
  },
  
  // DESKTOP NAVIGATION
  nav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center'
  },
  
  navLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    fontSize: '0.95rem'
  },
  
  ctaButton: {
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    textDecoration: 'none',
    fontWeight: '600',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontSize: '0.95rem',
    border: 'none',
    marginLeft: '0.5rem'
  },
  
  // MOBILE MENU BUTTON
  mobileMenuButton: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '0.5rem',
    zIndex: 1001
  },
  
  mobileMenuButtonActive: {},
  
  menuBar: {
    width: '25px',
    height: '2px',
    backgroundColor: '#D4AF37',
    margin: '3px 0',
    borderRadius: '2px',
    transition: 'all 0.3s ease'
  },
  
  menuBar1Active: {
    transform: 'rotate(-45deg) translate(-5px, 6px)'
  },
  
  menuBar2Active: {
    opacity: 0
  },
  
  menuBar3Active: {
    transform: 'rotate(45deg) translate(-5px, -6px)'
  },
  
  // MOBILE NAVIGATION
  mobileNav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0',
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 999,
    paddingTop: '6rem'
  },
  
  mobileNavOpen: {
    transform: 'translateX(0)'
  },
  
  mobileNavHeader: {
    position: 'absolute',
    top: '2rem',
    left: '2rem'
  },
  
  mobileNavLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '500',
    padding: '1rem 2rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  },
  
  mobileCtaButton: {
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '600',
    padding: '1rem 2rem',
    margin: '1rem',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    width: 'calc(100% - 4rem)',
    textAlign: 'center'
  },
  
  mobileSocialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem'
  },
  
  mobileSocialLink: {
    color: '#D4AF37',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'all 0.3s ease'
  },
  
  // MAIN CONTENT STYLES
  main: {
    flex: 1,
    padding: '2rem 0',
    backgroundColor: '#ffffff',
    marginTop: '80px',
    minHeight: 'calc(100vh - 200px)'
  },
  
  mainContent: {
    maxWidth: '1400px', 
    margin: '0 auto',
    width: '100%',
    padding: '0 2rem'
  },
  
  // ENHANCED FOOTER STYLES
  footer: {
    backgroundColor: '#1a1a1a',
    color: 'white',
    borderTop: '3px solid #D4AF37'
  },
  
  footerContent: {
    maxWidth: '1400px', 
    margin: '0 auto',
    padding: '0 2rem'
  },
  
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
    gap: '3rem',
    padding: '3rem 0 2rem 0'
  },
  
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  
  footerLogo: {
    marginBottom: '1rem'
  },
  
  footerLogoText: {
    color: '#D4AF37',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'block'
  },
  
  footerLogoSubtitle: {
    color: '#CCCCCC',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    marginTop: '0.25rem'
  },
  
  footerDescription: {
    color: '#CCCCCC',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  
  footerHeading: {
    color: '#D4AF37',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  
  quickLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  
  quickLink: {
    color: '#CCCCCC',
    textDecoration: 'none',
    fontSize: '0.9rem',
    padding: '0.25rem 0',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  
  serviceLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  
  serviceLink: {
    color: '#CCCCCC',
    textDecoration: 'none',
    fontSize: '0.9rem',
    padding: '0.25rem 0',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  
  contactItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  
  contactLabel: {
    color: '#D4AF37',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  
  contactText: {
    color: '#CCCCCC',
    fontSize: '0.9rem'
  },
  
  socialLinks: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '0.5rem'
  },
  
  socialLink: {
    color: '#D4AF37',
    textDecoration: 'none',
    padding: '0.5rem',
    border: '1px solid #D4AF37',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px'
  },
  
  footerBottom: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '1.5rem 0'
  },
  
  footerBottomContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  copyright: {
    color: '#999999',
    fontSize: '0.85rem',
    margin: 0
  },
  
  legalLinks: {
    display: 'flex',
    gap: '1.5rem'
  },
  
  legalLink: {
    color: '#CCCCCC',
    textDecoration: 'none',
    fontSize: '0.85rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }
};

export default Layout;