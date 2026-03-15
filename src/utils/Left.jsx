import React from 'react'

const Left = ({children,leftHum,sethum,className}) => {
  return (
    <aside
                className={`mx-auto  mt-2 lg:hidden fixed text-sm top-[63px] w-full flex left-0  rounded-lg   
                     z-50   ${leftHum ? "block" : "hidden"}`}
            >
              <div className={` ${className} bg-white  dark:bg-black h-screen   px-5 py-3 float-left flex flex-col  bg w-[270px]`}>
                   {children}
                </div>

                 <div  onClick={()=>sethum(!leftHum)} className=' cursor-pointer float-right bg-transparent  h-screen flex-1  ' 
           
            >

             </div>
               
            </aside>
  )
}

export default Left