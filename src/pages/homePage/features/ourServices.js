import React from 'react'
import ServiceCard from '../../../global/components/service_card'

const OurServices = () => {
    return (
        <div className='ourServies page_width' >
            <h2 className='global_title' >Explore our <span> Services</span> </h2>
            <div className="card_grid">
                <ServiceCard service_img="https://images.pexels.com/photos/4108807/pexels-photo-4108807.jpeg" title='Ac Duct' />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    )
}

export default OurServices