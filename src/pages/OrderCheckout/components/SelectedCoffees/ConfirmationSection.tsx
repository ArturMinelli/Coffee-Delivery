import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsPrice } = useCart()

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText color="text" size="s">Total de itens</RegularText>
        <RegularText color="text" size="m">{`R$ ${formatMoney(cartItemsPrice)}`}</RegularText>
      </div>
      <div>
        <RegularText color="text" size="s">Entrega</RegularText>
        <RegularText color="text" size="m">{`R$ ${formatMoney(DELIVERY_PRICE)}`}</RegularText>
      </div>
      <div>
        <RegularText weight={700} color="subtitle" size="l">Total</RegularText>
        <RegularText weight={700} color="subtitle" size="l">{`R$ ${formatMoney(cartItemsPrice + DELIVERY_PRICE)}`}</RegularText>
      </div>
      <NavLink to="/order-confirmed"></NavLink>
      <Button text={"Confirmar pedido"} type="submit"/>
    </ConfirmationSectionContainer>
  )
}