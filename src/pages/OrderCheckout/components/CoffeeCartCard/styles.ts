import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 100%;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0 0.5rem;
  transition: 0.4s;

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
`
