import React from 'react';
import Feature from './Feature';
import './Features.css';
import icon2 from '../../../images/whychooseus/icon/partnership.png'
import icon1 from '../../../images/whychooseus/icon/creativity.png'
import icon3 from '../../../images/whychooseus/icon/client.png'
import icon4 from '../../../images/whychooseus/icon/expertize.png'

const featureData = [
    {
        id:1,
        icon: icon4,
        title: 'Expertise',
        description: 'Our team consists of skilled professionals who stay abreast of the latest industry trends. '
    },
    {
        id:2,
        icon: icon3,
        title: 'Client-Centric Approach',
        description: 'We prioritize understanding our clientsunique needs and challenges. '
    },
    {
        id:3,
        icon: icon2,
        title: 'Innovation and Excellence',
        description: 'We are committed to driving innovation and excellence in everything we do.         '
    },
    {
        id:4,
        icon: icon1,
        title: 'Long-Term Partnerships',
        description: 'We value long-term relationships with our clients.'
    }
]

function Features() {
    return (
        <div className="features-container   m-auto">
            <div className="text-center pt-5">
                <h4 style={{fontWeight:'300', marginBottom:'10px'}}>WHY CHOOSE US</h4>
                <h2 style={{fontSize:'45px'}}>FEATURES</h2>
            </div>
            <div className="row  m-auto">
                {
                    featureData.map(data =><Feature data={data} key={featureData.id}></Feature>)
                }
            </div>

            <div className="text-center mt-5">
                <p style={{fontWeight:'600'}}>Together, let's navigate the digital landscape, embrace innovation, and lead with excellence. Welcome to TE-SO!. <a href="/service">Let’s get started</a></p>
            </div>
        </div>
    )
}

export default Features
