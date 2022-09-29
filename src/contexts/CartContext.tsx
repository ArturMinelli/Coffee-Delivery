import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartItemsAmount: number;
  cartItemsPrice: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  removeCartItem: (cartItemId: number) => void;
  updateCartItemQuantity: (cartItemId: number, type: "increment" | "decrement") => void;
  cleanCart: () => void;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode;
}

const CART_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(CART_ITEMS_STORAGE_KEY)

    if(storedCartItems) {
      return JSON.parse(storedCartItems)
    } else {
      return []
    }
  })
  const cartItemsAmount = cartItems.length
  const cartItemsPrice = cartItems.reduce((accumulator, coffee) => {
    return accumulator + coffee.price * coffee.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id)

    const newCartItems = produce(cartItems, (draft) => {

    if(coffee.quantity > 0) {
      if(coffeeAlreadyInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyInCart].quantity = coffee.quantity
      }
    }
    })

    setCartItems(newCartItems)
  }

  function removeCartItem(cartItemId: number) {
    const newCartItems = produce(cartItems, (draft) => {
      const coffeeAlreadyInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId)

      if(coffeeAlreadyInCart >= 0) {
        draft.splice(coffeeAlreadyInCart, 1)
      }
    })

    setCartItems(newCartItems)
  }

  function updateCartItemQuantity(
    cartItemId: number,
    type: "increment" | "decrement"
  ) {

    const updatedCartItems = produce(cartItems, (draft) => {
      const coffeeAlreadyInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId)

      if(coffeeAlreadyInCart >= 0) {
        const item = draft[coffeeAlreadyInCart]
        if(type === "decrement" && item.quantity > 0) {
          draft[coffeeAlreadyInCart].quantity = item.quantity - 1
        } else if(type === "increment") {
          draft[coffeeAlreadyInCart].quantity = item.quantity + 1
        }
      }
    })

    setCartItems(updatedCartItems)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(CART_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{
      cartItems,
      cartItemsAmount,
      cartItemsPrice,
      addCoffeeToCart,
      removeCartItem,
      updateCartItemQuantity,
      cleanCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}