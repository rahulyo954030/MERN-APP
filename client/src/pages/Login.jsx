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
const Login = () => {
  const [data, setData] = useState(initialData);
  const [logoutdata, setlogoutData] = useState(initialData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/login", data)
      .then((res) => {
        console.log(res.data);

        axios
      .post("http://localhost:3030/logout", data)

      setData(initialData);
        navigate("/home");
      })
      .catch((e) => console.log(e));
     
  

    

    setData(initialData);

    
  };

  return (
    <div className="login_container">
      <form className="login_form" onSubmit={submitHandler}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
        />
        <br />
        <input type="submit" value="LOGIN" />
        <br />
        <span>
          Create an Account <i onClick={() => navigate("/")}>Click here...</i>
        </span>
      </form>
    </div>
  );
};

export default Login;
