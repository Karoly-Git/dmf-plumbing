// React Imports
import React from 'react';
import { motion as m } from 'framer-motion';

// Image Imports
import legalAndSafe from '../../img/legal-and-safe.png';
import noCallOut from '../../img/no-call-out.png';
import gasSafe from '../../img/gas-safe-registered.png';
import solutions from '../../img/solutions.png';

// Component Imports
import Services from '../widgets/Services';
import ServiceDetails from '../widgets/ServiceDetails';
import MainSlider, { ReviewSlider } from '../widgets/Sliders';
import Available from '../widgets/Available';
import SloganContainer from '../widgets/SloganContainer';

export default function Home() {
    const serviceDetails = [
        {
            isActive: true,
            className: 'round-box',
            title: 'Boiler Servicing and Replacement',
            details:
                <>
                    <p className='p-style'>
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
            className: 'diagonal bg-1-paralax',
            title: '',
            details:
                <>
                    <div>
                        <h3 className='h3-style'>Expert Engineers</h3>
                        <p className='p-style'>
                            If you need to find a qualified and legitimate central heating engineer, or gas fitter,
                            to repair or install a gas appliance, then you can rely on us, as our Gas Safe registered
                            heating engineers are both experienced and fully insured. We are specialists in boiler repair
                            and replacement and can supply and fit new, energy-efficient boilers throughout London.
                        </p>
                    </div>
                    <div>
                        <h3 className='h3-style'>Gas Safe registered</h3>
                        <p className='p-style'>
                            If you are not familiar with the term, “Gas Safe registered”, it indicates that all
                            subcontractors or engineers who undertake gas related work for and on behalf of
                            SW London plumbing and Heating Services have achieved expertise in ensuring safety when
                            working with gas, and have qualified for registration with Gas safe. Gas Safe
                            registration was previously known as “Corgi Registered”
                        </p>
                    </div>
                    <div>
                        <h3 className='h3-style'>Legal and Safe Plumbing Services</h3>
                        <p className='p-style'>
                            This gives you the assurance that when our plumbers or gas fitters are working in your home,
                            you are receiving a legal and safe service, which is important, not only for your safety, but
                            it is paramount when trying to attain planning permission, insurance, or renting or selling your home.
                        </p>
                    </div>
                </>,
        },
        {
            isActive: true,
            className: 'round-box at-right',
            title: 'Landlord Gas Checks',
            details:
                <>
                    <p className='p-style'>
                        We offer full central heating, boiler, and gas appliance checks and can supply the appropriate
                        Landlord's gas safe certification.
                        If your plumbing or gas fitting inquiry is not of an urgent nature, please feel free to contact
                        us via email or through our contact form.
                    </p>
                    <p className='p-style'>
                        PLEASE NOTE: A Gas gas engineer/gas safe engineer
                        will only be sent if works involve gas.
                    </p>
                </>,
        },
        {
            isActive: true,
            className: 'diagonal center',
            title: '',
            details:
                <>
                    <div>
                        <h3 className='h3-style'>Plumbing Services</h3>
                        <p className='p-style'>
                            Welcome to our Plumbing Services where we offer a
                            comprehensive range of solutions to meet all your plumbing
                            and heating needs. Whether you require assistance with
                            plumbing, heating, boilers, drainage, gas services,
                            maintenance, or commercial installations, our certified
                            experts are here to provide top-notch services without any
                            call-out rates. From new installations to gas inspections and
                            beyond, we've got you covered. Explore our offerings and
                            experience unmatched expertise in the world of plumbing and
                            heating.
                        </p>
                        <p className='p-style'>
                            {false && <ul>
                                <li>Plumbing</li>
                                <li>Heating &#38; Boilers</li>
                                <li>Drainage</li>
                                <li>Gas</li>
                                <li>Maintenance</li>
                                <li>Commercial gas</li>
                                <li>Commercial plumbing</li>
                                <li>New Installations</li>
                                <li>No Call out Rates</li>
                                <li>Certified Installations</li>
                                <li>Gas Inspections</li>
                                <li>And more…</li>
                            </ul>}
                        </p>
                    </div>
                    <div>
                        <h3 className='h3-style'>Experience & Professionalism</h3>
                        <p className='p-style'>
                            Discover the essence of Experience & Professionalism with
                            our plumbing services. At our company, we believe in 100%
                            transparent charges, backed by a team of qualified
                            operatives who provide quality workmanship. With guaranteed
                            work and a commitment to customer satisfaction, we offer
                            working hours customer support and never impose a call-out
                            charge. From bathroom fitting to shower pump installations,
                            trust us for excellence in every aspect of plumbing and
                            heating services.
                        </p>
                        <p className='p-style'>
                            {false && <ul>
                                <li>100% transparent charges</li>
                                <li>Working hours customer support</li>
                                <li>Guaranteed work</li>
                                <li>Quality workmanship</li>
                                <li>No call-out charge</li>
                                <li>Qualified operatives</li>
                                <li>Bathroom fitting</li>
                                <li>Shower pump installs</li>
                            </ul>}
                        </p>
                    </div>
                </>,
        },
    ];

    return (
        <m.div
            className='page home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>

            <div className='head-container'>
                <div className='box'>
                    <div className='content-box'>
                        <div>
                            <MainSlider />
                        </div>
                    </div>
                </div>
            </div>


            <SloganContainer h1="Precision in Plumbing, Warmth in Heating, Excellence in Boiler Solutions" />

            <div className="wrapper">
                <Services />

                <SloganContainer h2="Legal and Safe Plumbing Services for Your Home" sloganIcon={legalAndSafe} />

                <ReviewSlider />

                <ServiceDetails
                    key={serviceDetails[0].slogan}
                    className={serviceDetails[0].className}
                    title={serviceDetails[0].title}
                    details={serviceDetails[0].details}
                />

                <SloganContainer h2="Gas Safe Registered Heating Engineers and Gas Fitters" sloganIcon={gasSafe} />

                <ServiceDetails
                    key={serviceDetails[1].slogan}
                    className={serviceDetails[1].className}
                    title={serviceDetails[1].title}
                    details={serviceDetails[1].details}
                />

                <SloganContainer h2="No call-out charge, 100% transparency" sloganIcon={noCallOut} />

                <ServiceDetails
                    key={serviceDetails[2].slogan}
                    className={serviceDetails[2].className}
                    title={serviceDetails[2].title}
                    details={serviceDetails[2].details}
                />

                <SloganContainer h2="Comprehensive Plumbing Solutions" sloganIcon={solutions} />

                <ServiceDetails
                    key={serviceDetails[3].slogan}
                    className={serviceDetails[3].className}
                    title={serviceDetails[3].title}
                    details={serviceDetails[3].details}
                />
            </div>

            <Available />
        </m.div>
    )
}
