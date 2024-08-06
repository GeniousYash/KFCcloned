/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import lines from "../../src/assets/accessories/download.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardSlider = () => {
     const data = [
          {
            name: `John Morgan`,
            img: "../../src/assets/sliderimageHome/img1.jpg",
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          },
          {
            name: `Ellie Anderson`,
            img: "../../src/assets/sliderimageHome/img2.jpg",
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          },
          {
            name: `Nia Adebayo`,
            img: "../../src/assets/sliderimageHome/img3.jpg",
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          },
          {
            name: `Rigo Louie`,
            img: "../../src/assets/sliderimageHome/img4.jpg",
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          },
          {
            name: `Mia Williams`,
            img: "../../src/assets/sliderimageHome/img5.jpg",
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          },
          {
            name: `Ellie Anderson`,
            img: "../../src/assets/sliderimageHome/img6.jpg",
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          },
          {
            name: `Nia Adebayo`,
            img: "../../src/assets/sliderimageHome/img7.jpg",
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          },
          {
            name: `Rigo Louie`,
            img: "../../src/assets/sliderimageHome/img8.jpg",
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          },
          {
            name: `Mia Williams`,
            img: "../../src/assets/sliderimageHome/img9.jpg",
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          },

     ];
     const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
     return (
          <div className='w-full bg-neutral-800 pl-40  pb-[50px] m-auto'>
               <div className='w-full flex flex-col justify-center'>
                    <div className='w-[70%] flex justify-left'>
                         <img src={lines} alt="" />
                    </div>
                    <div className='w-[100%] m-auto pr-40 mb-[50px] mt-[20px] text-white'>
                         <div className='w-[100%] flex flex-row justify-between items-center'><p className='text-4xl font-national2-bold uppercase'>Exclusive Offers For You</p><p className='text-xs underline'>Sign In to see exclusive offers & deals</p></div>
                    </div>
               </div>
              <div className="mt-100px">
                  <Carousel responsive={responsive}>
                        {data.map((d,i) => (
                          <div key={i} className="w-[350px] flex flex-col bg-white h-[450px] text-black rounded-xl z-2">
                            <div className='w-[350px] h-full bg-indigo-500 flex justify-center items-center rounded-t-xl overflow-hidden'>
                              <img src={d.img} alt={d.name} className="h-full w-full border-2"/>
                            </div>
                            <div className="w-[350px] flex flex-col items-center justify-center gap-4 p-4">
                              <p className="text-xl font-semibold">{d.name}</p>
                              <p className="text-center">{d.review}</p>
                              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                            </div>
                          </div>
                        ))}
                    </Carousel>
              </div>
          </div>
     );
}

export default CardSlider;
