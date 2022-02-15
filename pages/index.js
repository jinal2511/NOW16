import React, { useState } from "react";
import Header from "./headres/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Headermain from "./headres/HeaderMain";
import Girls from "../pages/headres/Girls";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Headermain />
        {/* <div className="footer_container "><Footer /></div>
         */}
      </div>
      <div className="bgclr">
       
          <Footer />
        </div>
      
    </div>
  );
}
