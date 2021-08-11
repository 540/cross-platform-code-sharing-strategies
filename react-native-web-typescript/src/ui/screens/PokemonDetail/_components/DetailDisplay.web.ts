import styled from 'styled-components'

export const DetailDisplay = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  height: 100vh;
`
