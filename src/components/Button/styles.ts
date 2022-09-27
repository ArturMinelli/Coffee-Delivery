import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors['brand-yellow']};
  color: ${(props) => props.theme.colors['base-white']};
  padding: 0.75rem 2.8rem;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.textSizes['components-button-g']};
  font-weight: bold;
  transition: 0.4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['brand-yellow-dark']};
    cursor: pointer;
  }
`