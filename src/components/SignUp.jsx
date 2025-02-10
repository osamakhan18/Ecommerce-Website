import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';
import { toast } from 'react-toastify';

function SignUp() {
  const auth = getAuth(app);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Sign Up Function
  const handleSignUp = async () => {
    if (email === "") {
      alert("Enter email and Password");
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential, "Signup successful");
        
        toast.success("SignUp successfully", {
          position: "top-right",
          autoClose: 3000, // Auto close after 3s
        });

        setSuccess("Signup successful!");
        setError(null);
        setEmail('');
        setPassword('');
      } catch (error) {
        console.error("Signup error:", error.message);
        setError(error.message);
        setSuccess(null);
      }
    }
  };

  // Login Function
  const handleLogin = async () => {
    if (email === "") {
      alert("Enter Email and Password");
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential, "Login successful");

        toast.success("Login successfully", {
          position: "top-right",
          autoClose: 3000,
        });

        setError(null);
      } catch (error) {
        console.error("Login error:", error.message);
        setError(error.message);
        setSuccess(null);
      }
    }
  };

  return (
    <div className='w-full h-screen bg-[#E5E4E2] flex justify-center items-center'>
      <div className='w-[50%] h-[50%] flex justify-center items-center flex-col gap-y-7 rounded-2xl'
        style={{ boxShadow: "5px 7px 3px rgba(2, 23, 220, 0.5)" }}>
        <span className='text-3xl font-bold border-b-2'>SignUp / Login</span>
        <div className='w-[70%] h-[50%] flex justify-between items-center flex-col'>
          <div className='w-[50%] h-9 flex justify-around items-center gap-x-16'>
            <label className='text-xl'>Email:</label>
            <input
              type="email"
              className='border-b-2 outline-none focus:border-b-2'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='w-[50%] h-9 flex justify-around items-center gap-x-7'>
            <label className='text-xl'>Password:</label>
            <input
              type="password"
              className='border-b-2 outline-none focus:border-b-2'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/* Success/Error Messages */}
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        {/* Buttons for Signup and Login */}
        <button onClick={handleSignUp} className='px-4 py-2 bg-blue-500 text-white rounded text-xl'>
          Sign Up
        </button>
        <button onClick={handleLogin} className='px-5 py-2 bg-green-500 text-white rounded text-xl mb-3'>
          Login
        </button>
      </div>
    </div>
  );
}

export default SignUp;
