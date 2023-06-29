import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Shimmer = () => {
  return (
    <div className='m-1 p-1'>
     <Skeleton width ={180} height={180}/>
    </div>
  )
}

export default Shimmer