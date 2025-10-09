import React, { useState } from 'react';
import Layout from '../components/HeaderFooter';

// Define hover styles outside the component for easy use in onMouseEnter/onMouseLeave
const hoverStyles = {
  service: { transform: 'translateY(-2px)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
  date: { transform: 'scale(1.05)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
  time: { transform: 'scale(1.05)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
};

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  // State to manage hover effects
  const [hoverService, setHoverService] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [hoverTime, setHoverTime] = useState(null);

  const services = [
    { id: 'haircut', name: 'Professional Haircut', price: '$20', duration: '30-45 mins' },
    { id: 'haircut-beard', name: 'Haircut + Beard Trim', price: '$25', duration: '45-60 mins' },
    { id: 'lineup', name: 'Signature Line-Up', price: '$15', duration: '20-30 mins' },
    { id: 'beard-only', name: 'Beard Trim Only', price: '$10', duration: '15-20 mins' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Booking submitted:', { selectedService, selectedDate, selectedTime, formData });
    alert('Appointment booked successfully! We will confirm your booking shortly.');
  };

  // Generate next 7 days for date selection
  const getNextSevenDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date.toISOString().split('T')[0]);
    }
    return days;
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
                Book Your <span style={styles.highlight}>Appointment</span>
              </h1>
              <p style={styles.heroSubtitle}>
                Skip the wait. Book online and secure your spot through our website. 
                Easy scheduling, real-time availability, hassle-free.
              </p>
              <div style={styles.heroFeatures}>
                <div style={styles.feature}>
                  <div style={styles.featureIcon}></div>
                  <span>Quick Booking</span>
                </div>
                <div style={styles.feature}>
                  <div style={styles.featureIcon}></div>
                  <span>Real-time Availability</span>
                </div>
                <div style={styles.feature}>
                  <div style={styles.featureIcon}></div>
                  <span>Secure Your Spot</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING FORM SECTION */}
        <section style={styles.bookingSection}>
          <div style={styles.bookingContainer}>
            <div style={styles.bookingHeader}>
              <h2 style={styles.bookingTitle}>Schedule Your Appointment</h2>
              <p style={styles.bookingSubtitle}>
                Fill out the form below to book your preferred time slot
              </p>
            </div>

            <div style={styles.bookingContent}>
              {/* Left Side - Form */}
              <div style={styles.formContainer}>
                <form onSubmit={handleSubmit} style={styles.bookingForm}>
                  {/* Service Selection */}
                  <div style={styles.formSection}>
                    <h3 style={styles.sectionTitle}>1. Select Service</h3>
                    <div style={styles.servicesGrid}>
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="service-option" // Keep className for animation
                          style={{
                            ...styles.serviceOption,
                            ...(selectedService === service.id && styles.serviceOptionSelected),
                            ...(hoverService === service.id && hoverStyles.service), // FIX: Apply hover style
                          }}
                          onClick={() => setSelectedService(service.id)}
                          onMouseEnter={() => setHoverService(service.id)} // FIX: Set hover state
                          onMouseLeave={() => setHoverService(null)} // FIX: Reset hover state
                        >
                          <div style={styles.serviceInfo}>
                            <div style={styles.serviceName}>{service.name}</div>
                            <div style={styles.serviceDetails}>
                              <span style={styles.servicePrice}>{service.price}</span>
                              <span style={styles.serviceDuration}>{service.duration}</span>
                            </div>
                          </div>
                          <div style={styles.radioCircle}>
                            {selectedService === service.id && <div style={styles.radioInner} />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time Selection */}
                  <div style={styles.formSection}>
                    <h3 style={styles.sectionTitle}>2. Select Date & Time</h3>
                    <div style={styles.datetimeGrid}>
                      <div style={styles.dateSelection}>
                        <label style={styles.label}>Preferred Date</label>
                        <div style={styles.dateOptions}>
                          {getNextSevenDays().map((date) => {
                            const dateObj = new Date(date);
                            const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' }); // FIX: Only show full weekday name
                            
                            return (
                              <div
                                key={date}
                                className="date-option" // Keep className for animation
                                style={{
                                  ...styles.dateOption,
                                  ...(selectedDate === date && styles.dateOptionSelected),
                                  ...(hoverDate === date && hoverStyles.date) // FIX: Apply hover style
                                }}
                                onClick={() => setSelectedDate(date)}
                                onMouseEnter={() => setHoverDate(date)} // FIX: Set hover state
                                onMouseLeave={() => setHoverDate(null)} // FIX: Reset hover state
                              >
                                {/* FIX: Only Day Name is displayed */}
                                <div style={styles.dayNameOnly}>{dayName}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div style={styles.timeSelection}>
                        <label style={styles.label}>Preferred Time</label>
                        <div style={styles.timeOptions}>
                          {timeSlots.map((time) => (
                            <div
                              key={time}
                              className="time-option" // Keep className for animation
                              style={{
                                ...styles.timeOption,
                                ...(selectedTime === time && styles.timeOptionSelected),
                                ...(hoverTime === time && hoverStyles.time) // FIX: Apply hover style
                              }}
                              onClick={() => setSelectedTime(time)}
                              onMouseEnter={() => setHoverTime(time)} // FIX: Set hover state
                              onMouseLeave={() => setHoverTime(null)} // FIX: Reset hover state
                            >
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div style={styles.formSection}>
                    <h3 style={styles.sectionTitle}>3. Your Information</h3>
                    <div style={styles.personalInfoGrid}>
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
                        <label style={styles.label}>Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>

                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          style={styles.input}
                          placeholder="your@email.com"
                        />
                      </div>

                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Special Requests</label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          style={styles.textarea}
                          placeholder="Any specific styling preferences or notes..."
                          rows="3"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    style={styles.submitButton}
                    disabled={!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.phone}
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>

              {/* Right Side - Summary & Info */}
              <div style={styles.summaryContainer}>
                <div className="summary-card" style={styles.summaryCard}>
                  <h3 style={styles.summaryTitle}>Appointment Summary</h3>
                  
                  {selectedService ? (
                    <div style={styles.summaryContent}>
                      <div style={styles.summaryItem}>
                        <span style={styles.summaryLabel}>Service:</span>
                        <span style={styles.summaryValue}>
                          {services.find(s => s.id === selectedService)?.name}
                        </span>
                      </div>
                      
                      <div style={styles.summaryItem}>
                        <span style={styles.summaryLabel}>Date:</span>
                        <span style={styles.summaryValue}>
                          {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          }) : 'Not selected'}
                        </span>
                      </div>
                      
                      <div style={styles.summaryItem}>
                        <span style={styles.summaryLabel}>Time:</span>
                        <span style={styles.summaryValue}>
                          {selectedTime || 'Not selected'}
                        </span>
                      </div>
                      
                      <div style={styles.summaryDivider}></div>
                      
                      <div style={styles.summaryItem}>
                        <span style={styles.summaryLabel}>Total:</span>
                        <span style={styles.summaryPrice}>
                          {services.find(s => s.id === selectedService)?.price || '$0'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={styles.emptySummary}>
                      <div style={styles.emptyIcon}>📅</div>
                      <p style={styles.emptyText}>
                        Select a service and time to see your appointment details
                      </p>
                    </div>
                  )}
                </div>

                {/* Contact Info */}
                <div style={styles.infoCard}>
                  <h4 style={styles.infoTitle}>Need Help?</h4>
                  <div style={styles.contactInfo}>
                    <div style={styles.contactItem}>
                      <div style={styles.contactIcon}>📞</div>
                      <div>
                        <div style={styles.contactLabel}>Call Us</div>
                        <div style={styles.contactValue}>(913) 313-0064</div>
                      </div>
                    </div>
                    
                    <div style={styles.contactItem}>
                      <div style={styles.contactIcon}>⏰</div>
                      <div>
                        <div style={styles.contactLabel}>Business Hours</div>
                        <div style={styles.contactValue}>Mon-Sat: 9AM-7PM</div>
                      </div>
                    </div>
                    
                    <div style={styles.contactItem}>
                      <div style={styles.contactIcon}>📍</div>
                      <div>
                        <div style={styles.contactLabel}>Location</div>
                        <div style={styles.contactValue}>Kansas City, KS</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Policies */}
                <div style={styles.policiesCard}>
                  <h4 style={styles.policiesTitle}>Booking Policies</h4>
                  <ul style={styles.policiesList}>
                    <li style={styles.policyItem}>24-hour cancellation notice required</li>
                    <li style={styles.policyItem}>Arrive 5 minutes before your appointment</li>
                    <li style={styles.policyItem}>Late arrivals may be subject to rescheduling</li>
                    <li style={styles.policyItem}>Walk-ins welcome based on availability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaBackground}></div>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Prefer to Call?</h2>
            <p style={styles.ctaText}>
              Speak directly with our team to schedule your appointment
            </p>
            <div style={styles.ctaButtons}>
              <a href="tel:9133130064" style={styles.ctaButtonPrimary}>
                Call Now: (913) 313-0064
              </a>
              <button style={styles.ctaButtonSecondary}>
                View Our Location
              </button>
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

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.6);
          }
        }

        /* Hover styles ko yahaan se hata diya hai, ab woh onMouseEnter/onMouseLeave se manage honge */

        .service-option {
          animation: fadeInUp 0.6s ease-out;
        }

        .date-option {
          animation: slideInLeft 0.8s ease-out;
        }

        .time-option {
          animation: slideInRight 0.8s ease-out;
        }

        .summary-card {
          animation: fadeInUp 1s ease-out;
        }
        
        .submit-button:hover:not(:disabled) {
          animation: pulse 0.5s ease-in-out;
        }

        .service-option-selected {
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
    margin: '0 auto 2rem auto',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },
  
  heroFeatures: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap'
  },
  
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.1rem',
    color: '#D4AF37',
    fontWeight: '500'
  },
  
  featureIcon: {
    fontSize: '1.5rem'
  },

  // BOOKING SECTION
  bookingSection: {
    padding: '6rem 0',
    backgroundColor: '#f8f9fa'
  },
  
  bookingContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  
  bookingHeader: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  
  bookingTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  
  bookingSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6'
  },
  
  bookingContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '3rem',
    alignItems: 'flex-start'
  },
  
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  
  bookingForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  
  formSection: {
    paddingBottom: '2rem',
    borderBottom: '1px solid #e9ecef'
  },
  
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1.5rem'
  },
  
  servicesGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  
  serviceOption: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    animation: 'fadeInUp 0.6s ease-out'
  },
  
  serviceOptionSelected: {
    borderColor: '#D4AF37',
    backgroundColor: 'rgba(212, 175, 55, 0.05)',
    animation: 'glow 2s infinite'
  },
  
  serviceInfo: {
    flex: 1
  },
  
  serviceName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '0.5rem'
  },
  
  serviceDetails: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  
  servicePrice: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#D4AF37'
  },
  
  serviceDuration: {
    fontSize: '0.9rem',
    color: '#666'
  },
  
  radioCircle: {
    width: '20px',
    height: '20px',
    border: '2px solid #e9ecef',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1rem'
  },
  
  radioInner: {
    width: '10px',
    height: '10px',
    backgroundColor: '#D4AF37',
    borderRadius: '50%'
  },
  
  datetimeGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem'
  },
  
  dateSelection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  
  timeSelection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  
  label: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '0.5rem'
  },
  
  dateOptions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Changed to 4 columns for single word (weekday) display
    gap: '0.5rem'
  },
  
  dateOption: {
    padding: '1rem 0.5rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    animation: 'slideInLeft 0.8s ease-out',
    height: '100%', // Ensure consistent size
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  dateOptionSelected: {
    borderColor: '#D4AF37',
    backgroundColor: 'rgba(212, 175, 55, 0.05)'
  },
  
  // FIX: New style for just the Day Name
  dayNameOnly: {
    fontSize: '1rem', 
    fontWeight: 'bold',
    color: '#1a1a1a',
    textTransform: 'uppercase'
  },
  
  timeOptions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.5rem',
    maxHeight: '200px',
    overflowY: 'auto'
  },
  
  timeOption: {
    padding: '0.75rem 0.5rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    animation: 'slideInRight 0.8s ease-out'
  },
  
  timeOptionSelected: {
    borderColor: '#D4AF37',
    backgroundColor: 'rgba(212, 175, 55, 0.05)'
  },
  
  personalInfoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem'
  },
  
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  
  input: {
    padding: '1rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  },
  
  textarea: {
    padding: '1rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '1rem',
    resize: 'vertical',
    minHeight: '80px',
    transition: 'all 0.3s ease'
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
  
  // SUMMARY SIDEBAR
  summaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  
  summaryCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    animation: 'fadeInUp 1s ease-out'
  },
  
  summaryTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1.5rem'
  },
  
  summaryContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  summaryLabel: {
    fontSize: '0.9rem',
    color: '#666',
    fontWeight: '500'
  },
  
  summaryValue: {
    fontSize: '1rem',
    color: '#1a1a1a',
    fontWeight: '600',
    textAlign: 'right'
  },
  
  summaryPrice: {
    fontSize: '1.2rem',
    color: '#D4AF37',
    fontWeight: 'bold'
  },
  
  summaryDivider: {
    height: '1px',
    backgroundColor: '#e9ecef',
    margin: '1rem 0'
  },
  
  emptySummary: {
    textAlign: 'center',
    padding: '2rem 1rem'
  },
  
  emptyIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  
  emptyText: {
    color: '#666',
    lineHeight: '1.6'
  },
  
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  
  infoTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1.5rem'
  },
  
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  
  contactItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  },
  
  contactIcon: {
    fontSize: '1.2rem',
    backgroundColor: '#D4AF37',
    color: '#1a1a1a',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  
  contactLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#666',
    marginBottom: '0.25rem'
  },
  
  contactValue: {
    fontSize: '1rem',
    color: '#1a1a1a',
    fontWeight: '500'
  },
  
  policiesCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  
  policiesTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '1.5rem'
  },
  
  policiesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  
  policyItem: {
    padding: '0.5rem 0',
    color: '#666',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    position: 'relative',
    paddingLeft: '1.5rem'
  },
  
  policyItemBefore: {
    content: '"•"',
    position: 'absolute',
    left: 0,
    color: '#D4AF37',
    fontWeight: 'bold'
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
    animation: 'pulse 2s infinite'
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

export default BookingPage;