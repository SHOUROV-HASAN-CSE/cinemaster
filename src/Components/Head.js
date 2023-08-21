import React from 'react';

const Head = ({title}) => {
  return (
    <div className='w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md '>
      <img src="/images/head.png" alt="" className='w-full h-full object-cover' />
      <div className='absolute lg:top-24 top-16 w-full flex-colo'>
        <h1 className='text-2xl lg:text-4xl text-white text-center font-extrabold'>{title && title}</h1>
      </div>
      head
    </div>
  );
};

export default Head;