import React, { useState } from 'react'
import './Login.css'
import { NavLink, useNavigate} from 'react-router-dom'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { auth } from '../../firebase';



const Login = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const signIn=(ev)=>{
    ev.preventDefault()
    auth
         .signInWithEmailAndPassword(email,password)
         .then(auth=>{
          navigate('/')
         })
         .catch(error=>{
          alert(error.message)
         })
         
    
  }

  const register=(ev)=>{
    ev.preventDefault()

     auth
     .createUserWithEmailAndPassword(email,password)
         .then((auth)=>{
          //It Successfully created new User email ID
          console.log(auth)

          if(auth){
            navigate('/')
          }

         })
         .catch(error=>{
          alert(error.message)
         })
         
  }
  
  return (
    <div className='Login'  >
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:''}}>
     <NavLink to='/'> <img className='amazon_logo' style={{}}/></NavLink>
     <div style={{marginTop:'-27px'}}>
     <div className='Login_page' >
      <h2 style={{alignSelf:'flex-start'}}>Sign in</h2>
      <form style={{display:'flex',flexDirection:'column'}}>
      
      <strong style={{alignSelf:'flex-start',fontSize:'9px'}}>Email or mobile phone number</strong>
      <input type='text' style={{width:'185px',marginBottom:'5px'}} value={email} onChange={ev=>setEmail(ev.target.value)} />
      
      <strong style={{alignSelf:'flex-start',fontSize:'9px'}}>password</strong>
      <input style={{marginBottom:'10px',width:'185px'}} type='password' value={password} onChange={ev=>setPassword(ev.target.value)}/>
      <button type='submit' onClick={signIn} style={{cursor:'pointer',width:'188px',backgroundColor:'	#ED9121',border: '1px solid',borderColor:'#a88734 #9c7e31 #846a29',borderRadius:'2px'}}>Sign in</button>
      

      
      <div style={{display:'flex',alignSelf:'flex-start'}}>
      <ArrowRightIcon style={{width:'15px'}}/>
     <NavLink to='/NeedHelp'style={{textDecoration:'none',marginBottom:'15px',}} > <span style={{fontSize:'9px',cursor:'pointer'}}>Need help?</span></NavLink> 
      </div>
      </form>
      <div style={{display:'flex',flexDirection:'column',marginTop:'8px'}}>
        <strong style={{alignSelf:'flex-start',fontSize:'9px'}}>Buying for work?</strong>
        <NavLink style={{textDecoration:'none',alignSelf:'flex-start',fontSize:'9px'}}>Shop on User</NavLink>
      </div>
     </div>
     </div>

     <div style={{opacity:'30%',alignSelf:'center'}}className='create_account'>
      <span><small>New to DashCart?</small></span>
     </div>
     <button type='submit' onClick={register} style={{marginTop:'10px',width:'220px',backgroundColor:'rgba(73, 139, 178, 0.4)',border:'1px solid #E6E4E4',borderRadius:'4px',cursor:'pointer',alignSelf:'center'}}><span style={{fontSize:'9px'}}>Create your Account</span></button>
     </div>
    
    </div>
  )
}

export default Login