import { ThemeProvider } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import { Container } from '../style/Container.styled'
import GlobalStyles from '../style/Global'
import data from './data'
// https://images.ctfassets.net/9qa6g0dkae5p/1WsK73dQ3T5U1DDai9roVn/c89033cf29f6a412715a10c705c8480d/Blog_-16_v2.png?w=1200&q=80


const theme = {
  colors: {
    header: '#ebfbff',
    body: 'purple',
    footer: '#003333',
  },
  mobile: '768px',
}

// blockchain section

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          {data.map((item, index) => (
            <Body key={index} item={item} />
          ))}
        </Container>
        <Footer />
    </ThemeProvider>
  )
}
export default App

