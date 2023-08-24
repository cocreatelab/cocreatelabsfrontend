import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import "./granthero.css";

const Granthero = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignIn = () => {
    if (isChecked) {
      // Perform sign-in logic here, e.g., sending data to a backend API
      console.log("Signing in...");
    } else {
      console.log("Please agree to the terms and conditions.");
    }
  };

  return (
    <>
      <div className="granthero-parent-container">
        <div className="container granthero-content">
          <div className="container left-grant">
            <h1>Fuel Your Startup: Apply for Our <high>Startup Grants!</high></h1>
            <p>Looking to give your startup the boost it needs?</p>
            <p>
              Our grants can provide the fuel your business needs to succeed.
              Our application process is straightforward and our team is ready
              to help you every step of the way. Don't miss out on this
              opportunity to take your startup to the next level!"
            </p>
            <button className="lrn-more">Learn More</button>
          </div>

          <div className="container right-grant">
            <div className="form-box">
              <h1>Register Now</h1>
              <form className="register-form">
                <div>
                  {/* <label>Email:</label> */}
                  <input
                    type="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={handleEmailChange}
                  />
                </div>
                <div>
                  {/* <label>Password:</label> */}
                  <input
                    type="password"
                    value={password}
                    placeholder="Your Password"
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="terms">
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    I agree to the terms and conditions
                  </label>
                </div>
                <button type="button" onClick={handleSignIn}>
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Granthero;
