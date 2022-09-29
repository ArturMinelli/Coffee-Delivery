import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

export interface QuantityInputProps {
  size?: "medium" | "small";
  quantity?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantityInput({ size="medium", quantity=0, onIncrement, onDecrement }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 0} >
        <Minus size={14} weight="fill" onClick={onDecrement}/>
      </IconWrapper>
      <input type="number" readOnly value={quantity} min="0" />
      <IconWrapper>
        <Plus size={14} weight="fill" onClick={onIncrement}/>
      </IconWrapper>
    </QuantityInputContainer>
  )
}