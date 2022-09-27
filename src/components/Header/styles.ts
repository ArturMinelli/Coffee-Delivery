import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background-color: ${(props) => props.theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-height: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};
  cursor: inherit;

  span {
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
    color: ${(props) => props.theme.colors['base-white']};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    font-size: 0.75rem;
  }

  ${(props) => css`
    background: ${props.theme.colors[`brand-${props.variant}-light`]};
    color: ${props.theme.colors[`brand-${props.variant}-dark`]};
  `}

  ${(props) => props.variant === 'purple' && css`
    svg {
      color: ${props.theme.colors['brand-purple']};
    }
  `}
`
