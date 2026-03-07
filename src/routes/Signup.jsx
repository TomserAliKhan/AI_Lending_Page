import { useTheme } from "next-themes";
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa6";

import { Link } from "react-router-dom";


const Signup = () => {
  let { theme } = useTheme();
  const [form, setform] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    agree:false
   
  });
  let handleCheck=(e)=>{
    console.log(e.target.value)
  }

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
if(!form.agree){
  alert('read terms and condition')
}
if (form.password.length < 8) {
  alert("password must have more then 8")
}
   
console.log(form);
 
  }
  const [ispasseordShow, setPasseordShow] = useState(true);
  return (
    <div className={`mx-auto pb-9 mt-5 ${theme === "dark" ? "" : "hero-glow-bg"} `}>
      <div className="flex pt-20  flex-col  md:max-w-[650px] shadow-2xl rounded-xl   mx-4 md:mx-auto bg-white  dark:bg-black justify-center pb-5 md:pb-10">
        <div className="text-center max-w-64 md:max-w-[500px] mx-auto">
          <h1 className="text-3xl font-bold py-2">Sign Up</h1>
          <p className="pb-2">Enter your details to create a account</p>

          <Link className="flex items-end justify-center bg-gray-200 dark:bg-gray-500 gap-2  py-2 rounded-2xl my-3">
            <FaGoogle size={"20px"} />
            Signup with Google
          </Link>
          <Link className="flex items-end justify-center bg-gray-200 dark:bg-gray-500 gap-2  py-2 rounded-2xl my-3">
            <BsTwitterX size={"20px"} />
            Sign up with X
          </Link>
        </div>
        <span className="flex mx-auto py-3 justify-center items-center gap-4 w-[80%] ">
          <i className="w-40 bg-gray-300 dark:bg-gray-500 inline-block h-[0.1px]"></i>
          or
          <i className="w-40 bg-gray-300 dark:bg-gray-500 inline-block h-[0.1px]"></i>
        </span>

        <div>
          <form 
           onSubmit={handleSubmit}
          className="flex flex-col  mx-auto max-w-72 md:max-w-[550px] ">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              required
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Your first name"
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
              placeholder="Enter your email address"
              className=" outline-none border border-gray-400 rounded-2xl ps-3 py-2 my-1 mb-3"
            />

            <span className="flex flex-col relative">
              <label htmlFor="pass">Password</label>

              <input
                type={ispasseordShow ? "text" : "password"}
                id="pass"
                required
                placeholder="Enter your password"
                name="password"
                value={form.password}
                  onChange={handleChange}
                className=" outline-none border border-gray-400 rounded-2xl ps-3 py-2 my-1 mb-3 "
              />
              <Link
                onClick={() => setPasseordShow(!ispasseordShow)}
                className="absolute  bottom-[22px] right-4"
              >
                {ispasseordShow ? (
                  <FaEyeSlash size={"20px"} />
                ) : (
                  <FaEye size={"20px"} />
                )}
              </Link>
            </span>

            <span className="text-sm flex items-center py-3 gap-1">
              <input type="checkbox" name="agree" onClick={()=>{
                setform((p)=>({...p,agree:!form.agree}))
              }}   />
              <p>I agreed to</p>
               

              <Link className="text-blue-400  inline-block " to="/policy">
                Term and Condition
              </Link>
            </span>

            <input
              type="submit"
              value="Sign Up"
             
              className="  rounded-2xl bg-blue-600  py-2  mb-3 text-white "
            />
          </form>
          <h2 className="text-center py-4">Already have an account? <Link to='/sign-in' className="text-blue-500">Sign In</Link></h2>
        </div>
    
      </div>
    </div>
  );
};

export default Signup;
