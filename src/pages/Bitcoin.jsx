import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Crypto = ({text, title}) => {
  return(
    <>
    <TextBox>
      <MainText>{title} 🚀</MainText>
      <Text>{text}</Text>
    </TextBox>
    </>
  )
}


function Bitcoin() {
  return (
    <Box>
      <Crypto 
      title='About ₿itcoin'
      text='Bitcoin is a decentralized digital currency,
      without a central bank or single administrator, that
      can be sent from user to user on the peer-to-peer bitcoin
      network without the need for intermediaries'
       />

      <Crypto title='Are bitcoins safe ? '
      text='Bitcoin security issues. While Bitcoin technology
      is pretty safe, there are some risks to consider before
      you make an investment. Bitcoin is not anonymous and the price
      of cryptos can be extremely volatile.'
       />

      <Crypto title='Which country has most Bitcoin ?'
      text='Vietnam is the undefeated winner of the ranking, 
      scoring high on overall crypto transaction value as well as payments
      made by individuals. The smaller country is incoming cryptocurrency to India.'
       />

      <Crypto title='How many bitcoins are left ?'
      text='How Many Bitcoins Have Been Mined? 
      As of January 2022, 18.9 million bitcoins have
      already been mined, with about 2.1 million bitcoins still
      to be released. The total Bitcoin supply is capped at 21 million.'
      />

    <BtnBox>
    <Link to = '/'>
      <Btn>Back Home</Btn>
    </Link>
    </BtnBox>
    </Box>
  )
}
export default Bitcoin

const BtnBox = styled.div`
    text-align: center;
    padding: 0.6rem;
    margin-bottom: 20px;
`
const Btn = styled.button`
    width: 180px;
    height: 60px;
    background-color: #800035;
    color: white;
    border: none;
    border-radius: 14px;
    font-size: 20px;
    cursor: pointer;
    transition: ease-out 0.7s;

    :hover {
      transform: translateY(-7px);
      background-color: #80066b;
    }
`

const Box = styled.div`
  overflow-x: hidden;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='292' height='292' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%233B172A' stroke-width='2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23FF67A1'%3E%3Ccircle cx='769' cy='229' r='6'/%3E%3Ccircle cx='539' cy='269' r='6'/%3E%3Ccircle cx='603' cy='493' r='6'/%3E%3Ccircle cx='731' cy='737' r='6'/%3E%3Ccircle cx='520' cy='660' r='6'/%3E%3Ccircle cx='309' cy='538' r='6'/%3E%3Ccircle cx='295' cy='764' r='6'/%3E%3Ccircle cx='40' cy='599' r='6'/%3E%3Ccircle cx='102' cy='382' r='6'/%3E%3Ccircle cx='127' cy='80' r='6'/%3E%3Ccircle cx='370' cy='105' r='6'/%3E%3Ccircle cx='578' cy='42' r='6'/%3E%3Ccircle cx='237' cy='261' r='6'/%3E%3Ccircle cx='390' cy='382' r='6'/%3E%3C/g%3E%3C/svg%3E");
`


const TextBox = styled.div`
   width: 85vw;
   max-width: 40rem;
   margin: 100px auto;
   font-size:21px;
   line-height: 80px;
   border: 2px solid orange;
   padding: 4rem;
   background-color: #070816; 
`


const MainText = styled.div`
  color: orange;
  font-size: 25px;
  font-family: cursive; 
`

const Text = styled.div`
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: #abad04;
    font-size:21px;
    font-family: 'Manrope', sans-serif;
`


// const BitcoinP = styled.div`
//     width: 100vw;
//     height: 100vh; 
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-image: url('https://cdn.wallpapersafari.com/7/96/2XmLKM.jpg');
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items:center;
// `