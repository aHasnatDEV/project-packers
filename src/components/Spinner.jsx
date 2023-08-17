import React from 'react';
import multimedia from '../assets/icon/multimedia.png';
import logo from '../assets/icon/logo.svg';

/**
 * Spinner Component
 * @returns Spinner
 */
const Spinner = () => {
  const icon = true;

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div>
        <img
          src={icon ? logo : multimedia}
          className={`w-20 ${icon ? 'animate-scale' : 'animate-spin'}`}
        />
      </div>
    </div>
  );
};

export default Spinner;
