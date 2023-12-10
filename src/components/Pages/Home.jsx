// React Imports
import React from 'react';
// Component Imports
import Services from '../Services';
import Certificates from '../Certificates';
import About from '../About';
import ServiceDetails from '../ServiceDetails';
// Image Imports
import boiler from '../../img/services/boiler3.png';

export default function Home() {
    const serviceDetails = [
        {
            isActive: true,
            className: 'round-box',
            slogan: 'Boiler Servicing and Replacement',
            img: <img src={boiler} alt="Gas boiler." />,
            details:
                <>
                    <p>
                        Today's high-efficiency boilers can save you a small fortune on your heating bills,
                        particularly if your boiler is over ten years old. Modern boilers are smaller, neater
                        and the latest technology allows for improved efficiency and flow rates.
                        SW London Plumbing and Heating services only fit the leading brand of modern boilers,
                        such as Vaillant, and Worcester and as boiler replacement is one of our key services,
                        we can offer our boiler replacement service at keen, value-for-money prices.
                    </p>
                </>,
        },
        {
            isActive: true,
            className: 'diagonal',
            slogan: 'Gas Safe Registered Heating Engineers and Gas Fitters',
            img: <img src={boiler} alt="Gas boiler." />,
            details:
                <>
                    <p>
                        <h3>Expert Engineers</h3>
                        If you need to find a qualified and legitimate central heating engineer, or gas fitter,
                        to repair or install a gas appliance, then you can rely on us, as our Gas Safe registered
                        heating engineers are both experienced and fully insured. We are specialists in boiler repair
                        and replacement and can supply and fit new, energy-efficient boilers throughout London.
                    </p>
                    <p>
                        <h3>Gas Safe registered</h3>
                        If you are not familiar with the term, “Gas Safe registered”, it indicates that all
                        subcontractors or engineers who undertake gas related work for and on behalf of
                        SW London plumbing and Heating Services have achieved expertise in ensuring safety when
                        working with gas, and have qualified for registration with Gas safe. Gas Safe
                        registration was previously known as “Corgi Registered”
                    </p>
                    <p>
                        <h3>Legal and Safe Services</h3>
                        This gives you the assurance that when our plumbers or gas fitters are working in your home,
                        you are receiving a legal and safe service, which is important, not only for your safety, but
                        it is paramount when trying to attain planning permission, insurance, or renting or selling your home.
                    </p>
                </>,
        },
        {
            isActive: true,
            className: 'round-box at-right',
            slogan: 'Landlord Gas Checks',
            img: <img src={boiler} alt="Gas boiler." />,
            details:
                <>
                    <p>
                        We offer full central heating, boiler, and gas appliance checks and can supply the appropriate
                        Landlord's gas safe certification.
                        If your plumbing or gas fitting inquiry is not of an urgent nature, please feel free to contact
                        us via email or through our contact form.
                    </p>
                    <p>
                        PLEASE NOTE: A Gas gas engineer/gas safe engineer
                        will only be sent if works involve gas.
                    </p>
                </>,
        },
    ];

    return (
        <div className='page home'>
            <div className='head-container'>
                <div className='box'>
                    <div className='content-box'>
                        <div>
                            <h2>Home</h2>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='slogan'>
                Precision in Plumbing, Warmth in Heating,
                Excellence in Boiler Solutions
            </h1>

            {!false && <Services />}

            <h2 className='slogan'>
                No call-out charge,
                100% transparency
            </h2>

            {!false && <About />}

            <h2 className='slogan'>
                Legal and Safe Services for Your Home
            </h2>

            {serviceDetails.map((service) =>
                service.isActive &&
                <ServiceDetails
                    key={service.slogan}
                    className={service.className}
                    slogan={service.slogan}
                    details={service.details}
                    img={service.img}
                />
            )}
        </div>
    )
}
