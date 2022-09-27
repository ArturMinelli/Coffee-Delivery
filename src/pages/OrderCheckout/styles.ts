import styled from 'styled-components'

export const OrderCheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`
