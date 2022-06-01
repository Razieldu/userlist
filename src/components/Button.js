import React from "react";
import "./Button.css";




const Button = (props) => {


  return (
    <div className="buttonstyle">
      <button type="submit" onClick={props.showdiv} >新增</button>
    </div>
  );
};

export default Button;
