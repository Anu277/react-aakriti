import React from 'react';

const ItemCard2 = React.memo(({ imgSrc, title, description }) => {
  return (
    <div className="p-5 m-3 min-w-60 sm:min-w-72 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-[#040404] dark:border-gray-700">
      <div className="w-full h-24 sm:h-32 rounded-md bg-slate-200 flex justify-center items-center">
        <img src={imgSrc} alt={title} className="max-h-12 sm:max-h-20" />
      </div>
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
});

export default ItemCard2;