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
  const [useropen, setUseropen] = useState(false)
  const { theme, setTheme } = useTheme();
  let isloggedIn=useSelector((state)=>state.auth.isLoggedIn)
  let userData=useSelector((state)=>state.auth.user)
console.log(userData);

  

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
          <span>
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

            {/* before login */}
           {isloggedIn==false  && userData.length==0 ?  <div className="lg:flex hidden justify-between items-center h-full w-auto gap-4">
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
              <button className=" h-11 w-11 cursor-pointer" onClick={()=>setUseropen((prev)=>!prev)}><img  src={userData[0]?.avtar} alt="avter" /></button>
              
              </div>}
          </span>
        </div>

           <div className="bg-gray-500 rounded-lg w-64 absolute right-0 top-[70px]   h-40">
        
      </div>
      

      </nav>
      

      {/* phone menue */}
      <section
        className={`mx-auto mt-3 lg:hidden fixed text-sm top-[60px] left-0 right-0 bg-white dark:bg-gray-800  rounded-lg  border-gray-300 dark:border-gray-900 p-5
        z-50 ${hamburger ? "block" : "hidden"}`}
      >
        {hamburger == true ? (
          <span className=" flex flex-col font-lato  gap-2  ">
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
            <Link className=" cursor-pointer" to={"sign-in"}>
              Sign In
            </Link>
            <Link to={"/sign-up"}>
              <button className="h-10 w-[140px] text-md rounded-[40px] ms-3 mt-6 text-white bg-[#8676ff]">
                Get Started Free
              </button>
            </Link>
          </span>
        ) : (
          ""
        )}
      </section>
    </>
  );
};



export default Navebar;
