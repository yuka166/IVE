import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/logo.svg';
import './header.css';

function Header() {
    const [hideMenu, setHideMenu] = useState(false);
    function MenuChanged() {
        window.innerWidth < 821 ? setHideMenu(true) : setHideMenu(false)
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            MenuChanged();
        })
        MenuChanged();
    }, []);

    return (
        <header>
            <Link to='/about'>Giới thiệu</Link>
            <Link to='/members'>Thành viên</Link>
            <Link to='/'><img src={Logo} alt='Ive logo' className='header-logo' /></Link>
            <Link to='/discography'>Discography</Link>
            <Link to='/videos'>Video</Link>
            {hideMenu && <div><FontAwesomeIcon icon={faBars} /></div>}
        </header>
    )
}

export default Header;