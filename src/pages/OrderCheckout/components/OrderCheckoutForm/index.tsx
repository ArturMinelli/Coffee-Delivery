import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { FormSectionContainer, OrderCheckoutFormContainer } from "./styles";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function OrderCheckoutForm() {
  const theme = useTheme()

  return (
    <OrderCheckoutFormContainer>
      <TitleText size="xs" color="subtitle">Complete seu pedido</TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço aonde deseja receber seu pedido"
          icon={ <MapPinLine size={22} color={theme.colors["brand-yellow-dark"]} /> }
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={ <CurrencyDollar size={22} color={theme.colors["brand-purple"]} /> }
        />
      <PaymentMethodOptions />
      </FormSectionContainer>

    </OrderCheckoutFormContainer>
  )
}