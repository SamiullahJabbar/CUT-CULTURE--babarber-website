import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';


// --- Inline CSS for the Layout Wrapper ---
const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

// --- Inline CSS for Header ---
const headerStyle = {
  backgroundColor: 'rgba(26, 26, 26, 0.97)',
  backdropFilter: 'blur(10px)',
  padding: '1.2em 0',
  color: '#FFFFFF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 30px rgba(212, 175, 55, 0.08)',
  position: 'sticky',
  top: '0',
  zIndex: '1000',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
  width: '100%',
  borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
};

const headerScrolledStyle = {
  padding: '0.8em 0',
  boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(26, 26, 26, 0.98)',
};

const headerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '90%',
  maxWidth: '1400px',
};

const logoStyle = {
  fontSize: '2.2em',
  fontWeight: '900',
  letterSpacing: '1.5px',
  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
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
  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
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
  color: '#CCCCCC',
  textDecoration: 'none',
  fontSize: '1.05em',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  padding: '0.5em 0',
  position: 'relative',
  letterSpacing: '0.5px',
};

const activeLinkStyle = {
  color: '#D4AF37',
  fontWeight: '700',
};

const mobileMenuButtonStyle = {
  display: 'none',
  background: 'none',
  border: 'none',
  fontSize: '1.8em',
  color: '#D4AF37',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  padding: '5px',
  borderRadius: '4px',
};

const mobileNavStyle = {
  display: 'none',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: 'rgba(26, 26, 26, 0.98)',
  backdropFilter: 'blur(10px)',
  padding: '1em 0',
  boxShadow: '0 5px 25px rgba(0, 0, 0, 0.2)',
  position: 'absolute',
  top: '100%',
  left: '0',
  animation: 'slideDown 0.4s ease-out',
};

const mobileLinkStyle = {
  ...linkStyle,
  padding: '1.2em 2em',
  borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
  width: '100%',
  textAlign: 'left',
  transition: 'all 0.2s ease',
};

// --- Inline CSS for Footer ---
const footerStyle = {
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  padding: '4em 2em 2em',
  color: '#CCCCCC',
  width: '100%',
  marginTop: 'auto',
  position: 'relative',
  overflow: 'hidden',
};

const footerContainerStyle = {
  maxWidth: '1400px',
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
  color: '#D4AF37',
  position: 'relative',
  paddingBottom: '10px',
};

const footerHeadingUnderlineStyle = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '40px',
  height: '3px',
  backgroundColor: '#D4AF37',
  borderRadius: '2px',
};

const footerLinkStyle = {
  color: '#999999',
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
  color: '#D4AF37',
  fontSize: '1.3em',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(212, 175, 55, 0.1)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(212, 175, 55, 0.2)',
};

const copyrightStyle = {
  marginTop: '3em',
  paddingTop: '2em',
  borderTop: '1px solid rgba(212, 175, 55, 0.3)',
  color: '#999999',
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
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
    50% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.6); }
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
    { href: "/About", label: "About Us" },
    { href: "/ServicesPage", label: "Services" },
    { href: "/BookingPage", label: "Book Now" },
    { href: "/contact", label: "Contact" },
  ];

  const footerLinks = {
    "Quick Links": [
      { href: "/", label: "Home" },
      { href: "/About", label: "About Us" },
      { href: "/ServicesPage", label: "Services" },
      { href: "/BookingPage", label: "Book Appointment" },
    ],
    "Our Services": [
      { href: "#haircut", label: "Professional Haircuts" },
      { href: "#beard", label: "Beard Trims" },
      { href: "#lineup", label: "Signature Line-Ups" },
      { href: "#addons", label: "Premium Add-Ons" },
    ],
    "Contact Info": [
      { label: "Phone:  (913) 313-0064" },
      { label: "Email: cutculturekc@gmail.com" },
      { label: "Location: Kansas City, KS" },
      { label: "Hours: Mon-Sat 9AM-7PM" },
    ]
  };

  const socialLinks = [
    { icon: "", label: "Facebook", color: "#D4AF37" },
    { icon: "", label: "Instagram", color: "#D4AF37" },
    { icon: "", label: "Twitter", color: "#D4AF37" },
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
      <img 
        src={logo}
        alt="Cut Culture Logo"
        style={{
          height: '50px',
          width: 'auto',
          marginRight: '10px',
          verticalAlign: 'middle',
          borderRadius: '8px'
        }}
      />
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
        >
          {link.label}
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
  <nav
    style={{
      ...mobileNavStyle,
      ...(isMobileMenuOpen ? { display: 'flex' } : {})
    }}
    className={isMobileMenuOpen ? 'mobile-nav-open' : ''}
  >
    {navLinks.map((link, index) => (
      <a 
        key={index}
        href={link.href}
        style={{
          ...mobileLinkStyle,
          ...(location.pathname === link.href ? activeLinkStyle : {})
        }}
        onClick={() => setIsMobileMenuOpen(false)}
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
              CUT CULTURE
              <span style={footerHeadingUnderlineStyle}></span>
            </h3>
            <p style={{color: '#999999', lineHeight: '1.6', marginBottom: '1.5em'}}>
              Premium barber services where precision meets style. We don't just give haircuts, 
              we create confidence with clean fades, sharp lines, and timeless looks tailored to you.
            </p>
            {/* <div style={socialIconsStyle}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  style={{
                    ...socialIconStyle,
                    backgroundColor: 'rgba(212, 175, 55, 0.1)'
                  }}
                  onMouseEnter={(e) => { 
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
                    e.target.style.animation = 'glow 2s infinite';
                  }}
                  onMouseLeave={(e) => { 
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                    e.target.style.animation = 'none';
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
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
                    e.target.style.color = '#D4AF37'; 
                    e.target.style.paddingLeft = '8px'; 
                    e.target.style.borderLeft = '3px solid #D4AF37';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => { 
                    e.target.style.color = '#999999'; 
                    e.target.style.paddingLeft = '0'; 
                    e.target.style.borderLeft = '3px solid transparent';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        
        <div style={copyrightStyle}>
          <p>&copy; {new Date().getFullYear()} Cut Culture. All Rights Reserved. | Premium Barber Services</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;