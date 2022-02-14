import React, { useState } from "react";
import Header from "./headres/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Headermain from "./headres/HeaderMain";

export default function Home() {
  return (
  
      <div>
        <div className="container">
          {/* <div className="logoimg">
            <img src="/logo.svg" />
          </div>
          <Header />
          </div>
        <div>
          <div>
            <img src="/bannerImg.svg" className="bannerImg"/>
          </div> */}
          <Headermain />
          </div>
      </div>
   
  );
}