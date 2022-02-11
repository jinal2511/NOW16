import React, { useState } from "react";
import Header from "./headres/header";
export default function Home() {
  return (
    <>
      <div>
        <div className="container">
          <div className="logoimg">
            <img src="/logo.svg" />
          </div>
          <Header />
        </div>
      </div>
    </>
  );
}
