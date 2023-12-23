import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo_img " id>
                    <img src={Logo} alt="" />
                </div>
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Service
                        </li>
                        <li>
                            Contact
                        </li>
                        <li className="header_btn">
                            +8980003809343
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header