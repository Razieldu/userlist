import React from "react";
import { useState } from "react";
import Enterdata from "./components/Enterdata.js";
import Errorage from "./components/Errorage.js";
import Erroruser from "./components/Erroruser.js";
import Data from "./components/Data.js";
function App() {
  const [dataoriginal, setDataoriginal] = useState([]);
  const [dataerror, setDataerror] = useState(true);
  const [dataerror2, setDataerror2] = useState(true);

  const zero1 = () => {
    setDataerror(false);
  };

  const cancel1 = () => {
    setDataerror(true);
  };

  const zero2 = () => {
    setDataerror2(false);
  };

  const cancel2 = () => {
    setDataerror2(true);
  };

  const dataCollect = (data) => {
    const arrayData = [data];
    setDataoriginal((preData) => {
      return [...preData, ...arrayData];
    });
  };

  const showdivhandler = (event) => {
    const eventtrue = event;
  };

  return (
    <div>
      <div className="container">
        <div className="bubbles">
          <span style={{ "--i": "11" }}></span>
          <span style={{ "--i": "12" }}></span>
          <span style={{ "--i": "24" }}></span>
          <span style={{ "--i": "10" }}></span>
          <span style={{ "--i": "14" }}></span>
          <span style={{ "--i": "23" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "16" }}></span>
          <span style={{ "--i": "19" }}></span>
          <span style={{ "--i": "20" }}></span>
          <span style={{ "--i": "22" }}></span>
          <span style={{ "--i": "25" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "22" }}></span>
          <span style={{ "--i": "17" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "16" }}></span>
          <span style={{ "--i": "13" }}></span>
          <span style={{ "--i": "11" }}></span>
          <span style={{ "--i": "12" }}></span>
          <span style={{ "--i": "24" }}></span>
          <span style={{ "--i": "10" }}></span>
          <span style={{ "--i": "14" }}></span>
          <span style={{ "--i": "23" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "16" }}></span>
          <span style={{ "--i": "19" }}></span>
          <span style={{ "--i": "20" }}></span>
          <span style={{ "--i": "22" }}></span>
          <span style={{ "--i": "25" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "22" }}></span>
          <span style={{ "--i": "17" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "16" }}></span>
        </div>
        <Enterdata
          collectdata={dataCollect}
          zerocheck1={zero1}
          zerocheck2={zero2}
          showdiv1={showdivhandler}
        ></Enterdata>
        {!dataerror && <Erroruser click1={cancel1} />}
        {!dataerror2 && <Errorage click2={cancel2} />}
        <Data passdata={dataoriginal}></Data>
      </div>
    </div>
  );
}

export default App;
