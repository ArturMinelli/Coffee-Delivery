import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/Home'
import { OrderCheckout } from './pages/OrderCheckout'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return(
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/order-checkout' element={<OrderCheckout />}/>
        <Route path='/order-confirmed' element={<OrderConfirmed />}/>
      </Route>
    </Routes>
  )
}