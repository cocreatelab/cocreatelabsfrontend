import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/store";
import "./registerform.css";
import axios from "axios";
import { Link } from "react-router-dom";

function RegisterForm() {
  const initial = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initial);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    await axios
      .post(`/api/login/`, userData, config)
      .then((data) => {
        alert("Success");
        setLoading(false);
        dispatch(setUser(userData));
        setUserData({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
        setUserData({
          email: "",
          password: "",
        });
      });
  };

  return (
    <div className="grantform">
      <h2 className="form-heading">Register Now</h2>
      <form onSubmit={handleSubmit} className="register-form-container">
        {/* Email: */}
        <input
          type="email"
          value={userData.email}
          name="email"
          placeholder="Your Email"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
          required
        />

        {/* Password: */}
        <input
          type="password"
          value={userData.password}
          name="password"
          placeholder="Your Password"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
          required
        />

        <label className="d-flex justify-content-around align-items-center">
          <input
            id="check"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            required
          />
          <div>I agree with the terms and conditions</div>
        </label>
        <button type="submit">{loading ? "Signing In" : "Sign In"}</button>
      </form>
      <p>
        <b>------------ or -------------- </b>
      </p>
      <button>Login via Twitter</button>
      <br />
      <span>Do you already have an account?</span>
      <Link to="/register">Register here..</Link>
    </div>
  );
}

export default RegisterForm;
