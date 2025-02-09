import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider';

const Product = ({id,title,image,price,rating}) => {

  const [{basket},dispatch]=useStateValue();

  const addToBasket=()=>{
    //Add Items to the basket
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        rating:rating,
        price:price
      }

    })

  };

  return (
    <div className='product'>


     <div><img src={image} style={{width:'70px',height:'80px',marginRight:'5px',paddingTop:'10px'}} ></img></div> 
        <div className='product_info'>
             <p style={{fontSize:'10px'}}>{title}</p>
        <div className='product_price'>
        <small>₹</small>
        <strong style={{fontSize:'15px'}}>{price}</strong>
        </div>
        <div className='product_ratings' >
            {Array(rating)
                .fill()
                .map((_)=>(
                    <p style={{fontSize:'9px'}}>⭐</p>
                ))
            }

        </div>
        <button onClick={addToBasket} style={{borderRadius:'10px',width:'60px',fontSize:'8px',background:'#FEBD69',borderColor:'#a88734 #9c7e31 #846a29',border:'1px solid',cursor:'pointer'}}>Add to basket</button>


        </div>

    </div>
  )
}

export default Product