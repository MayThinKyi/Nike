import { createSlice } from '@reduxjs/toolkit';
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[]
    },
    reducers:{
         addToCart:(state,action)=>{
        const itemInCart=state.cart.find((item)=>item?.id==action.payload.id);
        if(itemInCart){
            itemInCart.quantity++;
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }else{
            state.cart.push({...action.payload,quantity:1});
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }
    },
    addQuantity:(state,action)=>{
      const index=state.cart.findIndex((item)=>item.id===action.payload.id);
      state.cart[index].quantity+=1;
            localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    removeQuantity:(state,action)=>{
        const index=state.cart.findIndex((item)=>item.id==action.payload.id);
        if(state.cart[index].quantity==1){
            state.cart[index].quantity=1;
          localStorage.setItem('cart',JSON.stringify(state.cart))
        }if(state.cart[index].quantity>1){
            state.cart[index].quantity-=1;
        localStorage.setItem('cart',JSON.stringify(state.cart))

        }
        },
    clearCart: (state) => {
            console.log('entering');
            state.cart = []
        localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        removeItem: (state, action) => {
             let newCart = [];
           newCart=state.cart.filter((c) => c.id !== action.payload.id);
            state.cart = newCart;
            localStorage.setItem('cart',JSON.stringify(state.cart))
    }
    
     
    }
})
export const cartReducer=cartSlice.reducer;
export const {
    addToCart,addQuantity,removeQuantity,clearCart,removeItem
}=cartSlice.actions;