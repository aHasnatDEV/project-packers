import React from 'react';
import multimedia from '../assets/icon/multimedia.png';

/**
 * Spinner Component
 * @returns Spinner
 */
const Spinner = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div>
        <img
          src={multimedia}
          className='w-20 animate-spin'
        />
      </div>
    </div>
  );
};

export default Spinner;
