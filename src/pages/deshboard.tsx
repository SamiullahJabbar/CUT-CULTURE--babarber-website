import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Base styles that apply to all screen sizes
  const baseHeaderStyle = {
    backgroundColor: '#2c3e50',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  };

  const baseHeaderContentStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '18px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const mobileHeaderContentStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '18px 20px',
  };
  
  const baseNavLinkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    ':hover': { color: '#f39c12' },
  };

  const baseHeroSectionStyle = {
    backgroundImage: 'linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '180px 40px',
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const mobileHeroSectionStyle = {
    padding: '100px 20px',
  };

  const baseServiceSectionStyle = {
    padding: '100px 40px',
    backgroundColor: '#fff',
  };

  const mobileServiceSectionStyle = {
    padding: '60px 20px',
  };

  const baseContactSectionStyle = {
    padding: '100px 40px',
    backgroundColor: '#ecf0f1',
  };

  const mobileContactSectionStyle = {
    padding: '60px 20px',
  };

  const baseContactFormContainerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    padding: '60px',
  };

  const mobileContactFormContainerStyle = {
    padding: '30px',
  };

  const baseFooterStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '80px 40px 40px'
  };

  const mobileFooterStyle = {
    padding: '40px 20px',
  };

  const baseFooterContentStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
  };

  const mobileFooterContentStyle = {
    gridTemplateColumns: '1fr',
    gap: '40px',
  };

  const baseFooterLinksStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  };

  const mobileFooterLinksStyle = {
    gridTemplateColumns: '1fr',
  };

  const baseFooterBottomStyle = {
    maxWidth: '1400px',
    margin: '60px auto 0',
    paddingTop: '30px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    textAlign: 'center',
    color: '#bdc3c7',
    fontSize: '15px'
  };

  const mobileFooterBottomStyle = {
    marginTop: '30px',
    paddingTop: '20px',
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa' }}>
      {/* Header - Full width */}
      <header style={baseHeaderStyle}>
        <div style={{
          ...baseHeaderContentStyle,
          ...(isMobile && { padding: '18px 20px', justifyContent: 'space-between' })
        }}>
          <h1 style={{
            margin: 0,
            fontSize: isMobile ? '24px' : '28px',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: '1px'
          }}>Sologans Properties</h1>

          {isMobile ? (
            <button
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '30px',
                cursor: 'pointer',
                lineHeight: '1',
              }}
            >
              ☰
            </button>
          ) : (
            <nav>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '35px',
                margin: 0,
                padding: 0
              }}>
                <li><Link to="/" style={baseNavLinkStyle}>Home</Link></li>
                <li><Link to="/properties" style={baseNavLinkStyle}>Properties</Link></li>
                <li><Link to="/about" style={baseNavLinkStyle}>About</Link></li>
                <li><Link to="/services" style={baseNavLinkStyle}>Services</Link></li>
                <li><Link to="/contact" style={baseNavLinkStyle}>Contact</Link></li>
              </ul>
            </nav>
          )}

          {!isMobile && (
            <button style={{
              backgroundColor: '#f39c12',
              color: '#fff',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(243, 156, 18, 0.3)',
              ':hover': {
                backgroundColor: '#e67e22',
                transform: 'translateY(-2px)'
              }
            }}>Call Now</button>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <nav style={{
            backgroundColor: '#2c3e50',
            width: '100%',
            textAlign: 'center',
            paddingBottom: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              margin: 0,
              padding: 0
            }}>
              <li><Link to="/" style={{ ...baseNavLinkStyle, fontSize: '18px' }} onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/properties" style={{ ...baseNavLinkStyle, fontSize: '18px' }} onClick={toggleMenu}>Properties</Link></li>
              <li><Link to="/about" style={{ ...baseNavLinkStyle, fontSize: '18px' }} onClick={toggleMenu}>About</Link></li>
              <li><Link to="/services" style={{ ...baseNavLinkStyle, fontSize: '18px' }} onClick={toggleMenu}>Services</Link></li>
              <li><Link to="/contact" style={{ ...baseNavLinkStyle, fontSize: '18px' }} onClick={toggleMenu}>Contact</Link></li>
              <li>
                <button style={{
                  backgroundColor: '#f39c12',
                  color: '#fff',
                  padding: '12px 30px',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 8px rgba(243, 156, 18, 0.3)',
                  marginTop: '10px',
                  ':hover': {
                    backgroundColor: '#e67e22',
                    transform: 'translateY(-2px)'
                  }
                }}>Call Now</button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section - Full width */}
      <section style={{ ...baseHeroSectionStyle, ...(isMobile && mobileHeroSectionStyle) }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: isMobile ? '36px' : '48px',
            marginBottom: '25px',
            lineHeight: '1.2',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Find Your Dream Home With Sologans Properties</h1>

          <p style={{
            fontSize: isMobile ? '16px' : '20px',
            marginBottom: '50px',
            lineHeight: '1.6',
            color: '#ecf0f1'
          }}>Discover luxury properties in the most desirable neighborhoods. Your perfect home is just one click away.</p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '15px' : '20px',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'stretch',
            marginBottom: '40px'
          }}>
            <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}>
              <select style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '16px 40px 16px 20px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.3)',
                fontWeight: '600',
                minWidth: '180px',
                width: isMobile ? '100%' : 'auto',
                fontSize: '16px',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 15px center',
                backgroundSize: '12px',
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)'
                },
                'option': {
                  color: 'black',
                  backgroundColor: 'white'
                }
              }}>
                <option value="" style={{ color: 'black' }}>Waterfront</option>
                <option value="ocean" style={{ color: 'black' }}>Ocean View</option>
                <option value="lake" style={{ color: 'black' }}>Lakefront</option>
                <option value="river" style={{ color: 'black' }}>Riverfront</option>
                <option value="canal" style={{ color: 'black' }}>Canal Front</option>
              </select>
            </div>

            <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}>
              <select style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '16px 40px 16px 20px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.3)',
                fontWeight: '600',
                minWidth: '180px',
                width: isMobile ? '100%' : 'auto',
                fontSize: '16px',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 15px center',
                backgroundSize: '12px',
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)'
                },
                'option': {
                  color: 'black',
                  backgroundColor: 'white'
                }
              }}>
                <option value="" style={{ color: 'black' }}>Apartment</option>
                <option value="studio" style={{ color: 'black' }}>Studio</option>
                <option value="1bed" style={{ color: 'black' }}>1 Bedroom</option>
                <option value="2bed" style={{ color: 'black' }}>2 Bedroom</option>
                <option value="penthouse" style={{ color: 'black' }}>Penthouse</option>
                <option value="loft" style={{ color: 'black' }}>Loft</option>
              </select>
            </div>

            <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}>
              <select style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '16px 40px 16px 20px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.3)',
                fontWeight: '600',
                minWidth: '180px',
                width: isMobile ? '100%' : 'auto',
                fontSize: '16px',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 15px center',
                backgroundSize: '12px',
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)'
                },
                'option': {
                  color: 'black',
                  backgroundColor: 'white'
                }
              }}>
                <option value="" style={{ color: 'black' }}>$1M+</option>
                <option value="500k" style={{ color: 'black' }}>$500K+</option>
                <option value="1m" style={{ color: 'black' }}>$1M+</option>
                <option value="2m" style={{ color: 'black' }}>$2M+</option>
                <option value="5m" style={{ color: 'black' }}>$5M+</option>
                <option value="10m" style={{ color: 'black' }}>$10M+</option>
              </select>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '15px' : '25px',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'stretch',
          }}>
            <button style={{
              backgroundColor: '#f39c12',
              color: 'white',
              padding: '16px 45px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '18px',
              width: isMobile ? '100%' : 'auto',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(243, 156, 18, 0.3)',
              ':hover': {
                backgroundColor: '#e67e22',
                transform: 'translateY(-2px)'
              }
            }}>Search Properties</button>

            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px 45px',
              border: '2px solid white',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '18px',
              width: isMobile ? '100%' : 'auto',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'translateY(-2px)'
              }
            }}>View Properties</button>
          </div>
        </div>
      </section>

      {/* Services Section - Centered content */}
      <section style={{ ...baseServiceSectionStyle, ...(isMobile && mobileServiceSectionStyle) }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
            <h2 style={{
              fontSize: isMobile ? '28px' : '36px',
              marginBottom: '20px',
              color: '#2c3e50',
              fontWeight: '700',
              position: 'relative',
              display: 'inline-block',
              ':after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                backgroundColor: '#f39c12',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '2px'
              }
            }}>Our Services</h2>

            <p style={{
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
              color: '#7f8c8d',
              fontSize: isMobile ? '16px' : '18px'
            }}>
              Comprehensive real estate solutions tailored to your unique needs and goals.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: isMobile ? '30px' : '40px'
          }}>
            <ServiceCard
              icon="🏠"
              title="Property Sales"
              description="Expert guidance through the entire buying or selling process with personalized attention and market expertise."
              color="#3498db"
            />
            <ServiceCard
              icon="🔑"
              title="Property Management"
              description="Full-service property management for landlords, including tenant screening, maintenance, and rent collection."
              color="#2ecc71"
            />
            <ServiceCard
              icon="📈"
              title="Investment Consulting"
              description="Strategic investment advice and market analysis to help you build a profitable real estate portfolio."
              color="#e74c3c"
            />
            <ServiceCard
              icon="💰"
              title="Market Valuation"
              description="Accurate property valuations using comprehensive market analysis and comparable property data."
              color="#9b59b6"
            />
            <ServiceCard
              icon="✈️"
              title="Relocation Services"
              description="Complete relocation assistance including area tours, school information, and settling-in support."
              color="#1abc9c"
            />
            <ServiceCard
              icon="🏢"
              title="Commercial Real Estate"
              description="Specialized services for commercial properties including office buildings, retail spaces, and industrial properties."
              color="#f39c12"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section - Centered content */}
      <section style={{ ...baseContactSectionStyle, ...(isMobile && mobileContactSectionStyle) }}>
        <div style={{ ...baseContactFormContainerStyle, ...(isMobile && mobileContactFormContainerStyle) }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: isMobile ? '28px' : '36px',
            marginBottom: '40px',
            color: '#2c3e50',
            fontWeight: '700'
          }}>Send us a Message</h2>

          <form>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '20px' : '30px',
              marginBottom: '30px'
            }}>
              <FormField label="Full Name" type="text" />
              <FormField label="Email Address" type="email" />
              <FormField label="Phone Number" type="tel" />
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '12px',
                  fontWeight: '600',
                  color: '#2c3e50',
                  fontSize: '16px'
                }}>Service Needed</label>
                <select style={{
                  width: '100%',
                  padding: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  fontSize: '16px',
                  color: '#34495e',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%232c3e50%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 15px center',
                  backgroundSize: '12px',
                  cursor: 'pointer',
                  'option': {
                    color: 'black'
                  }
                }}>
                  <option style={{ color: 'black' }}>Select a Service</option>
                  <option style={{ color: 'black' }}>Property Sales</option>
                  <option style={{ color: 'black' }}>Property Management</option>
                  <option style={{ color: 'black' }}>Investment Consulting</option>
                  <option style={{ color: 'black' }}>Market Valuation</option>
                  <option style={{ color: 'black' }}>Relocation Services</option>
                  <option style={{ color: 'black' }}>Commercial Real Estate</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <label style={{
                display: 'block',
                marginBottom: '12px',
                fontWeight: '600',
                color: '#2c3e50',
                fontSize: '16px'
              }}>Message</label>
              <textarea style={{
                width: '100%',
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                minHeight: '180px',
                fontSize: '16px',
                color: '#34495e',
                resize: 'vertical'
              }} placeholder="Tell us about your property needs..."></textarea>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button style={{
                backgroundColor: '#f39c12',
                color: 'white',
                padding: '18px 60px',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '18px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(243, 156, 18, 0.3)',
                ':hover': {
                  backgroundColor: '#e67e22',
                  transform: 'translateY(-2px)'
                }
              }}>Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer - Full width */}
      <footer style={{ ...baseFooterStyle, ...(isMobile && mobileFooterStyle) }}>
        <div style={{ ...baseFooterContentStyle, ...(isMobile && mobileFooterContentStyle) }}>
          <div>
            <h3 style={{
              fontSize: isMobile ? '22px' : '26px',
              marginBottom: '30px',
              fontWeight: '700',
              letterSpacing: '0.5px'
            }}>Sologans Properties</h3>

            <p style={{
              lineHeight: '1.8',
              color: '#bdc3c7',
              marginBottom: '30px',
              fontSize: '16px'
            }}>
              Your trusted partner in real estate. We help you find the perfect property and make your real estate dreams a reality with professional service and expert guidance.
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: isMobile ? '22px' : '26px',
              marginBottom: '30px',
              fontWeight: '700',
              letterSpacing: '0.5px'
            }}>Quick Links</h3>

            <div style={{ ...baseFooterLinksStyle, ...(isMobile && mobileFooterLinksStyle) }}>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/properties">Buy Properties</FooterLink>
              <FooterLink to="/properties">Properties</FooterLink>
              <FooterLink to="/properties">Sell Properties</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/properties">Rent Properties</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/services">Property Management</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/services">Investment Consulting</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/services">Market Analysis</FooterLink>
            </div>
          </div>
        </div>

        <div style={{ ...baseFooterBottomStyle, ...(isMobile && mobileFooterBottomStyle) }}>
          <p style={{ fontSize: isMobile ? '13px' : '15px' }}>© {new Date().getFullYear()} Sologans Properties. All rights reserved. | <Link to="/privacy" style={{ color: '#bdc3c7', textDecoration: 'none', ':hover': { color: '#f39c12' } }}>Privacy Policy</Link> | <Link to="/terms" style={{ color: '#bdc3c7', textDecoration: 'none', ':hover': { color: '#f39c12' } }}>Terms of Service</Link></p>
        </div>
      </footer>
    </div>
  );
};

