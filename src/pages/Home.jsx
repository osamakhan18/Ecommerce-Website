import React, { useEffect, useState } from 'react';
import design from '../assets/images/design_10.png';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { toast } from 'react-toastify';

function Home() {

  const [product, setProduct] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json(); 
        console.log(data)
        setProduct(data);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchProduct(); // Don't forget to call fetchProduct to trigger the API request
  }, []);

  const handleAddCard = (product) => {
    dispatch(addToCart(product)); // Correctly dispatch with the product
    toast.success(` added to cart!`, {
      position: "top-right",
    });
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#E5E4E2] ">
        <div className="h-full flex justify-center items-center flex-col" style={{ width: "50%" }}>
          <div className="w-auto h-auto space-y-3 flex items-start flex-col">
            <h1 className="font-medium text-2xl tracking-wider">Trade-in-offer</h1>
            <h1 className="font-bold text-4xl tracking-widest">Super value deals</h1>
            <h1 className="font-bold text-4xl text-[#39bfb4] tracking-widest">On all products</h1>
            <h4 className="font-medium text-lg tracking-widest">Save more with coupons & and 50% off!</h4>
          </div>

          <div className="mt-10 border-b-2 border-[#39bfb4] rounded px-1 ">
            <span className="font-mono font-extrabold text-3xl text-[#39bfb4]">Shop Now</span>
          </div>
        </div>

        <div className=" flex justify-center items-start  h-[90%] mb-8" style={{ width: "44%" }}>
          <div className="object-cover overflow-hidden" style={{ width: "70%", height: "95%" }}>
            <img
              src={design}
              alt="Design"
              className="object-cover  "
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div> 

      <div className='w-full h-auto'>
        <div className='w-full h-28 flex justify-center items-center  bg-[#E5E4E2]'>
          <h1 className='text-5xl border-b-5 border-[#39bfb4] rounded-lg '> 𝔼𝕩𝕡𝕝𝕠𝕣𝕖 𝕋𝕙𝕖 <span className='text-5xl '>ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝕤</span></h1>
        </div>

        <div className="w-full h-auto flex-wrap  bg-[#E5E4E2] flex justify-around items-center">
          {product.map((item) => (
            <div
              key={item.id}
              className="w-90 h-auto p-6  flex flex-wrap justify-evenly items-center flex-col mt-5 mb-5 rounded-2xl"
              style={{ boxShadow: "3px 3px 3px rgba(2, 23, 220, 0.5)" }}
            >
              {/* Fixing Image Source */}
              <img
                src={item.image} // Corrected to `image` instead of `images`
                alt={item.title}
                className="w-50 h-50 object-contain  bg-white rounded-2xl p-3.5"
                style={{ boxShadow: "3px 3px 3px rgba(2, 23, 220, 0.5)" }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150"; 
                }}
              /> <br />

              {/* Fixing Title to Display Only 3 Words */}
              <h2 className="text-lg font-semibold text-center ">
                {item.title.split(" ").slice(0, 3).join(" ")}
              </h2> <br />

              {/* Fixing Price Display */}
              <p className="text-gray-600 font-medium ">${item.price}</p><br />

              <div className='w-full h-full flex justify-between items-center'>
                <span className='text-lg text-yellow-500 shadow-amber-400 '>⭐⭐⭐⭐⭐</span>
                <MdOutlineShoppingCartCheckout className='w-13 h-10' 
                  onClick={() => { handleAddCard(item) }}  // Pass `item` as an argument
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
