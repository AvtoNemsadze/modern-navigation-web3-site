import styled from 'styled-components'

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    border: 1px solid #fff;
    font-size:22px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 55px;
    width: 55px;
    text-decoration: none;
    box-shadow: inset 0 0 0 0 #fff;

    &:hover{
      background-color:white;
      transition: ease-out 0.7s;
      box-shadow: inset 0 -100px 0 0 #fff;
    }
  }
`
