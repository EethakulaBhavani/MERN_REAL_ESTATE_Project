import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import Listingitem from '../components/Listingitem';

export default function Home() {
  const [offerListings,setOfferListings]=useState([]);
  const [saleListings,setSaleListings]=useState([]);
  const [rentListings,setRentListings]=useState([]);
  SwiperCore.use([Navigation]);
  //console.log(saleListings);
  useEffect(()=>{
    const fetchOfferListings=async()=>{
      try {
        const res=await fetch('/api/listing/get?offer=true&limit=4');
        const data=await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
        
        
      }
    };

    const fetchRentListings=async()=>{
      try {
        const res=await fetch('/api/listing/get?type=rent&limit=4');
        const data=await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
        
      }
    };

    const fetchSaleListings=async()=>{
      try {
        const res=await fetch('/api/listing/get?type=sale&limit=4');
        const data=await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchOfferListings();
  },[]);
  return (
    <div>
      {/*top title */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className='text-lime-900 font-bold text-3xl lg:text-6xl'>Find the perfect <span className='text-red-900'>Space</span> 
        <br/>to call <span className='text-red-900'>Home</span></h1>
        <div className="text-red-500 text-xs sm:text-sm"> Finding a home is about more than just square footage and location.<br/> It's about finding a place where you can truly belong. Let us guide you to that perfect place.</div>
        <Link to={"/search"} className='font-bold text-red-900 text-xs sm:text-sm hover:underline'>Let's begin...</Link>
      </div>

      {/*images */}
      <Swiper navigation>
      {
        offerListings && offerListings.length>0 && offerListings.map((listing)=>(
          <SwiperSlide>
            <div style={{background:`url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize:"cover" }} className="h-[500px]" key={listing._id}></div>
          </SwiperSlide>
        ))
      }

      </Swiper>
      {/*all the lists */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10"></div>
      {
        offerListings && offerListings.length>0 &&(
          <div className="ml-7">
            <div className="my-3 ">
              <h2 className='text-2xl font-semibold text-red-600'>Recent Offers</h2>
              <Link className='text-sm text-red-950 hover:underline font-semibold' to={'/search?offer=true'}>
              Show more offers..
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {
                offerListings.map((listing)=>(
                  <Listingitem listing={listing} key={listing._id}/>
                ))
              }
            </div>
          </div>
        )
      }
      {
        rentListings && rentListings.length>0 &&(
          <div className="ml-7">
            <div className="my-3">
              <h2 className='text-2xl font-semibold text-red-600'>Recent Places for Rents</h2>
              <Link className='text-sm text-red-950 hover:underline font-semibold' to={'/search?type=rent'}>
              Show more places for rent..
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {
                rentListings.map((listing)=>(
                  <Listingitem listing={listing} key={listing._id}/>
                ))
              }
            </div>
          </div>
        )
      }
      {
        saleListings && saleListings.length>0 &&(
          <div className="ml-7">
            <div className="my-3">
              <h2 className='text-2xl font-semibold text-red-600'>Recent Sales</h2>
              <Link className='text-sm text-red-950 hover:underline font-semibold' to={'/search?type=sale'}>
              Show more sales..
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {
                saleListings.map((listing)=>(
                  <Listingitem listing={listing} key={listing._id}/>
                ))
              }
            </div>
          </div>
        )
      }

    </div>
  )
}
