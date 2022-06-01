import React from "react";
import "./Erroruser.css";

const Erroruser = (props) => {
  return (
    <div className="form-enter1" onClick={props.click1}>
    <div className="formtop1" ><h3>輸入錯誤</h3></div> 
    <div className="form-enter-first1">
    <p>使用者名稱需要小於10個字 </p>
    <button  className="ok"  onClick={props.click1}>OK</button>
    </div>
  </div>
  );
};

export default Erroruser;
