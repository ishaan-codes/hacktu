import React from 'react'
// import img from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3D0kn1sP9uF2alriU9jXauhg2GJ2NNUukS0FVE-soJa-JfdrBO_gvpgr5FUenqKdHKQ&usqp=CAU'
import Product from '../Products/Product'
import './Home.css'
import logo from '../Navbar/cart2.png'
import { NavLink, useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate()
  const sign=(ev)=>{
    ev.preventDefault()
    navigate('/login')      
  }

  const backToTop=(ev)=>{
    ev.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
       <div>
    
        {/* <img className='img' style={{width:'100%',marginBottom:'-240px',cursor:'pointer',marginTop:'50px'}}></img> */}
        <div style={{width:'100%',marginBottom:'20px',cursor:'pointer',marginTop:'150px',height:'150px',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <img src='https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg' style={{width:'100%'}}></img>
          

        </div>
        {/* <div className='home_row'  style={{maxWidth:'1500px'}}>
        </div> */}
        <div className='shop' style={{position:'relative',zIndex:'1',display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
          <div className='box1 box' style={{justifyContent:'center'}}>
            <h4 style={{marginBottom:'30px',paddingTop:'15px',paddingLeft:'9px'}}>Keep Shopping For</h4>
            <div style={{display:'grid', gridRow:'auto auto', gridTemplateColumns: '90px 90px',gridRowGap:'20px',gridColumnGap:'20px',width:'95%',marginLeft:'10px'}}> 
             <div className='box_img' style={{}}><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg' 
             style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Cushion covers,bedsheets & more</p></div>
             <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg'
              style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Figurines,vases & more</p></div>
            <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg' 
            style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Home storage</p></div>
            <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg' 
            style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Lightning solutions</p></div>
            </div>
           <NavLink to='/orders' style={{textDecoration:'none'}}> <p style={{fontSize:'10px',paddingLeft:'9px',marginTop:'24px'}}>see more</p></NavLink>
          </div>
          <div className='box2 box'>
            <h4 style={{marginBottom:'30px',paddingTop:'15px',paddingLeft:'9px'}}>Starting ₹149 | Headphones</h4>
          <div style={{display:'grid', gridRow:'auto auto', gridTemplateColumns: '90px 90px',gridRowGap:'20px',gridColumnGap:'20px',width:'95%',marginLeft:'10px'}}> 
             <div className='box_img' style={{}}><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg' 
             style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Cushion covers,bedsheets & more</p></div>
             <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg'
              style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Figurines,vases & more</p></div>
            <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg' 
            style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Home storage</p></div>
            <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg' 
            style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Lightning solutions</p></div>
            </div>
            <NavLink to='/orders' style={{textDecoration:'none'}}> <p style={{fontSize:'10px',paddingLeft:'9px',marginTop:'24px'}}>see more</p></NavLink>
          </div>
          <div className='box3 box'>
          <h4 style={{marginBottom:'30px',paddingTop:'15px',paddingLeft:'9px'}}>Appliances for your home | Up to 55% off</h4>
          <div style={{display:'grid', gridRow:'auto auto', gridTemplateColumns: '90px 90px',gridRowGap:'20px',gridColumnGap:'20px',width:'95%',marginLeft:'10px'}}> 
             <div className='box_img' style={{}}><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg' 
             style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Cushion covers,bedsheets & more</p></div>
             <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
              style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Figurines,vases & more</p></div>
            <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg' 
            style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Home storage</p></div>
            <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg' 
            style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Lightning solutions</p></div>
            </div>
            <NavLink to='/orders' style={{textDecoration:'none'}}> <p style={{fontSize:'10px',paddingLeft:'9px',marginTop:'10px'}}>see more</p></NavLink>
          </div>
        
          <div className='box4 box_1' style={{alignItems:'center',marginTop:'10px'}}>
          <h4 style={{marginLeft:'10px',marginBottom:'10px'}}>Sign in for your best experience</h4>
          <button type='submit' onClick={sign} style={{marginLeft:'10px',cursor:'pointer',width:'188px',backgroundColor:'yellow',border: '1px solid',borderColor:'#a88734 #9c7e31 #846a29',borderRadius:'2px',borderRadius:'10px'}}>Sign in securely</button>
            <img style={{width:'100%',height:'187px',marginTop:'40px'}} src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7c3b3369-8561-4d9d-b620-a213dbbb87ac.jpg'></img>
          </div>
          


          <div className='box1 box' style={{justifyContent:'center'}}>
            <h4 style={{marginBottom:'30px',paddingTop:'15px',paddingLeft:'9px'}}>Minimum 50% off | Men's clothing</h4>
            <div style={{display:'grid', gridRow:'auto auto', gridTemplateColumns: '90px 90px',gridRowGap:'20px',gridColumnGap:'20px',width:'95%',marginLeft:'10px'}}> 
             <div className='box_img' style={{}}><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/08._SY116_CB555616559_.jpg' 
             style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Cushion covers,bedsheets & more</p></div>
             <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/03._SY116_CB555616559_.jpg'
              style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Figurines,vases & more</p></div>
            <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/01._SY116_CB555616559_.jpg' 
            style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Home storage</p></div>
            <div className='box_img'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/02._SY116_CB555616559_.jpg' 
            style={{width:'100px'}}></img><p style={{fontSize:'8px'}}>Lightning solutions</p></div>
            </div>
           <NavLink to='/orders' style={{textDecoration:'none'}}> <p style={{fontSize:'10px',paddingLeft:'9px',marginTop:'10px'}}>see more</p></NavLink>
          </div>

          <div className='box2 box' >
            <h4 style={{marginBottom:'30px',paddingTop:'15px',paddingLeft:'9px'}}>Minimum 50% off | Indoor plants</h4>
        
            <div style={{}}>
              <img style={{width:'95%',paddingLeft:'5px'}} src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/PCCC/01-379_X_304-min._SY304_CB556163815_.jpg' />
            </div>
            <NavLink to='/orders' style={{textDecoration:'none'}}> <p style={{fontSize:'10px',paddingLeft:'9px',marginTop:'10px'}}>see more</p></NavLink>
          </div>

          <div className='box3 box'>
           <h4 style={{marginBottom:'30px',paddingTop:'15px',paddingLeft:'9px'}}>Up to 50% off | Diabetes care devices</h4>
        
            <div style={{}}>
              <img style={{width:'95%',paddingLeft:'5px'}} src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/GW/2024/Week32/PC_1_CC_1x._SY304_CB566676033_.jpg' />
            </div>
            <NavLink to='/orders' style={{textDecoration:'none'}}> <p style={{fontSize:'10px',paddingLeft:'9px',marginTop:'10px'}}>see more</p></NavLink>
          </div>
        
          <div className='box3 box'>
          <h4 style={{marginBottom:'30px',paddingTop:'15px',paddingLeft:'9px'}}>Under ₹799 
          </h4>
        
        <div style={{}}>
          <img style={{width:'95%',paddingLeft:'5px'}} src='https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/GW_Mar/25th/Combo_low_res_2_1_1_1_1._SY304_CB579829084_.jpg' />
        </div>
        <NavLink to='/orders' style={{textDecoration:'none'}}> <p style={{fontSize:'10px',paddingLeft:'9px',marginTop:'10px'}}>see more</p></NavLink>
          </div>
          

        </div>
        <footer>
          <div className='footer-panel' onClick={backToTop}>Back To Top</div>
          <div className='footer-panel_2'>
            <ul>
              <p>Get to Know Us</p>
              <a>About Us</a>
              <a>Careers</a>  
              <a>Press Releases</a> 
             
            </ul>
            <ul>
              <p>Get to Know Us</p>
              <a>About Us</a>
              <a>Careers</a>  
              <a>Press Releases</a> 
               
            </ul>
            <ul>
              <p>Get to Know Us</p>
              <a>About Us</a>
              <a>Careers</a>  
              <a>Press Releases</a> 
              
            </ul>
            <ul>
              <p>Get to Know Us</p>
              <a>About Us</a>
              <a>Careers</a>  
              <a>Press Releases</a> 
           
            </ul>
          </div>
          <div className='footer-panel_3'>
            <div ><img className='logo'src={logo}></img></div>

          </div>

          <div className='footer-panel_4'>
            <div className='pages'>
              <a>Conditions of Use</a>
              <a>Privacy Notice</a>
              <a>Your Ads Privacy Choices</a>
            </div>
            
          </div>
        </footer>

    </div>
  )
}

export default Home