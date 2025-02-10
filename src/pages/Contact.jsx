import React from 'react'

function Contact() {
  return (
    <>
    <div className='w-full h-screen  bg-[#E5E4E2] flex justify-evenly items-center  ' >

      <div className='w-2xl  h-[60%]   flex justify-center items-center flex-col gap-y-9 rounded-2xl'
      // style = {{height:"60%"}}
      style={{ boxShadow: "5px 7px 3px rgba(2, 23, 220, 0.5)" }}

      >
        <span className='text-3xl text-[#39bfb4] self-start ml-6 border-b-3 rounded-lg'># Contact Us</span>



        <div className='w-[60%]   flex justify-around items-center '>
          <label htmlFor="name " className='text-xl'>Name:</label> 
          <input type="text"
              className='border-b-2 border-gray-500 px-5  outline-none placeholder-shown:border-b-2 focus:border-b-2'

          placeholder=' Name'
        
         />
        </div>

        {/* email */}
        <div className='w-[60%]   flex justify-around items-center '>
          <label htmlFor="name " className='text-xl'>Email:</label> 
          <input type="email"
         className='border-b-2 border-gray-500 px-5  outline-none placeholder-shown:border-b-2 focus:border-b-2'

          placeholder=' Email'
        
         />
        </div>

        <div className='w-[60%]   flex justify-around items-center '>
          <label htmlFor="name " className='text-xl'>Subject:</label> 
          <input type="text"

           className='border-b-2 border-gray-500 px-5  outline-none placeholder-shown:border-b-2 focus:border-b-2'

           placeholder='Subject'
        
         />
        </div>

        <div className='w-[60%]   flex justify-around items-center '>
          <label htmlFor="name " className='text-xl'>Message:</label> 
          <input type="text"
          placeholder='Message'
         className='border-b-2 border-gray-500 px-5  outline-none placeholder-shown:border-b-2 focus:border-b-2'

          // placeholder='Enter your name'
        
         />
        </div>

       <button className='px-8 py-2  border rounded bg-blue-600 text-white'>
        Send
       </button>



      </div>

    </div>
    </>
  )
}

export default Contact