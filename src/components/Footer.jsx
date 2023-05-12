import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'




const Footer = () => {
  return (
    <footer>
        <div className='container footer__container'>
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt='Footer Logo' />
                </Link>
                <p>
                    Thank you for visiting! Hope everything went well! Hope to hear from you and thank you for your business.
                </p>
                <div className='footer__socials'>
                    <a href='https://www.linkedin.com/in/tyler-murrow-98773b187/' target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href='https://www.facebook.com/tyler.murrow.982' target='_blank' rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href='https://twitter.com/' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href='https://instagram.com/' target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/s'>Support</Link>
            </article>
        </div>
        <div className='footer__copyright'>
            <small>2023 Murrow's Elite Exterior &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer