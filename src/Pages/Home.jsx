/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Componants/Navbar';
import CardSlider from '../Sliders/CardSlider';
import BannerSlider from '../Sliders/BannerSlider';
import Browsecatagory from '../Sliders/Browsecatagory';
import Footer from '../Componants/Footer';

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <BannerSlider/>
      <Browsecatagory/>
      <CardSlider />
      <Footer/>
    </div>
  )
}

export default Home;
