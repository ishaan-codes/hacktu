import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../StateProvider';


const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket},dispatch]=useStateValue();
    console.log(id,title,image,price,rating);

    const removeFromBasket=()=>{
        //remove item from basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }


  return (
    <div className='checkout_product'>
        <img className='checkout_product_image' src={image}></img>

        <div className='checkout_product_info'>
            <p className='checkout_product_title'>{title}</p>

            <p>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkout_product_ratings' >
            {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))
            }

        </div>
        <button onClick={removeFromBasket} >Remove from basket</button>

        </div>
    </div>
  )
}

export default CheckoutProduct