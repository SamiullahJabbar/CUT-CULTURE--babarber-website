// src/pages/Contact.js

import React, { useState } from 'react';
import HeaderFooter from '../components/HeaderFooter';

// Premium Inline CSS styles
const pageStyle = {
  minHeight: '100vh',
  fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: '1.6',
  color: '#2d3748',
  background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
};

const heroSectionStyle = {
  background: 'linear-gradient(135deg, #004d40 0%, #00796b 100%)',
  color: 'white',
  padding: '8em 2em 6em',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
};

const heroPatternStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: '0.1',
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
};

const heroContentStyle = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '1000px',
  margin: '0 auto',
};

const mainHeadingStyle = {
  fontSize: 'clamp(2.8rem, 5vw, 4rem)',
  fontWeight: '800',
  marginBottom: '1.5rem',
  background: 'linear-gradient(to right, #ffffff, #b2dfdb)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '-0.5px',
  lineHeight: '1.2',
};

const subHeadingStyle = {
  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
  fontWeight: '300',
  marginBottom: '3rem',
  opacity: '0.95',
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: '1.6',
};

const sectionStyle = {
  padding: '6em 2em',
  textAlign: 'center',
  position: 'relative',
};

const contactDetailsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '3em',
  margin: '4em 0',
  maxWidth: '1300px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const detailItemStyle = {
  background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
  padding: '3em 2.5em',
  borderRadius: '24px',
  boxShadow: '0 20px 50px rgba(0, 77, 64, 0.08)',
  textAlign: 'center',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  border: '1px solid rgba(0, 150, 136, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
};

const detailItemHoverStyle = {
  ...detailItemStyle,
  transform: 'translateY(-12px) scale(1.02)',
  boxShadow: '0 30px 60px rgba(0, 77, 64, 0.15)',
  borderColor: 'rgba(0, 150, 136, 0.3)',
};

const detailIconContainerStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #00796b 0%, #004d40 100%)',
  margin: '0 auto 2em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
};

const detailIconStyle = {
  fontSize: '2.5rem',
  color: 'white',
  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
};

const detailTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#004d40',
  marginBottom: '1.5rem',
  letterSpacing: '-0.5px',
};

const detailTextStyle = {
  fontSize: '1.1rem',
  color: '#4a5568',
  lineHeight: '1.7',
  marginBottom: '1rem',
};

const detailLinkStyle = {
  color: '#00796b',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  display: 'inline-block',
  marginTop: '1em',
  padding: '0.8em 1.5em',
  borderRadius: '25px',
  background: 'rgba(0, 150, 136, 0.1)',
};

const formContainerStyle = {
  background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
  padding: '4em',
  borderRadius: '24px',
  boxShadow: '0 20px 50px rgba(0, 77, 64, 0.08)',
  maxWidth: '900px',
  margin: '4em auto',
  border: '1px solid rgba(0, 150, 136, 0.1)',
  position: 'relative',
  overflow: 'hidden',
};

const formPatternStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '200px',
  height: '200px',
  background: 'radial-gradient(circle, rgba(0, 150, 136, 0.05) 0%, transparent 70%)',
};

const formTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#004d40',
  marginBottom: '2em',
  textAlign: 'center',
  letterSpacing: '-0.5px',
  position: 'relative',
};

const underlineStyle = {
  content: '""',
  position: 'absolute',
  width: '80px',
  height: '4px',
  background: 'linear-gradient(to right, #00796b, #004d40)',
  bottom: '-15px',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '2px',
};

const formGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2.5em',
};

const formGroupStyle = {
  marginBottom: '2.5em',
  width: '100%',
  textAlign: 'left',
  position: 'relative',
};

const fullWidthGroupStyle = {
  ...formGroupStyle,
  gridColumn: '1 / -1',
};

const labelStyle = {
  display: 'block',
  marginBottom: '1em',
  fontWeight: '600',
  color: '#004d40',
  fontSize: '1rem',
  letterSpacing: '-0.2px',
};

