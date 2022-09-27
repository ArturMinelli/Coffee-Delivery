import { PaymentMethodInputContainer } from "./styles";
import { InputHTMLAttributes, ReactNode } from "react";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
}

export function PaymentMethodInput({label, icon}: PaymentMethodInputProps) {
  return (
    <PaymentMethodInputContainer>
      {icon}
      {label}
    </PaymentMethodInputContainer>
  )
}