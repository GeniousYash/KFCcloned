/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import bannerImage from '../assets/sliderimageHome/Banner_2880x1260px.webp';
import bannerImage2 from '../assets/sliderimageHome/banner2.webp'
import { LuArrowLeftCircle } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";

const BannerSlider = () => {
     const [val,setVal] = useState(false);
  return (
    <div className='w-full h-[700px] bg-zinc-300 flex justify-center items-center pt-[150px]'>
     <div className='w-[100%] h-[100%] relative bg-zinc-500 rounded flex overflow-hidden'>
          <img className={`shrink-0 transition:transform duration-300 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-center-top`} src={bannerImage} alt="" />
          <img className={`shrink-0 transition:transform duration-300 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-center-top`} src={bannerImage2} alt="" />
          <span onClick={()=>setVal(()=>!val)} className='w-[72px] h-[72px] rounded-full bg-zinc-900 absolute bottom-[100px] left-[13%]'>
               <LuArrowLeftCircle className='w-[72px] h-[72px] text-white cursor-pointer'/>
          </span>
          <span onClick={()=>setVal(()=>!val)} className='w-[72px] h-[72px] ml-[100px] rounded-full bg-zinc-900 absolute bottom-[100px] left-[13%]'>
               <LuArrowRightCircle className='w-[72px] h-[72px] text-white cursor-pointer' />
          </span>
     </div>
    </div>
  )
}
export default BannerSlider;
