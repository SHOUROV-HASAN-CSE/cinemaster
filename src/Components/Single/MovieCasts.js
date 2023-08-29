import React from 'react';
import Titles from '../Titles';
import { FaUserFriends } from "react-icons/fa";
import { Autoplay } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';
import {  UsersData } from '../../Data/MovieData';

const MovieCasts = () => {
  return (
    <div className='my-12'>
      <Titles title='Casts' Icon={FaUserFriends}/>
      <div className='mt-10'>
        <Swiper
        slidesPerView={1} 
        spaceBetween={30} 
        Autoplay={true}
        speed={1000}
        loop={true}
          breakpoints={{
            0:{
              slidesPerView: 1,
            },
            400:{
              slidesPerView: 2,              
            },
            786:{
              slidesPerView: 3,
            },
            1024:{
              slidesPerView: 4,
            },
            1280:{
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
          autoplay={{delay: 1000, disableOnInteraction: false}}
          >
            {
              UsersData.map((user, i) =>(
                <SwiperSlide key={i}>
                  <div className='w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800'>
                  <img src={`/images/${user?.image}`} alt={user?.name} className='w-full h-64 rounded object-cover mb-4' />
                  <p>{user?.name}</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
      </div>
    </div>
  );
};

export default MovieCasts;