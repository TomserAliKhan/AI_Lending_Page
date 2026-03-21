import React from 'react'

const RightNav = ({hum,children,className,sethum}) => {
  return (
      <aside
                className={`mx-auto  mt-3 lg:hidden fixed text-sm top-[60px] right-[-5px] w-full flex rounded-lg z-50 transition-opacity duration-300 ease-in-out ${hum ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            ><div className=' cursor-pointer bg-transparent  h-screen flex-1 float-left ' 
            onClick={()=>sethum(!hum)}
            >

             </div>
                <div className={`${className} bg-white dark:bg-black h-screen px-5 py-3 float-none w-[280px] transform transition-transform duration-300 ease-in-out ${hum ? "translate-x-0" : "translate-x-full"}`}>
                   {children}
                </div>
               
            </aside>
  )
}

export default RightNav



  





