import { useTheme } from "next-themes";

import logoBlack from "/logo-black.svg";
import logoWhite from "/logo-white.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownArrow from "../utils/DropdownArrow";
import { FaRegMoon } from "react-icons/fa";
import { RiSunLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { navdata } from "../assets/datas";
import { useSelector } from "react-redux";

const Navebar = () => {
  const [hamburger, sethamburger] = useState(false);
  const [leftHumburger, setLeftHumburger] = useState(false)

  const { theme, setTheme } = useTheme();
  let isloggedIn=useSelector((state)=>state.auth.isLoggedIn)
  let userData=useSelector((state)=>state.auth.user)

 


const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  

  let logo = theme === "dark" ? logoWhite : logoBlack;

  return (
    <>
      <nav
        className="flex font-lato z-50 bg-white dark:bg-gray-800  px-5 sticky top-0 w-full items-center h-[70px] ps-5 
      border-b-[1px] border-gray-300 dark:border-gray-500
      justify-between "
      >
      

        {/* logo */}
        <div className=" cursor-pointer ">
          <Link to="/">
            <img className="h-25 w-25" src={logo} alt="logo" />
          </Link>
        </div>

        {/* computer menue center */}

        <section className=" lg:flex hidden lg:basis-[400px] lg:h-5 cursor-pointer lg:text-sm font-lato items-centers gap-7 justify-center lg:justify-around">
          {navdata.map((item, index) => {
            return (
              <div key={index}>
                {item.subdata && item.subdata.length > 0 ? (
                  <DropdownArrow label={item.label} data={item.subdata} />
                ) : (
                  <Link
                    className=" cursor-pointer lg:hover:text-blue-400"
                    to={item.link}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </section>


        
        <div className="flex items-center gap-7 pr-5 lg:text-sm">
               {/* theme */}
          <span className="h-10 dark:border-none border rounded-full  hover:bg-gray-400/10 w-10 flex justify-center">
       
            {theme == "dark" ? (
              <button onClick={() => setTheme("light")}>
                <RiSunLine size={"25px"} />
              </button>
            ) : (
              <button onClick={() => setTheme("dark")}>
                <FaRegMoon size={"20px"} />
              </button>
            )}
          </span>
          {/* humbarger */}
          <span className={`${isloggedIn ?'hidden':'block '}`}>
            {hamburger ? (
              <RxCross2
                size={"30px"}
                onClick={() => sethamburger(false)}
                className="text-2xl lg:hidden block"
              />
            ) : (
              <RxHamburgerMenu
                onClick={() => sethamburger(true)}
                size={"30px"}
                className="text-2xl lg:hidden block"
              />
            )}
</span>
            {/* before login & after */}
           {!isloggedIn  ?  <div className="lg:flex hidden justify-between items-center h-full w-auto gap-4">
              <Link
                className="cursor-pointer lg:hover:text-blue-400"
                to={"/sign-in"}
              >
                Sign In
              </Link>

              <Link
                to={"/sign-up"}
                className=" text-md p-3 tx-4 rounded-[40px]  text-white bg-[#8676ff]"
              >
                Get Started Free
              </Link>
            </div> :<div>
              <button className=" h-11 w-11 cursor-pointer" onClick={()=>setIsUserMenuOpen(prev=>!prev)} ><img  src={userData[0]?.avtar} alt="avtar" /></button>
              
              </div>}
          
            <span onClick={()=>sethamburger((prev)=>!prev)} className={`${isloggedIn?'block lg:hidden':'hidden'}  border border-gray-500 rounded-full h-10 w-10 flex justify-center items-center`}>
                <svg class="size-7" width="32" height="32" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                <path d="M6.3125 13.7558C5.346 13.7559 4.5625 12.9723 4.5625 12.0059V11.9959C4.5625 11.0294 5.346 10.2458 6.3125 10.2458C7.279 10.2458 8.0625 11.0294 8.0625 11.9958V12.0058C8.0625 12.9723 7.279 13.7558 6.3125 13.7558Z" fill="currentColor"></path>
                <path d="M18.3125 13.7558C17.346 13.7558 16.5625 12.9723 16.5625 12.0058V11.9958C16.5625 11.0294 17.346 10.2458 18.3125 10.2458C19.279 10.2458 20.0625 11.0294 20.0625 11.9958V12.0058C20.0625 12.9723 19.279 13.7558 18.3125 13.7558Z" fill="currentColor"></path>
                <path d="M10.5625 12.0058C10.5625 12.9723 11.346 13.7558 12.3125 13.7558C13.279 13.7558 14.0625 12.9723 14.0625 12.0058V11.9958C14.0625 11.0294 13.279 10.2458 12.3125 10.2458C11.346 10.2458 10.5625 11.0294 10.5625 11.9958V12.0058Z" fill="currentColor"></path>
              </svg>
            </span>

        </div>

          <div  className={` ${isUserMenuOpen?'block':'hidden'}  fixed h-screen w-screen  right-0 top-[70px] flex `}>
            <div onClick={()=>setIsUserMenuOpen(false)} className="bg-transparent w-full left-0 h-screen  ">

            </div>
            <div  className={`  bg-white dark:bg-black rounded-lg text-black dark:text-white w-72 absolute right-6 shadow-2xl  px-5 py-5  `}>
             <p className="  pb-1  ">{userData[0].name}</p>
             <p className="pb-6">{userData[0].email}</p>


            <span className="flex flex-col gap-3 ">

          
              <Link className="flex  gap-4 rounded-xl ps-2 hover:bg-gray-100 py-2 dark:hover:text-white dark:hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75211 6.7963C8.75211 5.3555 9.92011 4.1875 11.3609 4.1875C12.8017 4.1875 13.9697 5.3555 13.9697 6.7963C13.9697 8.2371 12.8017 9.4051 11.3609 9.4051C9.92011 9.4051 8.75211 8.2371 8.75211 6.7963ZM11.3609 2.6875C9.09168 2.6875 7.25211 4.52707 7.25211 6.7963C7.25211 9.06553 9.09168 10.9051 11.3609 10.9051C13.6301 10.9051 15.4697 9.06553 15.4697 6.7963C15.4697 4.52707 13.6301 2.6875 11.3609 2.6875ZM9.81431 12.208C6.38418 12.208 3.60352 14.9887 3.60352 18.4188V18.7367C3.60352 19.1509 3.9393 19.4867 4.35352 19.4867C4.76773 19.4867 5.10352 19.1509 5.10352 18.7367V18.4188C5.10352 15.8171 7.21261 13.708 9.81431 13.708H12.9088C15.5105 13.708 17.6196 15.8171 17.6196 18.4188V18.7367C17.6196 19.1509 17.9554 19.4867 18.3696 19.4867C18.7838 19.4867 19.1196 19.1509 19.1196 18.7367V18.4188C19.1196 14.9887 16.3389 12.208 12.9088 12.208H9.81431Z" fill="currentColor"></path>
                    </svg>
                    <p>Edit profile</p>
                </Link>

                    <Link className="flex  gap-4 rounded-xl ps-2 hover:bg-gray-100 py-2 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.61304 3.27092L12.3927 3.27092C12.7295 3.27092 13.0027 3.54406 13.0027 3.88104C13.0027 5.50501 14.7607 6.52057 16.1675 5.7084C16.4591 5.54 16.8321 5.63994 17.0005 5.93161L18.3905 8.33918C18.559 8.63101 18.459 9.00417 18.1672 9.17266C16.7604 9.98485 16.7604 12.0153 18.1672 12.8275C18.459 12.996 18.559 13.3692 18.3905 13.661L17.0005 16.0686C16.8321 16.3603 16.4591 16.4602 16.1674 16.2918C14.7607 15.4796 13.0027 16.4952 13.0027 18.1192C13.0027 18.4561 12.7295 18.7293 12.3927 18.7293H9.61303C9.27596 18.7293 9.00271 18.456 9.00271 18.1189C9.00271 16.4942 7.2438 15.4793 5.83708 16.2915C5.54502 16.4601 5.17158 16.36 5.00304 16.0681L3.61337 13.6611C3.44488 13.3692 3.54487 12.9961 3.83671 12.8276C5.2435 12.0154 5.24347 9.98484 3.8367 9.17264C3.54485 9.00414 3.44486 8.63095 3.61335 8.33911L5.00301 5.93215C5.17156 5.64022 5.545 5.54012 5.83706 5.70875C7.24379 6.52092 9.00271 5.50595 9.00271 3.88125C9.00271 3.54417 9.27597 3.27092 9.61304 3.27092ZM12.3927 1.77092L9.61304 1.77092C8.44754 1.77092 7.50271 2.71575 7.50271 3.88125C7.50271 4.3509 6.9941 4.64471 6.58706 4.40971C5.57769 3.82695 4.28681 4.17265 3.70397 5.18215L2.31431 7.58911C1.7316 8.5984 2.07742 9.88897 3.0867 10.4717C3.49349 10.7065 3.49348 11.2937 3.08671 11.5285C2.07743 12.1112 1.73162 13.4018 2.31433 14.4111L3.704 16.8181C4.28684 17.8276 5.57772 18.1732 6.58708 17.5905C6.99411 17.3555 7.50271 17.6493 7.50271 18.1189C7.50271 19.2844 8.44753 20.2293 9.61303 20.2293H12.3927C13.5581 20.2293 14.5027 19.2844 14.5027 18.1192C14.5027 17.6495 15.0111 17.3562 15.4174 17.5908C16.4266 18.1735 17.7169 17.8277 18.2995 16.8186L19.6895 14.411C20.2722 13.4017 19.9264 12.1112 18.9172 11.5285C18.5104 11.2937 18.5104 10.7066 18.9172 10.4717C19.9264 9.889 20.2723 8.59845 19.6896 7.58918L18.2995 5.18161C17.7169 4.1725 16.4266 3.82675 15.4175 4.40936C15.0111 4.644 14.5027 4.35067 14.5027 3.88104C14.5027 2.71579 13.5581 1.77092 12.3927 1.77092ZM8.92395 11C8.92395 9.85242 9.85427 8.9221 11.0019 8.9221C12.1495 8.9221 13.0798 9.85242 13.0798 11C13.0798 12.1476 12.1495 13.0779 11.0019 13.0779C9.85427 13.0779 8.92395 12.1476 8.92395 11ZM11.0019 7.4221C9.02584 7.4221 7.42395 9.02399 7.42395 11C7.42395 12.976 9.02584 14.5779 11.0019 14.5779C12.9779 14.5779 14.5798 12.976 14.5798 11C14.5798 9.02399 12.9779 7.4221 11.0019 7.4221Z" fill="currentColor"></path>
                    </svg>
                    <p>Account settings</p>
                    </Link>

                    <Link className="flex  gap-4 rounded-xl ps-2 hover:bg-gray-100 py-2 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27148 11C3.27148 6.7313 6.73195 3.27083 11.0007 3.27083C15.2694 3.27083 18.7298 6.7313 18.7298 11C18.7298 15.2687 15.2694 18.7292 11.0007 18.7292C6.73195 18.7292 3.27148 15.2687 3.27148 11ZM11.0007 1.77083C5.90352 1.77083 1.77148 5.90287 1.77148 11C1.77148 16.0971 5.90352 20.2292 11.0007 20.2292C16.0978 20.2292 20.2298 16.0971 20.2298 11C20.2298 5.90287 16.0978 1.77083 11.0007 1.77083ZM10 7.94734C10 8.49962 10.4478 8.94734 11 8.94734H11.0008C11.5531 8.94734 12.0008 8.49962 12.0008 7.94734C12.0008 7.39505 11.5531 6.94734 11.0008 6.94734H11C10.4478 6.94734 10 7.39505 10 7.94734ZM11 15.3214C10.5858 15.3214 10.25 14.9856 10.25 14.5714L10.25 10.699C10.25 10.2848 10.5858 9.94902 11 9.94902C11.4143 9.94902 11.75 10.2848 11.75 10.699L11.75 14.5714C11.75 14.9856 11.4143 15.3214 11 15.3214Z" fill="currentColor"></path>
                    </svg>


                    <p>Support</p>
                    </Link>
                     <p className="bg-gray-300 w-full h-[0.5px] inline-block"></p>

                    <Link className="flex  gap-4 rounded-xl ps-2 hover:bg-gray-100 py-2 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9679 17.5805C13.5537 17.5805 13.2179 17.2448 13.2179 16.8305L13.2179 13.2454L11.7179 13.2454L11.7179 16.8305C11.7179 18.0732 12.7253 19.0805 13.9679 19.0805H16.8346C18.0773 19.0805 19.0846 18.0732 19.0846 16.8305V5.16309C19.0846 3.92045 18.0773 2.91309 16.8346 2.91309L13.9679 2.91309C12.7253 2.91309 11.7179 3.92045 11.7179 5.16309V8.74543L13.2179 8.74542V5.16309C13.2179 4.74887 13.5537 4.41309 13.9679 4.41309L16.8346 4.41309C17.2488 4.41309 17.5846 4.74887 17.5846 5.16309V16.8305C17.5846 17.2448 17.2488 17.5805 16.8346 17.5805H13.9679ZM2.91797 10.9986C2.91797 11.2142 3.00896 11.4086 3.15464 11.5454L7.37668 15.7701C7.66948 16.0631 8.14436 16.0632 8.43734 15.7704C8.73033 15.4776 8.73048 15.0028 8.43768 14.7098L5.47835 11.7486H14.668C15.0822 11.7486 15.418 11.4128 15.418 10.9986C15.418 10.5844 15.0822 10.2486 14.668 10.2486L5.48212 10.2486L8.4377 7.29092C8.73049 6.99793 8.73032 6.52306 8.43733 6.23026C8.14433 5.93747 7.66946 5.93764 7.37667 6.23064L3.18798 10.4223C3.02297 10.5598 2.91797 10.7669 2.91797 10.9986Z" fill="currentColor"></path>
                    </svg>
                    <p>Logout</p>
                    </Link>

                      </span>
           
            </div>
            
        
           </div>
      

      </nav>
      

      {/* phone menue */}
        <section  
        className={`mx-auto mt-3 lg:hidden fixed text-sm top-[60px] left-0 right-0 bg-white dark:bg-gray-800  rounded-lg  border-gray-300 dark:border-gray-900 p-5
        z-50   ${hamburger ? "block" : "hidden"}`}
      >
        {hamburger == true ? (
          <span className={` flex flex-col font-lato transition-all  w-full px-6 pb-5  gap-2 absolute  bg-white dark:bg-black ${hamburger? 'right-0':'right-[-100vw]' }`}>
            {" "}
            {navdata.map((item, i) => {
              return (
                <div key={i} className="py-1">
                  {item.subdata && item.subdata.length > 0 ? (
                    <DropdownArrow label={item.label} data={item.subdata} />
                  ) : (
                    <Link className=" cursor-pointer " to={item.link}>
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
            <span className={`flex flex-col ${isloggedIn?'hidden':'block'}`}>
             <Link className=" cursor-pointer" to={"sign-in"}>
              Sign In
            </Link>
            <Link to={"/sign-up"}>
              <button className="h-10 w-[140px] text-md rounded-[40px] ms-3 mt-6 text-white bg-[#8676ff]">
                Get Started Free
              </button>
            </Link>
            </span>
           
          </span>
        ) : (
          ""
        )}
      </section> 
    </>
  );
};



export default Navebar;
