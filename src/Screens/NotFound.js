import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img className='w-full h-96 object-contain' src="/images/404.svg" alt="Not Found" />
      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6'>The page you are looking for does not exist. You may have mistyped the URL</p>
      <Link to="/" className='bg-subMain flex-rows gap-2 transitions text-white hover:text-main font-medium py-3 px-6 rounded-md'><FaHome className='h-6 w-6'/>Back To Home</Link>
    </div>
  );
};

export default NotFound;