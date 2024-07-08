import React from "react";

function Contact() {
  return (
    <>
      <div className="container mt-4">
        <h3>Contact Us</h3>
        <form>
          <div class=" row align-items-center mt-3">
            <div class="col-12 col-md-6 ">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col-12 col-md-6">
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col-12 col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Your contact number"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col-12 col-md-6">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="9"
                placeholder="message"
              ></textarea>
            </div>
          </div>

          <div class="row justify-content-start mb-3  mt-4 ">
            <div class="">
              <button class="product-btn border-0 p-2 text-white rounded-2 px-5">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
