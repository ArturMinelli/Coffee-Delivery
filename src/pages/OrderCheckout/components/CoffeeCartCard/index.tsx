import { Trash } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { updateCartItemQuantity, removeCartItem } = useCart()
  const coffeeTotal = formatMoney(coffee.price * coffee.quantity)

  function handleIncrement() {
    updateCartItemQuantity(coffee.id, "increment")
  }

  function handleDecrement() {
    updateCartItemQuantity(coffee.id, "decrement")
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              quantity={coffee.quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              size="small"
            />
            <RemoveButton type="button" onClick={handleRemove} >
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>{coffeeTotal}</p>
    </CoffeeCartCardContainer>
  )
}