const inputStyle = {
  width: '100%',
  padding: '1.2em 1.5em',
  borderRadius: '12px',
  border: '2px solid #e2e8f0',
  fontSize: '1rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: '#f8fafc',
  color: '#2d3748',
  fontFamily: 'inherit',
};

const inputFocusStyle = {
  ...inputStyle,
  borderColor: '#00796b',
  backgroundColor: 'white',
  boxShadow: '0 0 0 4px rgba(0, 150, 136, 0.1)',
  transform: 'translateY(-2px)',
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '180px',
  resize: 'vertical',
  lineHeight: '1.6',
};

const textareaFocusStyle = {
  ...textareaStyle,
  borderColor: '#00796b',
  backgroundColor: 'white',
  boxShadow: '0 0 0 4px rgba(0, 150, 136, 0.1)',
  transform: 'translateY(-2px)',
};

const buttonStyle = {
  padding: '1.4em 3em',
  background: 'linear-gradient(135deg, #00796b 0%, #004d40 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  fontSize: '1.1rem',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 8px 25px rgba(0, 150, 136, 0.3)',
  letterSpacing: '-0.2px',
};

const buttonHoverStyle = {
  ...buttonStyle,
  transform: 'translateY(-3px) scale(1.02)',
  boxShadow: '0 15px 35px rgba(0, 150, 136, 0.4)',
};

const mapSectionStyle = {
  padding: '6em 2em',
  background: 'linear-gradient(135deg, #f0f9f8 0%, #e0f2f1 100%)',
  clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)',
};

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '20px',
  boxShadow: '0 20px 50px rgba(0, 77, 64, 0.1)',
  overflow: 'hidden',
  marginTop: '3em',
  border: '2px solid rgba(0, 150, 136, 0.1)',
};

const medicalIconStyle = {
  fontSize: '3rem',
  marginBottom: '1rem',
  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
};

// Medical-themed SVG Icons
const MedicalIcons = {
  email: `📧`,
  phone: `📞`,
  location: `🏥`,
  time: `⏰`
};

const contactDetails = [
  {
    icon: MedicalIcons.email,
    title: 'Email Communication',
    details: ['info@snict.org', 'support@snict.org', 'membership@snict.org'],
    link: 'mailto:info@snict.org',
    description: 'For general inquiries and membership information'
  },
  {
    icon: MedicalIcons.phone,
    title: 'Phone Support',
    details: ['+91-9876543210', '+91-9876543211', 'Emergency: +91-9876543212'],
    link: 'tel:+919876543210',
    description: 'Available during office hours for immediate assistance'
  },
  {
    icon: MedicalIcons.location,
    title: 'Medical Headquarters',
    details: ['SNICT Building', 'Cardiology Complex', 'Hyderabad, Telangana', 'India - 500001'],
    link: '#map',
    description: 'Visit our cardiovascular technology center'
  },
  {
    icon: MedicalIcons.time,
    title: 'Medical Office Hours',
    details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Emergency Support: 24/7'],
    description: 'Dedicated hours for cardiovascular professionals'
  }
];

