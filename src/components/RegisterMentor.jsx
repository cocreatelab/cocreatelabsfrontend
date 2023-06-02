import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/store";
import "./registerform.css";
import axios from "axios";
// import { Link } from "react-router-dom";

const RegisterMentor = () => {
  var time = new Date();

  var year = time.getFullYear();
  var day = time.getDate();
  var month = time.getMonth() + 1;
	const event = new Date(year, day, day, 14, 39, month);
	const dispatch = useDispatch();

  const initial = {
    mentorid: "",
    date: event.toDateString(),
    time: time.toLocaleTimeString(),
    goals: "",
    expectations: "",
    querries: "",
  };

  const user = useSelector((state) => state.user);

  const [userData, setUserData] = useState(initial);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (user) {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      await axios
        .post(`/api/apply-for-mentorship/`, userData, config)
        .then((data) => {
          alert("Success");
          setLoading(false);
          dispatch(setUser(userData));
          setUserData({
            mentorid: "",
            date: event.toDateString(),
            time: time.toLocaleTimeString(),
            goals: "",
            expectations: "",
            querries: "",
          });
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
          setUserData({
            mentorid: "",
            date: event.toDateString(),
            time: time.toLocaleTimeString(),
            goals: "",
            expectations: "",
            querries: "",
          });
        });
    } else {
      alert("Please login first");
    }
  };

  return (
    <div className="grantform">
      <h2 className="form-heading">Register Mentor</h2>
      <form onSubmit={handleSubmit} className="register-form-container">
        <p>{userData.date}</p>
        <p>{userData.time}</p>
        <input
          type="text"
          value={userData.mentorid}
          name="mentorid"
          placeholder="Mentorid"
          onChange={(e) => {
            setUserData({ ...userData, mentorid: e.target.value });
          }}
          required
        />
        <input
          type="text"
          value={userData.goals}
          name="goals"
          placeholder="Goals"
          onChange={(e) => {
            setUserData({ ...userData, goals: e.target.value });
          }}
          required
        />
        <input
          type="text"
          value={userData.expectations}
          name="expectations"
          placeholder="Expectations"
          onChange={(e) => {
            setUserData({ ...userData, expectations: e.target.value });
          }}
          required
        />

        <input
          type="text"
          value={userData.querries}
          name="querries"
          placeholder="Queries"
          onChange={(e) => {
            setUserData({ ...userData, querries: e.target.value });
          }}
          required
        />

        <button type="submit">{loading ? "Signing In" : "Sign In"}</button>
      </form>
    </div>
  );
};
export default RegisterMentor;
