import React from "react";
import social from "../images/social.png";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import BannerImg from "../images/banner.png";
import BannerImg2 from "../images/Lbanner.png";
import productImg from "../images/left-banner.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <>
      <div class="container-fluid mt-5" style={{ backgroundColor: "#073657" }}>
        <div class="container">
          <div class="row py-2 py-md-3">
            <div class="col-auto align-self-center col-md-3 p-2">
              <div class="d-flex  order-lg-1 ">
                <div class="d-flex ">
                  <img alt="tada-logo" class="" src={logo} />
                </div>
              </div>
            </div>
            <div class="col-auto col-md-3 p-2 text-white">
              <h6>Informations</h6>
              <ul class="list-unstyled my-4 text-white ft-info">
                <Nav.Link href="/about" className="text-white my-3">
                  About
                </Nav.Link>
                <Nav.Link href="/contact" className="text-white my-3">
                  Contact
                </Nav.Link>
                <Nav.Link href="/term" className="text-white my-3">
                  Terms & Conditions
                </Nav.Link>
                <Nav.Link href="/refund" className="text-white my-3">
                  Refund & Cancellations Policy
                </Nav.Link>
              </ul>
            </div>
            <div class="col-auto col-md-3 p-2 text-white">
              <h6 className="">Follow Us</h6>
              <div className="d-flex my-4 gap-2">
                <div>
                  <img
                    src="https://techtist.org/eshop/assets/front_end/modern/newjs/images/facebook.png"
                    alt="icon"
                    className="ft-icon"
                  />
                </div>
                <div>
                  <img
                    src="https://techtist.org/eshop/assets/front_end/modern/newjs/images/youtube.png"
                    alt="icon"
                    className="ft-icon"
                  />
                </div>
                <div>
                  <img
                    src="https://techtist.org/eshop/assets/front_end/modern/newjs/images/instagram.png"
                    alt="icon"
                    className="ft-icon"
                  />
                </div>
                <div>
                  <img
                    src="https://techtist.org/eshop/assets/front_end/modern/newjs/images/social.png"
                    alt="icon"
                    className="ft-icon"
                  />
                </div>
              </div>
            </div>
            <div class="col-auto col-md-3 p-2 text-white">
              <h6 className="">Secure Payment mode</h6>
              <div className="my-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzApR-patQFoWo3gg4IxNRX2Q_0CgP9G4sg&s" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar bg-navbar">
        <div class="container-fluid d-flex justify-content-center">
          <span class=" mb-0  fw-medium text-white">
            2024 &copy;CopyRights Tiny Tags All Rights Reserved{" "}
          </span>
        </div>
      </nav>
    </>
  );
}

export default Footer;