// Reusable components (no changes needed here as their responsiveness is handled by the parent)
const ServiceCard = ({ icon, title, description, color }) => (
  <div style={{
    backgroundColor: '#fff',
    padding: '35px 30px',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    borderTop: `4px solid ${color}`,
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: `0 15px 35px rgba(0,0,0,0.1), 0 5px 15px ${color}40`
    }
  }}>
    <div style={{
      fontSize: '40px',
      marginBottom: '20px'
    }}>{icon}</div>
    <h3 style={{
      color: '#2c3e50',
      fontSize: '22px',
      marginBottom: '15px',
      fontWeight: '700'
    }}>{title}</h3>
    <p style={{
      color: '#7f8c8d',
      lineHeight: '1.7',
      fontSize: '16px'
    }}>{description}</p>
  </div>
);

const FormField = ({ label, type }) => (
  <div>
    <label style={{
      display: 'block',
      marginBottom: '12px',
      fontWeight: '600',
      color: '#2c3e50',
      fontSize: '16px'
    }}>{label}</label>
    <input type={type} style={{
      width: '100%',
      padding: '16px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '16px',
      color: '#34495e',
      transition: 'all 0.3s ease',
      ':focus': {
        outline: 'none',
        borderColor: '#f39c12',
        boxShadow: '0 0 0 3px rgba(243, 156, 18, 0.2)'
      }
    }} />
  </div>
);

const FooterLink = ({ to, children }) => (
  <Link to={to} style={{
    color: '#bdc3c7',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    ':hover': {
      color: '#f39c12',
      transform: 'translateX(5px)'
    }
  }}>
    {children}
  </Link>
);

export default Home;