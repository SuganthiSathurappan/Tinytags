import React from "react";
import social from "../images/social.png";
import { Link } from "react-router-dom";
import Progressbar from "../Stepper/StepLayout";
import logo from "../images/logo.png";
import BannerImg from "../images/banner.png";
import BannerImg2 from "../images/Lbanner.png";
import productImg from "../images/left-banner.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      <div class="container ">
        <div class="d-flex justify-content-center rounded-5 mt-5">
          <img
            src={BannerImg}
            alt=""
            class="img-fluid rounded-5 d-block d-md-block d-lg-none"
          />
          <img
            src={BannerImg2}
            alt=""
            class="img-fluid rounded-5 d-none d-md-none d-lg-block"
          />
        </div>
      </div>

      <div class="container d-flex justify-content-center overflow-hidden">
        <div class="row mt-3 ">
          <div class="col-6 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/freedelivery.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">All India Shipping.</p>
            </div>
          </div>
          <div class="col-6 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/delivery.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Dispatches in 48 hours.</p>
            </div>
          </div>
          <div class="col-6 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/design.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Designed especially for you.</p>
            </div>
          </div>
          {/* <div class="col-4 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/lasting.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Made To Last</p>
            </div>
          </div>
          <div class="col-4 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/ordering.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Easy Ordering</p>
            </div>
          </div> */}
          <div class="col-6 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/happiness.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Satisfaction assured.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid  mt-5">
        <hr />
      </div>
      <div class="container mt-1  mt-md-5 ">
        <div class="row">
          <div class="col-12 col-md-6 ">
            <div class="sticky-top py-1 my-md-3 my-1 py-md-3">
              <img src={productImg} alt="" class="product-img rounded-5 " />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div>
              <h4 class=" fw-semibold">Personalized Book Labels</h4>
              <p class="mt-3 text-secondart product-text">
                Introducing Personalized Book Labels: Showcase Your Child's
                Charm! Each label is adorned with your little one's delightful
                portrait, alongside their name, class details, and school
                affiliation. This pack comprises 60 uniquely crafted labels,
                adding a touch of personality to every book in their collection.
              </p>
              {/* <!-- Btn and offer --> */}
              <div>
                <button class="border-0 p-2 text-white rounded-5 px-2 product-btn text-sm">
                  Offer Ends in 7hr 42min 12s
                </button>
                <p class="mt-3 fs-5 fw-semibold">
                  <span class="product-clr">29% Off</span>
                  <span class=" px-2">₹249</span>
                  <sup class="text-muted text-decoration-line-through ">
                    ₹349
                  </sup>
                </p>
              </div>
              {/* <!--Options layer  --> */}
              <div class="mt-2">
                <ul class="list-unstyled">
                  <li>
                    <div class="d-flex align-self-center">
                      <div class=" ">
                        <img
                          src="https://tada.kids/featureicon/freedelivery.svg"
                          alt="icons"
                          class="icon-product"
                        />
                      </div>
                      <div class="ps-2  mt-3">
                        <p class="">All India Shipping.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-self-center">
                      <div class=" ">
                        <img
                          src="https://tada.kids/featureicon/delivery.svg"
                          alt="icons"
                          class="icon-product"
                        />
                      </div>
                      <div class="ps-2 mt-3 ">
                        <p class="">Dispatches in 48 Hours.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-self-center">
                      <div class=" ">
                        <img
                          src="https://tada.kids/featureicon/design.svg"
                          alt="icons"
                          class="icon-product"
                        />
                      </div>
                      <div class="ps-2 mt-3 ">
                        <p class="">
                          Only limited orders daily - grab yours now!{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- Order button --> */}
              <div class="mt-2 position-relative">
                <Link to="step/form">
                  <button class="border-0 rounded-3 product-b px-2 py-2 fw-semibold text-white w-100">
                    Order Now{" "}
                  </button>
                </Link>
              </div>
              {/* <div>                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg></div> */}
              {/* <!-- Project Descriptions --> */}
              <div class="mt-3">
                <div>
                  <h3>Project Description</h3>
                  <div>
                    <p>
                      Bring a little magic to study time with our Personalized
                      Book Labels! Transform your child's photo into unique
                      artwork for each label, making their books stand out.
                      Here’s why our labels are an essential addition to their
                      school supplies:
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Custom Style:</strong> We turn your child's photo
                      into a charming illustration, ensuring their label set is
                      as unique as they are.
                    </p>
                    <p>
                      <strong>They're colourful and sturdy</strong> The
                      high-quality printing keeps the colours vibrant, and the
                      labels last the whole school year.
                    </p>
                    <p>
                      <strong>They're special:&nbsp;</strong>
                      Personalize each label with their name and class on each
                      label to make it theirs.
                    </p>
                    <p>
                      <strong>Keeps them organized:</strong> With our labels, no
                      more mix-ups or lost textbooks. Kids can easily spot their
                      books, making learning more fun and stress-free.
                    </p>
                    <p>
                      <strong>Great gifts:</strong> Surprise your child,
                      grandchild, or little friend with these custom labels as a
                      surprise. They'll love the personal touch!
                    </p>
                    <p>
                      <strong>Helps them stay organised:</strong> No more
                      mix-ups or lost textbooks. Our labels help kids easily
                      identify their books, making learning more fun and
                      stress-free.
                    </p>
                    {/* <p>
                      The perfect way to add a touch of personality and
                      uniqueness to your child's belongings! 🎉 Our bag tags are
                      designed to withstand the wear &amp; tear of everyday use
                      while ensuring that your child's backpack, sports bag, or
                      luggage stands out from the crowd, while making them
                      easily identifiable 😎
                    </p>
                    <p>
                      <strong>🙎Truly personal -&nbsp;</strong>Our bag tags
                      include your child’s face and any number of designs,
                      making them truly one of a kind - Just like your child 🙂
                    </p>
                    <p>
                      <strong>✴️Long lasting -&nbsp;</strong>Our tags are made
                      from durable materials to ensure they last long and look
                      as good as new.
                    </p>
                    <p>
                      <strong>💯No more lost bags -&nbsp;</strong>Ensures that
                      lost bags can be easily identified and brought back to
                      your child.&nbsp;
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Reviews --> */}
      {/* <div class="container mt-2">
        <div class=" d-md-flex justify-content-md-between border-0  border-clr rounded-3">
          <div class="p-2 p-md-3">
            <div class=" ">

              <img src={social} className="img-picc" />
              <span class=""> Rating</span>
            </div>
            <div class="d-flex">
              <h4>4.6</h4>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="text-muted mt-1 ps-2 review-name">5 (Reviews)</span>
            </div>
          </div>
          <div class=" align-self-center px-2 pb-3 pb-md-0">
            <button class="border-0 text-white bg-primary rounded-3 px-2 py-2 ">
              Write a review
            </button>
          </div>
        </div>

        <div>
          <div class="mt-4">
            <div class="d-flex ">
              <h5>
                <span class="product-prp">5000+</span> HAPPY CUSTOMERS
              </h5>
            </div>
            <div class=" mt-2">
              <div class="d-flex overflow-x-scroll  below-scroll ">
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview.webp&w=128&q=75"
                  alt="Image 1"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview4.webp&w=128&q=75"
                  alt="Image 2"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview2.webp&w=256&q=75"
                  alt="Image 3"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview4.webp&w=256&q=75"
                  alt="Image 4"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview5.webp&w=256&q=75"
                  alt="Image 2"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview6.webp&w=256&q=75"
                  alt="Image 3"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview7.webp&w=256&q=75"
                  alt="Image 4"
                  class="img-60"
                />
              </div>
            </div>
          </div>
          <div class="mt-1">
            <div class="">
              <div class="col-12  mt-2 w-50">
                <p>
                  Turn your kids school days into something special and they
                  will love it! See what other parents say!
                </p>
              </div>
              <div class="col-12  ">
                <button class="product-b text-white p-3 fw-semibold border-0 p rounded-2 btn-review ">
                  View Customer reviews
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="border-0 border-clr p-3 mt-4 rounded-4">
          <div class="mt-3">
            <div class="d-flex">
              <div>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ4_nYq24kvJGW05WNEqxitFKdP2sUv4O36xosyRF-XQss3vg=s120-c-rp-mo-br100 "
                  alt=""
                  className="img-pic"
                />
              </div>
              <div class="align-self-center px-2">
                <span class="fw-semibold review-name">AjithKumar</span>
                <br />
                <span class="text-muted revi">1 day ago</span>
              </div>
            </div>
            <div class="mt-2 px-1 px-md-4">
              <div class="d-flex ">
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
              </div>
              <p class="mt-1 px-1 fw-light">
                Best High-quality and Innovative product
              </p>
            </div>
          </div>
        </div>
        <div class="border-0 border-clr p-3 mt-4 rounded-">
          <div class="mt-3">
            <div class="d-flex">
              <div>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ4_nYq24kvJGW05WNEqxitFKdP2sUv4O36xosyRF-XQss3vg=s120-c-rp-mo-br100 "
                  alt=""
                  className="img-pic"
                />
              </div>
              <div class="align-self-center px-2">
                <span class="fw-semibold review-name">Anup</span>
                <br />
                <span class="text-muted review-day">4 day ago</span>
              </div>
            </div>
            <div class="mt-2 px-1 px-md-4">
              <div class="d-flex ">
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
              </div>
              <p class="mt-1 px-1 fw-light"> Innovative product</p>
            </div>
          </div>
        </div>
        <div class="border-0 border-clr p-3 mt-4 rounded-">
          <div class="mt-3">
            <div class="d-flex">
              <div>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ4_nYq24kvJGW05WNEqxitFKdP2sUv4O36xosyRF-XQss3vg=s120-c-rp-mo-br100 "
                  alt=""
                  className="img-pic"
                />
              </div>
              <div class="align-self-center px-2">
                <span class="fw-semibold review-name">Lakshana</span>
                <br />
                <span class="text-muted review-day">5 day ago</span>
              </div>
            </div>
            <div class="mt-2 px-1 px-md-4">
              <div class="d-flex ">
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
              </div>
              <p class="mt-1 px-1 fw-light">
                Nothing to say, only two words just wow❤‍🔥❤‍🔥❤‍🔥❤‍🔥💯 thank
                you Tada
              </p>
            </div>
          </div>
        </div>
        <div class="border-0 border-clr p-3 mt-4 rounded-4">
          <div class="mt-3">
            <div class="d-flex">
              <div>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ4_nYq24kvJGW05WNEqxitFKdP2sUv4O36xosyRF-XQss3vg=s120-c-rp-mo-br100 "
                  alt=""
                  className="img-pic"
                />
              </div>
              <div class="align-self-center px-2">
                <span class="fw-semibold review-name">Rock</span>
                <br />
                <span class="text-muted review-day">10 day ago</span>
              </div>
            </div>
            <div class="mt-2 px-1 px-md-4">
              <div class="d-flex ">
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
              </div>
              <p class="mt-1 px-1 fw-light">
                Labels look very grand and made my children feel happy..... I
                have only one request.... You may enable the option to increase
                the number of labels in a single order. Otherwise picking up the
                orders, sending samples and delivering the orders are
                outstanding and shows your excellence in it.....
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
