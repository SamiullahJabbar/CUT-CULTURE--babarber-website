import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

// --- Inline CSS for the Layout Wrapper ---
const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

// --- Inline CSS for Header ---
const headerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.97)',
  backdropFilter: 'blur(10px)',
  padding: '1.2em 0',
  color: '#004d40',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 30px rgba(0, 77, 64, 0.08)',
  position: 'sticky',
  top: '0',
  zIndex: '1000',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
  width: '100%',
  borderBottom: '1px solid rgba(0, 150, 136, 0.1)',
};

const headerScrolledStyle = {
  padding: '0.8em 0',
  boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)',
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
};

const headerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '90%',
  maxWidth: '1200px',
};

const logoStyle = {
  fontSize: '2.2em',
  fontWeight: '900',
  letterSpacing: '1.5px',
  background: 'linear-gradient(135deg, #00796b 0%, #004d40 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const logoIconStyle = {
  fontSize: '1.2em',
  background: 'linear-gradient(135deg, #00796b 0%, #004d40 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const navStyle = {
  display: 'flex',
  gap: '2.2em',
  alignItems: 'center',
};

const linkStyle = {
  color: '#555',
  textDecoration: 'none',
  fontSize: '1.05em',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  padding: '0.5em 0',
  position: 'relative',
  letterSpacing: '0.5px',
};

const activeLinkStyle = {
  color: '#00796b',
  fontWeight: '700',
};

const mobileMenuButtonStyle = {
  display: 'none',
  background: 'none',
  border: 'none',
  fontSize: '1.8em',
  color: '#00796b',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  padding: '5px',
  borderRadius: '4px',
};

const mobileNavStyle = {
  display: 'none',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(10px)',
  padding: '1em 0',
  boxShadow: '0 5px 25px rgba(0, 0, 0, 0.08)',
  position: 'absolute',
  top: '100%',
  left: '0',
  animation: 'slideDown 0.4s ease-out',
};

const mobileLinkStyle = {
  ...linkStyle,
  padding: '1.2em 2em',
  borderBottom: '1px solid rgba(0, 150, 136, 0.1)',
  width: '100%',
  textAlign: 'left',
  transition: 'all 0.2s ease',
};

// --- Inline CSS for Footer ---
const footerStyle = {
  background: 'linear-gradient(135deg, #004d40 0%, #00695c 100%)',
  padding: '4em 2em 2em',
  color: '#e0f7fa',
  width: '100%',
  marginTop: 'auto',
  position: 'relative',
  overflow: 'hidden',
};

const footerContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '3em',
  textAlign: 'left',
  position: 'relative',
  zIndex: '2',
};

const footerSectionStyle = {
  marginBottom: '1.5em',
};

const footerHeadingStyle = {
  fontSize: '1.3em',
  fontWeight: '700',
  marginBottom: '1.2em',
  color: '#e0f7fa',
  position: 'relative',
  paddingBottom: '10px',
};

const footerHeadingUnderlineStyle = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '40px',
  height: '3px',
  backgroundColor: '#4db6ac',
  borderRadius: '2px',
};

const footerLinkStyle = {
  color: '#b2dfdb',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '0.8em',
  transition: 'all 0.3s ease',
  padding: '4px 0',
  position: 'relative',
};

const socialIconsStyle = {
  display: 'flex',
  gap: '1em',
  marginTop: '1.5em',
};

const socialIconStyle = {
  color: '#fff',
  fontSize: '1.3em',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
};

const copyrightStyle = {
  marginTop: '3em',
  paddingTop: '2em',
  borderTop: '1px solid rgba(77, 182, 172, 0.3)',
  color: '#b2dfdb',
  fontSize: '0.9em',
  textAlign: 'center',
  position: 'relative',
  zIndex: '2',
};

const footerPatternStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  opacity: '0.03',
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
  zIndex: '1',
};

// Animation keyframes and media queries
const keyframesAndMediaStyle = `
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes linkUnderline {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  @media (max-width: 900px) {
    .desktop-nav {
      display: none !important;
    }
    .mobile-menu-button {
      display: block !important;
    }
  }
  @media (max-width: 600px) {
    .footer-container {
      grid-template-columns: 1fr;
      gap: 2em;
    }
  }
`;

