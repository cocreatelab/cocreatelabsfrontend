import React, { useState } from 'react';
import "./feedbackform.css";
import Fade from "react-reveal/Fade";

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [budget, setBudget] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, phone, countryCode, budget, companySize, message });
    // send feedback data to backend or do something else
  }

  return (
    <form className='contactform-parent-container' onSubmit={handleSubmit}>
      <Fade top distance='20%' duration={1000} delay={100}>
      <div className="contactform-subparent-container">
        <div className="contactform-heading-container">
          <h3>If You Are An Investor, We'd Love to Hear from You </h3>
        </div>
        <div className="contactform-para-container mb-5">
          <p> Please submit your information and a Designmodo representative will get in touch with you </p>
        </div>
        <div className="contactform-button1-container">
        <label>
          <input type="text" placeholder="Your name" className="your-name rounded-full" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
          <br />
          <label>

            <input type="email" placeholder="Your email" className="email-id rounded-full" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          
        </div>
        <br />
        <div className="contactform-button2-container">
          <label>
            <input type="tel" placeholder="Your phone" className="your-phone rounded-full" value={phone} onChange={(event) => setPhone(event.target.value)} />
          </label>
          <br />
          <label>
            <select name="Budget" id="Budget" className='Budget rounded-full' onChange={(event) => setBudget(event.target.value)} >
              <option value="Budget">Budget</option>
            </select>
          </label>
          <br />
          <label>
            <select name="Company-size" id="Company size" className='Company-size rounded-full' onChange={(event) => setCompanySize(event.target.value)}>
              <option value="Company-size">Company size</option>
            </select>
          </label>
        </div>
        <br />
        <label>
          <textarea id="review" name="review" rows="4" cols="50" className="your-message" placeholder='Your message' onChange={(event) => setMessage(event.target.value)} >Your message</textarea>
        </label>
        <br />
        <button type="submit" className='message' >Send a message</button>
      </div>
      <div className="contactform-help-container">
        <h5>Help</h5>
        <p>Need help? Don't hestiate to ask us somethnig. Email us directly info@designmodo.com or call us at 1-347-523-34-90. You can checkout our F.A.Q. and Help page to get more information about our products.</p>
      </div>
      </Fade>
    </form>
  );
}
export default FeedbackForm;