// src/pages/Registration.js

import React, { useState } from 'react';
import HeaderFooter from '../components/HeaderFooter';

// Enhanced CSS styles
const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const sectionStyle = {
  padding: '4em 1em',
  textAlign: 'center',
  flex: '1',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '3em',
  alignItems: 'start',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '2rem',
  color: '#2c3e50',
  fontWeight: '700',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textAlign: 'center',
  gridColumn: 'span 2',
  letterSpacing: '-0.5px',
};

const subheadingStyle = {
  fontSize: '1.2rem',
  color: '#6c757d',
  marginBottom: '3rem',
  fontWeight: '400',
  gridColumn: 'span 2',
  lineHeight: '1.6',
};

const formContainerStyle = {
  background: 'rgba(255, 255, 255, 0.95)',
  padding: '3em',
  borderRadius: '20px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const formGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2em',
};

const formGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  position: 'relative',
};

const fullWidthStyle = {
  gridColumn: 'span 2',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.8em',
  fontWeight: '600',
  color: '#2d3748',
  fontSize: '0.95rem',
  transition: 'color 0.3s ease',
};

const inputStyle = {
  width: '100%',
  padding: '1.2em 1em',
  borderRadius: '12px',
  border: '2px solid #e2e8f0',
  fontSize: '1rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: '#f8fafc',
  fontFamily: 'inherit',
};

const inputFocusStyle = {
  outline: 'none',
  borderColor: '#667eea',
  backgroundColor: 'white',
  boxShadow: '0 0 0 4px rgba(102, 126, 234, 0.1)',
  transform: 'translateY(-2px)',
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '120px',
  resize: 'vertical',
  fontFamily: 'inherit',
};

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 1em center',
  backgroundSize: '16px',
};

const fileInputStyle = {
  ...inputStyle,
  padding: '1em',
  cursor: 'pointer',
};

const fileInfoStyle = {
  fontSize: '0.8rem',
  color: '#718096',
  marginTop: '0.5em',
  fontStyle: 'italic',
};

const buttonStyle = {
  padding: '1.4em 3em',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  fontSize: '1.1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
  marginTop: '2em',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
};

const buttonHoverStyle = {
  transform: 'translateY(-3px) scale(1.02)',
  boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)',
};

const buttonAfterStyle = {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '-100%',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
  transition: 'left 0.5s',
};

const paymentInfoStyle = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '3em',
  borderRadius: '20px',
  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
  height: 'fit-content',
  position: 'relative',
  overflow: 'hidden',
};

const paymentPatternStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  width: '200px',
  height: '200px',
  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
  borderRadius: '50%',
};

const paymentHeadingStyle = {
  color: 'white',
  marginBottom: '1.5em',
  fontSize: '2rem',
  fontWeight: '600',
  position: 'relative',
  zIndex: '2',
};

const paymentDetailStyle = {
  backgroundColor: 'rgba(255,255,255,0.15)',
  padding: '2em',
  borderRadius: '16px',
  marginBottom: '2em',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  position: 'relative',
  zIndex: '2',
};

const feeStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '0.5em',
  color: '#ffd700',
  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
};

const detailTextStyle = {
  margin: '0.8em 0',
  fontSize: '1rem',
  lineHeight: '1.6',
  opacity: '0.9',
};

const qrSectionStyle = {
  textAlign: 'center',
  padding: '2em',
  backgroundColor: 'rgba(255,255,255,0.15)',
  borderRadius: '16px',
  marginTop: '2em',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  position: 'relative',
  zIndex: '2',
};

const qrContainerStyle = {
  width: '180px',
  height: '180px',
  margin: '1em auto',
  padding: '1em',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const qrCodeStyle = {
  width: '100%',
  height: '100%',
  background: 'linear-gradient(45deg, #667eea, #764ba2)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '0.8rem',
  fontWeight: '600',
  textAlign: 'center',
  padding: '1em',
};

const upiTextStyle = {
  fontWeight: '600',
  fontSize: '1.2rem',
  marginBottom: '1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5em',
};

const requiredAsteriskStyle = {
  color: '#e53e3e',
  marginLeft: '4px',
};

const successMessageStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
  color: 'white',
  padding: '2em 3em',
  borderRadius: '20px',
  boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
  zIndex: '1000',
  textAlign: 'center',
  animation: 'fadeInUp 0.6s ease-out',
};

