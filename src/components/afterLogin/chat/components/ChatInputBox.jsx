import React from 'react'

const ChatInputBox = () => {
  return (
    <div className=' fixed left-5 right-5    bg-white  bottom-2 h-14 rounded-full px-2 m-4 border mx-auto text-gray-400  flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 36 36" fill="none">
                    <g filter="url(#filter0_d_11222_3164)">
                      <g filter="url(#filter1_i_11222_3164)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.375 16C8.375 21.3157 12.6843 25.625 18 25.625C19.4865 25.625 20.8942 25.288 22.1511 24.6863C22.5831 24.4795 23.0725 24.4069 23.5351 24.5306L25.0102 24.9253C26.1728 25.2364 27.2364 24.1728 26.9254 23.0101L26.5307 21.5351C26.4069 21.0724 26.4795 20.583 26.6863 20.151C27.288 18.8942 27.625 17.4864 27.625 16C27.625 10.6842 23.3157 6.37495 18 6.37495C12.6843 6.37495 8.375 10.6842 8.375 16ZM22.2109 17.2031C21.5465 17.2031 21.0078 16.6644 21.0078 16C21.0078 15.3355 21.5465 14.7968 22.2109 14.7968C22.8754 14.7968 23.4141 15.3355 23.4141 16C23.4141 16.6644 22.8754 17.2031 22.2109 17.2031ZM18 17.2031C17.3355 17.2031 16.7969 16.6644 16.7969 16C16.7969 15.3355 17.3355 14.7968 18 14.7968C18.6645 14.7968 19.2031 15.3355 19.2031 16C19.2031 16.6644 18.6645 17.2031 18 17.2031ZM13.7891 17.2031C13.1246 17.2031 12.5859 16.6644 12.5859 16C12.5859 15.3355 13.1246 14.7968 13.7891 14.7968C14.4535 14.7968 14.9922 15.3355 14.9922 16C14.9922 16.6644 14.4535 17.2031 13.7891 17.2031Z" fill="url(#paint0_radial_11222_3164)"></path>
                      </g>
                    </g>
                    <defs>
                      <filter id="filter0_d_11222_3164" x="-4" y="-4" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                        <feOffset dy="2"></feOffset>
                        <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11222_3164"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11222_3164" result="shape"></feBlend>
                      </filter>
                      <filter id="filter1_i_11222_3164" x="8.375" y="6.37495" width="20.7738" height="20.7738" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                        <feOffset dx="1.52381" dy="1.52381"></feOffset>
                        <feGaussianBlur stdDeviation="1.14286"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_11222_3164"></feBlend>
                      </filter>
                      <radialGradient id="paint0_radial_11222_3164" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.1698 22.2201) rotate(-119.846) scale(19.0059)">
                        <stop stop-color="#7F68FF"></stop>
                        <stop offset="1" stop-color="#BEB2FF"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
        <input type="text" placeholder="Type your message..." className='w-full p-2 outline-none ' />

<span className='flex gap-2 justify-evenly  me-4'>
  
            {/* media */}
        <svg
        
        className='hover:text-black dark:hover:text-white'  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6684 12.0352C10.6684 12.0441 10.6686 12.053 10.6689 12.0619V13.4535C10.6689 13.8226 10.3697 14.1218 10.0006 14.1218C9.63153 14.1218 9.33233 13.8226 9.33233 13.4535V5.12823C9.33233 4.71402 8.99654 4.37823 8.58233 4.37823C8.16812 4.37823 7.83233 4.71402 7.83233 5.12823V13.4535C7.83233 14.651 8.8031 15.6218 10.0006 15.6218C11.1981 15.6218 12.1689 14.651 12.1689 13.4535V5.12823C12.1689 5.1182 12.1687 5.10821 12.1683 5.09827C12.1522 3.13126 10.5527 1.54167 8.58187 1.54167C6.60106 1.54167 4.9953 3.14743 4.9953 5.12824V12.0352C4.9953 12.0415 4.99538 12.0478 4.99553 12.0541V13.4535C4.99553 16.2176 7.23628 18.4583 10.0004 18.4583C12.7645 18.4583 15.0052 16.2176 15.0052 13.4535V7.9648C15.0052 7.55059 14.6694 7.2148 14.2552 7.2148C13.841 7.2148 13.5052 7.55059 13.5052 7.9648V13.4535C13.5052 15.3892 11.9361 16.9583 10.0004 16.9583C8.06471 16.9583 6.49553 15.3892 6.49553 13.4535V7.9648C6.49553 7.95848 6.49546 7.95219 6.4953 7.94591L6.4953 5.12824C6.4953 3.97586 7.42949 3.04167 8.58187 3.04167C9.73424 3.04167 10.6684 3.97586 10.6684 5.12824L10.6684 12.0352Z" fill="currentColor"></path>
                    </svg>
        
        {/* mic */}
        <svg
        
        className='hover:text-black dark:hover:text-white' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.54167C7.7449 1.54167 5.91674 3.36983 5.91674 5.62498V9.37503C5.91674 11.6302 7.7449 13.4583 10 13.4583C12.2552 13.4583 14.0834 11.6302 14.0834 9.37503V5.62498C14.0834 3.36983 12.2552 1.54167 10 1.54167ZM7.41674 5.62498C7.41674 4.19826 8.57333 3.04167 10 3.04167C11.4268 3.04167 12.5834 4.19826 12.5834 5.62498V9.37503C12.5834 10.8018 11.4268 11.9583 10 11.9583C8.57332 11.9583 7.41674 10.8018 7.41674 9.37503V5.62498ZM4.91669 9.375C4.91669 8.96079 4.5809 8.625 4.16669 8.625C3.75247 8.625 3.41669 8.96079 3.41669 9.375C3.41669 12.7573 5.96731 15.5438 9.25002 15.9161V16.9583H8.33335C7.91914 16.9583 7.58335 17.2941 7.58335 17.7083C7.58335 18.1226 7.91914 18.4583 8.33335 18.4583H10H11.6667C12.0809 18.4583 12.4167 18.1226 12.4167 17.7083C12.4167 17.2941 12.0809 16.9583 11.6667 16.9583H10.75V15.9161C14.0327 15.5438 16.5834 12.7573 16.5834 9.375C16.5834 8.96079 16.2476 8.625 15.8334 8.625C15.4191 8.625 15.0834 8.96079 15.0834 9.375C15.0834 12.1825 12.8075 14.4583 10 14.4583C7.19257 14.4583 4.91669 12.1825 4.91669 9.375Z" fill="currentColor"></path>
                    </svg>
</span>

        {/* send */}
     <button class="ml-2 w-14 h-12 flex  transition items-center justify-center dark:bg-white/30 hover:bg-blue-600 me-2 bg-gray-800 rounded-full text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z" fill="currentColor"></path>
                    </svg>
                  </button>
 
        
    </div>
  )
}

export default ChatInputBox