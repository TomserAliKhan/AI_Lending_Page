import React from "react";
import { animShapeLeft1, animShapeLeft2, animShapeRight1, animShapeRight2, br1,br2, br3, br4, br5, br6, br7, heroDarkImg, heroImg } from "../../../assets";
import { useTheme } from "next-themes";



const Herosection = () => {
    const { theme, setTheme } = useTheme();
    let HeroImg = theme === "dark" ? heroDarkImg : heroImg;
    

    return (
        <main className=" ">
            <section >
                <div className="mt-16  w-full  relative">
                    <span className="hidden lg:block  absolute left-10 floating-1"><img src={animShapeLeft1}  /></span>
                    <span className="hidden lg:block absolute left-20 top-56 floating-2"><img src={animShapeLeft2}  /></span>
                    <span className="hidden lg:block  absolute right-10 floating-3"><img src={animShapeRight1}  /></span>
                    <span className="hidden lg:block  absolute right-20 top-52 floating-4"><img src={animShapeRight2}  /></span>
                    <div className="lg:w-[650px] mx-auto flex flex-col justify-center items-center ">
                        <span className="rounded-full p-[1px] bg-gradient-to-r from-pink-500 to-purple-500">
                            <span className="flex text-[10px]  gap-3 bg-white dark:bg-gray-900 rounded-full overflow-hidden px-4 py-2 items-center">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.1699 0.58575C14.9429 -0.19525 13.7499 -0.19525 13.5229 0.58575L13.2029 1.69275C12.5109 4.07875 11.5669 5.94175 8.99994 6.58375L7.80794 6.88175C7.63097 6.91697 7.47168 7.01246 7.35721 7.15195C7.24274 7.29144 7.18018 7.4663 7.18018 7.64675C7.18018 7.8272 7.24274 8.00206 7.35721 8.14155C7.47168 8.28104 7.63097 8.37653 7.80794 8.41175L8.99994 8.70975C11.5669 9.35275 12.5109 11.2157 13.2029 13.6007L13.5229 14.7078C13.7499 15.4897 14.9429 15.4897 15.1699 14.7078L15.4899 13.6007C16.1819 11.2157 17.1269 9.35275 19.6939 8.71075L20.8839 8.41175C21.0609 8.37653 21.2202 8.28104 21.3347 8.14155C21.4491 8.00206 21.5117 7.8272 21.5117 7.64675C21.5117 7.4663 21.4491 7.29144 21.3347 7.15195C21.2202 7.01246 21.0609 6.91697 20.8839 6.88175L19.6939 6.58375C17.1269 5.94175 16.1819 4.07875 15.4899 1.69375L15.1699 0.58575Z"
                                        fill="url(#paint0_linear_9274_1469)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.28304 11.8368C5.14704 11.3488 4.43104 11.3488 4.29604 11.8368L4.10304 12.5288C3.68805 14.0188 3.12205 15.1838 1.58104 15.5858L0.867045 15.7718C0.759268 15.7971 0.663206 15.8581 0.594451 15.9448C0.525695 16.0316 0.488281 16.1391 0.488281 16.2498C0.488281 16.3605 0.525695 16.4679 0.594451 16.5547C0.663206 16.6415 0.759268 16.7025 0.867045 16.7278L1.58104 16.9148C3.12104 17.3158 3.68805 18.4808 4.10304 19.9708L4.29604 20.6628C4.43104 21.1518 5.14704 21.1518 5.28304 20.6628L5.47605 19.9708C5.89005 18.4808 6.45805 17.3158 7.99804 16.9148L8.71204 16.7278C8.81982 16.7025 8.91588 16.6415 8.98464 16.5547C9.05339 16.4679 9.09081 16.3605 9.09081 16.2498C9.09081 16.1391 9.05339 16.0316 8.98464 15.9448C8.91588 15.8581 8.81982 15.7971 8.71204 15.7718L7.99804 15.5858C6.45805 15.1848 5.89005 14.0198 5.47605 12.5288L5.28304 11.8368Z"
                                        fill="url(#paint1_linear_9274_1469)"
                                    ></path>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_9274_1469"
                                            x1="7.18018"
                                            y1="0"
                                            x2="21.5117"
                                            y2="15.2943"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#FF58D5"></stop>
                                            <stop offset="1" stopColor="#FFA0E7"></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_9274_1469"
                                            x1="9.09081"
                                            y1="11.4708"
                                            x2="0.488281"
                                            y2="21.0295"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#7A5AF8"></stop>
                                            <stop offset="1" stopColor="#B5A2FF"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>Powerful AI Kit for Ai Products,Tools and Startups</span>
                            </span>
                        </span>
                        <div className="text-center mt-5 ">
                            <h1 className="text-gray-700  mx-auto  font-bold mb-4 text-4xl sm:text-[50px] text-[30px] dark:text-white/90 lg:leading-[64px]  sm:leading-[64px] max-w-[700px]  lg:max-w-[700px] leading-10">
                                AI UI Kit and Templates for Tailwind CSS and Figma
                            </h1>
                        </div>
                        <div className="lg:w-[500px]  mx-auto sm:text-[13px] lg:text-[18px]   ">
                            <h2 className="max-w-[537px] text-center mx-auto dark:text-gray-400 text-gray-500 text-base">Transform Your Vision into Reality:Unleash Your Creativity and Build Cutting-Edge AI Startups,Tools, and Products with Our Powerful AI Agent UI Kit, Designed to Streamline Development and AI Innovation.

                            </h2>
                        </div>

                        <div className="flex gap-4 my-7 mb-16 flex-col md:flex-row justify-center items-center">
                            <button className="bg-[#7a5af8] py-3 rounded-full text-white px-7">View Tools</button>
                            <button className=" dark:border-0  border-[0.5px] dark:bg-gray-600/20 flex items-center justify-start gap-2 py-2 rounded-full px-3">
                                <span className="bg-[#7a5af8] p-2 self-start rounded-full">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 3.71077L3.5 12.3482C3.5 13.5211 4.78545 14.2402 5.78489 13.6265L12.8183 9.30776C13.7717 8.7223 13.7717 7.33672 12.8183 6.75125L5.7849 2.43251C4.78545 1.81882 3.5 2.53795 3.5 3.71077Z" fill="white"></path>
                                    </svg>
                                </span><span> Watch Intro</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" relative w-full   flex justify-center flex-col ">

                    <img className="h-auto rounded-3xl border-[8px] border-gray-400/60 w-[80vw] mx-auto" src={HeroImg} alt="hero image" />
                    <h1 className="text-[20px] lg:text-xl text-white/30  mt-14 mb-3 text-center leading-5  mx-auto ">Trusted by worlds largest companies including...</h1>


                    <div className="flex flex-wrap mx-5 md:mx-20  md:gap-14 my-10 justify-center items-center lg:gap-16 pb-14   gap-7">

                        <img src={br1} alt="spotify" className="opacity-50  transition hover:opacity-100" />
                        <img src={br2} alt="spotify" className="opacity-50 transition hover:opacity-100" />
                        <img src={br3} alt="spotify" className="opacity-50 transition hover:opacity-100" />
                        <img src={br4} alt="spotify" className="opacity-50 transition hover:opacity-100" />
                        <img src={br5} alt="spotify" className="opacity-50 transition hover:opacity-100" />
                        <img src={br6} alt="spotify" className="opacity-50 transition hover:opacity-100" />
                        <img src={br7} alt="spotify" className="opacity-50 transition hover:opacity-100" />
                    </div>



                    <div className="hero-glow-bg absolute bottom-0 left-0 w-full h-full -z-10">

                    </div>
                </div>

            </section>

        </main>
    );
};

export default Herosection;