import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'


const ProductDescription = ({product}) => {

const cart = useSelector(state => state.cart)

const [counter, setCounter] = useState(1)

const handleMinus = () => {
    if(counter -1 > 0) {
        setCounter(counter -1)
    }
}

const handlePLus = () => {
    setCounter(counter +1)
}

const dispatch = useDispatch()

const handleCart = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`
    const data = {
        id: product.id,
        quantity: counter
    }
    axios.post(URL,data, getConfig())
    .then(res => {
        console.log(res.data)
        dispatch (getUserCart())
    })
    .catch(err => {
        if (err.response.status === 400) {
            const URLPatch = ``
            const prevQuantity = cart.filter(e.id === product.id) [0].productsIncart.quantity
            const data = {
                id: product.id,
                newquantity: prevQuantity + counter
            }
            axios.patch(URLPatch, data, prevQuantity)
            .then(res => {
                console.log(res.data),
                dispatch(getUserCart())
                
            })
            .catch(err => console.log(err))
            
        }
    })
}

  return (
    <article>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <section>
            <span>Price</span>
            <h3>{product?.price}</h3>
        </section>
        <section>
            <h3>Quantity</h3>
            <div>
                <div onClick={handleMinus}>-</div>
                <div>{counter}</div>
                <div onClick={handlePLus}>+</div>
            </div>
        </section>
        <button onClick={handleCart}>Add to Card <i className="fa-solid fa-cart-shopping"></i></button>
    </article>
  )
}

export default ProductDescription