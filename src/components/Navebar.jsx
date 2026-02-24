import { useTheme } from "next-themes";

import { logoBlack, logoWhite } from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownArrow from "../utils/DropdownArrow";
import { FaRegMoon } from "react-icons/fa";
import { RiSunLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { navdata } from "../assets/datas";

const Navebar = () => {
  const [hamburger, sethamburger] = useState(false)
  const { theme, setTheme } = useTheme();


  let logo = theme === "dark" ? logoWhite : logoBlack;

  return (
    <>      
    
      <nav className="flex font-lato  px-5 items-center h-[70px] ps-5 border-b justify-between ">
        <div className=" cursor-pointer " >
          <Link to='/' ><img className="h-25 w-25" src={logo} alt="logo" /></Link>
        </div>






{/* computer menue */}

        <section className=" lg:flex hidden lg:basis-[400px] lg:h-5 cursor-pointer lg:text-sm font-lato items-centers gap-7 justify-center lg:justify-around">
         {
          navdata.map((item,index)=>{
            return(
              <div key={index}  className="">
                {
                  item.subdata && item.subdata.length >0 ? <DropdownArrow label={item.label} data={item.subdata}/>:(<Link className=" cursor-pointer lg:hover:text-blue-400" to={item.link}>{item.label}</Link>)
                }
              </div>
            )
          })
         }
       
        </section>





        <div className="flex items-center gap-7 pr-5 lg:text-sm" >
          <span className="h-10 border rounded-full  hover:bg-gray-400/10 w-10 flex justify-center">
            {theme == "dark" ? (
            <button onClick={() => setTheme("light")}>
              <RiSunLine size={'25px'} />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")}>
              <FaRegMoon size={'20px'} />
            </button>
          )}</span>
          <span  >
            {hamburger ? <RxCross2 size={'30px'} onClick={() => sethamburger(false)} className="text-2xl lg:hidden block" /> : <RxHamburgerMenu onClick={() => sethamburger(true)} size={'30px'} className="text-2xl lg:hidden block" />}

              <div className="lg:flex hidden justify-between items-center h-full w-auto gap-4">
           <Link className="cursor-pointer lg:hover:text-blue-400" to={'/sign-in'}>Sign In</Link>

        
                  <Link to={'/sign-in'}
                    className=" text-md p-3 tx-4 rounded-[40px]  text-white bg-[#8676ff]"
                  >
                    Get Started Free 
                  </Link>
          
        </div>
          </span>
          
        </div>
        
      </nav>


          {/* phone menue */}
      <section className="mx-5 mt-3 lg:hidden ">
          {hamburger==true ?  (<span className=" flex flex-col font-lato   text-lg "> {
              navdata.map((item,i)=>{
                return(
            <div key={i} className="py-1" >

              {
              
                item.subdata && item.subdata.length >0 ? <DropdownArrow label={item.label} data={item.subdata}/>:(<Link className=" cursor-pointer" to={item.link}>{item.label}</Link>)
              }
            </div>)
              })
            }
            <Link className=" cursor-pointer" to={'sign-in'}>Sign In</Link>

                <Link to={'/sign-in'}>
                  <button
                    className="h-12 w-44 text-xl rounded-[40px] ms-3 mt-6 text-white bg-[#8676ff]"
                  >
                    Get Started Free {/* Hardcoded CTA label */}
                  </button>
                </Link>
            </span>
            
            ) :''}

        

      </section>




      
    </>
  );
};

// DropdownArrow.jsx

export default Navebar;
