import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Checkout.css'
import { NavLink } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../SubTotal/Subtotal';
import Product from '../Products/Product';

const Checkout = () => {

    const [{basket}]=useStateValue();

  return (
    <div className='checkout' style={{backgroundColor:'#f2f2f2',marginTop:'20px'}}>
        {/* <div className='checkout_Left'> */}
        
        {basket?.length===0 ?(     
            // No order Is In The Cart
    <div  style={{display:'flex',flexDirection:'column',height:'100vh'}}>
        <div style={{display:'flex',width:'750px',height:'200px',marginTop:'30px',marginLeft:'15px',backgroundColor:'white',paddingLeft:'10px'}}>
        <img
        className='image'
        src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg'
        />

        <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <h3 style={{marginTop:'25px',padding:'5px 5px 0px 5px'}}>Your Cart is empty</h3>
        <NavLink to="/" style={{textDecoration:'none',fontSize:'10px',color:'purple',marginBottom:'5px',paddingLeft:'5px'}}>Shop today's deals</NavLink>
        </div>
        <div >
            <button style={{margin:'5px', backgroundColor:'	#FEBD69',border: '1px solid',borderColor:'#a88734 #9c7e31 #846a29',borderRadius:'4px',height:'20px'}}><span style={{fontSize:'12px',margin:'7px'}}>Sign in to your account</span></button>
            <button style={{ backgroundColor:'white',border: '1px solid',borderRadius:'4px',height:'20px'}}><span style={{fontSize:'12px',margin:'7px'}}>Sign up now</span></button>
        </div>
        </div>
    </div>
    <div style={{width:'760px',marginTop:'20px',marginLeft:'15px',height:'50px',backgroundColor:'white'}}></div>
   
    
    </div>):(
         
        <div style={{display:'flex',width:'750px',height:'400px',marginTop:'30px',marginLeft:'20px',backgroundColor:'white',paddingLeft:'10px',display:'flex',flexDirection:'column',minHeight: '200px',overflowY:'auto' }}>
            <h2 style={{marginBottom:'10px',paddingLeft:'30px'}}>Your shopping basket</h2>
            <div>
            {basket.map((item)=>(
                <div style={{marginTop:'10px',borderTop:'0.5px solid',paddingTop:'5px',marginRight:'25px'}}>
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
    )}
    
    {/* {basket.length>0 && (
        <div className='checkout_subtotal'>
            <Subtotal/>
        </div> 
       )} */}
    
       <div style={{marginTop:'30px',display:'grid',gridColumnGap:'10px'}}>

       {basket.length>0 && (
        <div className='checkout_subtotal Box' >
            <Subtotal/>
        </div> 
       )}
       <div>
        <div className='Box'>
        <Product
        id="123"
        title="Dopamine Detox"
        image="https://images-eu.ssl-images-amazon.com/images/I/712K3sdLlRL._AC_UL200_SR200,200_.jpg"
        price={340}
        rating={5}
        
        / > </div>
        <div className='Box'>
        <Product
        id="123"
        title="The Mountain is you"
        image="https://images-eu.ssl-images-amazon.com/images/I/61xivWmExiL._AC_UL200_SR200,200_.jpg"
        price={300}
        rating={3}
        
        / >
        </div>
        <div className='Box'>
        <Product
        id="123"
        title="Think Straight"
        image="https://images-eu.ssl-images-amazon.com/images/I/71XpkRq0ncL._AC_UL200_SR200,200_.jpg"
        price={440}
        rating={5}
        
        / >
        </div>
        <div className='Box'>
        <Product
        id="123"
        title="Man's Search for meaning"
        image="https://images-eu.ssl-images-amazon.com/images/I/61157LApbuL._AC_UL200_SR200,200_.jpg"
        price={250}
        rating={4}
        
        / >
        </div>
     </div>
       </div>
       
    </div>
  )
}

export default Checkout