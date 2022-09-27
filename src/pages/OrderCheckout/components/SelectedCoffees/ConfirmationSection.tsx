import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText color="text" size="s">Total de itens</RegularText>
        <RegularText color="text" size="m">R$ 29,70</RegularText>
      </div>
      <div>
        <RegularText color="text" size="s">Entrega</RegularText>
        <RegularText color="text" size="m">R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText weight={700} color="subtitle" size="l">Total</RegularText>
        <RegularText weight={700} color="subtitle" size="l">R$ 33,20</RegularText>
      </div>
      <NavLink to="/order-confirmed">
        <Button text={"Confirmar pedido"}/>
      </NavLink>
    </ConfirmationSectionContainer>
  )
}