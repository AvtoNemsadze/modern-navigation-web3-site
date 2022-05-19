import styled from 'styled-components'

export const StyledFooter = styled.footer`
background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230c0106' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%2318010c' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23240211' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23300217' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%233C031D' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;


  color: #fff;
  padding: 0px 0 2px;

  ul {
    list-style-type: none;
    margin:10px auto;
  }

  ul li {
    margin:10px;
    color:#808000;
  }

  p {
    text-align: left;
    margin: 10px -5px;
    padding: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    ul {
      padding: 0;

    }
    p {
      text-align: center;

    }

  }
`
