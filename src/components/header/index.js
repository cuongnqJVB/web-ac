import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavMenus, expandMenus } from '../../config';

const Header = () => {
    const [toggleMenu, setToggle] = useState(false);
    console.log('NavMenus', NavMenus);

    return (
        <div className='app_header'>
            <header className='app-container'>
                <div className='header__logo'>
                    <img src='/images/header_logo.png' alt='healthy-app' />
                </div>
                <div className='header__right'>
                    <div className='header__nav'>
                        {
                            NavMenus.map((menu, index) => (
                                <Link to={menu.to} className='nav_item' key={index}>
                                    <div className='nav_item__icon'>
                                        {menu.icon}
                                        {/* badge */}
                                        <span className='nav_item__badge'>1</span>
                                    </div>
                                    <span className='nav_item__text'>{menu.text}</span>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="header__menu">
                        <div
                            onClick={() => setToggle(!toggleMenu)}
                            className={`toggle-menu ${toggleMenu ? 'open' : ''
                                }`}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div
                            className={`dropdown-menu beautify-scroll ${toggleMenu ? 'open' : ''}`}
                        >
                            <div className="menu_content">
                                {
                                    expandMenus.map((menu, index) => (
                                        <div className='menu__item' key={index}>
                                            <Link to={menu.to}>
                                                {menu.text}
                                            </Link>
                                            <span
                                                className='seperator'
                                            ></span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;