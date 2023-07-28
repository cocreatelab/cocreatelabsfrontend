import React from 'react';
import './newsletter.css';
import Bgnews from '../assets/Background.png';

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-parent-container">
        <div className="sub-newsletter-container">
          <div className="heading-container">
            <h3 className="text-xl md:text-2xl">Subscribe our Newsletters</h3>
            <p className="text-sm md:text-base">
              Fill below details to stay updated with our startup community and get the latest news in the ecosystem.
            </p>
          </div>
          <div className="signup-container">
            <form className="newslettercontainer">
              <input type="text" placeholder="Your name" className="name-container  p-2 rounded-full" />
              <input type="email" placeholder="Your email" className="your-email w-96 p-2 rounded-full" />
              <button type="submit" className="sign-up-container p-2 rounded-full bg-green-500 text-white">
                Sign Up
              </button>
            </form>
          </div>
          <div className="bottom-container">
            <p className="text-xs md:text-sm text-white">By subscribing, you agree to the Terms of Service</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
