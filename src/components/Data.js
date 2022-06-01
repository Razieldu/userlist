import React from "react";
import Card from "./Card.js";
import { useState } from "react";
import "./Data.css";
const Data = (props) => {
  const [showdata, setShowdata] = useState(false);

  const datashow = () => {
    props.showdiv();
    setShowdata(false);
  };

  return (
    <div>
      {!showdata && (
        <div className="datas">
          <h1 className="userhead">
            <span className="s1 j1">使</span>
            <span className="s2">用</span>
            <span className="s3">者</span>
            <span className="s4">清</span>
            <span className="s5">單</span>
          </h1>
          <ul>
            {props.passdata.map((data) => (
              <Card
                id={data.id}
                name={data.name}
                age={data.age}
                key={data.id}
              ></Card>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Data;
