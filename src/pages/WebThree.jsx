import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


function WebThree() {
  return (
  <Box>
    <Web3>

    <TextBox>
        <BtnBox>
        <NavLink to='/signin'>
            <button>Sign In</button>
        </NavLink>
        
        <NavLink to='/signup'>
            <button>Sign Up</button>
        </NavLink>
        </BtnBox>
    </TextBox>

    </Web3>
  </Box>
  )
}
export default WebThree


const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 800px) {
    display: grid;
    row-gap:1px;
  }
`


const TextBox = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: auto;
  width: 50%;


  button{
    width: 200px;
    height: 60px;
    background-color: #8b2838;
    background-color: #d69404;
    color: #000000;
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

const Web3 = styled.div`
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('https://i0.wp.com/blog.bingx.com/wp-content/uploads/2021/09/web3.0_blog_1200x675p_092921.png?fit=1600%2C900&ssl=1');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
`