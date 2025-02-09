import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ind from './ind.png'
import logo from './cart2.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Navbar = () => {
  const [{basket,user}]=useStateValue();

  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }

  }


  return (
    <div>
        <nav className='navbar'>
          {/* logo */}
            <NavLink to='/' className='logo' ><img style={{backgroundColor:'#7888ed',maxWidth:'80px',maxHeight:'80px',marginTop:'-5px',marginLeft:'3px',marginRight:'300px',marginBottom:'20px'}} src={logo}></img></NavLink>
           
            {/* searchbar */}
              <div className='container'>
                {/* <select style={{alignItems:'center',border:'none',backgroundColor:'#f3f3f3',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}><option>All</option></select> */}
              <input className='inp' placeholder='Search DashCart.in' type='text' style={{paddingLeft:'10px'}} />
            <SearchIcon style={{backgroundColor:'#FFA500',color:'white',padding:'5px',borderTopRightRadius:'4px',borderBottomRightRadius:'4px'}} className='searchicon' />
            </div>

            <div className='navbar_2'>
            

            {/* SignIn */}
            <NavLink to={ !user && '/login'}  style={{textDecoration:'none', color:'white'}} >
            <div className='navbar_options' onClick={handleAuthentication}>
            <span className='navbar_lineone' style={{paddingRight:'25px'}}>Hello,{user?'Sign out':'Sign in'}</span>
            <sapn className='navbar_linetwo'>Accounts & Lists</sapn>
            </div>
            </NavLink>
            {/* Return & Orders */}
            <NavLink to='/'   style={{textDecoration:'none', color:'white'}}  >
            <div className='navbar_options'>
            <span className='navbar_lineone'>Returns</span>
            <span className='navbar_linetwo'>& Orders</span>
            </div>
            </NavLink>

            {/* Shopping Basket */}
            <NavLink to='checkout' style={{textDecoration:'none'}}>
              <div className='shoppingbasket' style={{display:'flex',marginRight:'5px'}}>
                <ShoppingCartOutlinedIcon style={{color:'white'}}></ShoppingCartOutlinedIcon>
                <span className='basket_count' style={{color:'white',fontSize:'15px'}}>{basket?.length}</span>
              {/* <span style={{color:'white',fontSize:'12px'}}>cart</span> */}
              </div> 
            </NavLink>
            </div>

        </nav>
 
    </div>
    
  )
}

export default Navbar