function Registration() {
  const [isHovered, setIsHovered] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    gender: '',
    dob: '',
    hospital: '',
    mobile: '',
    homeAddress: '',
    workAddress: '',
    email: '',
    qualification: '',
    regNo: '',
    experience: '',
    photo: null
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleInputFocus = (e) => {
    Object.assign(e.target.style, inputFocusStyle);
    e.target.parentNode.querySelector('label').style.color = '#667eea';
  };

  const handleInputBlur = (e) => {
    Object.assign(e.target.style, inputStyle);
    e.target.parentNode.querySelector('label').style.color = '#2d3748';
  };

  return (
    <HeaderFooter>
    <div style={pageStyle}>
      <main style={sectionStyle}>
        <h1 style={headingStyle}>Membership Registration</h1>
        <p style={subheadingStyle}>
          Join SNICT today and become part of India's leading cardiovascular technologists community
        </p>
        
        <div style={containerStyle}>
          {/* Registration Form */}
          <div 
            style={formContainerStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 80px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={formGridStyle}>
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="fullName">
                    Full Name <span style={requiredAsteriskStyle}>*</span>
                  </label>
                  <input 
                    style={inputStyle} 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter your full name" 
                    required 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="fatherName">
                    Father's Name <span style={requiredAsteriskStyle}>*</span>
                  </label>
                  <input 
                    style={inputStyle} 
                    type="text" 
                    id="fatherName" 
                    placeholder="Enter father's name" 
                    required 
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="gender">
                    Gender <span style={requiredAsteriskStyle}>*</span>
                  </label>
                  <select 
                    style={selectStyle} 
                    id="gender" 
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="dob">Date of Birth</label>
                  <input 
                    style={inputStyle} 
                    type="date" 
                    id="dob" 
                    value={formData.dob}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="hospital">Hospital/Institution Name</label>
                  <input 
                    style={inputStyle} 
                    type="text" 
                    id="hospital" 
                    placeholder="Enter hospital/institution name"
                    value={formData.hospital}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="mobile">
                    Mobile No. <span style={requiredAsteriskStyle}>*</span>
                  </label>
                  <input 
                    style={inputStyle} 
                    type="tel" 
                    id="mobile" 
                    placeholder="Enter 10-digit mobile number" 
                    required 
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={{...formGroupStyle, ...fullWidthStyle}}>
                  <label style={labelStyle} htmlFor="homeAddress">Home Address</label>
                  <textarea 
                    style={textareaStyle} 
                    id="homeAddress"
                    placeholder="Enter your complete home address"
                    value={formData.homeAddress}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  ></textarea>
                </div>
                
                <div style={{...formGroupStyle, ...fullWidthStyle}}>
                  <label style={labelStyle} htmlFor="workAddress">Work Address</label>
                  <textarea 
                    style={textareaStyle} 
                    id="workAddress"
                    placeholder="Enter your complete work address"
                    value={formData.workAddress}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  ></textarea>
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="email">
                    Email ID <span style={requiredAsteriskStyle}>*</span>
                  </label>
                  <input 
                    style={inputStyle} 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="qualification">Qualification</label>
                  <input 
                    style={inputStyle} 
                    type="text" 
                    id="qualification" 
                    placeholder="Enter your qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="regNo">Registration No.</label>
                  <input 
                    style={inputStyle} 
                    type="text" 
                    id="regNo" 
                    placeholder="Enter registration number"
                    value={formData.regNo}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={formGroupStyle}>
                  <label style={labelStyle} htmlFor="experience">Experience (Years)</label>
                  <input 
                    style={inputStyle} 
                    type="number" 
                    id="experience" 
                    placeholder="Enter years of experience"
                    min="0"
                    value={formData.experience}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={{...formGroupStyle, ...fullWidthStyle}}>
                  <label style={labelStyle} htmlFor="photo">Upload Photo</label>
                  <p style={fileInfoStyle}>
                    Format: JPG, JPEG, PNG | Max Size: 1MB | Dimensions: 300×300px
                  </p>
                  <input 
                    style={fileInputStyle} 
                    type="file" 
                    id="photo" 
                    accept=".jpg, .jpeg, .png" 
                    onChange={(e) => setFormData({...formData, photo: e.target.files[0]})}
                  />
                </div>
              </div>
              
              <button 
                style={{
                  ...buttonStyle,
                  ...(isHovered ? buttonHoverStyle : {})
                }}
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Complete Registration
                <span style={buttonAfterStyle}></span>
              </button>
            </form>
          </div>
          
          {/* Payment Information */}
          <div style={paymentInfoStyle}>
            <div style={paymentPatternStyle}></div>
            <h3 style={paymentHeadingStyle}>Payment Details</h3>
            
            <div style={paymentDetailStyle}>
              <div style={feeStyle}>₹ 1,200/-</div>
              <p style={detailTextStyle}><strong>Account Number:</strong> 50200101304799</p>
              <p style={detailTextStyle}><strong>IFSC Code:</strong> HDFC0006521</p>
              <p style={detailTextStyle}><strong>Bank:</strong> HDFC Bank</p>
              <p style={detailTextStyle}><strong>Account Name:</strong> SNICT Society</p>
            </div>
            
            <div style={qrSectionStyle}>
              <p style={upiTextStyle}>
                <span>📱</span> Scan & Pay with UPI
              </p>
              <div style={qrContainerStyle}>
                <div style={qrCodeStyle}>
                  Demo QR Code
                  <br />
                  (Scan with any UPI app)
                </div>
              </div>
              <p style={{...detailTextStyle, marginTop: '1em'}}>
                Google Pay, PhonePe, Paytm, BHIM, etc.
              </p>
            </div>
            
            <div style={{marginTop: '2em', textAlign: 'center', position: 'relative', zIndex: '2'}}>
              <p style={{...detailTextStyle, fontSize: '0.9rem', opacity: '0.9'}}>
                💡 After payment, please keep the transaction ID for reference
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Success Message */}
      {showSuccess && (
        <div style={successMessageStyle}>
          <h3 style={{marginBottom: '1em', fontSize: '1.5rem'}}>🎉 Registration Successful!</h3>
          <p>Thank you for registering with SNICT. We'll contact you shortly.</p>
        </div>
      )}
    </div>
    </HeaderFooter>
  );
}

export default Registration;