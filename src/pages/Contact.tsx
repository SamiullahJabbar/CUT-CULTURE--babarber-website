import React, { useState } from 'react';
import Layout from '../components/HeaderFooter';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Layout>
      <div style={styles.container}>
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <h1 style={styles.heroTitle}>
                Get In <span style={styles.highlight}>Touch</span>
              </h1>
              <p style={styles.heroSubtitle}>
                Ready for your next transformation? Reach out to us — we're here to help you look and feel your best.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT MAIN SECTION */}
        <section style={styles.contactSection}>
          <div style={styles.contactContainer}>
            <div style={styles.contactGrid}>
              {/* Contact Information Side */}
              <div style={styles.infoSide}>
                <div style={styles.infoCard}>
                  <h2 style={styles.infoTitle}>Contact Information</h2>
                  <p style={styles.infoDescription}>
                    We're here to assist you with any questions about our services, pricing, or availability. 
                    Don't hesitate to reach out — we typically respond within a few hours.
                  </p>

                  <div style={styles.contactMethods}>
                    {/* Phone */}
                    <div style={styles.contactMethod}>
                      <div style={styles.methodImage}>
                        <div style={{...styles.imageContainer, backgroundImage: 'url(https://images.unsplash.com/photo-1563013546-7e5c7b6dc223?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                          <div style={styles.imageOverlay}></div>
                          <div style={styles.methodContent}>
                            <h3 style={styles.methodTitle}>Phone / Text</h3>
                            <p style={styles.methodDescription}>
                              Preferred method for quick responses and appointment scheduling
                            </p>
                            <div style={styles.contactDetail}>
                              <span style={styles.detailLabel}>Direct Line:</span>
                              <a href="tel:9133130064" style={styles.detailValue}>(913) 313-0064</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div style={styles.contactMethod}>
                      <div style={styles.methodImage}>
                        <div style={{...styles.imageContainer, backgroundImage: 'url(https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                          <div style={styles.imageOverlay}></div>
                          <div style={styles.methodContent}>
                            <h3 style={styles.methodTitle}>Email</h3>
                            <p style={styles.methodDescription}>
                              Send us detailed inquiries or service questions
                            </p>
                            <div style={styles.contactDetail}>
                              <span style={styles.detailLabel}>Email Address:</span>
                              <a href="mailto:cutculturekc@gmail.com" style={styles.detailValue}>cutculturekc@gmail.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div style={styles.contactMethod}>
                      <div style={styles.methodImage}>
                        <div style={{...styles.imageContainer, backgroundImage: 'url(https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                          <div style={styles.imageOverlay}></div>
                          <div style={styles.methodContent}>
                            <h3 style={styles.methodTitle}>Location</h3>
                            <p style={styles.methodDescription}>
                              Visit our modern barbershop in the heart of Kansas City
                            </p>
                            <div style={styles.contactDetail}>
                              <span style={styles.detailLabel}>Address:</span>
                              <span style={styles.detailValue}>Kansas City, KS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div style={styles.contactMethod}>
                      <div style={styles.methodImage}>
                        <div style={{...styles.imageContainer, backgroundImage: 'url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}>
                          <div style={styles.imageOverlay}></div>
                          <div style={styles.methodContent}>
                            <h3 style={styles.methodTitle}>Business Hours</h3>
                            <p style={styles.methodDescription}>
                              Flexible scheduling available to fit your busy lifestyle
                            </p>
                            <div style={styles.hoursList}>
                              <div style={styles.hourItem}>
                                <span style={styles.day}>Monday - Saturday:</span>
                                <span style={styles.time}>9:00 AM - 7:00 PM</span>
                              </div>
                              <div style={styles.hourItem}>
                                <span style={styles.day}>Sunday:</span>
                                <span style={styles.time}>Closed</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Side */}
              <div style={styles.formSide}>
                <div style={styles.formCard}>
                  <h2 style={styles.formTitle}>Send Us a Message</h2>
                  <p style={styles.formDescription}>
                    Have a question or ready to book an appointment? Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} style={styles.contactForm}>
                    <div style={styles.formRow}>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div style={styles.formRow}>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          style={styles.select}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="appointment">Book Appointment</option>
                          <option value="service-question">Service Question</option>
                          <option value="pricing">Pricing Inquiry</option>
                          <option value="general">General Information</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        style={styles.textarea}
                        placeholder="Tell us how we can help you..."
                        rows="6"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      style={{
                        ...styles.submitButton,
                        ...(isSubmitting && styles.submitButtonLoading)
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                </div>

                {/* Quick Actions */}
                <div style={styles.quickActions}>
                  <div style={styles.actionCard}>
                    <h3 style={styles.actionTitle}>Quick Connect</h3>
                    <p style={styles.actionDescription}>
                      Prefer to connect directly? Use these quick options.
                    </p>
                    <div style={styles.actionButtons}>
                      <a href="tel:9133130064" style={styles.actionButtonPrimary}>
                        Call Now
                      </a>
                      <a href="sms:9133130064" style={styles.actionButtonSecondary}>
                        Send Text
                      </a>
                      <a href="mailto:cutculturekc@gmail.com" style={styles.actionButtonSecondary}>
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP & LOCATION SECTION */}
        <section style={styles.mapSection}>
          <div style={styles.mapContainer}>
            <div style={styles.mapContent}>
              <h2 style={styles.mapTitle}>Visit Our Barbershop</h2>
              <p style={styles.mapDescription}>
                Experience the Cut Culture difference in person. Our modern, comfortable space is designed 
                to provide you with the ultimate grooming experience.
              </p>
              
              <div style={styles.locationDetails}>
                <div style={styles.locationCard}>
                  <div style={styles.locationImage}>
                    <div style={{...styles.locationImageContainer, backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}>
                      <div style={styles.locationOverlay}></div>
                      <div style={styles.locationText}>
                        <h3 style={styles.locationTitle}>Cut Culture Barbershop</h3>
                        <p style={styles.locationAddress}>Kansas City, KS</p>
                      </div>
                    </div>
                  </div>
                  
                  <div style={styles.locationInfo}>
                    <div style={styles.infoItem}>
                      <strong style={styles.infoLabel}>Address:</strong>
                      <span style={styles.infoValue}>Kansas City, Kansas</span>
                    </div>
                    <div style={styles.infoItem}>
                      <strong style={styles.infoLabel}>Phone:</strong>
                      <span style={styles.infoValue}> (913) 313-0064</span>
                    </div>
                    <div style={styles.infoItem}>
                      <strong style={styles.infoLabel}>Email:</strong>
                      <span style={styles.infoValue}>cutculturekc@gmail.com</span>
                    </div>
                    <div style={styles.infoItem}>
                      <strong style={styles.infoLabel}>Hours:</strong>
                      <span style={styles.infoValue}>Mon-Sat: 9AM-7PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaBackground}></div>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready for Your Next Cut?</h2>
            <p style={styles.ctaText}>
              Don't wait — book your appointment today and experience the premium service that sets Cut Culture apart.
            </p>
            <div style={styles.ctaButtons}>
              <a href="tel:9133130064" style={styles.ctaButtonPrimary}>
                Call to Book:  (913) 313-0064
              </a>
              <button style={styles.ctaButtonSecondary}>
                View Services
              </button>
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

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.6);
          }
        }

        .contact-method {
          animation: fadeInUp 0.6s ease-out;
        }

        .form-card {
          animation: slideInRight 0.8s ease-out;
        }

        .info-card {
          animation: slideInLeft 0.8s ease-out;
        }

        .location-card {
          animation: fadeInUp 1s ease-out;
        }

        .contact-method:hover {
          transform: translateY(-5px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .action-button-primary:hover {
          animation: pulse 0.5s ease-in-out;
        }

        .cta-button-primary:hover {
          animation: glow 2s infinite;
        }

        .input:focus, .select:focus, .textarea:focus {
          animation: glow 2s infinite;
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

  // CONTACT SECTION
  contactSection: {
    padding: '6rem 0',
    backgroundColor: '#ffffff'
  },
  
  contactContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'flex-start'
  },
  
  // INFO SIDE
  infoSide: {
    animation: 'slideInLeft 0.8s ease-out'
  },
  
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  
  infoTitle: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  
  infoDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '2rem'
  },
  
  contactMethods: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  
  contactMethod: {
    animation: 'fadeInUp 0.6s ease-out'
  },
  
  methodImage: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  
  imageContainer: {
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end'
  },
  
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.4) 50%, transparent 100%)',
    zIndex: 1
  },
  
  methodContent: {
    position: 'relative',
    zIndex: 2,
    padding: '1.5rem',
    color: 'white',
    width: '100%'
  },
  
  methodTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '0.5rem'
  },
  
  methodDescription: {
    fontSize: '0.95rem',
    color: '#CCCCCC',
    marginBottom: '1rem',
    lineHeight: '1.5'
  },
  
  contactDetail: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  
  detailLabel: {
    fontSize: '0.85rem',
    color: '#CCCCCC',
    fontWeight: '500'
  },
  
  detailValue: {
    fontSize: '1.1rem',
    color: '#FFFFFF',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  },
  
  hoursList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  
  hourItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  day: {
    fontSize: '0.9rem',
    color: '#CCCCCC'
  },
  
  time: {
    fontSize: '0.9rem',
    color: '#FFFFFF',
    fontWeight: '600'
  },
  
  // FORM SIDE
  formSide: {
    animation: 'slideInRight 0.8s ease-out'
  },
  
  formCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    padding: '2.5rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  },
  
  formTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  
  formDescription: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '2rem'
  },
  
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem'
  },
  
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  
  label: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#1a1a1a'
  },
  
  input: {
    padding: '1rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: '#ffffff'
  },
  
  select: {
    padding: '1rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: '#ffffff',
    cursor: 'pointer'
  },
  
  textarea: {
    padding: '1rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: '#ffffff',
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit'
  },
  
  submitButton: {
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    border: 'none',
    padding: '1.2rem 2rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
  },
  
  submitButtonLoading: {
    opacity: 0.7,
    cursor: 'not-allowed'
  },
  
  // QUICK ACTIONS
  quickActions: {
    animation: 'fadeInUp 1s ease-out'
  },
  
  actionCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '2rem',
    color: 'white'
  },
  
  actionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '0.75rem'
  },
  
  actionDescription: {
    fontSize: '0.95rem',
    color: '#CCCCCC',
    marginBottom: '1.5rem',
    lineHeight: '1.5'
  },
  
  actionButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  
  actionButtonPrimary: {
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    border: 'none',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
  },
  
  actionButtonSecondary: {
    backgroundColor: 'transparent',
    color: '#D4AF37',
    border: '2px solid #D4AF37',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  
  // MAP SECTION
  mapSection: {
    padding: '6rem 0',
    backgroundColor: '#f8f9fa'
  },
  
  mapContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  
  mapContent: {
    textAlign: 'center'
  },
  
  mapTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  
  mapDescription: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '3rem',
    maxWidth: '800px',
    margin: '0 auto 3rem auto'
  },
  
  locationDetails: {
    display: 'flex',
    justifyContent: 'center'
  },
  
  locationCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    width: '100%',
    animation: 'fadeInUp 1s ease-out'
  },
  
  locationImage: {
    height: '250px'
  },
  
  locationImageContainer: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end'
  },
  
  locationOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.4) 50%, transparent 100%)',
    zIndex: 1
  },
  
  locationText: {
    position: 'relative',
    zIndex: 2,
    padding: '2rem',
    color: 'white',
    width: '100%'
  },
  
  locationTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: '0.5rem'
  },
  
  locationAddress: {
    fontSize: '1.1rem',
    color: '#FFFFFF'
  },
  
  locationInfo: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  
  infoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid #f0f0f0'
  },
  
  infoLabel: {
    color: '#1a1a1a',
    fontSize: '0.95rem'
  },
  
  infoValue: {
    color: '#666',
    fontSize: '0.95rem',
    fontWeight: '500'
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
  
  ctaButtonPrimary: {
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
    textDecoration: 'none',
    display: 'inline-block',
    animation: 'glow 2s infinite'
  },
  
  ctaButtonSecondary: {
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

export default ContactPage;