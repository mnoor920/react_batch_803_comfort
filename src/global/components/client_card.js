import React from 'react'
import { IoStar } from "react-icons/io5";
import ClientImg from '../../assets/images/home/review_img.png'

const ClientCard = () => {
    return (
        <div className="client_card">
            <div className="outer_content">
                <div className="img">
                    <img src={ClientImg} alt="" />
                </div>
                <div className="img_content">
                    <h2>
                        Alena
                    </h2>
                    <div className="rating">
                        <small>3 Years Ago</small>
                        <div className="star">
                            <IoStar color='#FFB800' className='icons' size={24} />
                            <IoStar color='#FFB800' className='icons' size={24} />
                            <IoStar color='#FFB800' className='icons' size={24} />
                            <IoStar color='#FFB800' className='icons' size={24} />
                            <IoStar color='#FFB800' className='icons' size={24} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower_content">
                <p>
                    We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.
                </p>
            </div>
        </div>
    )
}

export default ClientCard