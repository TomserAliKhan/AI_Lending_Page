import React, { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { saly } from "../../../../assets";
import { useSelector } from "react-redux";
import { PasswordChangeForm } from "./PasswordChangeForm";

import { successNotify } from "../../../../assets/datas";


const Profile = () => {
  const [DMassage, setDMassage] = useState(true);
  const user=useSelector((state)=>state.auth.user[0])
  let [FirstName,LastName]=user.name.split(" ")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isPasswordChange, setPasswordChange] = useState(false)

 
  
  const changeTwoFactor=()=>{
    console.log(user.isTwoFactor);

    successNotify("Two-factor authentication status updated.");
  }
  
  

  
  return (
    <>
     
      {
        isFormOpen? <div className="fixed top-0 z-50 flex justify-center items-center h-screen w-full bg-gray-800/50 backdrop-blur-lg">  
          <EditAccount  setForm={setIsFormOpen}  isFormOpen={isFormOpen} user={user}/></div>:''
      }
      {
       isPasswordChange ? <div className="fixed top-0 z-50 flex justify-center items-center h-screen w-full bg-gray-800/50 backdrop-blur-lg">  
          <PasswordChangeForm isPasswordChange={isPasswordChange} setPasswordChange={setPasswordChange} /></div>:''
      }
      <div className="w-screen flex flex-col gap-5 bg-[#f9fafb] dark:bg-black lg:p-9 p-4">
        {DMassage ? (
          <div className="w-full text-white dashboard-gradient  rounded-xl lg:p-8 p-5 py-9 lg:py-9  lg:my-3 relative">
            <h1 className="text-xl lg:text-3xl font-bold  pb-3">
              Welcome to AI Agent
            </h1>
            <p className="text-sm lg:text-md">
              Create Content Smarter, Faster, and Effortlessly with AI Agent.
            </p>
            <button className="border rounded-full mt-5 p-2 lg:p-3 hover:bg-white hover:text-blue-300 lg:text-lg px-4 lg:px-7">
              {" "}
              Learn more
            </button>

            <img
              className=" hidden lg:block absolute top-0 right-0"
              src={saly}
              alt="ddd"
            />
            <span
              className=" absolute top-3 right-3 bg-white rounded-full text-gray-500 h-7 w-7 flex justify-center items-center cursor-pointer "
              onClick={() => setDMassage(!DMassage)}
            >
              <BiX size={"22px"} />
            </span>
          </div>
        ) : (
          ""
        )}

        <div className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl pb-6 font-bold">My Profile</h2>
          <div className="border dark:border-none rounded-xl p-5">
            <span className="flex justify-between items-center pt-1 ">
              <p className=" font-semibold text-xl">Personal Information</p>

              <button
               onClick={()=>setIsFormOpen(!isFormOpen)}
              className="flex md:text-lg  items-center gap-2 border dark:border-none rounded-2xl h-10 px-2 hover:bg-gray-400 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.0909 2.78198C14.2122 1.9033 12.7876 1.9033 11.9089 2.78198L4.57499 10.1159C4.26658 10.4243 4.05446 10.8157 3.96443 11.2425L3.31206 14.3351C3.25973 14.5832 3.33629 14.8409 3.51558 15.0202C3.69487 15.1995 3.95262 15.2761 4.20071 15.2237L7.2933 14.5714C7.72007 14.4813 8.11147 14.2692 8.41988 13.9608L15.7538 6.62687C16.6325 5.74819 16.6325 4.32357 15.7538 3.44489L15.0909 2.78198ZM12.9696 3.84264C13.2625 3.54975 13.7373 3.54975 14.0302 3.84264L14.6932 4.50555C14.986 4.79845 14.986 5.27332 14.6932 5.56621L14.0437 6.21565L12.3201 4.49208L12.9696 3.84264ZM11.2595 5.55274L5.63565 11.1766C5.53285 11.2794 5.46214 11.4098 5.43213 11.5521L5.01733 13.5185L6.9837 13.1037C7.12595 13.0737 7.25642 13.0029 7.35922 12.9001L12.9831 7.27631L11.2595 5.55274Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Edit
              </button>
            </span>

            {/* name */}
            
              <span className="flex text-lg justify-between py-6 max-w-md">
                <span>
                  <h2 className="text-gray-400 ">First Name</h2>
                  <h2>{FirstName}</h2>
                </span>

                <span>
                  <h2 className="text-gray-400">Last Name</h2>
                  <h2>{LastName}</h2>
                </span>
              </span>
             

          
           

            <div className="pb-2 text-lg ">
              <h2 className="text-gray-400">Email address</h2>
               <p>{user.email}</p>
            </div>
           
          </div>
        </div>



        <div className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg">
          <h1 className="text-xl font-semibold ">Security</h1>

          <div className="border dark:border-none mt-5 rounded-xl p-5">
            <span className="flex items-center justify-between">
              <h1 className="text-lg w-1/2 font-bold ">Two factor authentication</h1>
              <span className={`${user?.isTwoFactor ? 'dark:text-green-300 dark:bg-black  bg-green-200 text-black ':'text-gray-500 bg-gray-300 dark:bg-black dark:text-white'} rounded-xl text-sm py-1 w-[70px]  text-center  text-black  `}>{user?.isTwoFactor ?'Enabled':'Disabled' }</span>
            </span>
 
          <p className="py-5 dark:text-gray-400 text-gray-700">Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</p>

            <button
            onClick={changeTwoFactor}
            className="border dark:border-black py-2 px-5 rounded-full hover:bg-gray-100 dark:hover:bg-black text-sm  shadow-md dark:text-gray-400 dark:hover:text-white
            ">  {`${user?.isTwoFactor ? 'Disable':'Enable'} Tow-factor authentication`}</button>

            
          </div>


          <div className="border rounded-lg mt-5 p-5">
            <h1 className="text-xl font-semibold">Change your Password</h1>
            <button onClick={()=>setPasswordChange(!isPasswordChange)}
            className="border flex px-5 gap-2 mt-5 dark:border-black py-3 rounded-full hover:bg-gray-100 dark:hover:bg-black text-sm  shadow-md dark:text-gray-400 dark:hover:text-white
            "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0909 2.78198C14.2122 1.9033 12.7876 1.9033 11.9089 2.78198L4.57499 10.1159C4.26658 10.4243 4.05446 10.8157 3.96443 11.2425L3.31206 14.3351C3.25973 14.5832 3.33629 14.8409 3.51558 15.0202C3.69487 15.1995 3.95262 15.2761 4.20071 15.2237L7.2933 14.5714C7.72007 14.4813 8.11147 14.2692 8.41988 13.9608L15.7538 6.62687C16.6325 5.74819 16.6325 4.32357 15.7538 3.44489L15.0909 2.78198ZM12.9696 3.84264C13.2625 3.54975 13.7373 3.54975 14.0302 3.84264L14.6932 4.50555C14.986 4.79845 14.986 5.27332 14.6932 5.56621L14.0437 6.21565L12.3201 4.49208L12.9696 3.84264ZM11.2595 5.55274L5.63565 11.1766C5.53285 11.2794 5.46214 11.4098 5.43213 11.5521L5.01733 13.5185L6.9837 13.1037C7.12595 13.0737 7.25642 13.0029 7.35922 12.9001L12.9831 7.27631L11.2595 5.55274Z" fill="currentColor"></path>
                    </svg>
                    <p>Change Password</p>
                    </button>

          </div>


        
        </div>
      </div>
    </>
  );
};

