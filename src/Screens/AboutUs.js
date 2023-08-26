import React from 'react';
import Head from '../Components/Head';
import Layout from './../Layouts/Layout';

const AboutUs = () => {
  return (
      <Layout>
        <div className='min-height-screen container mx-auto px-2 my-6'>
          <Head title="About Us"/>
          <div className='xl:py-20 py-10 px-4'>
            <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
              <div>
                <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                  Welcome to our Cinemaster
                </h3>
              <div className='mt-3 text-sm leading-8 text-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, necessitatibus! Veniam magnam temporibus at expedita, itaque perspiciatis sint blanditiis qui ratione voluptatibus unde? Quia, dolorem cumque assumenda nemo optio dicta ipsum debitis aspernatur! Perferendis deserunt excepturi fugit natus officia cupiditate, est adipisci dolor, esse, sit rem cumque laudantium totam ducimus quas sint molestias delectus repudiandae! Aliquid, itaque ipsa. Eum nihil suscipit commodi praesentium qui ipsam vel ratione, porro quae voluptate minus, explicabo quia culpa magnam harum iste, labore saepe amet?</p>
              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>10K</span>
                  <h4 className='text-lg font-semibold mb-1'>Listed Movies</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptates.</p>
                </div>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>8K</span>
                  <h4 className='text-lg font-semibold mb-1'>Lovely Users</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptates.</p>
                </div>
              </div>
              </div>
              <div className='mt-10 lg:mt-0'>
                <img src="/images/about2.jpg" alt="about2" className='w-full xl:block hidden h-header rounded-lg object-cover' />
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default AboutUs;