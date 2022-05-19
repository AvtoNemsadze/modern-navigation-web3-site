import SocialIcons from './SocialIcons'
import styled from 'styled-components'

import { StyledFooter } from '../style/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <ul style={{margin:'70px auto'}}>
            <li>blockchain@app.com</li>
            <li>573-133-447-122</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>more info</li>
          </ul>

          <ul>
            <li>stack</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p style={{color:'#fff'}}>&copy; 2021 App. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}


const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`


// flex
const Flex = styled.div`
  display: flex;
  align-items: center;
  
  p{
    margin-top: 20px;
  }


  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`
