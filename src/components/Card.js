import React from "react";
import "./Card.css"

const Card=(props)=> {
  return (
  <div className="list">
  <li>
 <p>姓名:{props.name}</p>
 <p>年齡:{props.age}</p>
  </li>
  </div>
)
}

export default Card;
