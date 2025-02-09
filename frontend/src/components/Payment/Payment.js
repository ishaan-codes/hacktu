import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useNavigate, NavLink } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../../reducer';
import axios from 'axios';
import './Product.css'
import CurrencyFormat from 'react-currency-format';


const Payment = () => {

    const [{basket,user},dispatch]=useStateValue();

    const stripe=useStripe()
    const elements=useElements()
    const navigate=useNavigate()

    const[succeeded,setSucceeded]=useState(false)
    const[processing,setProcessing]=useState("")
    const[error,setError]=useState(null)
    const[disabled,setDisabled]=useState(true)
    const[clientSecret,setClientSecret]=useState("")

    useEffect(()=>{
        //allow special stripe secret whic allows us to charge a customer
        
        const getClientSecret =async ()=>{
            try{
            // const response =await axios({
            //    method:'post',
            //    //Stripes expects the total in a currency subunits
            //    url:`/payments/create?total=${getBasketTotal(basket)*100}`
            // });
            // setClientSecret(response.data.clientSecret)
            const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
            
            // Check the response to ensure clientSecret is correctly fetched
            if (response.data && response.data.clientSecret) {
                setClientSecret(response.data.clientSecret);
            } else {
                console.error("Error: No clientSecret returned from API");
            }
        }catch(err){
            console.log(err)
        }
        
    };     
        
        getClientSecret()
    },[basket])

    console.log(clientSecret)

    const handleSubmit=async(ev)=>{
        //Listen to changes in Card Element
        ev.preventDefault()
        setProcessing(true)

        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentIntent=paymentConfirmation
            if (paymentIntent) {
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                dispatch({
                    type:'EMPTY_BASKET'
                });
                navigate('/orders', { replace: true });
            } else {
                setProcessing(false);
            }
        }).catch(error => {
            setError(error.message);
            setProcessing(false);
        });

    }
    

    const handleChange=(ev)=>{
        
        setDisabled(ev.empty)
        setError(ev.error ? ev.error.message : "")
    }

  return(
    <div  className='payment'>
        <div className='payment_container' style={{background:'white',marginTop:'20px'}}>
        <h2 style={{paddingLeft:'20px',paddingBottom:'10px'}}>Checkout(<NavLink to='/checkout'>{basket?.length} items</NavLink>)</h2>
        {/* Delivery Address */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3 style={{paddingLeft:'20px',marginBottom:'10px',borderTop:'2px solid',borderBottom:'1px',marginRight:'30px'}} >Delivery Address:New Delhi,201310</h3>           
                <div className='payment_items'>
                    </div>
                
            </div>
        </div>

        {/* Review Items */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3 style={{paddingLeft:'20px'}}>Review Items</h3>   
            </div>
            <div className='payment_items'>
            {basket.map(item=>( 
                <div style={{marginTop:'10px',borderBottom:'0.5px solid',paddingBottom:'5px',marginRight:'25px'}}>
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
                </div>
            ))}
                
            </div>
        </div>

        {/* Payment Process */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3 style={{paddingLeft:'20px'}}>Payment Process</h3>
            </div>

            <form onSubmit={handleSubmit} style={{paddingLeft:'20px'}}>
            <CardElement onChange={handleChange}/>

            <div className='price'>
                <CurrencyFormat
                renderText={(value)=>(
                    <h1>Order Total:{value}</h1>

                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                thousandSpacing={'2s'}// For Indian system
                prefix={'₹'}

                />
                <button disabled={processing || disabled || succeeded} style={{marginBottom:'5px'}}>
                    <span>{processing ?<p>Processing</p>:
                    "BUY NOW" }</span>

                </button>
            </div>

            {error && <div>{error}</div>}

            </form>
            </div>
        </div>
        </div>
  )
}

export default Payment