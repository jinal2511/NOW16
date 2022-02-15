import React, { useState } from "react";
import Link from "next/link";
const Headermain = () => {
  const [main, setMain] = useState(false);
  return (
    <div className="header_section">
      <div className="header_container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 logo">
            <Link href="/">
              <a>
                <img src="/logo.svg" className="logoimg" />
              </a>
            </Link>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 nav">
            <nav className="navbar">
              <Link href="../headres/Girls">
                <a className="girlfont ">GIRLS</a>
              </Link>
              <Link href="../headres/Boys">
                <a className="boyfont">BOYS</a>
              </Link>
              <Link href="../headres/Everyone">
                <a className="everyfont">EVERYONE</a>
              </Link>
              <Link href="../headres/Accessories">
                <a className="accefont">ACCESSORIES</a>
              </Link>
              <Link href="../headres/Search">
                <a>
                  <img
                    src="/search.svg"
                    className="searchlogo img-responsive"
                  />
                </a>
              </Link>
              <Link href="../headres/Cart">
                <a>
                  <img src="/cart.svg" className="cartlogo img-responsive" />
                </a>
              </Link>
              <Link href="../headres/User">
                <a>
                  <img src="/user.svg" className="userlogo img-responsive" />
                </a>
              </Link>
              <Link href="../headres/Try">
                <a>
                  <img src="/try.svg" className="trylogo img-responsive" />
                </a>
              </Link>
            </nav>
            <a onClick={() => setMain(!main)} className="hamburger">
              {!main ? (
                <img src="/hamburger.svg" className="hamburger" />
              ) : (
                <a> </a>
              )}
            </a>
          </div>
          {main ? (
            <div className="menuview">
              <div onClick={() => setMain(false)}>
                <img src="/close.svg" className="close" />
              </div>
              <Link href="/">
                <a>GIRLS</a>
              </Link>
              <Link href="/About">
                <a>BOYS</a>
              </Link>
              <Link href="/Contact">
                <a>EVERYONE</a>
              </Link>
              <Link href="/Contact">
                <a>ACCESSORIES</a>
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Headermain;
