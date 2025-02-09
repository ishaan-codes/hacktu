import React,{ useEffect } from 'react';
import './App.css';
import Main from './Main';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const[{},dispatch]=useStateValue();

  useEffect(()=>{
    //Will only runs when app component loads

    auth.onAuthStateChanged(authUser=>{
      console.log(authUser)
    
    if(authUser){
      // The User just loggedIn
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }
    else{
      // The User is loggedOut
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
  })

  },[])

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
