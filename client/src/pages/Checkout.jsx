// import React, { useState, useEffect } from "react";
// import "./App.css";

// const ProductDisplay = () => (
//   <section>
//     <div className="product">
//       <img
//       //NEED SOURCE TO DYNAMICALLY CHANGE TO IMAGE
//         src=""
//         alt="generated image"
//       />
//       <div className="description">
//       <h3>Generated Image</h3>
// {/* NEED TO ADD IN IMAGE DESCRIPTION DYNAMICALLY */}
//       <h4></h4>
// {/* NEED TO ADD IN PRICE DYNAMICALLY */}
//       <h5></h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
// );

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function Checkout() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }
