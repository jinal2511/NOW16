import Header from "./header";
import Link from "next/link";
import { useState } from "react";
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
