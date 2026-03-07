
import UserCard from '../../../utils/UserCard'
import { userData } from '../../../assets/datas'

const UserExperiance = () => {
  return (
    <div className='mx-auto w-full'>
      <div className='mx-4 sm:mx-auto '>
        <h1 className='text-3xl font-bold text-center mt-10 md:text-4xl mx-7 sm:mx-auto md:pb-4 lg:pt-10 '>What our uses says</h1>
        <p className='text-md text-center md:pb-10 max-w-sm sm:max-w-2xl mx-auto py-4'>Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.</p>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mx-8 lg:mx-auto lg:grid-cols-3  lg:max-w-[1200px] mb-10 '>

       {
        userData.map((item, index) => {
          return <UserCard key={index} name={item.name} img={item.img} company={item.company} text={item.disc} />
        })
      }</div>
    </div>
  )
}

export default UserExperiance