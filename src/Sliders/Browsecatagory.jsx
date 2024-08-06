/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Browsecatagory = () => {
     const browsedata = [
          {
               img:"../../src/assets/BrowseCat/img1.jpg",
               name:"International Burger Fest",
          },
          {
               img:"../../src/assets/BrowseCat/img2.jpg",
               name:"KFC Lunch Special",
          },
          {
               img:"../../src/assets/BrowseCat/img3.jpg",
               name:"Box Meals",
          },
          {
               img:"../../src/assets/BrowseCat/img4.jpg",
               name:"Burgers",
          },
          {
               img:"../../src/assets/BrowseCat/img5.jpg",
               name:"Chicken Buckets",
          },
          {
               img:"../../src/assets/BrowseCat/img6.jpg",
               name:"Rice Bowlz",
          },
          {
               img:"../../src/assets/BrowseCat/img7.jpg",
               name:"New Chicken Rolls",
          },
          {
               img:"../../src/assets/BrowseCat/img8.jpg",
               name:"Vew All Menu",
          },
     ]
  return (
    <div className='w-full h-auto'>
     <div className='w-[77%] h-auto py-[100px] flex flex-col m-auto'>
          <div className='w-[100%] flex flex-row items-center'>
               <h1 className='w-auto text-nowrap font-national2-bold uppercase text-[40px] text-stone-900'>Browse Catagories</h1><span className='w-[100%] ml-[30px] h-0 border-t-2 border-gray-300'></span>
          </div>
          <div className='grid grid-cols-4 items-center justify-center gap-[20px] mt-[80px]'>
               {browsedata.map((item,index)=>(
                    <div key={index} className='cursor-pointer'>
                         <div className='w-auto h-[150px] object-contain rounded-t-md overflow-hidden'>
                              <img className='w-[300px] h-[100%]' src={item.img} alt={item.name} />
                         </div>
                         <div className='bg-zinc-100 py-4 flex justify-center items-center font-national2-bold uppercase text-[20px]'>
                              <h1>{item.name}</h1>
                         </div>
                    </div>
               ))}
          </div>
     </div>
    </div>
  )
}

export default Browsecatagory
