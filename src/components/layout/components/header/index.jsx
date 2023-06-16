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
    const [showMenu, setShowMenu] = useState(false);
    function MenuChanged() {
        window.innerWidth < 821 ? setHideMenu(true) : setHideMenu(false)
    }
    function ShowHideMenu() {
        showMenu ? setShowMenu(false) : setShowMenu(true);
        const bodyTag = document.body;
        !showMenu ? bodyTag.style.position = "fixed" : bodyTag.style.position = "static"
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            MenuChanged();
        })
        MenuChanged();
    }, []);

    return (
        <header>
            {hideMenu &&
                <>
                    <Link to='/'><img src={Logo} alt='Ive logo' className='header-logo' /></Link>
                    <button onClick={ShowHideMenu}><FontAwesomeIcon icon={faBars} /></button>
                    {showMenu && <div><Nav hideMenu={hideMenu} /></div>}
                </>
            }
            {!hideMenu && <Nav hideMenu={hideMenu} />}
        </header>
    )
}

export default Header;