import React from 'react';
import "./Cart.scss";

//icons
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Long Sleeve Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
        desc: "lorem dslfj jfsidf kjl;a  fdsjfksfo fjsf sfsjfosf sdfj slfsfj lk"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Long Sleeve Coat",
        oldPrice: 19,
        price: 12,
        desc: "fjdsf jf jfkfj dkfjdkf jdf dsjfk dkfdsjfds;f sdfkjk sdfj dsfk j"
    },
]

const Cart = () => {
    return (
        <div className='cart'>
            <h1>Products</h1>
            {
                data?.map((product) => (
                    <div className="item" key={product.id}>
                        <img src={product.img} alt="product-img" />
                        <div className="details">
                            <h1>{product.title}</h1>
                            <p>{product.desc?.substring(0, 100)}</p>
                            <div className="price">
                                1 x ${product.price}
                            </div>
                        </div>

                        <DeleteOutlined className='delete' />
                    </div>
                ))
            }

            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart;