import React from 'react';
import { Link } from "react-router-dom"
import "./Card.scss";

const Card = ({data}) => {
  return (
    <div className="card">
        <Link to={`/product/${data.id}`} className='link'>
            <div className="image">
                {data.isNew && <span>New Season</span>}
                <img src={data.img} alt={data.title} className="mainImg" />
                {data.img2 && <img src={data.img2} alt={data.title} className="secondImg" />}
            </div>
        </Link>
        <h3>{ data.title }</h3>
        <div className="prices">
            <h4>${data.oldPrice}</h4>
            <h4>${data.price}</h4>
        </div>
    </div>
  )
}

export default Card;