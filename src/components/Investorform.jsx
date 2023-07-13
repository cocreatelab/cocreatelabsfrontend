import React, { useState } from "react";
import "./investorform.css";
import group54 from "../assets/Group54.png";

const InvestorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    startupName: "",
    email: "",
    contactNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formClosed, setFormClosed] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset the form data
    setFormData({
      name: "",
      startupName: "",
      email: "",
      contactNumber: "",
    });
    // Set the submitted state to true
    setSubmitted(true);
    // Close the form
    setFormClosed(true);
  };

  return (
    <div className={`two-step-form ${formClosed ? "closed" : ""}`}>
      <div className="form-image">
        <img src={group54} alt="Form" />
      </div>
      <div className="form-content">
        <div p-5>
          <p className="text-center font-poppins font-bold font-medium text-2xl leading-12 text-center tracking-wider capitalize text-black">
            Join The Wait List
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-parent-container flex flex-col grid gap-1 mt-10 rounded-full">
              <div className="left-form-field flex flex-col">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-full"
                />

                <input
                  type="text"
                  name="startupName"
                  value={formData.startupName}
                  onChange={handleInputChange}
                  placeholder="Startup Name"
                  required
                  className="w-full rounded-full mt-5"
                />
              </div>

              <div className="right-form-field mt-5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full rounded-full"
                />

                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  required
                  className="w-full rounded-full mt-5"
                />
              </div>
            </div>

            <button className="investorformbtn mt-10 w-32 hover:text-white hover:bg-blue-800 outline-none" type="submit">
              Submit
            </button>
          </form>

          {submitted && (
            <p className="text-center mt-5 text-gray-600">
              Thank you for giving your information. We will get back to you soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestorForm;
