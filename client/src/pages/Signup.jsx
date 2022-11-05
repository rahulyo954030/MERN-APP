import React from "react";
import "../styles/Signup_login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let initialData = {
  username: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/auth/signup", data)
    .then((res) => {
      console.log(res.data);
      setData(initialData);
      navigate("/login");
    })
    .catch((e) => console.log(e));
    setData(initialData);
  };

  return (
    <div className="signup_container">
      <form className="signup_form" onSubmit={submitHandler}>
        <h2>Create an Account</h2>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={data.username}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="SIGN UP" />
        <br />
        <span>
          Already an Account{" "}
          <i onClick={() => navigate("/login")}>Click here...</i>
        </span>
      </form>
    </div>
  );
};

export default Signup;
