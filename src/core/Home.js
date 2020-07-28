import React, {useState, useEffect} from 'react'
import "../styles.css"
import {API} from "../backend"
import Base from './Base'
import Card from './Card'
import getProducts from './helper/coreapicalls'

export default function Home() {

    const [products, setproducts] = useState([])
    const [error, seterror] = useState(false)

    const loadallproducts = () => {
        getProducts().then(data => {
            if(data.error){
                seterror(data.error)
            }else{
                setproducts(data)
            }
        })
    }
    
    useEffect(() => {
        loadallproducts()
    }, [])

    return (
        <Base title="Code TS store" description="Welcome to the tshirt store">
            <div className="row text-center">
                <h1 className="text-white">All of tshirts</h1>
                <div className="row">
                    {products.map((product, index) => {
                        return(
                            <div key={index} className="col-4 mb-4">
                                <Card product={product}></Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Base>
    )
}
