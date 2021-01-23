import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext({});

const initialState = {nItems: 0, items: []}

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
      case 'reset':
        return {
          ...initialState
        };
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
  const resetCart = () => cartDispatch({ type: 'reset'});
  return {
    cartState,
    cartDispatch,
    addToCart,
    resetCart,
  }
}

function CartProvider(props) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <CartContext.Provider value={value} {...props} />
}

export {CartProvider, useCart}
