import React, { useState } from "react";
import "./investorform.css";
import group54 from "../assets/Group54.png";

const InvestorForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber: "",
    singleFounder: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset the form data and step
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      phoneNumber: "",
      singleFounder: "",
    });
    setStep(1);
  };

  return (
    <div className="two-step-form">
      <div className="form-image">
        <img src={group54} alt="Form" />
      </div>
      <div className="form-content">
        <div className="stepper">
          <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
          <div className="line"></div>
          <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
        </div>

        {step === 1 && (
          <div p-5>
            <h2 className="text-center font-poppins font-bold font-medium text-2xl leading-12 text-center tracking-wider capitalize text-black">
              Personal Details
            </h2>
            <form onSubmit={handleNextStep}>
              <div className="form-parent-container mt-10">
                <div className="left-form-field flex flex-col grid gap-4">
                  {/* <div className="form-field"> */}
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                  {/* </div> */}

                  {/* <div className="form-field">  */}
                  <div className="gender-inputs grid gap-1 grid-cols-2">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleInputChange}
                        required
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleInputChange}
                        required
                      />
                      Female
                    </label>
                  </div>
                  {/* </div> */}

                  {/* <div className="form-field"> */}
                  <input
                    type="url"
                    name="Linkdin"
                    placeholder=" Linkdin"
                    className="w-full"
                  />
                </div>
                {/* </div> */}

                <div className="right-form-field grid gap-4">
                  {/* <div className="form-field"> */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full"
                  />
                  {/* </div> */}

                  {/* <div className="form-field"> */}
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full"
                  />

                  <label for="refree">Referred By</label>

                  <select name="referee" id="refree">
                    <option value="LV Team Member">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>

              <button className="investorformbtn mt-10" type="submit">
                Next
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-center font-poppins font-normal font-medium text-2xl leading-12 text-center tracking-wider capitalize text-black">
              Startup Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="single-founder-inputs">
                <label>
                  <input
                    type="radio"
                    name="singleFounder"
                    value="yes"
                    checked={formData.singleFounder === "yes"}
                    onChange={handleInputChange}
                    required
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="singleFounder"
                    value="no"
                    checked={formData.singleFounder === "no"}
                    onChange={handleInputChange}
                    required
                  />
                  No
                </label>
              </div>
              <br />
              <div>
                <div>
                  <label>
                    <input
                      type="text"
                      name="Name of Startup"
                      onChange={handleInputChange}
                      placeholder="Name of Startup"
                      required
                      className="w-72"
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      type="text"
                      name="Registered name of Startup"
                      onChange={handleInputChange}
                      placeholder="Registered name of Startup"
                      required
                      className="w-72"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="url"
                      name="Website URL"
                      onChange={handleInputChange}
                      placeholder="Website URL"
                      required
                      className="w-72"
                    />
                  </label>
                  <br />
                  <lable>
                    <select name="text" placeholder="Sect" required>
                      <option value="#">Sector of Startup </option>
                      <option value="#">Sector of Startup </option>
                      <option value="#">Sector of Startup </option>
                      <option value="#">Sector of Startup </option>
                    </select>
                  </lable>
                  <br />
                </div>
                <br />
                <div>
                  <lable>
                    <select name="text" placeholder="Stage of Startup" required>
                      <option value="#">Sector of Startup </option>
                      <option value="#">Sector of Startup </option>
                      <option value="#">Sector of Startup </option>
                      <option value="#">Sector of Startup </option>
                    </select>
                  </lable>
                  <br />
                  <lable>
                    <label for="date">Month & year of inception:</label>
                    <input type="date" name="Month & year of inception"></input>
                  </lable>
                </div>
                <br />
                <div>
                  <lable>
                    <select
                      name="text"
                      placeholder="Stage of Startup"
                      required
                      className="w-72"
                    >
                      <option value="#">Agra </option>
                      <option value="#">Agra </option>
                      <option value="#">Agra </option>
                      <option value="#">Agra </option>
                    </select>
                  </lable>
                  <br />
                  <lable required>
                    Please share your pitch deck
                    <br />
                    <input type="file" id="myFile" name="filename" />
                  </lable>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorForm;
