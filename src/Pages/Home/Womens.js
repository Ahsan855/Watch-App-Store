import React from 'react';

const Womens = ({women}) => {
    return (
        <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={women.img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{women.name}</h2>
          <p>{women.description}</p>
          <p>{women.rating}</p>
          <div className="flex justify-between items-center">
          <h4 className="text-primary text-xl">{women.price}</h4>
          <div class="indicator text-primary ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Womens;