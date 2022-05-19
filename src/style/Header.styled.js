import styled from 'styled-components'

export const StyledHeader = styled.header`
background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230f030d' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%231e051b' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%232c0828' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%233b0a36' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%234A0D43' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
  padding: 45px 0;
  color:purple;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 300px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`
