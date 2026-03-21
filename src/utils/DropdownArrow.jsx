import { useState } from "react";
import { Link } from "react-router-dom";
import { useViewport } from "./useViewport";

const DropdownArrow = ({
  label = "Menu",
itemClass,
  data,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile=useViewport()


  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(()=>isMobile ? false : true)}
        onMouseLeave={() => setIsOpen(()=>isMobile ? false : false)}

        className={`flex  justify-between  lg:h-10 lg:justify-center w-full  lg:w-auto transition-colors items-center h-[30px]  lg:pb-5  relative  lg:hover:opacity-80`}
      >
        <span className={`${itemClass}`}>{label}</span>

        <svg
          className={`ml-1 h-4 w-4 transition-transform duration-200  ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M4.33301 5.91666L8.49967 10.0833L12.6663 5.91666"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={` lg:absolute lg:border lg:rounded-md lg:shadow-lg lg:w-[300px] lg:py-2 lg:z-10 transform transition-all duration-300 ease-in-out origin-top ${isOpen ? "block pt-3 opacity-100 scale-100" : "hidden opacity-0 scale-95 pointer-events-none"}`}
        onMouseEnter={() => setIsOpen(()=>isMobile ? false : true)}
        onMouseLeave={() => setIsOpen(()=>isMobile ? false :false)}
      >
        {isOpen &&
          data &&
          data.map((item, i) => {
            if (item.img)
              return (
                <Link to={item.link} 
                className="flex py-1 items-center lg:w-22 lg:h-10  lg:my-2 lg:ps-8 lg:py-2 lg:hover:bg-gray-100  dark:lg:hover:bg-gray-700 ">
                  <img key={i} src={item.img} alt={item.text || `item-${i}`} />
                  <span>{item.text}</span>
                </Link>
              );
            return (
              <Link
                to={item.link}
                className="flex p-2  flex-col lg:flex-row ps-6 lg:my-2 lg:ps-8 dark:lg:hover:bg-gray-700 lg:py-2 lg:hover:bg-gray-100"
                key={i}
              >
                {item.text}
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default DropdownArrow;
