import React from "react";

export default function Coods(props) {
  return (
    <div className="coods">
      <h3 className="name">{props.title}</h3>
      <p className="price">{props.cost}</p>
      <img className="img" src={props.image} alt={props.title} />
    </div>
  );
}
