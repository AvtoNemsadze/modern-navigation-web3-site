import { StyledHeader, Image } from '../style/Header.styled'
import { Button } from '../style/Button.styled'

import styled from 'styled-components'


export default function Header() {
  return (
    <StyledHeader>
      <Container>

        <Flex>
          <div>
            <Text>What is Blockchain Technology?</Text>

            <p style={{color:'white'}}>
            Blockchain is a system of recording information
            in a way that makes it difficult or impossible
            to change, hack, or cheat the system. A blockchain
            is essentially a digital ledger of transactions that
            is duplicated and distributed across the entire network
            of computer systems on the blockchain.
            </p>

          <Section>
            <a href="https://www.investopedia.com/terms/b/blockchain.asp" 
            target='_blank' rel='noreferrer' style={{textDecoration:'none'}}>
            <Button> 
              <span>More Info</span>
              <div class="liquid"></div>
            </Button>
            </a>
          </Section>
          </div>

          <Image src='https://cdn-icons-png.flaticon.com/512/1171/1171574.png' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}


const Section = styled.div`
   @media screen and (max-width: 700px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
}
`

const Text = styled.div`
  text-align: center;
  display: flex;
  font-size: 36px;
  font-weight: bold;
`



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
