import React, { useState } from 'react';

const Header = () => {
    const [toggleMenu, setToggle] = useState(false);

    return (
        <header className='app_header'>
            <div className="app_header__menu">
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
                        aaa
                    </div>
                    {/* <div className="mark-menu"></div> */}
                </div>
            </div>
        </header>
    );
};

export default Header;