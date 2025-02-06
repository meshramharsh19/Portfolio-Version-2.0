import React, { useState } from 'react';
import './Contact_Light.css';
import './Contact_dark.css';
import './MediaQueries.css';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "7ce733c4-9c2b-4eb8-a876-737c58504422");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setResult(data.success ? "Message sent successfully!" : "Something went wrong. Please try again.");
      if (data.success) event.target.reset();
    } catch (error) {
      setResult("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContactItem = (icon, title, text, href) => (
    <a href={href} className="contact-item">
      <div className="icon-wrapper">
        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div className="contact-item-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </a>
  );

  return (
    <div id = 'contact' className="contact-container">
      <div className="decorative-elements">
        <div className="decorative-circle-1"></div>
        <div className="decorative-circle-2"></div>
      </div>

      <div className="content-wrapper">
        <div className="header">
          <h1 className="header-title">Get in Touch</h1>
          <div className="header-divider"></div>
          <p className="header-description">
            Let's discuss your ideas and create something amazing together. Drop me a message, and I'll get back to you soon.
          </p>
        </div>

        <div className="grid-container">
          <div className="grid-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="contact-items">
                  {renderContactItem(
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    "Email",
                    "meshram.harsh05@gmail.com",
                    "mailto:meshram.harsh05@gmail.com"
                  )}
                  {renderContactItem(
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    "Phone",
                    "+91 7499288828",
                    "tel:+917499288828"
                  )}
                  {renderContactItem(
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </>,
                    "Location",
                    "House no. 1 - Indra Nagar, dighori, Nagpur, 440036, India"
                  )}
                </div>
              </div>

              <button 
                onClick={() => window.open('https://www.buymeacoffee.com/meshram_harsh_', '_blank')}
                className="coffee-button"
              >
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Buy me a coffee</span>
              </button>
            </div>

            <div className="form-wrapper">
              <form onSubmit={onSubmit} className="form-container">
                <div className="form-group">
                  <div className="form-field">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="e.g. Harsh Meshram"
                      required 
                    />
                  </div>
                  
                  <div className="form-field">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="+91 (555) 000-0000"
                      required 
                    />
                  </div>
                  <div className="form-field">
                    <label>Mail ID</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="e.g. xyz@gmail.com"
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Message</label>
                    <textarea 
                      name="message" 
                      placeholder="Tell me about your project..."
                      rows={6}
                      required 
                    />
                  </div>
                </div>

                <div>
                  {result && (
                    <p className="result-message">{result}</p>
                  )}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="icon spinner" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span>Send Message</span>
                       
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;