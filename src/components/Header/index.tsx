import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartItemsAmount } = useCart()

  return(
    <HeaderContainer>
      <div className='container'>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant='purple'>
            <MapPin size={22} weight="fill"/>
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to="/order-checkout">
            <HeaderButton variant='yellow'>
              {cartItemsAmount >= 0 &&
                <span>{cartItemsAmount}</span>
              }
              <ShoppingCart size={22} weight="fill"/>
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}