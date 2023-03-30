import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import List from "./List";

const Main = () => {
  return (
    <div className="Main">
      <Navbar />
      <List />
    </div>
  );
};

export default Main;
