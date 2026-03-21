import React, { lazy, useEffect } from "react";

import { useTheme } from "next-themes";
import { setHumOpen } from "../../redux/leftSlice";
import logoBlack from "/logo-black.svg";
import logoWhite from "/logo-white.svg";
import { Link, NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import DropdownArrow from "../../utils/DropdownArrow";
import { FaRegMoon } from "react-icons/fa";
import { RiSunLine } from "react-icons/ri";
import { navdata } from "../../assets/datas";
import { useSelector,useDispatch} from "react-redux";

import UserMenu from "./home/UserMenu";
import RightNav from "../../utils/RightNav";
let LeftChat=lazy(()=> import( "./chat/LeftChat"));
const DashboardSidebar = lazy(() =>
  import("./home/dashboard/DashbordLayout").then((module) => ({
    default: module.DashboardSidebar,
  }))
);

const NavBarAfter = () => {

  const leftHumburger=useSelector((state)=>state.leftHum.isHumopen)
  
  const content=useSelector((state)=>state.leftHum.content)

  
  const [hamburger, sethamburger] = useState(false);
 
  const { theme, setTheme } = useTheme();
  let isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  let userData = useSelector((state) => state.auth.user);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  let logo = theme === "dark" ? logoWhite : logoBlack;
  const dispatch = useDispatch();
  const rightContent=useSelector((state)=>state.rightHum.content)
 
  


  return (
    <>
      <nav
        className="flex font-lato z-50 bg-white dark:bg-gray-800   sticky top-0 w-full items-center h-[70px] ps-1 justify-between lg:px-10
      border-b-[1px] border-gray-300 dark:border-gray-500
       "
      >
        {/* logo & left nav */}
        <div className=" cursor-pointer flex justify-between items-center gap-3 ">
          <span className="ps-3 lg:hidden ">
            {leftHumburger ? (
              <i onClick={() => dispatch(setHumOpen())}>
                <svg
                  class="h-7 w-7"
                  x-show="sidebarOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </i>
            ) : (
              <i onClick={() => dispatch(setHumOpen())}>
                <svg
                  class="h-7 w-7"
                  x-show="!sidebarOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </i>
            )}
          </span>

                  {/* left box */}
                <aside
                className={`mx-auto  mt-2 lg:hidden fixed text-sm top-[63px] w-full flex left-0  rounded-lg   
                     z-50 transition-opacity duration-300 ease-in-out ${leftHumburger? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <div className={` bg-white  overflow-y-auto dark:bg-black h-screen  py-8 text-[18px] float-left flex flex-col   w-[270px] transform transition-transform duration-400 ease-in-out ${leftHumburger? "translate-x-0" : "-translate-x-full"}`}>

                  {content === 'dashboard' && <DashboardSidebar />}
                  {content === 'chat' && <LeftChat />}


                </div>

                 <div  onClick={()=>dispatch(setHumOpen())} className=' cursor-pointer float-right bg-transparent  h-screen flex-1  ' 
           
            >

             </div>
               
            </aside>
  
          
        
          

          {/* logo */}

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

        <div className="flex items-center gap-3  lg:gap-7 pr-5 lg:text-sm">
          {/* theme */}
          <span className="lg:h-12 lg:w-12 h-10 w-10 dark:border-none border rounded-full  hover:bg-gray-400/10  flex justify-center">
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

          {/* user menue */}
          <div
            className="lg:h-12 lg:w-12 cursor-pointer h-10 w-10"
            onClick={() => setIsUserMenuOpen(true)}
          >
            <img src={userData[0].avtar} alt="" />
          </div>

          <UserMenu
            isUserMenuOpen={isUserMenuOpen}
            setIsUserMenuOpen={setIsUserMenuOpen}
            userData={userData}
          />

          {/* humbarger */}
          <span
            className={` text-2xl rounded-full dark:border-none  border-[0.5px] h-10 w-10 items-center justify-center cursor-pointer lg:hidden flex`}
            onClick={() => sethamburger(!hamburger)}
          >
            <svg
              className="size-7"
              width="32"
              height="32"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0 0 0)"
            >
              <path
                d="M6.3125 13.7558C5.346 13.7559 4.5625 12.9723 4.5625 12.0059V11.9959C4.5625 11.0294 5.346 10.2458 6.3125 10.2458C7.279 10.2458 8.0625 11.0294 8.0625 11.9958V12.0058C8.0625 12.9723 7.279 13.7558 6.3125 13.7558Z"
                fill="currentColor"
              ></path>
              <path
                d="M18.3125 13.7558C17.346 13.7558 16.5625 12.9723 16.5625 12.0058V11.9958C16.5625 11.0294 17.346 10.2458 18.3125 10.2458C19.279 10.2458 20.0625 11.0294 20.0625 11.9958V12.0058C20.0625 12.9723 19.279 13.7558 18.3125 13.7558Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5625 12.0058C10.5625 12.9723 11.346 13.7558 12.3125 13.7558C13.279 13.7558 14.0625 12.9723 14.0625 12.0058V11.9958C14.0625 11.0294 13.279 10.2458 12.3125 10.2458C11.346 10.2458 10.5625 11.0294 10.5625 11.9958V12.0058Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </nav>

      {/* phone menue */}
     {rightContent==='rightNav' && <RightNav
        hum={hamburger}
        sethum={sethamburger}
        className={"text-lg py-2 flex flex-col gap-1"}
      >
         {navdata.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded-s-md ps-2 py-2  lg:hover:bg-gray-200"
            >
              {item.subdata.length > 2 ? (
                <DropdownArrow label={item.label} data={item.subdata} />
              ) : (
                <Link to={item.link}>{item.label}</Link>
              )}
            </div>
          );
        })}
        </RightNav>}
      
      
        
      
    </>
  );
};

export default NavBarAfter;
