import React from 'react';
import { FiUser } from "react-icons/fi";

const Promos = () => {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col'>

        <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium lg:leading-relaxed'>Download Your Movies watch offline <br /> Enjoy on Your Mobile</h1>
        <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab animi pariatur cum ea est rerum aperiam reiciendis magnam inventore, nulla ducimus laudantium magni nam dolorem et vel perspiciatis excepturi beatae asperiores ullam veniam explicabo incidunt optio? Aut, laudantium suscipit harum distinctio nemo facilis veritatis pariatur rem laborum repellendus est.</p>

        <div className='flex gap-4 md:text-lg text-sm'>
          <div className='flex-colo bg-black text-subMain px-6 py-2 rounded font-bold'> HD 4k</div>
          <div className='flex-rows gap-4 bg-black text-subMain px-6 py-2 rounded font-bold'><FiUser/> 2k</div>
        </div>
        </div>
        <div>
          <img src="/images/mobile.png" alt="mobile" className='w-full object-contain' />
        </div>
      </div>
    </div>
  );
};

export default Promos;