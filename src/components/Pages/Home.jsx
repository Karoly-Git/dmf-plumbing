// React Imports
import React from 'react';

// Component Imports
import Services from '../widgets/Services';
import About from '../widgets/About';
import ServiceDetails from '../widgets/ServiceDetails';
import { MainSlider } from '../widgets/Sliders';
import Available from '../widgets/Available';

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
            className: 'diagonal',
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
                        <h3 className='h3-style'>Legal and Safe Services</h3>
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
    ];

    return (
        <div className='page home'>
            <div className='head-container'>
                <div className='box'>
                    <div className='content-box' style={{ width: 'unset', padding: '2rem', justifyContent: 'center' }}>
                        <div>
                            <MainSlider />
                        </div>
                    </div>
                </div>
            </div>


            <h1 className='slogan'>
                Precision in Plumbing, Warmth in Heating,
                Excellence in Boiler Solutions
            </h1>

            <Services />

            <h2 className='slogan'>
                Legal and Safe Services for Your Home
            </h2>


            <ServiceDetails
                key={serviceDetails[0].slogan}
                className={serviceDetails[0].className}
                title={serviceDetails[0].title}
                details={serviceDetails[0].details}
            />

            <h2 className='slogan'>
                Gas Safe Registered Heating Engineers and Gas Fitters
            </h2>

            <ServiceDetails
                key={serviceDetails[1].slogan}
                className={serviceDetails[1].className}
                title={serviceDetails[1].title}
                details={serviceDetails[1].details}
            />

            <ServiceDetails
                key={serviceDetails[2].slogan}
                className={serviceDetails[2].className}
                title={serviceDetails[2].title}
                details={serviceDetails[2].details}
            />

            <h2 className='slogan'>
                No call-out charge,
                100% transparency
            </h2>

            <About />

            <Available />

        </div>
    )
}
