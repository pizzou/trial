import React from 'react';
import './Services.css';
import icon1 from '../../../images/services/icon/consulting.png';
import icon2 from '../../../images/services/icon/integration.png';
import icon3 from '../../../images/services/icon/blue-page-speed.png';
import icon5 from '../../../images/services/icon/networks.png';
import icon4 from '../../../images/services/icon/service-shape.png';
import icon6 from '../../../images/services/icon/cyber.png';
import Service from './Service';

const servicesData =[
    {
        id:1,
        name: 'IT Consulting',
        description: 'Our IT consulting services are designed to provide expert guidance and strategic advice to help you make informed decisions about your technology infrastructure.',
        icon: icon1
    },
    {
        id:2,
        name: 'System Integration',
        description: 'We specialize in seamless system integration to optimize your IT infrastructure. Whether you are implementing a new software solution, upgrading existing systems, or integrating diverse platforms.',
        icon: icon2
    },
    {
        id:3,
        name: 'Page Speed Optimization & SEO',
        description: 'We optimize website page speed by ensuring faster loading time and lower page size. We are also an expert with Google Accelerated Mobile Pages (AMP). We also work on SEO.',
        icon: icon3
    },
    {
        id:4,
        name: 'Software Development',
        description: 'We offer end-to-end software development services to build custom solutions that align with your unique business requirements. From web applications to mobile apps and enterprise software, we leverage the latest technologies and agile methodologies to deliver robust, scalable, and user-friendly software solutions',
        icon: icon4
    },
    {
        id:3,
        name: 'Network Solutions',
        description: 'Our network solutions are designed to create a secure and reliable network infrastructure that supports your business operations. We provide network design, implementation, monitoring, and maintenance services, ensuring seamless connectivity, data security, and optimized network performance.',
        icon: icon5
    },
    {
        id:4,
        name: 'Cybersecurity',
        description: 'Protecting your digital assets is our top priority. Our cybersecurity services include vulnerability assessments, threat detection and prevention, data encryption, identity and access management, and security awareness training.',
        icon: icon6
    }
]

function Services() {
    return (
        <div className="service-container">
            <div className="text-center pt-5 w-50 m-auto">
                <h4 style={{fontWeight:'300', marginBottom:'10px'}}>SERVICES THAT WE PROVIDE DEDICATEDLY</h4>
                <h2 style={{fontSize:''}}>OUR SERVICES</h2>
            </div>

            <div className="row service">
                {
                    servicesData.map(data =><Service data={data} key={data.id}></Service>)
                }
            </div>
        </div>
    )
}

export default Services
