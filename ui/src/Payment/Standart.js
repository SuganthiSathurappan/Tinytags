import React from "react";
import axios from "axios";
import { useState } from "react";

function Standart() {
  const [book, setBook] = useState({
    name: "The fault in Our Start",
    author: "John Green",
    img: "https://www.bookswagon.com/productimages/images200/333/9781974732333.jpg",
    price: "799",
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_QNnWaW9MEzuYvR",
      amount: data.amount,
      currency: data.currency,
      name: data.name,
      description: data.description,
      image: data.image,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "https://tinytags-api.onrender.com/api/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzrp1 = new window.Razorpay(options);
     rzrp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "https://tinytags-api.onrender.com/api/order";
      const { data } = await axios.post(orderUrl, { amount: book.price });
      console.log(data);
      initPayment(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container mx-auto px-lg-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="border-0 p-3">
            <div>
              <img src={book.img} alt="The justutsu Kaisen" className="" />
            </div>
            <div>
              <ul className="p-0 mt-3">
                <li className="font-medium">Book Name:{book.name}</li>
                <li className="font-bold">Author:{book.author}</li>
              </ul>
              <button
                className="w-44 py-1 text-white bg-[#900678]  rounded-full"
                onClick={handlePayment}
              >
                Pay {book.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Standart;