function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [hoveredDetail, setHoveredDetail] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const handleDetailHover = (index) => {
    setHoveredDetail(index);
  };

  const handleDetailLeave = () => {
    setHoveredDetail(null);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <HeaderFooter>
    <div style={pageStyle}>

      
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroPatternStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={mainHeadingStyle}>Connect With Cardiovascular Experts</h1>
          <p style={subHeadingStyle}>
            Reach out to SNICT for collaboration, membership inquiries, or technical support. 
            We're dedicated to advancing cardiovascular technology education and innovation.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section style={sectionStyle}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <h2 style={{...formTitleStyle, marginBottom: '4rem'}}>
            Medical Contact Channels
            <div style={underlineStyle}></div>
          </h2>
          
          <div style={contactDetailsStyle}>
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                style={hoveredDetail === index ? detailItemHoverStyle : detailItemStyle}
                onMouseEnter={() => handleDetailHover(index)}
                onMouseLeave={handleDetailLeave}
              >
                <div style={detailIconContainerStyle}>
                  <span style={medicalIconStyle}>{detail.icon}</span>
                </div>
                <h3 style={detailTitleStyle}>{detail.title}</h3>
                <p style={{...detailTextStyle, fontSize: '1rem', color: '#00796b', fontStyle: 'italic'}}>
                  {detail.description}
                </p>
                {detail.details.map((item, itemIndex) => (
                  <p key={itemIndex} style={detailTextStyle}>{item}</p>
                ))}
                {detail.link && (
                  <a 
                    href={detail.link} 
                    style={detailLinkStyle}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0, 150, 136, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 150, 136, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {detail.title.includes('Email') ? 'Send Secure Email' : 
                     detail.title.includes('Phone') ? 'Call Medical Line' : 
                     'View Medical Center'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{...sectionStyle, background: 'transparent'}}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={formContainerStyle}>
            <div style={formPatternStyle}></div>
            <h2 style={formTitleStyle}>
              Medical Inquiry Form
              <div style={underlineStyle}></div>
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div style={formGridStyle}>
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="firstName">First Name *</label>
                  <input 
                    style={focusedInput === 'firstName' ? inputFocusStyle : inputStyle}
                    type="text" 
                    id="firstName" 
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('firstName')}
                    onBlur={handleInputBlur}
                    required
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="lastName">Last Name *</label>
                  <input 
                    style={focusedInput === 'lastName' ? inputFocusStyle : inputStyle}
                    type="text" 
                    id="lastName" 
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('lastName')}
                    onBlur={handleInputBlur}
                    required
                  />
                </div>
              </div>

              <div style={formGridStyle}>
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="email">Professional Email *</label>
                  <input 
                    style={focusedInput === 'email' ? inputFocusStyle : inputStyle}
                    type="email" 
                    id="email" 
                    placeholder="your.email@hospital.org"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('email')}
                    onBlur={handleInputBlur}
                    required
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="phone">Contact Number</label>
                  <input 
                    style={focusedInput === 'phone' ? inputFocusStyle : inputStyle}
                    type="tel" 
                    id="phone" 
                    placeholder="+91-XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('phone')}
                    onBlur={handleInputBlur}
                  />
                </div>
              </div>

              <div style={fullWidthGroupStyle}>
                <label style={labelStyle} htmlFor="subject">Inquiry Subject *</label>
                <select 
                  style={focusedInput === 'subject' ? inputFocusStyle : inputStyle}
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('subject')}
                  onBlur={handleInputBlur}
                  required
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="membership">Membership Information</option>
                  <option value="training">Training Programs</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={fullWidthGroupStyle}>
                <label style={labelStyle} htmlFor="message">Medical Inquiry Details *</label>
                <textarea 
                  style={focusedInput === 'message' ? textareaFocusStyle : textareaStyle}
                  id="message" 
                  placeholder="Please describe your cardiovascular technology inquiry or collaboration request..."
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('message')}
                  onBlur={handleInputBlur}
                  required
                />
              </div>

              <button 
                style={isButtonHovered ? buttonHoverStyle : buttonStyle}
                type="submit"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                Submit Medical Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={mapSectionStyle}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <h2 style={{...formTitleStyle, marginBottom: '1rem'}}>
            Cardiovascular Technology Center
            <div style={underlineStyle}></div>
          </h2>
          <p style={{...detailTextStyle, maxWidth: '700px', margin: '0 auto 3em', fontSize: '1.2rem'}}>
            Visit our state-of-the-art cardiovascular technology facility in Hyderabad, 
            equipped with the latest interventional equipment and training resources.
          </p>
          
          <div style={mapContainerStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.576823588998!2d78.4312448148866!3d17.388701288079815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9046a36f4523%3A0xf639a04a58141209!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2s!4v1618491851234!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              title="SNICT Cardiovascular Center Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    </HeaderFooter>
  );
}

export default Contact;