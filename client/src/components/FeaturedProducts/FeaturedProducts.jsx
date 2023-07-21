import React from 'react';
import "./FeaturedProducts.scss";

//component
import Card from '../Card/Card';


const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Coat",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Coat",
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Coat",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Coat",
      oldPrice: 19,
      price: 12
    }
  ]

const FeaturedProducts = ({type}) => {
  return (
    <div className='FeaturedProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quo adipisci cum expedita placeat, impedit consequatur explicabo non deserunt. Est nihil modi eius, maxime sapiente id harum libero provident magnam cupiditate officiis ipsum cum tempora.</p>
        </div>
        <div className="bottom">
            {
                data.map((product) => (
                    <Card data={product} key={product.id} />
                ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts;