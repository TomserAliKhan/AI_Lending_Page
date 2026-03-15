import React from 'react'

const Right = ({hum,children,className,sethum}) => {
  return (
      <aside
                className={`mx-auto  mt-3 lg:hidden fixed text-sm top-[60px] right-[-5px] w-full flex   rounded-lg   
                     z-50   ${hum ? "block" : "hidden"}`}
            ><div className=' cursor-pointer bg-transparent  h-screen flex-1 float-left ' 
            onClick={()=>sethum(!hum)}
            >

             </div>
                <div className={`${className}  bg-white dark:bg-black h-screen   px-5 py-3 float-none w-[280px]`}>
                   {children}
                </div>
               
            </aside>
  )
}

export default Right

//  <button className=" h-11 w-11 cursor-pointer" onClick={()=>setIsUserMenuOpen(prev=>!prev)} ><img  src={userData[0]?.avtar} alt="avtar" /></button>

  





