import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/images/logo.svg';
import './home.css';

function HomePage() {
    return (
        <div className='home'>
            <div className='home-content'>
                <img src={Logo} alt='Ive logo' className='home-logo' />
                <div className='social-list'>
                    <a href='https://twitter.com/IVEstarship' target='_blank' rel="noopener"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href='https://www.instagram.com/IVEstarship/' target='_blank' rel="noopener"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href='https://www.facebook.com/IVEstarship' target='_blank' rel="noopener"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href='https://www.youtube.com/c/IVEstarship' target='_blank' rel="noopener"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href='https://www.tiktok.com/@ive.official' target='_blank' rel="noopener"><FontAwesomeIcon icon={faTiktok} /></a>
                </div>
            </div>
        </div >
    );
}

export default HomePage;