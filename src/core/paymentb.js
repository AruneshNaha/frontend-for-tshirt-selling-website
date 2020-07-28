import React, {useState, useEffect} from 'react'
import { loadCart, cartempty } from './helper/carthelper'
import { Link } from 'react-router-dom'
import { getmeToken, processPayment } from './helper/paymentbhelper'
import { createOrder } from './helper/OrderHelper'
import { isAutheticated } from '../auth/helper'
import DropIn from 'braintree-web-drop-in-react'

const Paymentb=({products, setreload = f => f, reload = undefined})=> {
    const [info, setinfo] = useState({
        loading: false,
        success: false, 
        clientToken: null,
        error: ""
    })

    const userId = isAutheticated() && isAutheticated().user._id
    const token = isAutheticated() && isAutheticated().token

    const gettoken =(userId, token) => {
        getmeToken(userId, token).then(info => {
            console.log("INFORMATION", info)
            if(info.error){
                setinfo({...info, error: info.error})
            }else{
                const clientToken = info.clientToken
                setinfo({clientToken})
            }
        })
    }

    useEffect(() => {
        gettoken(userId, token)
    }, [])

    return (
        <div>
            <h3>TestBT</h3>       
        </div>
    )
}

export default Paymentb
