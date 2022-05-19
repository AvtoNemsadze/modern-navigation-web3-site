import styled from 'styled-components'

export const Button = styled.button`
 position: relative;
 padding: 21px 36px;
 display: block;
 text-decoration: none;
 text-transform: uppercase;
 overflow: hidden;
 border-radius: 40px;
 border: none;
 cursor:pointer;
 margin-top: 20px;


span {
 position: relative;
 color: #fff;
 font-family: Arial;
 letter-spacing: 8px;
 z-index: 1;
}

.liquid {
 position: absolute;
 top: -80px;
 left: 0;
 width: 100%;
 height: 200px;
 background: purple;
 box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
 transition: .5s;
}

.liquid::after,
.liquid::before {
 content: '';
 width: 200%;
 height: 200%;
 position: absolute;
 top: 0;
 left: 50%;
 transform: translate(-50%, -75%);
 background: #fff;
}

.liquid::before {
 border-radius: 45%;
 background: rgba(20, 20, 20, 1);
 animation: animate 5s linear infinite;
}

.liquid::after {
 border-radius: 40%;
 background: rgba(20, 20, 20, .5);
 animation: animate 10s linear infinite;
}

&:hover .liquid {
 top: -120px;
}

@keyframes animate {
 0% {
  transform: translate(-50%, -75%) rotate(0deg);
 }

 100% {
  transform: translate(-50%, -75%) rotate(360deg);
 }
}
`
export const ButtonCard = styled.button`
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 18px 20px;
  background-color: ${({ bg }) => bg || 'orange'};
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  @media screen and (max-width: 650px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
}
`