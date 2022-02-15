import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 img1">
              <Link href="/">
                <a>
                  <img src="/logo.svg" className="footerimg" />
                </a>
              </Link>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 img2">
              <a className="cardimg">
                <img src="/card.png"  />
                <img src="/card.png"  />
                <img src="/card.png"  />
                <img src="/card.png"  />
                <img src="/card.png"  />
                <img src="/card.png"  />
                <img src="/card.png"  />
                <img src="/card.png"  />
                <img src="/card.png"  />
                <img src="/card.png"  />
              </a>
            </div>

            <div className="footer_bottom">
              <div className="footer_cont col-xl-7 col-lg-7 col-md-7 col-sm-7 fb1 d-inline-block ">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 fb1 d-inline-block">
                  <ul>
                    <li className="active">
                      <b href="#">About Us</b>
                    </li>
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Memory</a>
                    </li>
                    <li>
                      <a href="#">Terms & Privacy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 fb2 d-inline-block">
                  <ul>
                    <li className="active">
                      <b href="#">Customer Care</b>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 fb3 d-inline-block">
                  <ul>
                    <li className="active">
                      <b href="#">Follow Us</b>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Linkdin</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 fb2 d-inline-block">
               <div className="footer_sec">
               <p className="form_header">
                  Stay for future updates from NOW16
                </p>
                <form action="#" className="footer_form">
                  <input
                    type="text"
                    placeholder="Enter Email here"
                    className="form_input"
                  />
                  <button className="form_button">SUBSCRIBE</button>
                </form>
                <p className="footer_text">
                 <a> Mockup design by Luis Teran challenge. Luteran@gmail.com</a> 
                </p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
