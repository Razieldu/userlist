import React from "react";
import Button from "./Button.js";
import { useState } from "react";
import "./Enterdata.css";

const Enterdata = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
 
  const userChangeHandler = (event) => {
    if(event.target.value.trim().length>10){
      props.zerocheck1()
      return;
    }
 
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if(event.target.value<0){
      props.zerocheck2()
      return;
    }
    setAge(event.target.value);
  };

  const formSummithandler = (event) => {
    event.preventDefault()
    if(username.trim().length===0 || age.trim().length===0){
      return;
    }
    
    if (+age<1){
    return;

    }
    const data = {
      id: Math.random(),
      name: username,
      age: age,
    };

  props.collectdata(data)
  setAge("")
  setUsername("")   
  };




  return (
    <div>
      <div className="form-enter">
        <div className="form-enter-first">
          <form onSubmit={formSummithandler}>
            <label htmlFor="username">使用者名稱</label>
            <input type="text" id="username" value={username} onChange={userChangeHandler} ></input>
            <label htmlFor="age">年齡</label>
            <input id="age" type="number" value={age} onChange={ageChangeHandler} ></input>
            <Button showdiv={props.showdiv1}></Button>
          </form>
        </div>
      </div>
      </div>
    
  );
};

export default Enterdata;
