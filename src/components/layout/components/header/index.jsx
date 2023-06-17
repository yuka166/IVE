import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/logo.svg';
import './header.css';

function Nav(props) {
    return (
        <nav>
            <Link to='/about'>Giới thiệu</Link>
            <Link to='/members'>Thành viên</Link>
            {!props.hideMenu && <Link to='/'><img src={Logo} alt='Ive logo' className='header-logo' /></Link>}
            <Link to='/discography'>Discography</Link>
            <Link to='/videos'>Video</Link>
        </nav>
    )
}

function Header() {
    const [hideMenu, setHideMenu] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false);

    function MenuChanged() {
        window.innerWidth < 821 ? setHideMenu(true) : setHideMenu(false);
    }

    function HideMenu() {
        const Navigation = document.getElementById('fullscreen-nav');

        setDisplayMenu(false);
        document.body.style.position = "static";
        Navigation.style.display = "none";
    }

    function DisplayMenu() {
        const Navigation = document.getElementById('fullscreen-nav');
        const NavigationLink = document.querySelectorAll('#fullscreen-nav>nav>a');

        displayMenu ? setDisplayMenu(false) : setDisplayMenu(true);
        !displayMenu ? document.body.style.position = "fixed" : document.body.style.position = "static";
        displayMenu ? Navigation.style.display = "none" : Navigation.style.display = "block";

        NavigationLink.forEach(item => {
            item.removeEventListener('click', HideMenu)
            item.addEventListener('click', HideMenu)
        })
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            MenuChanged();
        })
        MenuChanged();
    }, [])

    return (
        <header>
            {hideMenu &&
                <>
                    <Link to='/'><img src={Logo} alt='Ive logo' className='header-logo' /></Link>
                    <button onClick={DisplayMenu}><FontAwesomeIcon icon={faBars} /></button>
                    <div id='fullscreen-nav'><Nav hideMenu={hideMenu} /></div>
                </>
            }
            {!hideMenu && <Nav hideMenu={hideMenu} />}
        </header>
    )
}

export default Header;