import React from 'react'
import '../style/Signin.css'
import styled from 'styled-components'


export default function SignIn() {
 return (
<Box>
  <Container>
    <div className='main-login'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        <form>
            <h3>Login Here</h3>
            <label for="username">Username</label>
         <input type="text" placeholder="Email or Phone" id="username" />

         <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>
        <button className='login-btn'>Log In</button>
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


