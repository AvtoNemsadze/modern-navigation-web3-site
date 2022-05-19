import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import '../style/Signin.css'


export default function Signin() {
 return (
  <Box>
    <Container>
      <div className='main-login'>
       <div className="background">
        <div className="shape"></div>
          <div className="shape"></div>
          <form>
          <h3>Sign in</h3>
            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password"></input>
            <button className='login-btn'>Sign In</button>

          <Link to='/signup'>
            <button className='signup-btn'>Sign Up</button>
          </Link>
          <div class="social">
          </div>
        </form>
        </div>
      </div>
    </Container>
  </Box>
  )
}


const Container = styled.div`
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('https://theq1group.com/images/nft-tile-bg.jpg');
    display: flex;
    overflow-y: none;
`

const Box = styled.div`
    overflow-x: hidden;
`


