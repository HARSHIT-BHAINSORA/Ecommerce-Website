import React from "react";
import "./Footer.css";
import descrp from "./Descrp";
import Fcard from "./Fcard";


const createFooter = (descrp)=>{
  return(
    <Fcard
      id = {descrp.id}
      head = {descrp.head}
      content1 = {descrp.content1}
      content2 = {descrp.content2}
      content3 = {descrp.content3}
      content4=  {descrp.content4}
      content5 = {descrp.content5}
    ></Fcard>
  ) 
}

function footer() {

    const mytop = () =>{
        document.documentElement.scrollTop = 0;
    }

  return( 
    <div className="footer_bar">
      <div className="back_bnt">
        <button className="footer_bnt" onClick={mytop}>Back to top</button>
      </div>
      <div className="footer_desc">
          <div className="footer_con">{descrp.map(createFooter)}</div>
      </div>
      
  </div>
  );
}

export default footer;
