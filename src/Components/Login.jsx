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
    } else alert("Invalid username or password");
    setValues(() => {
      return {
        username: "",
        password: "",
      };
    });
  };

  return (
    <form id="loginForm" className="login-form" onSubmit={submitHandler}>
      <input
        className="input"
        type="text"
        name="username"
        value={values.username}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        className="input"
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
  );
};

export default Login;
