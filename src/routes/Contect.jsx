

 
    import { useTheme } from "next-themes";
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa6";

import { Link } from "react-router-dom";


const Contect = () => {
  let { theme } = useTheme();
  const [form, setform] = useState({
    firstName:'',
    lastName:'',
    email:'',
    message:''

   
  });

  let handleChange=(e)=>{

    let {name,value}=e.target

setform((prev)=>({
    ...prev,
    [name]:value
   

}))
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
if (!form.email.includes('@')) {
  alert("Enter valid email address")
}

   
console.log(form);
 
  }

  return (
    <div className={`mx-auto pb-9 pt-14  mt-5 ${theme === "dark" ? "bg-gray-500" : "hero-glow-bg"} `}>
      <div className="flex  flex-col  md:max-w-[650px] shadow-2xl rounded-xl pt-5  mx-4 md:mx-auto bg-white  dark:bg-black justify-center pb-5 md:pb-10">
        <div className="text-center max-w-64 md:max-w-[500px] mx-auto">
          <h1 className="text-3xl font-bold text-center py-2">Need any Help ? Get in touch👋</h1>
          <p className="pb-2">Open a ticket, we wil get back to you ASAP</p>

          
       
        </div>
        <span className="flex mx-auto py-3 justify-center items-center gap-4 w-[80%] ">
          <i className="w-40 bg-gray-300 dark:bg-gray-500 inline-block h-[0.1px]"></i>
          x
          <i className="w-40 bg-gray-300 dark:bg-gray-500 inline-block h-[0.1px]"></i>
        </span>

        <div>
          <form 
           onSubmit={handleSubmit}
          className="flex flex-col max-w-52  mx-auto sm:max-w-72 md:max-w-[550px] ">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              required
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Jhamse"
              className="outline-none border border-gray-400 rounded-2xl ps-3 py-2 my-1 mb-3"
            />

            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              required
              name="lastName"
              value={form.lastName}
                onChange={handleChange}
              placeholder="Your last name"
              className=" outline-none border border-gray-400 rounded-2xl ps-3 py-2 my-1 mb-3"
            />

            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              required
              name="email"
              value={form.email}
                onChange={handleChange}
              placeholder="example@gmail.com"
              className=" outline-none border border-gray-400 rounded-2xl ps-3 py-2 my-1 mb-3"
            />
            <label htmlFor="text">Message</label>
            <textarea type="text"
              id="email"
              required
              name="message"
              value={form.message}
                onChange={handleChange}
              placeholder="Type your message"
              className=" outline-none border h-40 border-gray-400 rounded-2xl ps-3 py-2 my-1 mb-3"
            />

            
         

            <input
              type="submit"
              value="Send Message"
             
              className=" mt-5 rounded-2xl bg-blue-600  py-2  mb-3 text-white "
            />
          </form>
       
        </div>
    
      </div>
    </div>


    
    
  )
}

export default Contect