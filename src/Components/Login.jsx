import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";

const Login = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  const handleChange = (e) =>
    setValues((lastValue) => {
      const name = e.target.name;
      return {
        ...lastValue,
        [name]: e.target.value,
      };
    });

  const submitHandler = (e) => {
    e.preventDefault();
    if (values.username === "foo" && values.password === "bar") {
      dispatch(login());
    } else if (values.username.length > 0 && values.username.length > 0) {
      alert("Invalid username or password");
    }
    setValues(() => {
      return {
        username: "",
        password: "",
      };
    });
  };

  return (
    <div className="login-form-wrapper">
      <form id="loginForm" className="login-form" onSubmit={submitHandler}>
        <label for="username">Username</label>
        <input
          className="input"
          id="username"
          type="text"
          name="username"
          value={values.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <label for="pasword">Password</label>
        <input
          className="input"
          id="password"
          type="text"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="button" form="loginForm" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
