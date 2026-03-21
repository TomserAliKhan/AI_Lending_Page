import React, { use } from "react";
import { useSelector } from "react-redux";

const Billing = () => {
   const user=useSelector((state)=>state.auth.user[0])
  return (
    <div className="bg-[#f9fafb] dark:bg-black p-4 py-5  overflow-hidden w-full">
      <div className="bg-white p-5 dark:bg-black mb-10 shadow-sm rounded-xl px-6">
        <h1 className="text-xl pb-1 font-bold ">Billings</h1>
        <p className="pb-5">Invoices & payments Informations</p>

        <div class="overflow-x-auto border   dark:bg-black border-gray-200 dark:border-gray-800 rounded-xl">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-100 dark:bg-white/5 border-b dark:border-gray-800 border-gray-200">
                <th class="text-left font-medium px-5 py-3.5 text-gray-500 dark:text-gray-400 text-base">
                  Package
                </th>
                <th class="text-left font-medium px-5 py-3.5 text-gray-500 dark:text-gray-400 text-base">
                  Amount
                </th>
                <th class="text-left font-medium px-5 py-3.5 text-gray-500 dark:text-gray-400 text-base">
                  Purchased On
                </th>
                <th class="font-medium px-5 py-3.5 text-right text-gray-500 dark:text-gray-400 text-base">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
              <tr>
                <td class="px-5 whitespace-nowrap py-3.5 font-medium text-gray-700 dark:text-gray-400 text-sm">
                  Plus plan - Annually
                </td>
                <td class="px-5 whitespace-nowrap py-3.5 font-medium text-gray-700 dark:text-gray-400 text-sm">
                  $240
                </td>
                <td class="px-5 py-3.5 font-normal text-gray-500 dark:text-gray-400 text-sm">
                  15 Jan, 2028
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap text-right">
                  <button class="text-white text-sm inline-flex gap-2 items-center justify-center font-medium transition-colors hover:bg-gray-800 py-3 px-5 rounded-full dark:bg-white/5 border-gray-200 bg-gray-700">
                    Download PDF
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0013 14.0833C9.78611 14.0833 9.59207 13.9927 9.45529 13.8475L5.61537 10.01C5.32239 9.7172 5.32224 9.24233 5.61504 8.94934C5.90784 8.65635 6.38271 8.6562 6.6757 8.949L9.25133 11.523L9.25133 3.33333C9.25133 2.91912 9.58712 2.58333 10.0013 2.58333C10.4155 2.58333 10.7513 2.91912 10.7513 3.33333L10.7513 11.5196L13.3237 8.94899C13.6167 8.6562 14.0916 8.65636 14.3844 8.94936C14.6772 9.24235 14.677 9.71723 14.384 10.01L10.5756 13.8158C10.438 13.9794 10.2318 14.0833 10.0013 14.0833ZM4.08301 13.3333C4.08301 12.9191 3.74722 12.5833 3.33301 12.5833C2.91879 12.5833 2.58301 12.9191 2.58301 13.3333V15.1667C2.58301 16.4093 3.59037 17.4167 4.83301 17.4167H15.1671C16.4097 17.4167 17.4171 16.4093 17.4171 15.1667V13.3333C17.4171 12.9191 17.0813 12.5833 16.6671 12.5833C16.2529 12.5833 15.9171 12.9191 15.9171 13.3333V15.1667C15.9171 15.5809 15.5813 15.9167 15.1671 15.9167H4.83301C4.41879 15.9167 4.08301 15.5809 4.08301 15.1667V13.3333Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-3.5 whitespace-nowrap font-medium dark:text-gray-400 text-gray-700 text-sm">
                  Pro plan - Annually
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap dark:text-gray-400 font-medium text-gray-700 text-sm">
                  $240
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap dark:text-gray-400 font-normal text-gray-500 text-sm">
                  15 Jan, 2028
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap text-right">
                  <button class="text-white dark:bg-white/5 text-sm inline-flex gap-2 items-center justify-center font-medium transition-colors hover:bg-gray-800 py-3 px-5 rounded-full border-gray-200 bg-gray-700">
                    Download PDF
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0013 14.0833C9.78611 14.0833 9.59207 13.9927 9.45529 13.8475L5.61537 10.01C5.32239 9.7172 5.32224 9.24233 5.61504 8.94934C5.90784 8.65635 6.38271 8.6562 6.6757 8.949L9.25133 11.523L9.25133 3.33333C9.25133 2.91912 9.58712 2.58333 10.0013 2.58333C10.4155 2.58333 10.7513 2.91912 10.7513 3.33333L10.7513 11.5196L13.3237 8.94899C13.6167 8.6562 14.0916 8.65636 14.3844 8.94936C14.6772 9.24235 14.677 9.71723 14.384 10.01L10.5756 13.8158C10.438 13.9794 10.2318 14.0833 10.0013 14.0833ZM4.08301 13.3333C4.08301 12.9191 3.74722 12.5833 3.33301 12.5833C2.91879 12.5833 2.58301 12.9191 2.58301 13.3333V15.1667C2.58301 16.4093 3.59037 17.4167 4.83301 17.4167H15.1671C16.4097 17.4167 17.4171 16.4093 17.4171 15.1667V13.3333C17.4171 12.9191 17.0813 12.5833 16.6671 12.5833C16.2529 12.5833 15.9171 12.9191 15.9171 13.3333V15.1667C15.9171 15.5809 15.5813 15.9167 15.1671 15.9167H4.83301C4.41879 15.9167 4.08301 15.5809 4.08301 15.1667V13.3333Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-3.5 whitespace-nowrap font-medium text-gray-700 dark:text-gray-400 text-sm">
                  Enterprise - Monthly
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap font-medium text-gray-700 dark:text-gray-400 text-sm">
                  $599
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400 text-sm">
                  15 Jan, 2028
                </td>
                <td class="px-5 py-3.5 whitespace-nowrap text-right">
                  <button class="text-white dark:bg-white/5 text-sm inline-flex gap-2 items-center justify-center font-medium transition-colors hover:bg-gray-800 py-3 px-5 rounded-full border-gray-200 bg-gray-700">
                    Download PDF
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0013 14.0833C9.78611 14.0833 9.59207 13.9927 9.45529 13.8475L5.61537 10.01C5.32239 9.7172 5.32224 9.24233 5.61504 8.94934C5.90784 8.65635 6.38271 8.6562 6.6757 8.949L9.25133 11.523L9.25133 3.33333C9.25133 2.91912 9.58712 2.58333 10.0013 2.58333C10.4155 2.58333 10.7513 2.91912 10.7513 3.33333L10.7513 11.5196L13.3237 8.94899C13.6167 8.6562 14.0916 8.65636 14.3844 8.94936C14.6772 9.24235 14.677 9.71723 14.384 10.01L10.5756 13.8158C10.438 13.9794 10.2318 14.0833 10.0013 14.0833ZM4.08301 13.3333C4.08301 12.9191 3.74722 12.5833 3.33301 12.5833C2.91879 12.5833 2.58301 12.9191 2.58301 13.3333V15.1667C2.58301 16.4093 3.59037 17.4167 4.83301 17.4167H15.1671C16.4097 17.4167 17.4171 16.4093 17.4171 15.1667V13.3333C17.4171 12.9191 17.0813 12.5833 16.6671 12.5833C16.2529 12.5833 15.9171 12.9191 15.9171 13.3333V15.1667C15.9171 15.5809 15.5813 15.9167 15.1671 15.9167H4.83301C4.41879 15.9167 4.08301 15.5809 4.08301 15.1667V13.3333Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

            <div className="bg-white dark:bg-black p-5 shadow-sm rounded-xl px-6">
              <h1 className="text-xl pb-1 font-bold ">Current Plain</h1>
        <p className="pb-5 text-sm">Here is your activated current plan</p>



        <div class="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-xl">
              <table class="w-full">
                <thead>
                  <tr class="bg-gray-100 border-b dark:border-gray-800 dark:bg-white/5 border-gray-200">
                    <th class="text-left font-medium px-5 py-3.5 dark:text-gray-400 text-gray-500 text-base">
                      Package
                    </th>
                    <th class="text-left font-medium px-5 py-3.5 dark:text-gray-400 text-gray-500 text-base">
                      Amount
                    </th>
                    <th class="text-left font-medium px-5 py-3.5 dark:text-gray-400 text-gray-500 text-base">
                      Purchased On
                    </th>
                    <th class="font-medium px-5 py-3.5 dark:text-gray-400 text-gray-500 text-base text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td class="px-5 py-3.5 font-medium text-gray-700 dark:text-gray-400 text-sm">
                     
                      {user.activePlan.package}
                    </td>
                    <td class="px-5 py-3.5 font-medium text-gray-700 dark:text-gray-400 text-sm">
                       {user.activePlan.amount}
                    </td>
                    <td class="px-5 py-3.5 font-normal text-gray-500 dark:text-gray-400 text-sm">
                       {user.activePlan.purchasedOn}
                    </td>
                    <td class="px-5 py-3.5 text-right">
                      <button class=' dark:bg-success-600/15 text-xs justify-center font-medium py-0.5 px-2.5 rounded-full bg-success-50 text-green-400'>
                         {user.activePlan.status}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

            
            </div>
              <div class="mt-7 flex justify-end gap-3">
              <button class="text-red-400 dark:bg-red-200/25 bg-red-400/10 text-sm inline-flex gap-2 items-center justify-center  font-medium transition-colors  py-3 px-6 rounded-full">
                Cancel Subscription
              </button>
              <button class="text-white bg-[#7a5af8] text-sm inline-flex gap-2 items-center justify-center hover:text-white font-medium transition-colors hover:bg-primary-600 py-3 px-6 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10.678 2.29166L3.9873 11.696H9.32126L9.32126 17.7083L16.012 8.30401L10.678 8.30401V2.29166Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                Upgrade Plan
              </button>
            </div>

            </div>
    </div>
  );
};

export default Billing;
