import React from 'react';
import arrow_left from '../assets/icon/cd-arrow-left-2.svg';
import arrow_right from '../assets/icon/cd-arrow-right-2.svg';

/**
 * @param {Number} page Current Page Number
 * @param {Number} setPage Set Current Page Number
 * @param {Number} pageLimit Page Number Limit
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
  } else if (page > pageLimit - maxVisibleButtons + 2) {
    buttonsToShow.push('...', ...pageNumbers.slice(pageLimit - maxVisibleButtons + 1));
  } else {
    const start = page - 2;
    const end = page + 2;
    buttonsToShow.push('...', ...pageNumbers.slice(start - 1, end), '...');
  }

  return (
    <>
      <button
        className='btn-primary p-3'
        onClick={() => page > 1 && setPage(page - 1)}
      >
        <img src={arrow_left} />
      </button>
      {
        buttonsToShow.map((num, i) => <button
          key={i}
          className={`py-3 px-5 ${page === num ? 'btn-primary' : 'btn-accent'}`}
          onClick={() => num !== '...' && setPage(num)}
        >
          {num}
        </button>)
      }
      <button
        className='btn-primary p-3'
        onClick={() => page < pageLimit && setPage(page + 1)}
      >
        <img src={arrow_right} />
      </button>
    </>
  );
};

export default Pagination;
