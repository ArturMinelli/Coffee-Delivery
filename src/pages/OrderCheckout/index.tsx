import { OrderCheckoutForm } from "./components/OrderCheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { OrderCheckoutContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  cash = "cash",
}

const orderCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" }
    }
  })
});

export type OrderData = zod.infer<typeof orderCheckoutFormValidationSchema>

type OrderCheckoutFormData = OrderData

export function OrderCheckout() {
  const orderCheckoutForm = useForm<OrderCheckoutFormData>({
    resolver: zodResolver(orderCheckoutFormValidationSchema)
  })

  const { cleanCart } = useCart()

  const { handleSubmit } = orderCheckoutForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: OrderCheckoutFormData) {
    console.log(data)
    navigate('/order-confirmed', {
      state: data
    })

    cleanCart()
  }

  return (
    <FormProvider {...orderCheckoutForm} >
      <OrderCheckoutContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <OrderCheckoutForm />
        <SelectedCoffees />
      </OrderCheckoutContainer>
    </FormProvider>
  )
}