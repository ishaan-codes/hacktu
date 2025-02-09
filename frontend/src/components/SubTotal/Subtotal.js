import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';


const Subtotal = () => {
    
    const navigate=useNavigate();
    const [{basket}]=useStateValue();
    
  return (
    <div className='subtotal' style={{marginLeft:'10px',marginTop:'15px'}}>
        <CurrencyFormat
        renderText={(value)=>(
            // <>
            <p style={{fontSize:'13px'}}>SubTotal({basket.length} items):<strong>{`${value}`}</strong></p>
              // </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        thousandSpacing={'2s'}// For Indian system
        prefix={'₹'}

        />

        <button onClick={ev=>navigate('/payment')} style={{cursor:'pointer',width:'150px',backgroundColor:'	#FEBD69',border: '1px solid',borderColor:'#a88734 #9c7e31 #846a29',borderRadius:'10px',marginTop:'20px'}}>Proceeed To Checkout</button>
    </div>
  )
}

export default Subtotal