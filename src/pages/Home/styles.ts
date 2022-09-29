import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-bottom: 9.8rem;
`

export const ToastContainerStyled = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',

})`
  font-weight: bold;
`;
