import React from 'react';
import Layout from './../Layouts/Layout';
import Filters from '../Components/Filters';

const MoviesPage = () => {
  return (
    <Layout>
    <div className='min-height-screen container mx-auto px-2 my-6'>
     <Filters/>
     <p className=''></p>
    </div>
  </Layout>
  );
};

export default MoviesPage;