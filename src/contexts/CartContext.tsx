import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartItemsAmount: number;
  addCoffeeToCart: (coffee: CartItem) => void;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const cartItemsAmount = cartItems.reduce((accumulator, coffee) => {
    return accumulator + coffee.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id)

    const newCartItems = produce(cartItems, (draft) => {

    if(coffee.quantity > 0) {
      if(coffeeAlreadyInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyInCart].quantity += coffee.quantity
      }
    }
    })

    setCartItems(newCartItems)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      cartItemsAmount,
      addCoffeeToCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}