import { FaTwitter, FaFacebook, FaLinkedin,FaYoutube } from 'react-icons/fa'
import { StyledSocialIcons } from '../style/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter style={{color:'#4d4dff'}} target='_blank' rel='noreferrer' />
        </a>
      </li>

      <li>
        <a href='https://youtube.com' target='_blank' rel='noreferrer'>
          <FaYoutube style={{color:'red'}}/>
        </a>
      </li>


      <li>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <FaFacebook style={{color:'#3333ff'}}/>
        </a>
      </li>

      <li>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
          <FaLinkedin style={{color:'#3333ff'}}/>
        </a>
      </li>
    </StyledSocialIcons>
  )
}
