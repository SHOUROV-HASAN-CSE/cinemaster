import React from 'react';
import Layout from './../Layouts/Layout';
import { useParams, Link } from 'react-router-dom';
import { Movies } from '../Data/MovieData';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { FaHeart, FaCloudDownloadAlt } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';

const WatchPage = () => {
  let {id} = useParams()
  const movie = Movies.find((movie) => movie.name === id);
  const [play, setPlay] = useState(false)
  return (
    <Layout>
      <div className='container mx-auto bg-dry p-6 mb-12'>
        <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
          <Link to={`/movie/${movie?.name}`} className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
            <BiArrowBack/>
            {movie?.name}
          </Link>
          <div className='flex-btn sm:w-auto w-full gap-5'>
            <button className='bg-white hover:text-subMain transitions bg-opacity-30 rounded px-4 py-3 text-white text-sm'>
              <FaHeart/>
            </button>
            <button className='bg-subMain flex-rows gap-2 hover:text-main transitions rounded px-8 font-medium py-3 text-white text-sm'>
              <FaCloudDownloadAlt/> Download
            </button>
          </div>
        </div>
        {/* Watch video */}
        {
          play ? (
            <video controls autoPlay className="w-full md:h-screen h-full rounded">
              <source src="/images/movie.mp4" type="video/mp4" title={movie?.name}/>
            </video>
          ) : (
            <div className='w-full h-screen rounded-lg overflow-hidden relative'>
              <div className='absolute left-0 top-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo'>
                <button onClick={() =>setPlay(true)} className='bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl'>
                  <FaPlay/>
                </button>
              </div>
              <img src={movie?.image? `/images/movies/${movie.image}` : 'images/user.png'} alt={movie?.name} className='w-full h-full object-cover rounded-lg' />
            </div>
          )
        }
      </div>
    </Layout>
  );
};

export default WatchPage;