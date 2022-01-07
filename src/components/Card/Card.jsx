import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card-item">
      {props.cover && (
        <img
          draggable="false"
          className="card-cover"
          src={props.cover}
          alt=""
        />
      )}
      {props.title}
    </div>
  );
}

export default Card;
