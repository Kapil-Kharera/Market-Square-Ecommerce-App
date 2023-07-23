import React from 'react';
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="model-img" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="model-img" />
                    <button>
                        <Link className='link' to="/products/2">Women</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="model-img" />
                    <button>
                        <Link className='link' to="/products/2">Women</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1477437/pexels-photo-1477437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="model-img" />
                            <button>
                                <Link className='link' to="/products/2">Women</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="model-img" />
                            <button>
                                <Link className='link' to="/products/2">Women</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/1848471/pexels-photo-1848471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="model-img" />
                    <button>
                        <Link className='link' to="/products/2">Women</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories;