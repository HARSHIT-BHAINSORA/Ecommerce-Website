import React from "react";
import "./Fcard.css";

function Fcard(props) {
  return (
  <div className="footer_card">
      <div className="head">
        <h4>{props.head}</h4>
      </div>
      <div className="footer_content">
        <p className="para">{props.content1}</p>
        <p className="para">{props.content2}</p>
        <p className="para">{props.content3}</p>
        <p className="para">{props.content4}</p>
        <p className="para">{props.content5}</p>
      </div>
  </div>
  

  );
}

export default Fcard;
