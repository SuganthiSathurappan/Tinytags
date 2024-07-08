import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCartDataMutation, useDeleteCartDataMutation } from "../features/slice/cartDataApiSlice";
import { useCartQuantityUpdateDataMutation } from "../features/slice/cartDataApiSlice";


function Addcart() {
  const navigate = useNavigate();
  const [cartData, { isLoading, isSuccess, isError, error }] = useCartDataMutation();
  const [cartQuantity] = useCartQuantityUpdateDataMutation();
  const [cartDetails, setCartDetails] = useState([]);//state to store total amount
  const customer_id = '1';
  // // const [totalAmount, setTotalAmount] = useState(() => {
  // //   let initialTotal = 0;
  // //   if (cartDetails.length > 0) {
  // //     initialTotal = cartDetails.reduce((acc, item) => {
  // //       return acc + (item.product_price * (count[item.cart_id] || 1)); // Use count or default to 1
  // //     }, 0);
  // //   }
  // //   return initialTotal;
  // // });

  // // const [quantities, setQuantities] = useState({});



  // useEffect(() => {
  //   const fetchCartData = async () => {
  //     try {
  //       console.log('customer_id',customer_id)
  //       const result = await cartData({customer_id});
  //       setCartDetails(result.data);
  //       console.log(result.data);
  //       const initialQuantites = result.data.reduce((acc, item) => {
  //         acc[item.product_id] = 1;
  //         return acc;
  //       },{});
  //       setQuantities(initialQuantites);
  //     } catch (err) {
  //       console.error('Failed to fetch cart data:', err);
  //     }
  //   };
  //   fetchCartData();
  // }, [cartData]); // Dependencies array
  // console.log(cartDetails);

  // const [quantities, setQuantities] = useState(() => {
  //   let initialQuantities = {};
  //   cartDetails.forEach((item) => {
  //     initialQuantities[item.cart_id] = 1; // default quantity is 1 for each item
  //   });
  //   return initialQuantities;
  // });

  // const [totalAmount, setTotalAmount] = useState(() => {
  //   let initialTotal = 0;
  //   if (cartDetails.length > 0) {
  //     initialTotal = cartDetails.reduce((acc, item) => {
  //       return acc + (item.product_price * (quantities[item.cart_id] || 1)); // Use quantities or default to 1
  //     }, 0);
  //   }
  //   return initialTotal;
  // });

  // useEffect(() => {
  //   // Recalculate total amount whenever cartDetails or quantities changes
  //   let newTotal = cartDetails.reduce((acc, item) => {
  //     return acc + (item.product_price * (quantities[item.cart_id] || 1)); // Use quantities or default to 1
  //   }, 0);
  //   setTotalAmount(newTotal);
  // }, [cartDetails, quantities]);

  // const handleQuantityChange = (cartId, newQuantity) => {
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [cartId]: newQuantity,
  //   }));
  // };

  // const handleMinus = (cartId) => {
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [cartId]: Math.max((prevQuantities[cartId] || 1) - 1, 1),
  //   }));
  // };

  // const handleAdd = (cartId) => {
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [cartId]: (prevQuantities[cartId] || 1) + 1,
  //   }));
  // };

  // const calculateTotal = () => {
  //   let total = 0;
  //   cartDetails.forEach(item => {
  //     total += item.product_price * (quantities[item.product_id] || 1);
  //   });
  //   setTotalAmount(total);
  // };

  // useEffect(() => {
  //   calculateTotal();
  // }, [quantities,cartDetails]);

  // const handleCartUpdate = (e) => {

  //   navigate('/checkout')
  // }

  const [count, setCount] = useState(1); //Default quantity is 1
  const [totalAmount, setTotalAmount] = useState(() => {
    let initialTotal = 300;
    if (cartDetails.length > 0) {
      initialTotal = cartDetails.reduce((acc, item) => {
        return acc + (item.product_price * count);
      }, 0);
    }
    return initialTotal;
  })
  const [quantities, setQuantities] = useState({});
  const [deleteData,] = useDeleteCartDataMutation();
  const [cartItems, setCartItems] = useState({});
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [newCartData, setNewCartData] = useState([]);
  const [cartChanged, setCartChanged] = useState(false); //for updated the deleted
  useEffect(() => {

    const fetchCartData = async () => {
      try {
        console.log('customer_id', customer_id)
        const result = await cartData({ customer_id });
        setCartDetails(result.data);
        console.log(result.data);
        // Calculate initial quantities based on cartDetails
    const initialQuantities = result.data.reduce((acc, item) => {
      acc[item.cart_id] = item.no_of_product;
      return acc;
    }, {});
        setQuantities(initialQuantities);
        console.log(quantities);
        
      } catch (err) {
        console.error('Failed to fetch cart data:', err);
      }
    };
    fetchCartData();
  }, [cartData,cartChanged]); // Dependencies array
  console.log(cartDetails);


  useEffect(() => {
    calculateTotal();
  }, [quantities, cartDetails]);

  const minus = (cart_id) => {
    // setCount(count - 1);
    // const newCount = count > 1 ? count - 1 : 1;
    // setCount(newCount);
    // calculateTotal(cartDetails, newCount);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [cart_id]:  (prevQuantities[cart_id] || 1) - 1,
    }));
  };

  const add = (cart_id) => {
    // setCount(count + 1);
    // const newCount = count + 1;
    // setCount(newCount);
    // calculateTotal(cartDetails, newCount);
    console.log(cart_id);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [cart_id]: (prevQuantities[cart_id] || 1) + 1,
    }));
    console.log(quantities);
  };

  const handleChange = (cart_id, newQuantity,price) => {
    // setCount(Number(e.target.value));
    // const newCount = parseInt(e.target.value,10);
    // setCount(newCount);
    // calculateTotal(cartDetails, newCount);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [cart_id]: {
        cart_id:cart_id,
        newQuantity,
      },
    }));
    console.log('quantities',quantities);
  };
  
  console.log(quantities)


  
  const calculateTotal = () => {
    let total = 0;
    cartDetails.forEach(item => {
      total += item.product_price * (quantities[item.cart_id] || 1);
    });
    setTotalAmount(total);
  };

  const transformedData = cartDetails
  .filter(item => quantities[item.cart_id])
  .map(item => ({
    cart_id : item.cart_id,
    no_of_product: quantities[item.cart_id],
    price: quantities[item.cart_id]*item.product_price
  }));
  console.log(transformedData)

  const handleCartUpdate = (e) => {
   console.log(quantities);
   console.log(cartDetails);
   
   e.preventDefault();
   const result = cartQuantity(transformedData);
   console.log(result);
   navigate('../checkout');
}
        // Process cart data before navigation, if needed
  //   const CartData = Object.entries(cartItems).map(([cart_id, { quantity, price }]) => ({
  //     cart_id,
  //     quantity,
  //     amount: quantity * price,
  //   }));;
  //   setNewCartData(CartData);
  //   console.log(CartData);
  //    setTriggerUpdate(true); 
  // }

  // useEffect(()=>{
  //   if (triggerUpdate&& newCartData.length > 0){
     
  //   try {
  //   const result =cartQuantity(newCartData);
  //   console.log(result);  
  //   navigate('/checkout')
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setTriggerUpdate(false);
  //   }
  //   }
  // },[triggerUpdate,cartItems,navigate])

  const handleDeleteCart = async (e,cartId) => {
    console.log("delete Cart : ", cartId);
    // Prevent the default behavior if this function is called from an event handler
    e.preventDefault();

    // Confirm with the user before proceeding with deletion'
    const confirmDelete = window.confirm('Do you want to delete the row?');
    console.log("confirmDelete: ", confirmDelete)
    // if (!confirmDelete) {
    //   // User canceled deletion, so return early
    //   return;
    // }

    // If the user confirms deletion, proceed with the delete operation
    try {
      // Assuming deleteData is an asynchronous function that deletes the data
      const result = await deleteData({ cartId });

      if (!result) {
        // If the deletion operation fails, show an error message
        alert('Unable to delete the row');
        return;
      }
      console.log('Deleted Successfully')
      setCartChanged(!cartChanged);
      return;
      // If the deletion operation is successful, show a success message
      // alert('Deleted Successfully');
    } catch (error) {
      // If an error occurs during the deletion operation, handle it appropriately
      console.error('Error deleting data:', error);
      // alert('An error occurred while deleting the row');
    }
  };


  return (
    <>

      <section>
        <section class="h-100 gradient-custom">
          <div class="container py-5">
            <h3 class="fw-light">Add To Cart</h3>
            <div class="row d-flex justify-content-center my-4">
              <div class="col-md-8">
                <div class="card mb-4">
                  <div class=" py-3 bg-navbar">
                    <h5 class="mb-0 px-3 text-white">Cart - items</h5>
                  </div>
                  <div class="card-body">
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Error fetching data: {error.message}</p>}
                    {isSuccess && cartDetails && (
                      cartDetails.map((item) => (
                        <div class="row mb-4" key={item.cart_id}>
                          <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            {/* <!-- Image --> */}
                            <div
                              class="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src="https://tada.kids/_next/image?url=https%3A%2F%2Fd3ny489hugqfbu.cloudfront.net%2Fpublic%2Fproductimage%2Fproduct_images%2FI240312123023967560.webp&w=750&q=75"
                                class="w-100"
                                alt="Blue Jeans Jacket"
                              />
                              <a href="#!">
                                <div
                                  class="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </div>
                            {/* <!-- Image --> */}
                          </div>

                          <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Data --> */}
                            <p class="fw-semibold">
                              {/* Personalised Bag Tags - Pack of 2 */}
                              {item.product_name}
                            </p>
                            <p>
                              <strong class="product-clr">33% Off</strong>
                              <span class="fw-medium px-2">₹{item.product_price}</span>
                              <sup class="text-muted text-decoration-line-through ">
                              ₹{(item.product_price / 0.67).toFixed(2)}
                              </sup>
                            </p>
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              class="border-0 rounded-2 product-btn p-1 me-1 mb-2"
                              data-mdb-tooltip-init
                              title="Remove item"
                              onClick={(e) =>handleDeleteCart(e, item.cart_id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="white"
                                class="bi bi-trash3-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                              </svg>
                            </button>
                            {/* <!-- Data --> */}
                          </div>

                          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Quantity --> */}
                            <div class="mb-2">
                              <label for="form1" class="fw-semibold">
                                Quantity
                              </label>
                            </div>
                            <div class="d-flex mb-4" style={{ maxWidth: "300px" }}>
                              <button
                                class="btn bg-secondary  me-2"
                                onClick={() => minus(item.cart_id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="white"
                                  class="bi bi-dash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                </svg>
                              </button>
                              <div className="col-4">
                            <input
                              type="text"
                              id="form1"
                              min="0"
                              name="quantity"
                              class="form-control text-center"
                                  value={quantities[item.cart_id] || 1}
                                  onChange={(e) => handleChange(item.cart_id,item.product_price, parseInt(e.target.value), 10)}
                                />
                              </div>

                              <button class="btn btn-primary  ms-2" onClick={() => add(item.cart_id)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                              </button>
                            </div>
                            {/* <!-- Quantity --> */}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div class="card mb-4">
                  <div class="card-body">
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p class="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
                <div class="card mb-4 mb-lg-0">
                  <div class="card-body ">
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <div class="d-flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="pay-icon"
                        id="google-pay"
                      >
                        <path
                          fill="#5F6368"
                          d="M10.917 11.496V14.4h-.922V7.227h2.444a2.206 2.206 0 0 1 1.583.621c.429.386.67.938.661 1.514a1.985 1.985 0 0 1-.661 1.523c-.428.408-.956.612-1.583.611h-1.522zm0-3.386v2.505h1.545c.343.01.673-.124.912-.371.484-.47.496-1.245.024-1.729l-.024-.024a1.204 1.204 0 0 0-.912-.381h-1.545zm5.89 1.222c.682 0 1.219.182 1.613.546.394.364.591.864.591 1.497v3.026h-.881v-.682h-.04c-.382.561-.89.842-1.523.842-.541 0-.993-.16-1.357-.481a1.538 1.538 0 0 1-.546-1.202c0-.508.192-.912.576-1.212.384-.3.896-.451 1.538-.451.547 0 .998.1 1.352.3v-.211a1.046 1.046 0 0 0-.381-.815 1.304 1.304 0 0 0-.89-.336c-.514 0-.922.217-1.222.651l-.811-.511c.445-.641 1.106-.961 1.981-.961zm-1.193 3.566a.739.739 0 0 0 .305.601c.204.16.457.246.716.24a1.472 1.472 0 0 0 1.037-.431c.305-.288.458-.624.458-1.012-.288-.229-.688-.344-1.202-.344-.374 0-.687.09-.937.271-.251.185-.377.408-.377.675zm8.457-3.406-3.077 7.073h-.951l1.142-2.475-2.025-4.598h1.002l1.463 3.526h.02l1.423-3.526h1.003z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M8.079 11.7c0-.281-.023-.561-.071-.838H4.121v1.587h2.226a1.905 1.905 0 0 1-.823 1.252v1.031h1.329c.778-.716 1.226-1.777 1.226-3.032z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M4.121 15.728c1.112 0 2.049-.365 2.732-.995l-1.329-1.031c-.37.251-.846.394-1.403.394-1.075 0-1.987-.725-2.314-1.701H.439v1.062a4.12 4.12 0 0 0 3.682 2.271z"
                        ></path>
                        <path
                          fill="#FBBC04"
                          d="M1.808 12.395a2.464 2.464 0 0 1 0-1.578V9.756H.439a4.124 4.124 0 0 0 0 3.702l1.369-1.063z"
                        ></path>
                        <path
                          fill="#EA4335"
                          d="M4.121 9.117a2.24 2.24 0 0 1 1.581.618l1.177-1.176a3.968 3.968 0 0 0-2.758-1.074A4.12 4.12 0 0 0 .439 9.756l1.369 1.062c.326-.977 1.238-1.701 2.313-1.701z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 466"
                        class="pay-icon"
                        id="upi"
                      >
                        <path
                          fill="#3d3d3c"
                          d="M98.1 340.7h6.3l-5.9 24.5c-.9 3.6-.7 6.4.5 8.2 1.2 1.8 3.4 2.7 6.7 2.7 3.2 0 5.9-.9 8-2.7 2.1-1.8 3.5-4.6 4.4-8.2l5.9-24.5h6.4l-6 25.1c-1.3 5.4-3.6 9.5-7 12.2-3.3 2.7-7.7 4.1-13.1 4.1-5.4 0-9.1-1.3-11.1-4s-2.4-6.8-1.1-12.2l6-25.2zm31.4 40.3 10-41.9 19 24.6c.5.7 1 1.4 1.5 2.2.5.8 1 1.7 1.6 2.7l6.7-27.9h5.9l-10 41.8-19.4-25.1-1.5-2.1c-.5-.8-.9-1.5-1.2-2.4l-6.7 28h-5.9zm44.2 0 9.6-40.3h6.4l-9.6 40.3h-6.4zm15.5 0 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10H217l-1.4 5.7h-15.5l-4.5 18.9h-6.4zm29 0 9.6-40.3h6.4l-9.6 40.3h-6.4zm15.5 0 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7h-15.5l-3.1 13H257l-1.4 5.9h-21.9zm29.3 0 9.6-40.3h8.6c5.6 0 9.5.3 11.6.9 2.1.6 3.9 1.5 5.3 2.9 1.8 1.8 3 4.1 3.5 6.8.5 2.8.3 6-.5 9.5-.9 3.6-2.2 6.7-4 9.5-1.8 2.8-4.1 5-6.8 6.8-2 1.4-4.2 2.3-6.6 2.9-2.3.6-5.8.9-10.4.9H263zm7.8-6h5.4c2.9 0 5.2-.2 6.8-.6 1.6-.4 3-1.1 4.3-2 1.8-1.3 3.3-2.9 4.5-4.9 1.2-1.9 2.1-4.2 2.7-6.8.6-2.6.8-4.8.5-6.7-.3-1.9-1-3.6-2.2-4.9-.9-1-2-1.6-3.5-2-1.5-.4-3.8-.6-7.1-.6h-4.6l-6.8 28.5zm59.7-12.1-4.3 18.1h-6l9.6-40.3h9.7c2.9 0 4.9.2 6.2.5 1.3.3 2.3.8 3.1 1.6 1 .9 1.7 2.2 2 3.8.3 1.6.2 3.3-.2 5.2-.5 1.9-1.2 3.7-2.3 5.3-1.1 1.6-2.4 2.9-3.8 3.8-1.2.7-2.5 1.3-3.9 1.6-1.4.3-3.6.5-6.4.5h-3.7zm1.7-5.4h1.6c3.5 0 6-.4 7.4-1.2 1.4-.8 2.3-2.2 2.8-4.2.5-2.1.2-3.7-.8-4.5-1.1-.9-3.3-1.3-6.6-1.3H335l-2.8 11.2zm40.1 23.5-2-10.4h-15.6l-7 10.4H341l29-41.9 9 41.9h-6.7zm-13.8-15.9h10.9l-1.8-9.2c-.1-.6-.2-1.3-.2-2-.1-.8-.1-1.6-.1-2.5-.4.9-.8 1.7-1.3 2.5-.4.8-.8 1.5-1.2 2.1l-6.3 9.1zm29.7 15.9 4.4-18.4-8-21.8h6.7l5 13.7c.1.4.2.8.4 1.4.2.6.3 1.2.5 1.8l1.2-1.8c.4-.6.8-1.1 1.2-1.6l11.7-13.5h6.4L399 362.5l-4.4 18.4h-6.4zm60.9-19.9c0-.3.1-1.2.3-2.6.1-1.2.2-2.1.3-2.9-.4.9-.8 1.8-1.3 2.8-.5.9-1.1 1.9-1.8 2.8l-15.4 21.5-5-21.9c-.2-.9-.4-1.8-.5-2.6-.1-.8-.2-1.7-.2-2.5-.2.8-.5 1.7-.8 2.7-.3.9-.7 1.9-1.2 2.9l-9 19.8h-5.9l19.3-42 5.5 25.4c.1.4.2 1.1.3 2 .1.9.3 2.1.5 3.5.7-1.2 1.6-2.6 2.8-4.4.3-.5.6-.8.7-1.1l17.4-25.4-.6 42h-5.9l.5-20zm10.6 19.9 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7h-15.5l-3.1 13H483l-1.4 5.9h-21.9zm29.2 0 10-41.9 19 24.6c.5.7 1 1.4 1.5 2.2.5.8 1 1.7 1.6 2.7l6.7-27.9h5.9l-10 41.8-19.4-25.1-1.5-2.1c-.5-.8-.9-1.5-1.2-2.4l-6.7 28h-5.9zm65.1-34.8-8.3 34.7h-6.4l8.3-34.7h-10.4l1.3-5.6h27.2l-1.3 5.6H554zm6.7 26.7 5.7-2.4c.1 1.8.6 3.2 1.7 4.1 1.1.9 2.6 1.4 4.6 1.4 1.9 0 3.5-.5 4.9-1.6 1.4-1.1 2.3-2.5 2.7-4.3.6-2.4-.8-4.5-4.2-6.3-.5-.3-.8-.5-1.1-.6-3.8-2.2-6.2-4.1-7.2-5.9-1-1.8-1.2-3.9-.6-6.4.8-3.3 2.5-5.9 5.2-8 2.7-2 5.7-3.1 9.3-3.1 2.9 0 5.2.6 6.9 1.7 1.7 1.1 2.6 2.8 2.9 4.9l-5.6 2.6c-.5-1.3-1.1-2.2-1.9-2.8-.8-.6-1.8-.9-3-.9-1.7 0-3.2.5-4.4 1.4-1.2.9-2 2.1-2.4 3.7-.6 2.4 1.1 4.7 5 6.8.3.2.5.3.7.4 3.4 1.8 5.7 3.6 6.7 5.4 1 1.8 1.2 3.9.6 6.6-.9 3.8-2.8 6.8-5.7 9.1-2.9 2.2-6.3 3.4-10.3 3.4-3.3 0-5.9-.8-7.7-2.4-2-1.6-2.9-3.9-2.8-6.8zm47.1 8.1 9.6-40.3h6.4l-9.6 40.3h-6.4zm15.6 0 10-41.9 19 24.6c.5.7 1 1.4 1.5 2.2.5.8 1 1.7 1.6 2.7l6.7-27.9h5.9l-10 41.8-19.4-25.1-1.5-2.1c-.5-.8-.9-1.5-1.2-2.4l-6.7 28h-5.9zm65.1-34.8-8.3 34.7h-6.4l8.3-34.7h-10.4l1.3-5.6h27.2l-1.3 5.6h-10.4zm6.9 34.8 9.6-40.3h22l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7h-15.5l-3.1 13h15.5l-1.4 5.9h-22zm39.5-18.1-4.3 18h-6l9.6-40.3h8.9c2.6 0 4.6.2 5.9.5 1.4.3 2.5.9 3.3 1.7 1 1 1.6 2.2 1.9 3.8.3 1.5.2 3.2-.2 5.1-.8 3.2-2.1 5.8-4.1 7.6-2 1.8-4.5 2.9-7.5 3.3l9.1 18.3h-7.2l-8.7-18h-.7zm1.6-5.1h1.2c3.4 0 5.7-.4 7-1.2 1.3-.8 2.2-2.2 2.7-4.3.5-2.2.3-3.8-.7-4.7-1-.9-3.1-1.4-6.3-1.4h-1.2l-2.7 11.6zm18.9 23.2 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10h15.5l-1.4 5.7h-15.5l-4.5 18.9h-6.4zm52.8 0-2-10.4h-15.6l-7 10.4h-6.7l29-41.9 9 41.9h-6.7zm-13.9-15.9h10.9l-1.8-9.2c-.1-.6-.2-1.3-.2-2-.1-.8-.1-1.6-.1-2.5-.4.9-.8 1.7-1.3 2.5-.4.8-.8 1.5-1.2 2.1l-6.3 9.1zm62.2-14.6c-1.4-1.6-3.1-2.8-4.9-3.5-1.8-.8-3.8-1.2-6.1-1.2-4.3 0-8.1 1.4-11.5 4.2-3.4 2.8-5.6 6.5-6.7 11-1 4.3-.6 7.9 1.4 10.8 1.9 2.8 4.9 4.2 8.9 4.2 2.3 0 4.6-.4 6.9-1.3 2.3-.8 4.6-2.1 7-3.8l-1.8 7.4c-2 1.3-4.1 2.2-6.3 2.8-2.2.6-4.4.9-6.8.9-3 0-5.7-.5-8-1.5s-4.2-2.5-5.7-4.5c-1.5-1.9-2.4-4.2-2.8-6.8-.4-2.6-.3-5.4.5-8.4.7-3 1.9-5.7 3.5-8.3 1.6-2.6 3.7-4.9 6.1-6.8 2.4-2 5-3.5 7.8-4.5s5.6-1.5 8.5-1.5c2.3 0 4.4.3 6.4 1 1.9.7 3.7 1.7 5.3 3.1l-1.7 6.7zm.6 30.5 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7H868l-3.1 13h15.5L879 381h-21.9z"
                        ></path>
                        <path
                          fill="#70706e"
                          d="M740.7 305.6h-43.9l61-220.3h43.9l-61 220.3zM717.9 92.2c-3-4.2-7.7-6.3-14.1-6.3H462.6l-11.9 43.2h219.4l-12.8 46.1H481.8v-.1h-43.9l-36.4 131.5h43.9l24.4-88.2h197.3c6.2 0 12-2.1 17.4-6.3 5.4-4.2 9-9.4 10.7-15.6l24.4-88.2c1.9-6.6 1.3-11.9-1.7-16.1zm-342 199.6c-2.4 8.7-10.4 14.8-19.4 14.8H130.2c-6.2 0-10.8-2.1-13.8-6.3-3-4.2-3.7-9.4-1.9-15.6l55.2-198.8h43.9l-49.3 177.6h175.6l49.3-177.6h43.9l-57.2 205.9z"
                        ></path>
                        <path
                          fill="#098041"
                          d="M877.5 85.7 933 196.1 816.3 306.5z"
                        ></path>
                        <path
                          fill="#e97626"
                          d="M838.5 85.7 894 196.1 777.2 306.5z"
                        ></path>
                      </svg>
                      <img
                        class="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="57"
                        fill="#072654"
                        viewBox="0 0 1896 401"
                        id="razorpay"
                      >
                        <path
                          fill="#3395FF"
                          d="m122.63 105.7-15.75 57.97 90.15-58.3-58.96 219.98 59.88.05L285.05.48"
                        ></path>
                        <path d="M25.6 232.92.8 325.4h122.73l50.22-188.13L25.6 232.92m426.32-81.42c-3 11.15-8.78 19.34-17.4 24.57-8.6 5.22-20.67 7.84-36.25 7.84h-49.5l17.38-64.8h49.5c15.56 0 26.25 2.6 32.05 7.9 5.8 5.3 7.2 13.4 4.22 24.6m51.25-1.4c6.3-23.4 3.7-41.4-7.82-54-11.5-12.5-31.68-18.8-60.48-18.8H324.4l-66.5 248.1h53.67l26.8-100h35.2c7.9 0 14.12 1.3 18.66 3.8 4.55 2.6 7.22 7.1 8.04 13.6l9.58 82.6h57.5l-9.32-77c-1.9-17.2-9.77-27.3-23.6-30.3 17.63-5.1 32.4-13.6 44.3-25.4a92.6 92.6 0 0 0 24.44-42.5m130.46 86.4c-4.5 16.8-11.4 29.5-20.73 38.4-9.34 8.9-20.5 13.3-33.52 13.3-13.26 0-22.25-4.3-27-13-4.76-8.7-4.92-21.3-.5-37.8 4.42-16.5 11.47-29.4 21.17-38.7 9.7-9.3 21.04-13.95 34.06-13.95 13 0 21.9 4.5 26.4 13.43 4.6 8.97 4.7 21.8.2 38.5zm23.52-87.8-6.72 25.1c-2.9-9-8.53-16.2-16.85-21.6-8.34-5.3-18.66-8-30.97-8-15.1 0-29.6 3.9-43.5 11.7-13.9 7.8-26.1 18.8-36.5 33-10.4 14.2-18 30.3-22.9 48.4-4.8 18.2-5.8 34.1-2.9 47.9 3 13.9 9.3 24.5 19 31.9 9.8 7.5 22.3 11.2 37.6 11.2a82.4 82.4 0 0 0 35.2-7.7 82.11 82.11 0 0 0 28.4-21.2l-7 26.16h51.9L709.3 149h-52zm238.65 0H744.87l-10.55 39.4h87.82l-116.1 100.3-9.92 37h155.8l10.55-39.4h-94.1l117.88-101.8m142.4 52c-4.67 17.4-11.6 30.48-20.75 39-9.15 8.6-20.23 12.9-33.24 12.9-27.2 0-36.14-17.3-26.86-51.9 4.6-17.2 11.56-30.13 20.86-38.84 9.3-8.74 20.57-13.1 33.82-13.1 13 0 21.78 4.33 26.3 13.05 4.52 8.7 4.48 21.67-.13 38.87m30.38-80.83c-11.95-7.44-27.2-11.16-45.8-11.16-18.83 0-36.26 3.7-52.3 11.1a113.09 113.09 0 0 0-41 32.06c-11.3 13.9-19.43 30.2-24.42 48.8-4.9 18.53-5.5 34.8-1.7 48.73 3.8 13.9 11.8 24.6 23.8 32 12.1 7.46 27.5 11.17 46.4 11.17 18.6 0 35.9-3.74 51.8-11.18 15.9-7.48 29.5-18.1 40.8-32.1 11.3-13.94 19.4-30.2 24.4-48.8 5-18.6 5.6-34.84 1.8-48.8-3.8-13.9-11.7-24.6-23.6-32.05m185.1 40.8 13.3-48.1c-4.5-2.3-10.4-3.5-17.8-3.5-11.9 0-23.3 2.94-34.3 8.9-9.46 5.06-17.5 12.2-24.3 21.14l6.9-25.9-15.07.06h-37l-47.7 176.7h52.63l24.75-92.37c3.6-13.43 10.08-24 19.43-31.5 9.3-7.53 20.9-11.3 34.9-11.3 8.6 0 16.6 1.97 24.2 5.9m146.5 41.1c-4.5 16.5-11.3 29.1-20.6 37.8-9.3 8.74-20.5 13.1-33.5 13.1s-21.9-4.4-26.6-13.2c-4.8-8.85-4.9-21.6-.4-38.36 4.5-16.75 11.4-29.6 20.9-38.5 9.5-8.97 20.7-13.45 33.7-13.45 12.8 0 21.4 4.6 26 13.9 4.6 9.3 4.7 22.2.28 38.7m36.8-81.4c-9.75-7.8-22.2-11.7-37.3-11.7-13.23 0-25.84 3-37.8 9.06-11.95 6.05-21.65 14.3-29.1 24.74l.18-1.2 8.83-28.1h-51.4l-13.1 48.9-.4 1.7-54 201.44h52.7l27.2-101.4c2.7 9.02 8.2 16.1 16.6 21.22 8.4 5.1 18.77 7.63 31.1 7.63 15.3 0 29.9-3.7 43.75-11.1 13.9-7.42 25.9-18.1 36.1-31.9 10.2-13.8 17.77-29.8 22.6-47.9 4.9-18.13 5.9-34.3 3.1-48.45-2.85-14.17-9.16-25.14-18.9-32.9m174.65 80.65c-4.5 16.7-11.4 29.5-20.7 38.3-9.3 8.86-20.5 13.27-33.5 13.27-13.3 0-22.3-4.3-27-13-4.8-8.7-4.9-21.3-.5-37.8 4.4-16.5 11.42-29.4 21.12-38.7 9.7-9.3 21.05-13.94 34.07-13.94 13 0 21.8 4.5 26.4 13.4 4.6 8.93 4.63 21.76.15 38.5zm23.5-87.85-6.73 25.1c-2.9-9.05-8.5-16.25-16.8-21.6-8.4-5.34-18.7-8-31-8-15.1 0-29.68 3.9-43.6 11.7-13.9 7.8-26.1 18.74-36.5 32.9-10.4 14.16-18 30.3-22.9 48.4-4.85 18.17-5.8 34.1-2.9 47.96 2.93 13.8 9.24 24.46 19 31.9 9.74 7.4 22.3 11.14 37.6 11.14 12.3 0 24.05-2.56 35.2-7.7a82.3 82.3 0 0 0 28.33-21.23l-7 26.18h51.9l47.38-176.7h-51.9zm269.87.06.03-.05h-31.9c-1.02 0-1.92.05-2.85.07h-16.55l-8.5 11.8-2.1 2.8-.9 1.4-67.25 93.68-13.9-109.7h-55.08l27.9 166.7-61.6 85.3h54.9l14.9-21.13c.42-.62.8-1.14 1.3-1.8l17.4-24.7.5-.7 77.93-110.5 65.7-93 .1-.06h-.03z"></path>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class=" py-3 bg-navbar">
                    <h5 class="px-3 mb-0 text-white">Summary</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>₹{totalAmount.toFixed(2)}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p class="mb-0"></p>
                          </strong>
                        </div>
                        <span>
                          <strong>₹{totalAmount.toFixed(2)}</strong>
                        </span>
                      </li>
                    </ul>

                    {/* <Link to={"/checkout"}> */}
                    <div className="d-flex justify-content-between align-items-center">
                    <Link to='/form' >
                    Continue shopping
                    </Link>
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="product-btn border-0 text-white rounded-3 p-2 px-3 btn-lg btn-block"
                      onClick={handleCartUpdate}
                    >
                      Go to checkout
                    </button>
                    </div>
                    {/* </Link>  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

    </>
  );
}

export default Addcart;
