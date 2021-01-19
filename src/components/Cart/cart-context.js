import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext({});

function cartReducer(state, action) {
  switch(action.type){
      case 'add':
          return {
              ...state,
              nItems: state.nItems + action.payload.cantidad,
              items: [
                ...state.items,
                action.payload
              ]
          }
      default:
          throw new Error(`Unsupported action type: ${action.type}`)
  }
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  const [ cartState, cartDispatch ] = context;
  const addToCart = (item) => cartDispatch({ type: 'add', payload: item });
  return {
    cartState,
    cartDispatch,
    addToCart,
  }
}

function CartProvider(props) {
  const [state, dispatch] = useReducer(cartReducer, {nItems: 0, items: []});
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <CartContext.Provider value={value} {...props} />
}

export {CartProvider, useCart}
