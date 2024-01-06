import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'
import { Link } from 'react-router-dom'

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
                            <Link to="/" >
                                Home
                            </Link>

                        </li>
                        <li>
                            <Link to="/about-us" >
                                Service
                            </Link>

                        </li>
                        <li>
                            <Link to="/contact-us" >
                                Contact
                            </Link>

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