export default Profile;


export const EditAccount =({setForm,isFormOpen,user}) => {
  
 let [FirstName,LastName]=user.name.split(" ")
const [form, setform] = useState({
    firstName:FirstName,
    lastName:LastName,
    email:user.email
  })
  let handlechange=(e)=>{

    let {name,value}=e.target
   setform((prev)=>({...prev,
      [name]:value,
   }))
  }
  let handleSave=()=>{
    
    console.log(form);

    
    
  }

  
  return (
    <>
   

  
        <div 
 className= " absolute mx-auto bg-white  dark:bg-black rounded-3xl text-left overflow-hidden sm:w-[590px]   p-5 sm:p-12">
          <div className="absolute top-0 right-0 pt-4 pr-4">

            <button
            onClick={()=>{setForm(!isFormOpen)}}
            type="button" className="bg-gray-100 dark:bg-white/5 dark:text-gray-400 hover:bg-gray-200 rounded-full size-9 inline-flex items-center justify-center text-gray-500">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.09467 6.15615C4.80178 5.86325 4.80178 5.38838 5.09467 5.09549C5.38756 4.80259 5.86244 4.80259 6.15533 5.09549L9.99919 8.93934L13.8429 5.0956C14.1358 4.8027 14.6107 4.8027 14.9036 5.0956C15.1965 5.38849 15.1965 5.86336 14.9036 6.15626L11.0598 10L14.9036 13.8437C15.1965 14.1366 15.1965 14.6115 14.9036 14.9044C14.6107 15.1973 14.1358 15.1973 13.8429 14.9044L9.99919 11.0607L6.15533 14.9045C5.86244 15.1974 5.38756 15.1974 5.09467 14.9045C4.80178 14.6116 4.80178 14.1368 5.09467 13.8439L8.93853 10L5.09467 6.15615Z" fill="#667085"></path>
              </svg>
            </button>
          </div>
          <div className="mt-3 text-left w-full">
            <h3 className="text-[30px] mb-2 leading-[38px] font-bold text-gray-800 dark:text-white/90" id="modal-title">
              Edit Account Info
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              You can edit your account information from here.
            </p>
            <div className="mt-6">
              <form className="space-y-5">
                <div className="grid gap-5">
                  <div>
                    <label for="first-name" className="block text-sm dark:text-gray-400 font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input type="text" name="firstName" 
                      value={form.firstName}
                      onChange={handlechange}
                      id="first-name" autocomplete="given-name" className="border outline-none w-full text-sm dark:text-white/90 dark:placeholder:text-white/90 dark:border-gray-700 text-gray-800 placeholder:text-sm placeholder:text-gray-400 focus:border-primary-300 dark:focus:border-primary-500 focus:outline-0 focus:ring-3 focus:ring-primary-300/20 text-left h-12 shadow-theme-xs border-gray-300 rounded-full px-5 py-2.5"/>
                    </div>
                  </div>
                  <div>
                    <label for="last-name" className="block text-sm dark:text-gray-400 font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input type="text" name="lastName" 
                      onChange={handlechange}
                      value={form.lastName}
                      id="last-name"  className="border w-full text-sm  outline-none dark:text-white/90 dark:placeholder:text-white/90 dark:border-gray-700 text-gray-800 placeholder:text-sm placeholder:text-gray-400 focus:border-primary-300 dark:focus:border-primary-500 focus:outline-0 focus:ring-3 focus:ring-primary-300/20 text-left h-12 shadow-theme-xs border-gray-300 rounded-full px-5 py-2.5"/>
                    </div>
                  </div>

                  <div>
                    <label for="email" className="block text-sm dark:text-gray-400 font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input id="email" name="email" 
                      onChange={handlechange}
                      
                      type="email" autocomplete="email" value={form.email} className="border w-full text-sm dark:text-white/90 dark:placeholder:text-white/90 dark:border-gray-700 text-gray-800 placeholder:text-sm 
                     outline-none placeholder:text-gray-400 focus:border-primary-300 dark:focus:border-primary-500 focus:outline-0 focus:ring-3 focus:ring-primary-300/20 text-left h-12 shadow-theme-xs border-gray-300 rounded-full px-5 py-2.5"/>
                    </div>
                  </div>
                </div>
              </form>
              <div className="space-x-3 mt-6">
                <button
                onClick={()=>handleSave()}

                type="button" className="text-white dark:bg-white/5 text-sm font-medium transition-colors hover:bg-gray-800 py-3 px-6 rounded-full border-gray-200 bg-gray-700">
                  Save Changes
                </button>
                <button
                onClick={()=>{setForm(!isFormOpen)}}
                type="button" className="text-gray-700 text-sm font-medium py-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-6 rounded-full border-gray-200 border">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        
  </>
  )
}


