import { useState } from "react"
import { errorNotify } from "../../../../assets/datas"

export const PasswordChangeForm=({setPasswordChange,isPasswordChange})=>{
    const [showPassword, setShowPassword] = useState({
        password1:true,
        password2:true,
        password3:true
    })
    const handleChangeShow=(field)=>{
        setShowPassword((prev)=>({
            ...prev,
            [field]: !prev[field]
        }))
    }

    const [form, setform] = useState({
        oldPass:'old',
        newPass:'new',
        reNewPass:'reNewPass'
    })
    const handleFormChange=(e)=>{
        let {name,value}=e.target
        setform((prev)=>({
            ...prev,
            [name]:value
        }))
    }

   const changePassword=()=>{
   if (form.newPass!==form.reNewPass) {
    errorNotify('New password and re-type new password do not match.');
    
   }
    
  }
    
  return(
    <>
    <div className="fixed inset-0 z-50 overflow-y-auto" >
      <div className="flex items-center justify-center min-h-screen p-4">
     

        {/* <!-- Modal panel --> */}
        <div className="bg-white dark:bg-dark-primary rounded-3xl text-left overflow-hidden sm:w-[590px] transform transition-all p-5 sm:p-12" >
          <div className="absolute top-0 right-0 pt-4 pr-4">

            {/* x */}
            <button type="button"
            onClick={()=>setPasswordChange(!isPasswordChange)}
            className="bg-gray-100 dark:bg-white/5 dark:hover:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 rounded-full size-9 inline-flex items-center justify-center text-gray-500">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.09467 6.15615C4.80178 5.86325 4.80178 5.38838 5.09467 5.09549C5.38756 4.80259 5.86244 4.80259 6.15533 5.09549L9.99919 8.93934L13.8429 5.0956C14.1358 4.8027 14.6107 4.8027 14.9036 5.0956C15.1965 5.38849 15.1965 5.86336 14.9036 6.15626L11.0598 10L14.9036 13.8437C15.1965 14.1366 15.1965 14.6115 14.9036 14.9044C14.6107 15.1973 14.1358 15.1973 13.8429 14.9044L9.99919 11.0607L6.15533 14.9045C5.86244 15.1974 5.38756 15.1974 5.09467 14.9045C4.80178 14.6116 4.80178 14.1368 5.09467 13.8439L8.93853 10L5.09467 6.15615Z" fill="currentColor"></path>
              </svg>
            </button>
        
          </div>


          <div className="mt-3 text-left w-full">
            <h3 className="text-[30px] mb-2 dark:text-white/90 leading-[38px] font-bold text-gray-800" id="modal-title">
              Change Password
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Make sure to create a strong password to mark your projects.
            </p>
            <div className="mt-6">
              <form className="space-y-5">
                <div className="grid gap-5">
                  <div>
                    <label for="old-password" className="block text-sm font-medium dark:text-gray-400 text-gray-700">
                      Old password
                    </label>
                    <div className="relative mt-1" >
                      <input id="old-password" name="oldPass" 
                      type={showPassword.password1 ?"text":"password"}
                      value={form.oldPass}
                      onChange={handleFormChange}
                      className="border w-full text-sm dark:text-white/90 dark:placeholder:text-white/90 dark:border-gray-700 text-gray-800 placeholder:text-sm placeholder:text-gray-400 focus:border-primary-300 dark:focus:border-primary-500 focus:outline-0 focus:ring-3 focus:ring-primary-300/20 text-left h-12 shadow-theme-xs border-gray-300 rounded-full px-5 py-2.5" placeholder="Enter your password"/>

                      <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>handleChangeShow("password1")} >
                      {
                        showPassword.password1 ?<svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63803 3.57712C4.34513 3.28423 3.87026 3.28423 3.57737 3.57712C3.28447 3.87002 3.28447 4.34489 3.57737 4.63778L4.85323 5.91365C3.74609 6.84202 2.89363 8.06398 2.4155 9.45939C2.3615 9.61697 2.3615 9.78804 2.41549 9.94561C3.49488 13.0957 6.48191 15.362 10.0002 15.362C11.255 15.362 12.4422 15.0737 13.4994 14.5599L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57712ZM12.3608 13.4212L10.4475 11.5079C10.3061 11.5423 10.1584 11.5606 10.0064 11.5606H9.99151C8.96527 11.5606 8.13333 10.7286 8.13333 9.7024C8.13333 9.54613 8.15262 9.39437 8.18895 9.24936L5.91885 6.97926C5.03505 7.69018 4.34057 8.62707 3.92328 9.7025C4.86803 12.1373 7.23361 13.862 10.0002 13.862C10.8326 13.862 11.6287 13.7058 12.3608 13.4212ZM16.0771 9.70252C15.7843 10.457 15.3552 11.1432 14.8199 11.7311L15.8813 12.7926C16.6329 11.9813 17.2187 11.0143 17.5849 9.94564C17.6389 9.78806 17.6389 9.61699 17.5849 9.45941C16.5055 6.30928 13.5184 4.04306 10.0002 4.04306C9.13525 4.04306 8.30244 4.18002 7.52218 4.43341L8.75139 5.66262C9.1556 5.58416 9.57311 5.54306 10.0002 5.54306C12.7667 5.54306 15.1323 7.26771 16.0771 9.70252Z" fill="#667085"></path>
                        </svg> : <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 13.862C7.23361 13.862 4.86803 12.1373 3.92328 9.7025C4.86804 7.2677 7.23361 5.54306 10.0002 5.54306C12.7667 5.54306 15.1323 7.26771 16.0771 9.70252C15.1323 12.1373 12.7667 13.862 10.0002 13.862ZM10.0002 4.04306C6.48191 4.04306 3.49489 6.30927 2.4155 9.45939C2.3615 9.61697 2.3615 9.78803 2.41549 9.94561C3.49488 13.0957 6.48191 15.362 10.0002 15.362C13.5184 15.362 16.5055 13.0958 17.5849 9.94564C17.6389 9.78806 17.6389 9.61699 17.5849 9.45941C16.5055 6.30928 13.5184 4.04306 10.0002 4.04306ZM9.99151 7.84422C8.96527 7.84422 8.13333 8.67616 8.13333 9.7024C8.13333 10.7286 8.96527 11.5606 9.99151 11.5606H10.0064C11.0326 11.5606 11.8646 10.7286 11.8646 9.7024C11.8646 8.67616 11.0326 7.84422 10.0064 7.84422H9.99151Z" fill="#98A2B3"></path>
                        </svg>
                      }
 
                      </span>
                    </div>
                  </div>
                  <div>
                    <label for="new-password" className="block text-sm dark:text-gray-400 font-medium text-gray-700">
                      New password
                    </label>
                    <div className="relative mt-1" >
                      <input id="new-password" 
                      name="newPass" 
                      type={showPassword.password2 ?"text":"password"}
                      value={form.newPass}
                      onChange={handleFormChange}

                      className="border w-full text-sm dark:text-white/90 dark:placeholder:text-white/90 dark:border-gray-700 text-gray-800 placeholder:text-sm placeholder:text-gray-400 focus:border-primary-300 dark:focus:border-primary-500 focus:outline-0 focus:ring-3 focus:ring-primary-300/20 text-left h-12 shadow-theme-xs border-gray-300 rounded-full px-5 py-2.5" placeholder="Enter your password" />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={()=>handleChangeShow("password2")}
                      >
                        {
                           showPassword.password2 ?<svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63803 3.57712C4.34513 3.28423 3.87026 3.28423 3.57737 3.57712C3.28447 3.87002 3.28447 4.34489 3.57737 4.63778L4.85323 5.91365C3.74609 6.84202 2.89363 8.06398 2.4155 9.45939C2.3615 9.61697 2.3615 9.78804 2.41549 9.94561C3.49488 13.0957 6.48191 15.362 10.0002 15.362C11.255 15.362 12.4422 15.0737 13.4994 14.5599L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57712ZM12.3608 13.4212L10.4475 11.5079C10.3061 11.5423 10.1584 11.5606 10.0064 11.5606H9.99151C8.96527 11.5606 8.13333 10.7286 8.13333 9.7024C8.13333 9.54613 8.15262 9.39437 8.18895 9.24936L5.91885 6.97926C5.03505 7.69018 4.34057 8.62707 3.92328 9.7025C4.86803 12.1373 7.23361 13.862 10.0002 13.862C10.8326 13.862 11.6287 13.7058 12.3608 13.4212ZM16.0771 9.70252C15.7843 10.457 15.3552 11.1432 14.8199 11.7311L15.8813 12.7926C16.6329 11.9813 17.2187 11.0143 17.5849 9.94564C17.6389 9.78806 17.6389 9.61699 17.5849 9.45941C16.5055 6.30928 13.5184 4.04306 10.0002 4.04306C9.13525 4.04306 8.30244 4.18002 7.52218 4.43341L8.75139 5.66262C9.1556 5.58416 9.57311 5.54306 10.0002 5.54306C12.7667 5.54306 15.1323 7.26771 16.0771 9.70252Z" fill="#667085"></path>
                        </svg> : <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 13.862C7.23361 13.862 4.86803 12.1373 3.92328 9.7025C4.86804 7.2677 7.23361 5.54306 10.0002 5.54306C12.7667 5.54306 15.1323 7.26771 16.0771 9.70252C15.1323 12.1373 12.7667 13.862 10.0002 13.862ZM10.0002 4.04306C6.48191 4.04306 3.49489 6.30927 2.4155 9.45939C2.3615 9.61697 2.3615 9.78803 2.41549 9.94561C3.49488 13.0957 6.48191 15.362 10.0002 15.362C13.5184 15.362 16.5055 13.0958 17.5849 9.94564C17.6389 9.78806 17.6389 9.61699 17.5849 9.45941C16.5055 6.30928 13.5184 4.04306 10.0002 4.04306ZM9.99151 7.84422C8.96527 7.84422 8.13333 8.67616 8.13333 9.7024C8.13333 10.7286 8.96527 11.5606 9.99151 11.5606H10.0064C11.0326 11.5606 11.8646 10.7286 11.8646 9.7024C11.8646 8.67616 11.0326 7.84422 10.0064 7.84422H9.99151Z" fill="#98A2B3"></path>
                        </svg>
                        }
                    
                      </span>
                    </div>
                  </div>
                  <div>
                    <label for="retype-new-password" className="block text-sm font-medium dark:text-gray-400 text-gray-700">
                      Re-type new password
                    </label>
                    <div className="relative mt-1" x-data="{ showPassword: false }">
                      <input id="retype-new-password" 
                      name="reNewPass" 
                      type={showPassword.password3 ?"text":"password"}
                      value={form.reNewPass}
                       onChange={handleFormChange}
                      className="border w-full text-sm dark:text-white/90 dark:placeholder:text-white/90 dark:border-gray-700 text-gray-800 placeholder:text-sm placeholder:text-gray-400 focus:border-primary-300 dark:focus:border-primary-500 focus:outline-0 focus:ring-3 focus:ring-primary-300/20 text-left h-12 shadow-theme-xs border-gray-300 rounded-full px-5 py-2.5" placeholder="Enter your password" />

                      <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>handleChangeShow("password3")}>
                       {
                           showPassword.password3 ?<svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63803 3.57712C4.34513 3.28423 3.87026 3.28423 3.57737 3.57712C3.28447 3.87002 3.28447 4.34489 3.57737 4.63778L4.85323 5.91365C3.74609 6.84202 2.89363 8.06398 2.4155 9.45939C2.3615 9.61697 2.3615 9.78804 2.41549 9.94561C3.49488 13.0957 6.48191 15.362 10.0002 15.362C11.255 15.362 12.4422 15.0737 13.4994 14.5599L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57712ZM12.3608 13.4212L10.4475 11.5079C10.3061 11.5423 10.1584 11.5606 10.0064 11.5606H9.99151C8.96527 11.5606 8.13333 10.7286 8.13333 9.7024C8.13333 9.54613 8.15262 9.39437 8.18895 9.24936L5.91885 6.97926C5.03505 7.69018 4.34057 8.62707 3.92328 9.7025C4.86803 12.1373 7.23361 13.862 10.0002 13.862C10.8326 13.862 11.6287 13.7058 12.3608 13.4212ZM16.0771 9.70252C15.7843 10.457 15.3552 11.1432 14.8199 11.7311L15.8813 12.7926C16.6329 11.9813 17.2187 11.0143 17.5849 9.94564C17.6389 9.78806 17.6389 9.61699 17.5849 9.45941C16.5055 6.30928 13.5184 4.04306 10.0002 4.04306C9.13525 4.04306 8.30244 4.18002 7.52218 4.43341L8.75139 5.66262C9.1556 5.58416 9.57311 5.54306 10.0002 5.54306C12.7667 5.54306 15.1323 7.26771 16.0771 9.70252Z" fill="#667085"></path>
                        </svg> : <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 13.862C7.23361 13.862 4.86803 12.1373 3.92328 9.7025C4.86804 7.2677 7.23361 5.54306 10.0002 5.54306C12.7667 5.54306 15.1323 7.26771 16.0771 9.70252C15.1323 12.1373 12.7667 13.862 10.0002 13.862ZM10.0002 4.04306C6.48191 4.04306 3.49489 6.30927 2.4155 9.45939C2.3615 9.61697 2.3615 9.78803 2.41549 9.94561C3.49488 13.0957 6.48191 15.362 10.0002 15.362C13.5184 15.362 16.5055 13.0958 17.5849 9.94564C17.6389 9.78806 17.6389 9.61699 17.5849 9.45941C16.5055 6.30928 13.5184 4.04306 10.0002 4.04306ZM9.99151 7.84422C8.96527 7.84422 8.13333 8.67616 8.13333 9.7024C8.13333 10.7286 8.96527 11.5606 9.99151 11.5606H10.0064C11.0326 11.5606 11.8646 10.7286 11.8646 9.7024C11.8646 8.67616 11.0326 7.84422 10.0064 7.84422H9.99151Z" fill="#98A2B3"></path>
                        </svg>
                       }
                      </span>
                    </div>
                  </div>
                </div>
              </form>
              <div className="space-x-3 mt-6">
                <button
                onClick={changePassword}
                type="button" className="text-white dark:bg-white/5 text-sm font-medium transition-colors hover:bg-gray-800 py-3 px-6 rounded-full border-gray-200 bg-gray-700">
                  Change Password
                </button>
                <button
                onClick={()=>setPasswordChange(!isPasswordChange)}
                type="button" className="text-gray-700 text-sm font-medium py-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-6 rounded-full border-gray-200 border">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}