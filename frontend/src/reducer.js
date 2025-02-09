export const initialState={
    basket:[],
    user:null
};

export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0);

const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
        //Logic for adding item to the basket    
        return{
            ...state,
            basket:[...state.basket,action.item]

        }
        case'REMOVE_FROM_BASKET':
        //Logic for removing item from the basket

        //WE CLONED THE BASKET HERE
        let newBasket=[...state.basket];
        
        //WE CHECK TO SEE IF PRODUCT EXISTS
        const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)

        if(index>=0){
            //Item exists in basket,remove it 
            newBasket.splice(index,1);
        }
        else{

            console.warn(`Can't remove product ${action.id} as it's not in basket`);

        }
        return {
            ...state  //For this we changed state to ...state 
            ,basket:newBasket
            }

        case'SET_USER':
        return{
            ...state,
            user:action.user
        }


        default:
            return state;
    }

}
export default reducer;