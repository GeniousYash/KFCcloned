/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from  'react'
import DealsBanner from "../../src/assets/accessories/offer_deals_banner.777f20e1.svg"
import lines from "../../src/assets/accessories/download.png";

const Banner = () => {

     const DealData = [
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=49.79",
               name:"FREE CHICKEN ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS.",
               description:"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=49.79",
               name:"ADD 2 PC HOT N CRISPY CHICKEN AT JUST RS 99 ON MIN CART VALUE OF RS 499 OR MORE. APPLICABLE ON 2ND & 3RD ORDER FOR SIGNED IN USER.",
               description:"Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=49.79",
               name:"UPTO RS 100 OFF ON MIN CART VALUE OF RS 699 OR MORE . APPLICABLE ON 4TH ORDER ONWARDS FOR SIGNED IN USER.",
               description:"Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for signed in user.",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/PHP75.jpg?ver=49.79",
               name:"GET FLAT RS.75 OFF ON A CART VALUE OF RS.599 OR ABOVE",
               description:"Get flat Rs.75 off on a cart value of Rs.599 or above",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYPOP.jpg?ver=49.79",
               name:"FREE POPCORN (MED) ON A CART VALUE OF 499 OR MORE. SUNDAY ONLY",
               description:"Free Popcorn (Med) on a cart value of 499 or more. Sunday only",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYCHKN.jpg?ver=49.79",
               name:"FREE 1PC CHICKEN ON A CART VALUE OF 499 OR MORE. SUNDAY ONLY",
               description:"Free 1pc Chicken on a cart value of 499 or more. Sunday only",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYSTRIPS.jpg?ver=49.79",
               name:"FREE 3PC STRIPS ON A CART VALUE OF 499 OR MORE. SUNDAY ONLY",
               description:"Free 3pc Strips on a cart value of 499 or more. Sunday only",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYVZINGER.jpg?ver=49.79",
               name:"FREE VEG ZINGER ON A CART VALUE OF 499 OR MORE. SUNDAY ONLY",
               description:"Free Veg Zinger on a cart value of 499 or more. Sunday only",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYFRIES.jpg?ver=49.79",
               name:"FREE FRIES (MED) ON A CART VALUE OF 499 OR MORE. SUNDAY ONLY",
               description:"Free Fries (Med) on a cart value of 499 or more. Sunday only",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg?ver=49.79",
               name:"1 PC FREE VEG ZINGER ON A CART VALUE OF RS.499 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS",
               description:"1 Pc free Veg Zinger on a cart value of Rs.499 or above on first order. Only for registered users",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYZINGER.jpg?ver=49.79",
               name:"FREE CHICKEN ZINGER ON A CART VALUE OF 499 OR MORE. SUNDAY ONLY",
               description:"Free Chicken Zinger on a cart value of 499 or more. Sunday only",
          },
          {
               img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/FREEROLL.jpg?ver=49.79",
               name:"FREE DOUBLE CHICKEN ROLL ON A CART VALUE OF 999 OR ABOVE.",
               description:"Free Double chicken roll on a cart value of 999 or above.",
          },
     ]


     const [showModal, setShowModal] = useState(false);
     const [selectedDeal, setSelectedDeal] = useState(null);

     const handleViewDetails = (deal) => {
          setSelectedDeal(deal);
          setShowModal(true);
     };

  return (
     <div className='pt-[100px] '>
          <div className='w-100% py-[15px] flex flex-row items-center justify-center bg-neutral-800 text-white'>
               <h1 className='uppercase font-national2-bold text-xl'>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h1>
               <button className='rounded-full bg-red-600 px-[40px] py-[10px] ml-4 text-md'>Start Order</button>
          </div>
          <div className='w-full flex justify-center items-center'>
                <img className='w-100% h-100%' src={DealsBanner} alt="" />
                <h1 className='absolute text-7xl text-white font-national2-bold'>OFFERS</h1>
          </div>
          <div className='w-full flex justify-center'>
               <div className='w-[70%] flex justify-left'>
                    <img src={lines} alt="" />
               </div>
          </div>
          <div className='w-full h-auto flex flex-col justify-center mt-[50px]'>
               <div className='w-[70%] m-auto'>
                    <div className='flex flex-row justify-between items-center'><p className='text-4xl font-national2-bold uppercase'>National Offers</p><p className='text-xs underline'>Sign In to see exclusive offers & deals</p></div>
               </div>
               <div className='w-[70%] grid grid-cols-3 m-auto gap-[20px] mt-[50px] mb-[50px]'>
                    {DealData.map((deal,i)=>(
                         <div key={i} className='rounded-lg overflow-hidden shadow-md flex flex-col justify-between'>
                              <div><img className='w-[100%] h-auto' src={deal.img} alt="" /></div>
                              <div className='w-[90%] m-auto line-clamp-1 text-[35px] text-red-600 font-national2-bold'><h1>{deal.name}</h1></div>
                              <div className='w-[90%] m-auto line-clamp-2 text-s font-national2-regular'><p>{deal.description}</p></div>
                              <div className='w-[90%] m-auto flex flex-row justify-between items-center mb-[20px] mt-[20px]'><p  onClick={() => handleViewDetails(deal)} className='font-national2-regular underline'>View Details</p><button className='border-[2px] border-black px-[25px] py-[8px] rounded-full flex items-center font-national2-regular hover:bg-black hover:text-white'>Apply Offer</button></div>
                         </div>
                    ))}
               </div>
          </div>
          {showModal && selectedDeal ? (
                    <>
                         <div className="w-[40%] m-auto flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-md">
                              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                   <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                             <h3 className="text-3xl font-national2-bold">EXCLUSIVE OFFERS FOR YOU</h3>
                                             <button
                                                  className="bg-transparent border-0 text-black float-right"
                                                  onClick={() => setShowModal(false)}
                                             >
                                                  <span className="text-black opacity-7 h-6 w-6 block py-0 rounded-full flex justify-center items-center text-4xl">
                                                       x
                                                  </span>
                                             </button>
                                        </div>
                                        <div className="w-[80%] m-auto text-center relative p-6 flex-auto">
                                             <h1 className="text-2xl font-bold">{selectedDeal.name}</h1>
                                             <p className="mt-4">{selectedDeal.description}</p>
                                        </div>
                                        <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                             <button className='w-[80%] border-[2px] border-black px-[25px] py-[8px] rounded-full flex items-center justify-center font-national2-regular hover:bg-black hover:text-white' onClick={() => setShowModal(false)}>Apply Offer</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </>
               ) : null}
    </div>
  )
}

export default Banner
