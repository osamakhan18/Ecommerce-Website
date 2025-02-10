import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart } from "../Store/Slices/CartSlice";
import { removeFromCart } from "../Redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cartData); // Get cart items from Redux
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen p-5 bg-[#E5E4E2] ">
      <h1 className="text-3xl font-bold mb-4 flex justify-center items-center rounded-xl ">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-4xl  flex justify-center items-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md  "
               style={{ boxShadow: "5px 5px 4px rgba(2, 23, 220, 0.5)" }}

            >
             <div className="w-xl h-auto flex justify-evenly items-center  ">
             <img
                src={item.image}
                alt={item.title}
                className="w-36 h-30 object-cover rounded-xl bg-white "
                // style={{ boxShadow: "5px 5px 4px rgba(2, 23, 220, 0.5)" }}

              />
              <div className="  w-48 h-auto ">
                <h2 className="text-lg font-semibold"> {item.title.split(" ").slice(0, 3).join(" ")}  </h2>
                <p className="text-gray-600">${item.price}</p>
              </div>

             </div>
              <button
                onClick={() => dispatch(removeFromCart(item))} // Dispatch action
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
