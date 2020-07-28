import React, {useState, useEffect} from 'react'
import "../styles.css"
import Base from './Base'
import Card from './Card'
import { loadCart } from './helper/carthelper'
import Paymentb from './paymentb'

const Cart=()=> {

    const [products, setproducts] = useState([])
    const [reload, setreload] = useState(false)

    useEffect(() => {
        setproducts(loadCart())
    }, [reload])

    const loadallproducts = products => {
        return (
            <div>
                <h2>All you have in your cart:</h2>
                
                {products.map((product,index) => (
                    <Card key={index} product={product} addtocart={false} removefromcart={true} setreload={setreload} reload={reload}></Card>
                )) }
            </div>
        )
    }

    const loadcheckout = () => {
        return (
            <div>
                <h2>This section is to check out</h2>
            </div>
        )
    }
    return (
        <Base title="Your cart" description="Ready to checkout">
            <div className="row text-center">
                <div className="col-6">{products.length > 0 ? loadallproducts(products) : (<h3>Your cart is empty</h3>)}</div>
                <div className="col-6"><Paymentb product={products} setreload={setreload}/></div>
            </div>
        </Base>
    )
}

export default Cart