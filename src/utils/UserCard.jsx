

const UserCard = ({img,name,company,text}) => {
  return (
    <div className='bg-gray-200/70  p-5 flex flex-col gap-3 rounded-xl lg:mx-auto  mx-4 hover:border-[0.2px] hover:border-blue-300/60  sm:mx-auto mt-5 max-w-xl'>
        <div className='flex items-center gap-4 bg-gray-50/50 rounded-lg px-4 py-2' >
            <span className='h-14 w-14'>
                <img src={img} alt="" />
            </span>
            <span>
                <h1 className='text-lg '>{name}</h1>
                <p className='text-sm text-gray-500'>{company}</p>
            </span>
        </div>
        <div className='bg-gray-50/50 py-5 rounded-lg p-3 p'> 
            <p className=' text-gray-500 text-md font-semibold'>{text}</p>
        </div>
    </div>
  )
}

export default UserCard