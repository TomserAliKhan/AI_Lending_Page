import React from 'react'
import { note, idea, robot, messageE, premium, electricity, } from '../assets'

const Features = () => {

    let features = [
        {
            img: note,
            h2: "Seamless Content Creation AI",
            p: "Let our AI-powered service simplify your content creation process. Start using AI today!"
        },
        {
            img: idea,
            h2: " Your Ideas, Powered by Our Technology",
            p: "Discover how AI can transform your ideas into captivating content with our high-quality service."
        },
        {
            img: robot,
            h2: "Intelligent Writing by Powerful AI",
            p: "Effortlessly access AI-generated content for your blogs,websites, and more with our high-quality, convenient service."
        },
        {
            img: messageE,
            h2: "AI Generation Made Life Easier",
            p: "Experience effortless content creation with our AI service. Write less, accomplish more."
        },
        {
            img: premium,
            h2: "Premium AI-Generated Content",
            p: "Get expertly crafted content in no time with our AI service.Where quality meets speed."
        },
        {
            img: electricity,
            h2: " Super Fast AI Writing Companion",
            p: "Partner with AI to create content that connects with your audience. Give it a try now."
        }]
    return (
        <div className='flex flex-col justify-center items-center mx-auto'>
            <div className='w-full py-28'>
                <h1 className='text-center text-gray-800  dark:text-white/80 text-3xl lg:text-5xl  font-bold'>Core Features</h1>
                <p className="text-center w-full max-w-xl  mx-auto dark:text-gray-400 py-5  text-gray-500">Unlock the Potential of Innovation. Discover the Advanced AI
                    Tools Transforming Your Ideas into Reality with Unmatched
                    Precision and Intelligence.</p>
            </div>

            <div className=' justify-start items-center gap-6 lg:gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {features.map((item, index) => {
                    return (
                        <div key={index} className=' mx-10 mb-8 max-w-[312px]'>
                            <span className='h-20 mt-6 flex justify-center items-center w-20 rounded-full  bg-[#5f5094]'><img className='h-13 w-auto' src={item.img} alt="" /></span>
                            <h2 className=" text-gray-800 dark:text-white/80  text-xl py-6 font-bold ">{item.h2}</h2>
                            <p className="pb-5 dark:text-gray-400 text-gray-500">{item.p}    </p>
                        </div>
                    )
                })
                }
            </div>





        </div>
    )
}

export default Features