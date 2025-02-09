//setup data layer
// we need this to track the basket

import React,{ Children, createContext, useContext, useReducer } from "react";

//This is the data layer
export const stateContext =createContext();

//Build a Provider
export const StateProvider=({reducer,initialState,children})=>(
    <stateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </stateContext.Provider>
)

//This is how we use it inside a component
export const  useStateValue=()=>useContext(stateContext);