import { OrderCheckoutForm } from "./components/OrderCheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { OrderCheckoutContainer } from "./styles";

export function OrderCheckout() {
  return (
    <OrderCheckoutContainer className="container">
      <OrderCheckoutForm />
      <SelectedCoffees />
    </OrderCheckoutContainer>
  )
}