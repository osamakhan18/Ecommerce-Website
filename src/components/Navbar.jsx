import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../../firebase';
import { toast } from 'react-toastify';
import { BsPersonFill } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import 'animate.css';


function Navbar() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Sets user if logged in, or null if logged out
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, [auth]);

  // Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
   toast.success(`LogOut`, { position: "top-right" });
      
      
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <nav className="w-full sticky top-0 left-0 h-18 bg-[#E5E4E2] flex items-center justify-around gap-56" 
    style={{ boxShadow: "3px 3px 2px rgba(2, 23, 220, 0.5)" }}

    >
      {/* Logo */}
      <h1 className="text-3xl"> ☆ 𝓢𝔀𝓲𝓯𝓽 <span className="text-3xl text-[#39bfb4]"> 𝓑𝓾𝔂 ☆</span></h1>

      <div className="w-auto h-auto gap-16 flex justify-around items-center mr-1.5">
        <div className="w-auto h-auto p-1.5 flex items-center justify-around gap-10">
          <Link to="/" className="text-lg font-medium hover:text-[#39bfb4] hover:border-b-2 transition-all duration-600 ease-out">HOME</Link>
          <Link to="/Shop" className="text-lg font-medium hover:text-[#39bfb4] hover:border-b-2 transition-all duration-600 ease-out">SHOP</Link>
          <Link to="/Contact" className="text-lg font-medium hover:text-[#39bfb4] hover:border-b-2 transition-all duration-600 ease-out">CONTACT</Link>
          <Link to="/Cart" className="text-lg font-medium hover:text-[#39bfb4] transition-all duration-600 ease-out">
            <MdOutlineShoppingCartCheckout className="w-13 h-10" />
          </Link>
        </div>

        <div className="w-auto h-auto  flex justify-between items-center">
          {/* Conditional rendering for Signup/Login/Logout */}
          {!user ? (
            <>
              <Link to="/SignUp" className="text-lg font-medium hover:text-[#39bfb4] transition-all duration-600 ease-out 
              flex justify-between items-center gap-x-2">
              <BsPersonFill />
              Sign Up</Link>
              {/* <Link to="/Login" className="text-lg font-medium hover:text-[#39bfb4] transition-all duration-600 ease-out">LOGIN</Link> */}
            </>
          ) : (
            <button onClick={handleLogout} className="text-lg font-medium hover:text-[#39bfb4] transition-all duration-600 ease-out
             flex justify-between items-center gap-x-2
            ">
              <RiLogoutCircleLine />
              LOGOUT</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
