import React from 'react'
import '../style/Signin.css'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Signup() {
 return (
  <Box>
    <Container>
      <div className='main-login'>
       <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        <form className='form'>
            <h3>Sign up</h3>
            <label for="username">Name</label>
           <input type="text" placeholder="name" id="username" />

            <label for="username">Email</label>
           <input type="text" placeholder="Email" id="username" />

           <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"></input>
          <button className='signup-btn'>Sign Up</button>

          <Link to='/signin'>
            <button className='login-btn'>Sign In</button>
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


