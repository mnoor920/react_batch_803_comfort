import React from 'react'

const ServiceCard = ({ service_img, title }) => {
    return (
        <div className="service_card">
            <img src={service_img ? service_img : 'https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width='100%' alt="" />
            <div className="over_lay">
                <div className="content">
                    <h2>{title ? title : 'Title'}</h2>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard