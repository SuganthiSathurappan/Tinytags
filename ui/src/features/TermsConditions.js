import React from "react";
import social from "../images/social.png";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import BannerImg from "../images/banner.png";
import productImg from "../images/left-banner.png";
import "bootstrap/dist/css/bootstrap.min.css";

function TermsConditions() {
  return (
    <>

      <div className="mt-2 container ">
        <h4 className="" style={{ marginTop: "60px" }}>
          Terms & Conditions
        </h4>
        <div className="my-4">
          <div className="my-4">
            <h5>1.Introductions</h5>
            <span className="block">
              Welcome to Tinytags.in. These Terms and Conditions govern your use
              of our website and services. By accessing or using our website,
              you agree to comply with and be bound by these terms. If you do
              not agree with any part of these terms, please do not use our
              services.
            </span>
          </div>
          <div className="my-4">
            <h5 className="my-2">2. Services</h5>
            <span className="block">
              Tinytags.in provides customized notebook stickers. Parents can
              upload their child’s photo, which we will customize and print as a
              notebook label. All photos must be high resolution to ensure the
              best print quality.
            </span>
          </div>
          <div className="my-4">
            <h5>3.Order Process</h5>
            <ul className="list-disc">
              <li>All orders must be placed through our website.</li>
              <li>
                By placing an order, you confirm that all information provided
                is accurate and complete.
              </li>
              <li>
                We reserve the right to refuse any order at our discretion.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>4. Pricing and Payment</h5>
            <ul className="list-disc">
              <li>All prices are listed in Indian Rupees (INR).</li>
              <li>Payment must be made at the time of order placement</li>
              <li>
                We accept payments through credit/debit cards and other
                available payment methods.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>5. Shipping</h5>
            <ul className="list-disc">
              <li>We offer shipping within India.</li>
              <li>
                Shipping times may vary based on your location and other
                factors. We are not responsible for delays caused by shipping
                carriers.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>6. Returns and Refunds</h5>
            <ul className="list-disc">
              <li>
                Due to the customized nature of our products, we do not accept
                returns or issue refunds once the order status is marked as
                "Print" or "Shipped".
              </li>
              <li>
                If you receive a defective or incorrect product, please contact
                us within 7 days of receiving your order to arrange a
                replacement.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>7. Photo Quality</h5>
            <ul className="list-disc">
              <li>
                All photos uploaded for customization must be high resolution.
                Low-resolution images may result in poor print quality, for
                which Tinytags.in will not be responsible.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>8. Privacy</h5>
            <ul className="list-disc">
              <li>
                We are committed to protecting your privacy. We will never share
                the photos or any personal information of the children with any
                third party.
              </li>
              <li>
                Please refer to our Privacy Policy for detailed information on
                how we collect, use, and protect your personal information
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>9. Intellectual Property</h5>
            <ul className="list-disc">
              <li>
                All content on our website, including images, text, and designs,
                is the property of Tinytags.in and is protected by intellectual
                property laws.
              </li>
              <li>
                You may not use, reproduce, or distribute any content without
                our prior written permission.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>10. Limitation of Liability</h5>
            <ul className="list-disc">
              <li>
                Tinytags.in is not liable for any indirect, incidental, or
                consequential damages arising from the use of our services.
              </li>
              <li>
                Our total liability to you for any claim arising out of or in
                connection with these terms or the use of our services is
                limited to the amount you paid for the service.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h5>11. Changes to Terms</h5>
            <ul className="list-disc">
              <li>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting on our website. Your
                continued use of our services constitutes acceptance of the
                revised terms.
              </li>
            </ul>
          </div>
          <div className="my-4 mb-5">
            <h5>12. Governing Law</h5>
            <ul className="list-disc">
              <li>
                These terms are governed by and construed in accordance with the
                laws of India. Any disputes arising from these terms or the use
                of our services will be subject to the exclusive jurisdiction of
                the courts of India.
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default TermsConditions;
