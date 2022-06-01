import React from "react";
import "./Errorage.css";

const Errorage = (props) => {
  return (
    <div className="form-enter2" onClick={props.click2}>
    <div className="formtop2" ><h3>輸入錯誤</h3></div> 
    <div className="form-enter-first2">
     <p>輸入的年齡必須要大於0</p>
     <button  className="ok" onClick={props.click2}>OK</button>
    </div>
  </div>
  );
};

export default Errorage;
