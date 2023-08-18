import React from 'react';
import arrow_left from '../assets/icon/cd-arrow-left-2.svg';
import arrow_right from '../assets/icon/cd-arrow-right-2.svg';

/**
 * Pagination Component
 * @param {Number} page Current Page Number
 * @param {Number} setPage Set Current Page Number
 * @param {Number} pageLimit Max Page Number
 * @returns Pagination Component
 */
const Pagination = ({ page = Number, setPage = Number, pageLimit = Number }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageLimit; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  const maxVisibleButtons = 5;

  const buttonsToShow = [];
  
  if (page <= maxVisibleButtons - 2) {
    buttonsToShow.push(...pageNumbers.slice(0, maxVisibleButtons - 1), '...');
  } 
  else if (page > pageLimit - maxVisibleButtons + 2) {
    buttonsToShow.push('...', ...pageNumbers.slice(pageLimit - maxVisibleButtons + 1));
  } 
  else {
    const start = page - 2;
    const end = page + 2;
    buttonsToShow.push('...', ...pageNumbers.slice(start - 1, end), '...');
  }

  return (
    <div className='flex items-center gap-1 lg:gap-2'>
      <button
        className='btn-primary lg:p-1'
        onClick={() => page > 1 && setPage(page - 1)}
      >
        <img src={arrow_left} className='w-10 h-10' />
      </button>
      {
        buttonsToShow.map((num, i) => <button
          key={i}
          className={`py-3 px-5 text-xs lg:text-base ${page === num ? 'btn-primary' : 'btn-accent'}`}
          onClick={() => num !== '...' && setPage(num)}
        >
          {num}
        </button>)
      }
      <button
        className='btn-primary lg:p-1'
        onClick={() => page < pageLimit && setPage(page + 1)}
      >
        <img src={arrow_right} className='w-10 h-10' />
      </button>
    </div>
  );
};

export default Pagination;
