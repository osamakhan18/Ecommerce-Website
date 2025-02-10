import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

function Shop() {
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [selectedProduct, setSelectedProduct] = useState(null); // Store selected product for modal
  const [selectedSize, setSelectedSize] = useState(""); // Store selected size
  const [quantity, setQuantity] = useState(1); // Store quantity
  const [showOrderForm, setShowOrderForm] = useState(false); // State to track if the order form is shown

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productResponse = await fetch("https://fakestoreapi.com/products");
        const products = await productResponse.json();
        setAllProducts(products);
        setFilteredProducts(products); // Initially show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter function to show products based on category
  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  // Open Modal
  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setSelectedSize(""); // Reset size selection
    setQuantity(1); // Reset quantity
  };

  // Close Modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Handle Place Order button click
  const handlePlaceOrderClick = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    setShowOrderForm(true); // Show the order form
    // toast.success(`Order Placed`, { position: "top-right" });
    closeModal();
  };

  return (
    <>
      <div className="w-full h-screen bg-[#E5E4E2]   ">

        <div className="w-full h-[340px] bg-[#E5E4E2]  flex justify-center items-center ">
          <div className="w-[700px] h-[300px] flex justify-center  animated-bg rounded-xl mb-5"
            style={{ boxShadow: "5px 6px 3px rgba(0,0,0,0.4)" }}
          ></div>
        </div>

        {/* BUTTONS */}
        <div className="w-full h-auto bg-[#E5E4E2] p-5 flex justify-center items-center gap-5 flex-col">
          <span className="text-3xl font-bold border-b-4 rounded-lg px-5 py-4">Categories</span>
          <div className="w-full h-auto flex justify-center items-center gap-x-9">
            <button className="border px-4 py-2 text-xl bg-gray-800 text-white rounded-xl" onClick={() => filterProducts("all")}>ALL</button>
            <button className="border px-4 py-2 text-xl bg-gray-800 text-white rounded-xl" onClick={() => filterProducts("men's clothing")}>Men</button>
            <button className="border px-4 py-2 text-xl bg-gray-800 text-white rounded-xl" onClick={() => filterProducts("women's clothing")}>Women</button>
            <button className="border px-4 py-2 text-xl bg-gray-800 text-white rounded-xl" onClick={() => filterProducts("jewelery")}>Jewelry</button>
            <button className="border px-4 py-2 text-xl bg-gray-800 text-white rounded-xl" onClick={() => filterProducts("electronics")}>Electronics</button>
          </div>
        </div>

        {/* DISPLAY PRODUCTS */}
        <div className="w-full h-auto flex flex-wrap bg-[#E5E4E2] justify-around items-center">
          {filteredProducts.map((item) => (
            <div key={item.id} className="w-64 h-auto p-6 flex flex-col items-center mt-5 mb-5 rounded-2xl shadow-lg bg-white"
            style={{ boxShadow: "3px 3px 3px rgba(2, 23, 220, 0.5)" }}
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain bg-white rounded-2xl p-3.5"
                onError={(e) => { e.target.src = "https://via.placeholder.com/150"; 
                  style={boxShadow: "3px 3px 3px rgba(2, 23, 220, 0.5)" }
                }}
              />
              <br />

              {/* Product Title */}
              <h2 className="text-lg font-semibold text-center">
                {item.title.split(" ").slice(0, 3).join(" ")}
              </h2>
              <br />

              {/* Price */}
              <p className="text-gray-600 font-medium">${item.price}</p>
              <br />

              {/* Buy Button */}
              <button
                className="px-12 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={() => handleBuyClick(item)}
              >
                Buy
              </button>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProduct && !showOrderForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#E5E4E2] bg-opacity-50">
       <div className="bg-white p-6 rounded-lg w-96 shadow-lg w-full h-auto flex justify-around items-center "
              style={{ boxShadow: "3px 3px 3px rgba(2, 23, 220, 0.5)" }}>
              {/* Close Button */}
              <button className="absolute top-4 right-4 text-red-500 text-lg" onClick={closeModal}>
                ✖
              </button>

              {/* Product Image */}
              <img src={selectedProduct.image} alt={selectedProduct.title} className="w-70 h-70 rounded "
                style={{ boxShadow: "3px 3px 3px rgba(2, 23, 220, 0.5)" }}
              />

              <div className="w-2xl h-auto flex justify-between items-center"
                style={{ boxShadow: "5px 5px 4px rgba(2, 23, 220, 0.5)" }}>
                <div className="flex justify-center items-center flex-col">
                  <h2 className="text-xl font-bold text-center mt-2">{selectedProduct.title}</h2>
                  <p className="text-center text-gray-600 mt-2 font-semibold">${selectedProduct.price}</p>

                  {/* Size and Quantity Inputs */}
                  <select className="w-32 p-2 border rounded-md" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    <option value="">Choose Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                  <input type="number" min="1" className="w-32 p-2 mt-2 border rounded-md"
                    value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                  <br />

                  {/* Product Rating */}
                  <p className="text-gray-600 text-center mt-1">
                    <span className="flex justify-start text-2xl font-bold ml-2">Product Detail
                      <br /> <br /></span>{selectedProduct.description}</p>
                  <p className="text-yellow-500 mt-1">⭐ {selectedProduct.rating?.rate} ({selectedProduct.rating?.count} Reviews)</p>

                  {/* Place Order Button */}
                  <button
                    className="mt-4 w-40 bg-gray-800 text-white py-2 mb-4 rounded-lg hover:bg-blue-700"
                    onClick={handlePlaceOrderClick}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Form */}
        {showOrderForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#E5E4E2] bg-opacity-50">
            {/* Close Button for Form */}
            <button className="absolute top-4 right-4 text-red-500 text-lg" onClick={() => setShowOrderForm(false)}>
              ✖
            </button>

            <div className="bg-white p-6 rounded-lg w-96 shadow-lg"
            style={{ boxShadow: "5px 5px 4px rgba(2, 23, 220, 0.5)" }}

            >
              <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
              <form className="space-y-4">
                <label htmlFor="">Name </label>
                <input type="text" placeholder="First Name" className="w-full p-2 border rounded-md" required />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Last Name" className="w-full p-2 border rounded-md" required />
              <label htmlFor="">Phone</label>
                <input type="number" placeholder="Phone Number" className="w-full p-2 border rounded-md" required />
                <label htmlFor="">Card Holder name</label>
                <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" required />
                <label htmlFor="">Card No</label>
                <input type="number" placeholder="Phone Number" className="w-full p-2 border rounded-md" required />
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Shop;
