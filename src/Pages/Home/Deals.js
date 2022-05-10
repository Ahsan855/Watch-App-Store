import React from 'react';
import Deal from './Deal';
import image1 from '../../image/image1.jpg'
import image2 from '../../image/image2.jpg'
import image7 from '../../image/image2.jpg'
import image4 from '../../image/image4.jpg'
import image5 from '../../image/image5.jpg'
import image6 from '../../image/image6.png'


const Deals = () => {
    const products = [
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
          img: image5,
        },
        {
          _id: 4,
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
          img: image4,
        },
        {
          _id: 5,
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
          _id: 6,
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
      ];
    return (
        <div className="my-28">
      <div className="text-center">
        <h3 className="text-secondary text-4xl font-bold uppercase underline pb-2">
          Our Products
        </h3>
        <h2 className="text-2xl py-8 font-bold text-primary">Products For Man's</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {
              products.map(deal=> <Deal key={deal._id} deal={deal}></Deal>)
          }
      </div>
    </div>
    );
};

export default Deals;