import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddToCartWrapper, CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeName, Tags } from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    if(quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  const formattedPrice = formatMoney(coffee.price)
  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    addCoffeeToCart({
      ...coffee,
      quantity,
    })
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <CoffeeName>{coffee.name}</CoffeeName>

      <CoffeeDescription>
          {coffee.description}
      </CoffeeDescription>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
        </div>
        <AddToCartWrapper>
          <QuantityInput
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddToCartWrapper>
      </CardFooter>

    </CoffeeCardContainer>
  )
}