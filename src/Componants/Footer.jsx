/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import KFCfl from "../../src/assets/logo/KFCfl.svg";
import Googleplaystor from "../../src/assets/accessories/google_play.svg";
import Appleplaystor from "../../src/assets/accessories/apple.svg";


const Footer = () => {
  return (
    <div className='w-[100%] h-auto bg-neutral-800 pt-[170px]'>
          <div className='w-[90%] flex flex-row m-auto py-[50px]'>
               <div className='w-[70%] flex flex-col'>
                    <div className='flex justify-between mb-[150px]'>
                         <div>
                              <img className='w-[50px] h-[50px]' src={KFCfl} alt="KFCFooterLogo"/>
                         </div>
                         <div className='flex gap-[20px]'>
                              <div>
                                   <ul>
                                        <h1 className='font-medium text-white'>KFC India</h1>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>About KFC</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>KFC Care</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Careers</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Our Golden Past</li>
                                   </ul>
                              </div>
                              <div>
                                   <ul>
                                        <h1 className='font-medium text-white'>Legal</h1>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Terms and Conditions</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Privacy Policy</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Disclaimer</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Caution Notice</li>
                                   </ul>
                              </div>
                              <div>
                                   <ul>
                                        <h1 className='font-medium text-white'>KFC Food</h1>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Menu</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Order Lookup</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Gift Card</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Nutrition & Allergen</li>
                                   </ul>
                              </div>
                              <div>
                                   <ul>
                                        <h1 className='font-medium text-white'>Support</h1>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Get Help</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Contact Us</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>KFC Feedback</li>
                                        <li className='cursor-pointer my-[10px] text-s text-white'>Privacy Policy</li>
                                   </ul>
                              </div>
                         </div>
                         <div className='flex items-start'>
                              <div className='flex items-center h-50px'>
                                   <FaLocationDot className='text-red-600'/>
                                   <p className='font-medium text-white underline cursor-pointer'>Find a KFC</p>
                              </div>
                         </div>
                    </div>
                    <div className='flex justify-center text-white text-xs'><p>Copyright © KFC Corporation 2024 All rights reserved</p></div>
               </div>
               <div className='w-[30%] flex flex-col'>
                    <div className='flex flex-row justify-end gap-[20px]'>
                         <div><img className='cursor-pointer' src={Googleplaystor} alt="" /></div>
                         <div><img className='cursor-pointer' src={Appleplaystor} alt="" /></div>
                    </div>
                    <div></div>
               </div>
          </div>
    </div>
  )
}

export default Footer
