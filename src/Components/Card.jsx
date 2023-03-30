import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.name}</p>
      <img className="userImage" src={props.image} alt="user" />
    </div>
  );
};

export default Card;