function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Committees", label: "Committees" },
    { href: "/events", label: "Events" },
    { href: "/registration", label: "Registration" },
    { href: "/contact", label: "Contact" },
  ];

  const footerLinks = {
    "Quick Links": [
      { href: "/", label: "Home" },
      { href: "/About", label: "About Us" },
      { href: "/events", label: "Events" },
      { href: "/registration", label: "Membership" },
    ],
    "Resources": [
      { href: "/Committees", label: "Committees" },
      { href: "/gallery", label: "Gallery" },
      { href: "/news", label: "News & Updates" },
      { href: "/publications", label: "Publications" },
    ],
    "Contact": [
      { label: "Email: info@snict.org" },
      { label: "Phone: +91-XXX-XXXX-XXX" },
      { label: "Address: Hyderabad, India" },
    ]
  };

  const socialLinks = [
    { icon: faFacebookF, label: "Facebook", color: "#3b5998" },
    { icon: faTwitter, label: "Twitter", color: "#1da1f2" },
    { icon: faInstagram, label: "Instagram", color: "#e1306c" },
    { icon: faLinkedinIn, label: "LinkedIn", color: "#0077b5" },
    { icon: faYoutube, label: "YouTube", color: "#ff0000" },
  ];

  return (
    <div style={layoutStyle}>
      <style>{keyframesAndMediaStyle}</style>
      
      {/* --- Header Section --- */}
      <header style={{
        ...headerStyle,
        ...(isScrolled ? headerScrolledStyle : {})
      }}>
        <div style={headerContainerStyle}>
          <a href="/" style={logoStyle}>
            <span style={logoIconStyle}></span>
            SNICT
          </a>
          
          {/* Desktop Navigation */}
          <nav style={navStyle} className="desktop-nav">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                style={{
                  ...linkStyle,
                  ...(location.pathname === link.href ? activeLinkStyle : {})
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00796b';
                  e.target.querySelector('span').style.transform = 'scaleX(1)';
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.href) {
                    e.target.style.color = '#555';
                  }
                  e.target.querySelector('span').style.transform = location.pathname === link.href ? 'scaleX(1)' : 'scaleX(0)';
                }}
              >
                {link.label}
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#00796b',
                  transform: location.pathname === link.href ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease',
                  borderRadius: '2px',
                }}></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            style={{
              ...mobileMenuButtonStyle,
              transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)'
            }}
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <nav style={{
          ...mobileNavStyle,
          ...(isMobileMenuOpen ? { display: 'flex' } : {})
        }} className={isMobileMenuOpen ? "mobile-nav-open" : ""}>
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              style={{
                ...mobileLinkStyle,
                ...(location.pathname === link.href ? activeLinkStyle : {})
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 150, 136, 0.05)';
                e.target.style.paddingLeft = '2.5em';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.paddingLeft = '2em';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      
      {/* --- Main Content Section (Where other pages will be rendered) --- */}
      <main style={{
        flexGrow: 1, 
        animation: 'fadeInUp 0.6s ease',
        paddingBottom: '2em'
      }}>
        {children}
      </main>

      {/* --- Footer Section --- */}
      <footer style={footerStyle}>
        <div style={footerPatternStyle}></div>
        <div style={footerContainerStyle} className="footer-container">
          <div style={footerSectionStyle}>
            <h3 style={footerHeadingStyle}>
              SNICT
              <span style={footerHeadingUnderlineStyle}></span>
            </h3>
            <p style={{color: '#b2dfdb', lineHeight: '1.6', marginBottom: '1.5em'}}>
              Society of Neo Interventional Cardiovascular Technologists. 
              Advancing cardiovascular care through innovation, collaboration and excellence.
            </p>
            <div style={socialIconsStyle}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  style={{
                    ...socialIconStyle,
                    backgroundColor: `rgba(${parseInt(social.color.slice(1,3), 16)}, ${parseInt(social.color.slice(3,5), 16)}, ${parseInt(social.color.slice(5,7), 16)}, 0.2)`
                  }}
                  onMouseEnter={(e) => { 
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.backgroundColor = `rgba(${parseInt(social.color.slice(1,3), 16)}, ${parseInt(social.color.slice(3,5), 16)}, ${parseInt(social.color.slice(5,7), 16)}, 0.4)`;
                  }}
                  onMouseLeave={(e) => { 
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.backgroundColor = `rgba(${parseInt(social.color.slice(1,3), 16)}, ${parseInt(social.color.slice(3,5), 16)}, ${parseInt(social.color.slice(5,7), 16)}, 0.2)`;
                  }}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} style={footerSectionStyle}>
              <h3 style={footerHeadingStyle}>
                {section}
                <span style={footerHeadingUnderlineStyle}></span>
              </h3>
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.href || '#'}
                  style={footerLinkStyle}
                  onMouseEnter={(e) => { 
                    e.target.style.color = '#fff'; 
                    e.target.style.paddingLeft = '8px'; 
                    e.target.style.borderLeft = '3px solid #4db6ac';
                  }}
                  onMouseLeave={(e) => { 
                    e.target.style.color = '#b2dfdb'; 
                    e.target.style.paddingLeft = '0'; 
                    e.target.style.borderLeft = '3px solid transparent';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        
        <div style={copyrightStyle}>
          <p>&copy; {new Date().getFullYear()} SNICT. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;