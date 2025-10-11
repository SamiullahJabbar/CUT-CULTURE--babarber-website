import React from 'react';
import Layout from '../components/HeaderFooter';
import ai5 from '../assets/images/a5.jpeg';

const ServicesPage = () => {
  return (
    <Layout>
      <div style={styles.container}>
        {/* HERO SECTION */}
        <section style={styles.hero} className="hero-responsive">
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <h1 style={styles.heroTitle} className="hero-title-responsive">
                Services & <span style={styles.highlight}>Pricing</span>
              </h1>
              <p style={styles.heroSubtitle} className="hero-subtitle-responsive">
                Premium grooming services at affordable prices. We keep it simple, sharp, and exceptional.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN SERVICES SECTION */}
        <section style={styles.servicesSection} className="section-responsive">
          <div style={styles.sectionHeader} className="section-header-responsive">
            <h2 style={styles.sectionTitle} className="section-title-responsive">Our Core Services</h2>
            <p style={styles.sectionSubtitle}>Professional grooming services tailored to your style</p>
          </div>

          <div style={styles.servicesGrid} className="services-grid-responsive">
            {/* Service 1 - Haircut */}
            <div style={styles.serviceCard} className="service-card">
              <div style={{...styles.serviceImage, backgroundImage: 'url(https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}} className="service-image-responsive">
                <div style={styles.serviceOverlay}></div>
                <div style={styles.servicePrice} className="service-price">₹20</div>
                <div style={styles.serviceContent}>
                  <h3 style={styles.serviceTitle} className="service-title-responsive">Professional Haircut</h3>
                  <p style={styles.serviceDescription} className="service-description-responsive">
                    Expert haircut with precision styling, including consultation, shampoo, and finishing touches.
                  </p>
                  <div style={styles.serviceDetails} className="service-details-responsive">
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>Duration:</span>
                      <span style={styles.detailValue}>30-45 mins</span>
                    </div>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>Includes:</span>
                      <span style={styles.detailValue}>Style Consultation</span>
                    </div>
                  </div>
                  <ul style={styles.featuresList} className="features-list-responsive">
                    <li style={styles.featureItem}>Clean fades & sharp lines</li>
                    <li style={styles.featureItem}>Modern & classic styles</li>
                    <li style={styles.featureItem}>Precision cutting</li>
                    <li style={styles.featureItem}>Professional styling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 - Haircut + Beard */}
            <div style={styles.serviceCard} className="service-card">
              <div style={{...styles.serviceImage, backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661382028468-38612d62a254?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}} className="service-image-responsive">
                <div style={styles.serviceOverlay}></div>
                <div style={styles.servicePrice} className="service-price">₹25</div>
                <div style={styles.serviceContent}>
                  <h3 style={styles.serviceTitle} className="service-title-responsive">Haircut + Beard Trim</h3>
                  <p style={styles.serviceDescription} className="service-description-responsive">
                    Complete grooming package including professional haircut and detailed beard shaping.
                  </p>
                  <div style={styles.serviceDetails} className="service-details-responsive">
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>Duration:</span>
                      <span style={styles.detailValue}>45-60 mins</span>
                    </div>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>Includes:</span>
                      <span style={styles.detailValue}>Beard Oil</span>
                    </div>
                  </div>
                  <ul style={styles.featuresList} className="features-list-responsive">
                    <li style={styles.featureItem}>Full haircut service</li>
                    <li style={styles.featureItem}>Beard shaping & trimming</li>
                    <li style={styles.featureItem}>Hot towel treatment</li>
                    <li style={styles.featureItem}>Premium beard oil</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 - Line Up */}
            <div style={styles.serviceCard} className="service-card">
              <div style={{...styles.serviceImage, backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}} className="service-image-responsive">
                <div style={styles.serviceOverlay}></div>
                <div style={styles.servicePrice} className="service-price">₹15</div>
                <div style={styles.serviceContent}>
                  <h3 style={styles.serviceTitle} className="service-title-responsive">Signature Line-Up</h3>
                  <p style={styles.serviceDescription} className="service-description-responsive">
                    Crisp, clean line-up with razor precision for sharp edges and defined hairline.
                  </p>
                  <div style={styles.serviceDetails} className="service-details-responsive">
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>Duration:</span>
                      <span style={styles.detailValue}>20-30 mins</span>
                    </div>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}>Includes:</span>
                      <span style={styles.detailValue}>Razor Work</span>
                    </div>
                  </div>
                  <ul style={styles.featuresList} className="features-list-responsive">
                    <li style={styles.featureItem}>Razor line-up</li>
                    <li style={styles.featureItem}>Beard line-up</li>
                    <li style={styles.featureItem}>Edge definition</li>
                    <li style={styles.featureItem}>Hairline design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADD-ONS SECTION */}
        <section style={styles.addonsSection} className="section-responsive">
          <div style={styles.sectionHeader} className="section-header-responsive">
            <h2 style={styles.sectionTitle} className="section-title-responsive">Premium Add-Ons</h2>
            <p style={styles.sectionSubtitle}>Enhance your grooming experience with these premium additions</p>
          </div>

          <div style={styles.addonsGrid} className="addons-grid-responsive">
            {/* Add-on 1 */}
            <div style={styles.addonCard} className="addon-card">
              <div style={{...styles.addonImage, backgroundImage: 'url(https://www.barberchairllc.com/wp-content/uploads/2021/06/hot-towel-shave.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}} className="addon-image-responsive">
                <div style={styles.addonOverlay}></div>
                <div style={styles.addonPrice}>+₹5</div>
              </div>
              <div style={styles.addonContent}>
                <h3 style={styles.addonTitle} className="addon-title-responsive">Hot Towel Treatment</h3>
                <p style={styles.addonDescription}>
                  Relaxing hot towel service to open pores and prepare skin for a closer, more comfortable shave.
                </p>
              </div>
            </div>

            {/* Add-on 2 */}
            <div style={styles.addonCard} className="addon-card">
              <div style={{...styles.addonImage, backgroundImage: 'url(https://www.fortythreeco.com/cdn/shop/articles/Dental_Videos_5.png?v=1747160912&width=1500?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}} className="addon-image-responsive">
                <div style={styles.addonOverlay}></div>
                <div style={styles.addonPrice}>+₹5</div>
              </div>
              <div style={styles.addonContent}>
                <h3 style={styles.addonTitle} className="addon-title-responsive">Beard Conditioning</h3>
                <p style={styles.addonDescription}>
                  Deep conditioning treatment with premium oils to soften and nourish your beard.
                </p>
              </div>
            </div>

            {/* Add-on 3 */}
            <div style={styles.addonCard} className="addon-card">
              <div style={{...styles.addonImage, backgroundImage: 'url(https://www.kelownaspa.ca/cdn/shop/files/istockphoto-1182948519-612x612_2000x.jpg?v=1720207693?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}} className="addon-image-responsive">
                <div style={styles.addonOverlay}></div>
                <div style={styles.addonPrice}>+₹5</div>
              </div>
              <div style={styles.addonContent}>
                <h3 style={styles.addonTitle} className="addon-title-responsive">Scalp Massage</h3>
                <p style={styles.addonDescription}>
                  Therapeutic scalp massage to relieve tension and promote healthy hair growth.
                </p>
              </div>
            </div>

            {/* Add-on 4 */}
            <div style={styles.addonCard} className="addon-card">
              <div style={{...styles.addonImage, backgroundImage: 'url(https://blogs-images.forbes.com/josephdeacetis/files/2019/09/Styling-Close-Up-e1569867110789.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}} className="addon-image-responsive">
                <div style={styles.addonOverlay}></div>
                <div style={styles.addonPrice}>+₹5</div>
              </div>
              <div style={styles.addonContent}>
                <h3 style={styles.addonTitle} className="addon-title-responsive">Premium Styling</h3>
                <p style={styles.addonDescription}>
                  Advanced styling with premium products for long-lasting hold and exceptional shine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING TABLE SECTION */}
        <section style={styles.pricingSection} className="section-responsive">
          <div style={styles.pricingContent}>
            <div style={styles.pricingHeader} className="section-header-responsive">
              <h2 style={styles.pricingTitle} className="section-title-responsive">Complete Price List</h2>
              <p style={styles.pricingSubtitle}>Simple, transparent pricing for all our services</p>
            </div>
            
            <div style={styles.pricingTable} className="pricing-table-responsive pricing-table">
              <div style={styles.tableHeader} className="table-header-responsive">
                <div style={styles.tableColumnService}>Service</div>
                <div style={styles.tableColumnDuration} className="table-column-duration-responsive">Duration</div>
                <div style={styles.tableColumnPrice}>Price</div>
              </div>
              
              <div style={styles.tableRow} className="table-row-responsive">
                <div style={styles.tableColumnService} className="table-column-service-responsive">
                  <strong>Professional Haircut</strong>
                  <div style={styles.serviceNote}>Includes consultation & styling</div>
                </div>
                <div style={styles.tableColumnDuration} className="table-column-duration-responsive">30-45 mins</div>
                <div style={styles.tableColumnPrice}>$20</div>
              </div>
              
              <div style={styles.tableRow} className="table-row-responsive">
                <div style={styles.tableColumnService} className="table-column-service-responsive">
                  <strong>Haircut + Beard Trim</strong>
                  <div style={styles.serviceNote}>Complete grooming package</div>
                </div>
                <div style={styles.tableColumnDuration} className="table-column-duration-responsive">45-60 mins</div>
                <div style={styles.tableColumnPrice}>$25</div>
              </div>
              
              <div style={styles.tableRow} className="table-row-responsive">
                <div style={styles.tableColumnService} className="table-column-service-responsive">
                  <strong>Signature Line-Up</strong>
                  <div style={styles.serviceNote}>Razor precision edges</div>
                </div>
                <div style={styles.tableColumnDuration} className="table-column-duration-responsive">20-30 mins</div>
                <div style={styles.tableColumnPrice}>$15</div>
              </div>
              
              <div style={styles.tableRow} className="table-row-responsive">
                <div style={styles.tableColumnService} className="table-column-service-responsive">
                  <strong>Beard Trim Only</strong>
                  <div style={styles.serviceNote}>Shape & detail work</div>
                </div>
                <div style={styles.tableColumnDuration} className="table-column-duration-responsive">15-20 mins</div>
                <div style={styles.tableColumnPrice}>$10</div>
              </div>
              
              <div style={styles.tableDivider}></div>
              
              <div style={styles.tableRow} className="table-row-responsive">
                <div style={styles.tableColumnService} className="table-column-service-responsive">
                  <strong>Add-On Services</strong>
                  <div style={styles.serviceNote}>Enhance any service</div>
                </div>
                <div style={styles.tableColumnDuration} className="table-column-duration-responsive">+5-10 mins</div>
                <div style={styles.tableColumnPrice}>+$5 each</div>
              </div>
            </div>
            
            <div style={styles.pricingNote}>
              <p style={styles.noteText}>
                All services include complimentary consultation. Walk-ins welcome, appointments recommended.
              </p>
            </div>
          </div>
        </section>

        {/* BOOKING CTA SECTION */}
        <section style={styles.bookingSection} className="booking-section-responsive">
          <div style={styles.bookingBackground}></div>
          <div style={styles.bookingContent} className="booking-content-responsive">
            <div style={styles.bookingText} className="booking-text-responsive">
              <h2 style={styles.bookingTitle} className="booking-title-responsive">Ready for Your Transformation?</h2>
              <p style={styles.bookingSubtitle}>
                Book your appointment today and experience the Cut Culture difference. 
                Walk-ins welcome, but appointments ensure your preferred time.
              </p>
              <div style={styles.bookingInfo} className="booking-info-responsive">
                <div style={styles.infoItem} className="info-item-responsive">
                  <div style={styles.infoIcon}>⏰</div>
                  <div>
                    <div style={styles.infoTitle}>Business Hours</div>
                    <div style={styles.infoDescription}>Mon-Sat: 9AM-7PM</div>
                  </div>
                </div>
                <div style={styles.infoItem} className="info-item-responsive">
                  <div style={styles.infoIcon}>📞</div>
                  <div>
                    <div style={styles.infoTitle}>Call Us</div>
                    <div style={styles.infoDescription}> (913) 313-0064</div>
                  </div>
                </div>
                <div style={styles.infoItem} className="info-item-responsive">
                  <div style={styles.infoIcon}>📍</div>
                  <div>
                    <div style={styles.infoTitle}>Location</div>
                    <div style={styles.infoDescription}>Kansas City, KS</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={styles.bookingActions} className="booking-actions-responsive">
  <button
    style={styles.bookingButtonPrimary}
    className="booking-button-primary"
    onClick={() => (window.location.href = "/BookingPage")}
  >
    Book Appointment
  </button>
  <button style={styles.bookingButtonSecondary} className="booking-button-secondary">Call Now</button>
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
        /* Fix for list style in feature list */
        .features-list-responsive li {
          list-style: none !important;
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

        @keyframes slideInUp {
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

        @keyframes priceGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.6);
          }
        }

        .service-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .addon-card {
          animation: slideInUp 0.8s ease-out;
        }

        .pricing-table {
          animation: slideInUp 1s ease-out;
        }

        .service-card:hover {
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .addon-card:hover {
          transform: scale(1.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-price {
          animation: priceGlow 2s infinite;
        }

        .booking-button-primary:hover {
          animation: pulse 0.5s ease-in-out;
        }

        /* --- MOBILE RESPONSIVENESS (Media Queries: Max width 768px) --- */

        @media (max-width: 768px) {
          
          /* GENERAL SECTION STYLES */
          .section-responsive {
            padding: 3rem 0 !important; /* Smaller vertical padding */
          }

          .section-header-responsive {
            padding: 0 1.5rem !important;
            margin-bottom: 2rem !important;
          }

          .section-title-responsive {
            font-size: 2rem !important; /* Smaller title */
            margin-bottom: 1rem !important;
          }
          
          /* HERO SECTION */
          .hero-responsive {
            min-height: 40vh !important;
          }

          .hero-title-responsive {
            font-size: 2.5rem !important;
          }

          .hero-subtitle-responsive {
            font-size: 1rem !important;
          }

          /* CORE SERVICES SECTION */
          .services-grid-responsive {
            grid-template-columns: 1fr !important; /* Stack service cards */
            padding: 0 1rem !important;
          }

          .service-image-responsive {
            height: 300px !important; /* Shorter image card */
          }
          
          .service-title-responsive {
             font-size: 1.5rem !important;
          }
          
          .service-description-responsive {
             font-size: 1rem !important;
          }
          
          .service-details-responsive {
             gap: 1rem !important;
             flex-direction: column; /* Stack details */
          }
          
          /* ADD-ONS SECTION */
          .addons-grid-responsive {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important; /* 2 columns for add-ons */
            padding: 0 1rem !important;
            gap: 1rem !important;
          }
          
          .addon-image-responsive {
            height: 120px !important;
          }
          
          .addon-title-responsive {
             font-size: 1.1rem !important;
             margin-bottom: 0.5rem !important;
          }
          
          .addon-card > div:last-child {
             padding: 1rem !important;
          }
          
          /* PRICING TABLE SECTION */
          .pricing-table-responsive {
             padding: 0 !important;
          }
          
          .table-header-responsive,
          .table-row-responsive {
             grid-template-columns: 3fr 0fr 1fr !important; /* Duration column hidden */
             padding: 1rem 1.5rem !important;
             gap: 0.5rem !important;
          }
          
          .table-column-duration-responsive {
             display: none !important; /* Hide duration column on mobile */
          }
          
          .table-column-service-responsive {
             font-size: 0.95rem !important;
          }

          /* BOOKING CTA SECTION */
          .booking-section-responsive {
            padding: 3rem 0 !important;
          }
          
          .booking-content-responsive {
            grid-template-columns: 1fr !important; /* Stack content and buttons */
            gap: 2rem !important;
          }
          
          .booking-title-responsive {
            font-size: 2rem !important;
            margin-bottom: 1rem !important;
          }
          
          .booking-text-responsive {
             text-align: center;
          }
          
          .booking-info-responsive {
            flex-direction: column; /* Stack info items */
            gap: 1rem !important;
          }
          
          .info-item-responsive {
             justify-content: center;
          }
          
          .booking-actions-responsive {
            flex-direction: column !important; /* Stack buttons */
          }
          
          .booking-actions-responsive button {
            width: 100% !important; /* Full width buttons */
            padding: 1rem 1.5rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </Layout>
  );
};

// Professional Styles with Animations
const styles = {
  container: {
    width: '100%',
    overflow: 'hidden'
  },

  // HERO SECTION
  hero: {
    minHeight: '50vh',
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

  // SERVICES SECTION
  servicesSection: {
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
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  
  serviceCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeInUp 0.6s ease-out'
  },
  
  serviceImage: {
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end'
  },
  
  serviceOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.4) 50%, transparent 100%)',
    zIndex: 1
  },
  
  servicePrice: {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    zIndex: 2,
    animation: 'priceGlow 2s infinite'
  },
  
  serviceContent: {
    position: 'relative',
    zIndex: 2,
    padding: '2rem',
    color: 'white'
  },
  
  serviceTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '1rem'
  },
  
  serviceDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#FFFFFF',
    marginBottom: '1.5rem'
  },
  
  serviceDetails: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '1.5rem'
  },
  
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  
  detailLabel: {
    fontSize: '0.9rem',
    color: '#CCCCCC',
    fontWeight: '500'
  },
  
  detailValue: {
    fontSize: '1rem',
    color: '#FFFFFF',
    fontWeight: '600'
  },
  
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  
  featureItem: {
    color: '#FFFFFF',
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    fontSize: '0.95rem',
    position: 'relative',
    paddingLeft: '1.5rem'
  },
  
  featureItemBefore: {
    content: '"✓"',
    position: 'absolute',
    left: 0,
    color: '#D4AF37',
    fontWeight: 'bold'
  },

  // ADD-ONS SECTION
  addonsSection: {
    padding: '6rem 0',
    backgroundColor: '#f8f9fa'
  },
  
  addonsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  },
  
  addonCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeInUp 0.8s ease-out'
  },
  
  addonImage: {
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  },
  
  addonOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(26,26,26,0.4) 100%)'
  },
  
  addonPrice: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  },
  
  addonContent: {
    padding: '1.5rem'
  },
  
  addonTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '0.75rem'
  },
  
  addonDescription: {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: '1.6'
  },

  // PRICING TABLE SECTION
  pricingSection: {
    padding: '6rem 0',
    backgroundColor: '#ffffff'
  },
  
  pricingContent: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  
  pricingHeader: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  
  pricingTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  
  pricingSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6'
  },
  
  pricingTable: {
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    animation: 'fadeInUp 1s ease-out',
    marginBottom: '2rem'
  },
  
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '1rem',
    padding: '1.5rem 2rem',
    backgroundColor: '#1a1a1a',
    color: 'white',
    fontWeight: 'bold'
  },
  
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '1rem',
    padding: '1.5rem 2rem',
    borderBottom: '1px solid #e9ecef',
    alignItems: 'center'
  },
  
  tableColumnService: {
    fontWeight: '600',
    color: '#1a1a1a'
  },
  
  tableColumnDuration: {
    color: '#666',
    textAlign: 'center'
  },
  
  tableColumnPrice: {
    color: '#D4AF37',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textAlign: 'right'
  },
  
  serviceNote: {
    fontSize: '0.85rem',
    color: '#666',
    marginTop: '0.25rem',
    fontWeight: 'normal'
  },
  
  tableDivider: {
    height: '2px',
    backgroundColor: '#D4AF37',
    margin: '1rem 2rem'
  },
  
  pricingNote: {
    textAlign: 'center',
    padding: '0 2rem'
  },
  
  noteText: {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    fontStyle: 'italic'
  },

  // BOOKING SECTION
  bookingSection: {
    padding: '5rem 0',
    backgroundColor: '#1a1a1a',
    position: 'relative',
    overflow: 'hidden'
  },
  
  bookingBackground: {
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
  
  bookingContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2
  },
  
  bookingText: {
    color: 'white'
  },
  
  bookingTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#FFFFFF'
  },
  
  bookingSubtitle: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#CCCCCC',
    marginBottom: '2rem'
  },
  
  bookingInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  
  infoItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  
  infoIcon: {
    fontSize: '1.5rem',
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  
  infoTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '0.25rem'
  },
  
  infoDescription: {
    fontSize: '0.95rem',
    color: '#CCCCCC'
  },
  
  bookingActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  
  bookingButtonPrimary: {
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    border: 'none',
    padding: '1.2rem 2rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
    animation: 'pulse 2s infinite'
  },
  
  bookingButtonSecondary: {
    backgroundColor: 'transparent',
    color: '#D4AF37',
    border: '2px solid #D4AF37',
    padding: '1.2rem 2rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  }
};

export default ServicesPage;