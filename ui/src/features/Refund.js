import React from "react";
import social from "../images/social.png";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import BannerImg from "../images/banner.png";
import productImg from "../images/left-banner.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Refund() {
  return (
    <>
      <div className="mt-2 container">
        <h4 className="" style={{ marginTop: "60px" }}>
          Return Policy
        </h4>
        <div className="my-4">
          <div className="my-4">
            <h5>1. No Returns or Refunds</h5>
            <span className="block">
              Due to the customized nature of our products, we do not accept
              returns or issue refunds once the order status is marked as
              "Print" or "Shipped".
            </span>
          </div>
          <div className="my-4">
            <h5 className="my-2">2.Defective or Incorrect Products</h5>
            <ul className="list-disc">
              <li>
                If you receive a defective or incorrect product, please contact
                us within 7 days of receiving your order.
              </li>
              <li>
                To be eligible for a replacement, you must provide proof of the
                defect or error (such as a photograph).
              </li>
              <li>
                We will arrange for a replacement of the defective or incorrect
                product at no additional cost to you.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>3. Photo Quality</h5>
            <ul className="list-disc">
              <li>
                All photos uploaded for customization must be high resolution.
                Low-resolution images may result in poor print quality, for
                which Tinytags.in will not be responsible.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>4. Privacy</h5>
            <ul className="list-disc">
              <li>
                We are committed to protecting your privacy. We will never share
                the photos or any personal information of the children with any
                third party.
              </li>
            </ul>
          </div>
          <div className="my-4 mb-5">
            <h5>5. Contact Information</h5>
            <ul className="list-disc">
              <li>
                For any questions or concerns regarding our Return Policy,
                please contact us at support@tinytags.in /+91 99656 77110.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refund;
