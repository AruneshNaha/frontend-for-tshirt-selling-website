import React,{useEffect,useState} from 'react'
import ImageHelper from './helper/ImageHelper';
import { Redirect } from 'react-router-dom';
import { additemtocart, removeitemfromcart } from './helper/carthelper';

const Card = ({
    product, addtocart = true, removefromcart=false, setreload = f => f, reload=undefined
}) => {

    const [redirect, setredirect] = useState(false)
    const [count, setcount] = useState(product.count)

    const cardtitle = product ? product.name : "A photo form pexels"
    const carddescription = product ? product.description : "Default description"
    const cardprice = product ? product.price : "Default price"

    const AddtoCart = () => {
        additemtocart(product, () => {
            setredirect(true)
        })
    }

    const getaredirect = (redirect) => {
        if(redirect){
            return <Redirect to="/cart"></Redirect>
        }
    }
 
    const showaddtocart = (addtocart) => {
        return(
            addtocart && (
                <button
                            onClick={AddtoCart}
                            className="btn btn-block btn-outline-success mt-2 mb-2"
                        >
                            Add to Cart
                  </button>
            )
        )
    }

    const showremovefromcart = removefromcart =>{
        return (
            removefromcart && (
                <button
                            onClick={() => {
                                removeitemfromcart(product._id)
                                setreload(!reload)
                                 }}
                            className="btn btn-block btn-outline-danger mt-2 mb-2"
                        >
                            Remove from cart
                  </button>
            )
        )
    }

    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cardtitle}</div>
            <div className="card-body">
                    {getaredirect(redirect)}
                <ImageHelper product={product}></ImageHelper>
                <p className="lead bg-success font-weight-normal text-wrap">
                    {carddescription}
              </p>
                <p className="btn btn-success rounded  btn-sm px-4">$ {cardprice}</p>
                <div className="row">
                    <div className="col-12">
                        {showaddtocart(addtocart)}
                    </div>
                    <div className="col-12">
                        {showremovefromcart(removefromcart)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card