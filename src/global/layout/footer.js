import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="coloumn_one">
                    1
                </div>
                <div className="coloumn_two">
                    2
                </div>
                <div className="coloumn_three">
                    <ul>
                        <li>
                            +971 58 67 47 123
                        </li>
                        <li>
                            info@homecomfort.com
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/muhammad-noor-a305bb170/"  >
                                Linkiden
                            </a>
                        </li>
                    </ul>
                    <div className="news_letter">
                        <input type="text" placeholder="Enter Email" />
                        <button>send</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer