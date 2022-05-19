import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


function Home() {
  return (
<Box>
<Blockchain>
  <TextBox>
    <Headline>Explore endless possibilities</Headline>
      <BtnBox>
          <NavLink to='blockchain'>
            <button>Get Started Now</button>
          </NavLink>
{/* 
          <NavLink to='signup'>
            <button>Sign Up</button>
        </NavLink> */}
      </BtnBox>
  </TextBox>
</Blockchain>
</Box>
  )
}

export default Home

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 800px) {
    display: grid;
    row-gap:1px;
  }
`


const Headline = styled.div`
  color: #8b2838;
    margin-bottom: 30px;
    font-size: 45px;
    font-family: cursive;
    font-weight: bold;

    @media screen and (max-width: 700px) {font-size: 33px}
`


const TextBox = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  margin: auto;
  width: 50%;
  border-bottom: 2px solid #759e05;


  button{
    width: 200px;
    height: 60px;
    background-color: #dda711;
    color: #1f1d1d;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 50px;
    transition: ease-out 0.5s;

    :hover {
    transform: translateY(-7px);
    }

  }
`


const Box = styled.div`
    overflow-x: hidden;
`

const Blockchain = styled.div`
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('https://theq1group.com/images/nft-tile-bg.jpg');
    display: flex;
    overflow-y: none;
`