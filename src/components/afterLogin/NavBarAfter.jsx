import React from "react";

import { useTheme } from "next-themes";

import logoBlack from "/logo-black.svg";
import logoWhite from "/logo-white.svg";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import DropdownArrow from "../../utils/DropdownArrow";
import { FaRegMoon } from "react-icons/fa";
import { RiSunLine } from "react-icons/ri";
import { navdata } from "../../assets/datas";
import { useSelector } from "react-redux";
import Right from "../../utils/Right";
import UserMenu from "./home/UserMenu";
import Left from "../../utils/Left";

const NavBarAfter = () => {
  const {id}=useParams()
  console.log(id);
  
  const [hamburger, sethamburger] = useState(false);
  const [leftHumburger, setLeftHumburger] = useState(false);
  const { theme, setTheme } = useTheme();
  let isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  let userData = useSelector((state) => state.auth.user);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  let logo = theme === "dark" ? logoWhite : logoBlack;

  return (
    <>
      <nav
        className="flex font-lato z-50 bg-white dark:bg-gray-800   sticky top-0 w-full items-center h-[70px] ps-1 justify-between 
      border-b-[1px] border-gray-300 dark:border-gray-500
       "
      >
        {/* logo & left nav */}
        <div className=" cursor-pointer flex justify-between items-center gap-3 ">
          <span className="ps-3">
            {leftHumburger ? (
              <i onClick={() => setLeftHumburger(!leftHumburger)}>
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
              <i onClick={() => setLeftHumburger(!leftHumburger)}>
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

          {/* left hum */}
          <Left leftHum={leftHumburger} sethum={setLeftHumburger} className={'gap-5 text-lg ps-10 pt-5'}>
            <Link className="flex  items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.7526 6.7963C8.7526 5.3555 9.9206 4.1875 11.3614 4.1875C12.8022 4.1875 13.9702 5.3555 13.9702 6.7963C13.9702 8.2371 12.8022 9.4051 11.3614 9.4051C9.9206 9.4051 8.7526 8.2371 8.7526 6.7963ZM11.3614 2.6875C9.09217 2.6875 7.2526 4.52707 7.2526 6.7963C7.2526 9.06553 9.09217 10.9051 11.3614 10.9051C13.6306 10.9051 15.4702 9.06553 15.4702 6.7963C15.4702 4.52707 13.6306 2.6875 11.3614 2.6875ZM9.8148 12.208C6.38467 12.208 3.604 14.9887 3.604 18.4188V18.7367C3.604 19.1509 3.93979 19.4867 4.354 19.4867C4.76822 19.4867 5.104 19.1509 5.104 18.7367V18.4188C5.104 15.8171 7.2131 13.708 9.8148 13.708H12.9092C15.511 13.708 17.6201 15.8171 17.6201 18.4188V18.7367C17.6201 19.1509 17.9558 19.4867 18.3701 19.4867C18.7843 19.4867 19.1201 19.1509 19.1201 18.7367V18.4188C19.1201 14.9887 16.3394 12.208 12.9092 12.208H9.8148Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Profile and security</p>
            </Link>
            <Link className="flex  items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.1665 2.91666C3.92386 2.91666 2.9165 3.92402 2.9165 5.16666V7.33333V16.8333C2.9165 18.076 3.92387 19.0833 5.16651 19.0833H16.8332C18.0758 19.0833 19.0832 18.076 19.0832 16.8333V14.6667V11V8.83333C19.0832 7.59069 18.0758 6.58333 16.8332 6.58333H16.7915V5.16666C16.7915 3.92402 15.7841 2.91666 14.5415 2.91666H5.1665ZM16.0415 8.08333H4.4165V16.8333C4.4165 17.2475 4.75229 17.5833 5.16651 17.5833H16.8332C17.2474 17.5833 17.5832 17.2475 17.5832 16.8333V15.4167H15.479C14.2364 15.4167 13.229 14.4093 13.229 13.1667V12.5C13.229 11.2574 14.2364 10.25 15.479 10.25H17.5832V8.83333C17.5832 8.41912 17.2474 8.08333 16.8332 8.08333H16.0415ZM15.2915 6.58333V5.16666C15.2915 4.75245 14.9557 4.41666 14.5415 4.41666H5.1665C4.75229 4.41666 4.4165 4.75245 4.4165 5.16666V6.58333H15.2915ZM17.5832 11.75V13.9167H15.479C15.0648 13.9167 14.729 13.5809 14.729 13.1667V12.5C14.729 12.0858 15.0648 11.75 15.479 11.75H17.5832Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Billing & Plans</p>
            </Link>

            <Link className="flex  items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7207 3.49909C10.8967 3.41112 11.1038 3.41112 11.2797 3.49909L17.0757 6.39701L11.3356 9.26698C11.1245 9.37255 10.876 9.37255 10.6648 9.26698L4.92473 6.39701L10.7207 3.49909ZM3.99756 7.61048L9.99403 10.6086C10.0775 10.6504 10.163 10.6866 10.2498 10.7174L10.2498 18.2657L4.34306 15.3124C4.13131 15.2066 3.99756 14.9901 3.99756 14.7534V7.61048ZM11.7498 18.2661L17.6574 15.3124C17.8692 15.2066 18.0029 14.9901 18.0029 14.7534V7.61048L12.0064 10.6086C11.9227 10.6505 11.837 10.6868 11.7498 10.7176V18.2661ZM3.95531 5.91232L3.67225 5.34619C2.95232 5.70614 2.49756 6.44196 2.49756 7.24686V14.7534C2.49756 15.5583 2.95232 16.2941 3.67225 16.6541L10.0499 19.8428C10.6482 20.1419 11.3523 20.1419 11.9505 19.8428L18.3282 16.6541C19.0481 16.2941 19.5029 15.5583 19.5029 14.7534V7.24686C19.5029 6.44196 19.0481 5.70614 18.3282 5.34619L11.9505 2.15744L11.6151 2.82827L11.9505 2.15744C11.3523 1.85834 10.6482 1.85834 10.0499 2.15744L3.67225 5.34619L3.95531 5.91232Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Integrations </p>
            </Link>
          </Left>

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
      <Right
        hum={hamburger}
        sethum={sethamburger}
        className={"text-lg py-2 flex flex-col gap-1"}
      >
        {navdata.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded-s-md ps-2 py-2  hover:bg-gray-200"
            >
              {item.subdata.length > 2 ? (
                <DropdownArrow label={item.label} data={item.subdata} />
              ) : (
                <Link to={item.link}>{item.label}</Link>
              )}
            </div>
          );
        })}
      </Right>
    </>
  );
};

export default NavBarAfter;
