// "use client"

// import { useState } from "react"
// import { BsTrash } from "react-icons/bs"
// import { IoIosArrowBack } from "react-icons/io"
// import MyToggle from "../components/my-toggle"

// const ShoppingCart = () => {
//   const [value, setValue] = useState(0)

//   const decrement = () => {
//     setValue((prev) => Math.max(prev - 1, 0))
//   }

//   const increment = () => {
//     setValue((prev) => prev + 1)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = parseInt(e.target.value, 10)
//     if (!isNaN(newValue)) {
//       setValue(newValue)
//     }
//   }
//   return (
//     <div className="container mx-auto mt-10">
//       <div className="sm:flex shadow-md my-10">
//         <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
//           <div className=" justify-between border-b pb-8">
//             <h2 className="font-bold text-[45px] leading-4">Shopping Cart</h2>
//             <a
//               href="#"
//               className="flex text-[#191919] text-xs font-light mt-10"
//             >
//               <IoIosArrowBack />
//               Continue Shopping
//             </a>
//           </div>

//           <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
//             <div className="md:w-4/12 2xl:w-1/4 w-full">
//               <img
//                 src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
//                 alt="Black Leather Purse"
//                 className="h-full object-center object-cover md:block hidden"
//               />
//               <img
//                 src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
//                 alt="Black Leather Purse"
//                 className="md:hidden w-full h-full object-center object-cover"
//               />
//             </div>
//             <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
//               <div className="flex items-center justify-between w-full">
//                 <p className="text-base font-black leading-none text-gray-800">
//                   Balzblock T50 Woodwork - Bedside table with safe/gun cabinet
//                 </p>
//                 <BsTrash className="text-gray-600 hover:text-red-500 cursor-pointer" />
//               </div>
//               <div className="flex">
//                 <div>
//                   <p className="text-xs leading-3 text-gray-600 pt-2">
//                     Height: 10 inches
//                   </p>
//                   <p className="text-xs leading-3 text-gray-600 py-4">
//                     Color: Black
//                   </p>
//                   <p className="w-96 text-xs leading-3 text-gray-600">
//                     Composition: 100% calf leather
//                   </p>
//                 </div>
//                 <div>
//                   <div className="py-6 px-3 inline-block bg-white content-center">
//                     <div className="flex items-center gap-x-1.5">
//                       <button
//                         type="button"
//                         onClick={decrement}
//                         className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium  border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
//                         aria-label="Decrease"
//                       >
//                         <svg
//                           className="shrink-0 size-3.5"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <path d="M5 12h14" />
//                         </svg>
//                       </button>

//                       <input
//                         className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
//                         style={{ MozAppearance: "textfield" }}
//                         type="number"
//                         aria-roledescription="Number field"
//                         value={value}
//                         onChange={handleChange}
//                       />

//                       <button
//                         type="button"
//                         onClick={increment}
//                         className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium  border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
//                         aria-label="Increase"
//                       >
//                         <svg
//                           className="shrink-0 size-3.5"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <path d="M5 12h14" />
//                           <path d="M12 5v14" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           id="summary"
//           className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
//         >
//           <div className="flex justify-between mt-10 mb-5">
//             <span className="font-semibold text-sm uppercase">Subtotal</span>
//             <span className="font-semibold text-sm">590$</span>
//           </div>
//           <div>
//             <label className="inline-block mb-3 font-semibold text-sm uppercase">
//               Shipping
//             </label>
//             <div className="block p-2 text-gray-600 w-full text-sm">
//               <div className="grid space-y-3">
//                 <div className="relative flex items-start">
//                   <div className="flex items-center h-5 mt-1">
//                     <input
//                       id="hs-radio-delete"
//                       name="hs-radio-with-description"
//                       type="radio"
//                       defaultChecked
//                       className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
//                       aria-describedby="hs-radio-delete-description"
//                     />
//                   </div>
//                   <label htmlFor="hs-radio-delete" className="ms-3 mt-1">
//                     <span className="block text-sm font-semibold text-gray-800">
//                       Delivery to curbside (by freight forwarder): 219 €
//                     </span>
//                   </label>
//                 </div>

//                 <div className="relative flex items-start">
//                   <div className="flex items-center h-5 mt-1">
//                     <input
//                       id="hs-radio-archive"
//                       name="hs-radio-with-description"
//                       type="radio"
//                       className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
//                       aria-describedby="hs-radio-archive-description"
//                     />
//                   </div>
//                   <label htmlFor="hs-radio-archive" className="ms-3 mt-1">
//                     <span className="block text-sm font-semibold text-gray-800">
//                       Delivery to the destination (by BALZWERK®): 379 €
//                     </span>
//                   </label>
//                 </div>
//                 <div className="relative flex items-start">
//                   <div className="flex items-center h-5 mt-1">
//                     <input
//                       id="hs-radio-archive"
//                       name="hs-radio-with-description"
//                       type="radio"
//                       className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
//                       aria-describedby="hs-radio-archive-description"
//                     />
//                   </div>
//                   <label htmlFor="hs-radio-archive" className="ms-3 mt-1">
//                     <span className="block text-sm font-semibold text-gray-800">
//                       Delivery includes assembly & anchoring for products with
//                       safe (by BALZWERK®): 629 €
//                     </span>
//                   </label>
//                 </div>
//                 <div className="relative flex items-start">
//                   <div className="flex items-center h-5 mt-1">
//                     <input
//                       id="hs-radio-archive"
//                       name="hs-radio-with-description"
//                       type="radio"
//                       className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500"
//                       aria-describedby="hs-radio-archive-description"
//                     />
//                   </div>
//                   <label htmlFor="hs-radio-archive" className="ms-3 mt-1">
//                     <span className="block text-sm font-semibold text-gray-800">
//                       Pick up in the showroom (availability for pick up will be
//                       communicated by email)
//                     </span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="py-4">
//             <MyToggle />
//           </div>
//           <div className="border-t py-6">
//             <div className="flex  justify-between py-1 font-semibold text-sm uppercase">
//               <span>Total</span>
//               <span>$600</span>
//             </div>
//             <p
//               className="text-[#8e8e8e] text-sm float-left w-full
//             "
//             >
//               (incl. VAT., excl. Shipping costs)
//             </p>
//           </div>
//           <div className="mt-6 flex justify-around items-center">
//             <button
//               type="button"
//               className="relative inline-block px-4 py-2 font-medium group"
//             >
//               <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
//               <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
//               <span className="relative text-black group-hover:text-white">
//                 Proceed to checkout
//               </span>
//             </button>

//             <button
//               type="button"
//               className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
//             >
//               <svg
//                 className="mr-2 -ml-1 w-4 h-4"
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fab"
//                 data-icon="paypal"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 384 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
//                 ></path>
//               </svg>
//               Check out with PayPal
//             </button>
//           </div>
//           <div className="mt-6 flex items-center justify-center gap-8">
//             <img
//               className="h-8 w-auto dark:hidden"
//               src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
//               alt=""
//             />
//             <img
//               className="hidden h-8 w-auto dark:flex"
//               src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
//               alt=""
//             />
//             <img
//               className="h-8 w-auto dark:hidden"
//               src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
//               alt=""
//             />
//             <img
//               className="hidden h-8 w-auto dark:flex"
//               src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
//               alt=""
//             />
//             <img
//               className="h-8 w-auto dark:hidden"
//               src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
//               alt=""
//             />
//             <img
//               className="hidden h-8 w-auto dark:flex"
//               src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ShoppingCart
