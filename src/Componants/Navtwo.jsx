/* eslint-disable no-unused-vars */
import React from 'react'
import KFClogo from '../assets/logo/kfcLogo.492728c6.svg';
import { FaLocationDot } from "react-icons/fa6";
import AccountLogo from "../assets/logo/Account_Icon.svg"
import bucketCart from "../assets/logo/bucket_cart_icon.svg";
import { Link } from 'react-router-dom';
import "../index.css";


const Navtwo = () => {
     return (
          <div className='w-screen h-auto bg-white fixed top-0 flex flex-col z-999999'>
           <div className='w-[100%] border-t-2 pt-[30px] pb-[30px]'>
                <div className='w-[100%] px-[10%] flex flex-row items-center justify-between'>
                     <div className='w-[21%] flex flex-row justify-between items-center gap-50px'>
                          <div>
                               <Link to="/"><img src={KFClogo} alt="KFC Logo" /></Link>
                          </div>
                          <div className='font-national2-medium'>
                               <Link to="/menu" ><p>Menu</p></Link>
                          </div>
                          <div className='font-national2-medium'>
                               <Link to="/deal"><p>Deals</p></Link>
                          </div>
                     </div>
                     <div className='w-[21%] flex flex-row justify-between items-center gap-50px'>
                          <div className='w-[100%] font-national2-medium flex flex-row justify-evenly border-r-[2px]'>
                               <img src={AccountLogo} alt="Account Logo" />
                               <p>Sign In</p>
                          </div>
                          <div className='font-national2-medium w-[100%] flex flex-row justify-center items-center'>
                               <p>₹0</p>
                               <img className='w-[40px]' src={bucketCart} alt="Bucket Cart" />
                          </div>
                     </div>
                </div>
           </div>
          </div>
        )
}

export default Navtwo
