import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  const dispatch = useDispatch();

  const Logout = () => {
    if (isLogin) {
      dispatch(logout());
    }
  };

  return (
    <div className="navbar">
      <button onClick={Logout} className="logout">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
