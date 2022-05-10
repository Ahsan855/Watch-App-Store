import React from 'react';
import image1 from '../../image/lady1.jpg';
import image2 from '../../image/lady2.jpg';
import image3 from '../../image/lady3.jpg';
import Womens from './Womens';

const Women = () => {
    const women=[
        {
            _id: 1,
            name: "Tissot",
            description: " This is Awesome Watch",
            price: '$ 224.00',
            rating: <div class="rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          </div>,
            img: image1,
          },
          {
            _id: 2,
            name: "Tissot",
            description: " This is Awesome Watch",
            price: '$ 224.00',
            rating: <div class="rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          </div>,
            img: image2,
          },
          {
            _id: 3,
            name: "Tissot",
            description: " This is Awesome Watch",
            price: '$ 224.00',
            rating: <div class="rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
          </div>,
            img: image3,
          },
    ]
    return (
        <div>
            <div className="my-28">
      <div className="text-center">
        <h2 className="text-2xl py-8 font-bold text-primary">Products For Women's</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {
              women.map(women=> <Womens key={women._id} women={women}></Womens>)
          }
      </div>
    </div>
        </div>
    );
};

export default Women;