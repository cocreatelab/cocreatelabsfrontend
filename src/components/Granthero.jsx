import React from 'react'
import RegisterForm from './RegisterForm'
import "./granthero.css";

const Granthero = () => {
  return (
    <div className="grant-parent-container">
        <div className="grant-content">
            <div className="grant-left-content">
            <div className="grant-heading">
              <h1>
                Fuel Your Startup: Apply for Our <span>Startup Grants!</span>
              </h1>
            </div>
            <div className="grant-primary-text">
              <p>Looking to give your startup the boost it needs? </p>

              <p>
                Our grants can provide the fuel your business needs to succeed.
                Our application process is straightforward and our team is ready
                to help you every step of the way. Don't miss out on this
                opportunity to take your startup to the next level!"
              </p>
            </div>
            <div className="grant-btn-container">
              <button className="gbtn">Learn More</button>
            </div>
            </div>
            <div className="grant-right-content">
            <RegisterForm/>
          </div>
        </div>
    </div>
  )
}

export default Granthero