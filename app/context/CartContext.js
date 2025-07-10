'use client';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {
    const exists = cartItems.find(item => item.id === food.id);
    if (exists) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...food, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQty, decreaseQty, getTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
