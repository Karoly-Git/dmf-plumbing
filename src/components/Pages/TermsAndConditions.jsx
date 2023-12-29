// React Imports
import React from 'react';
import { motion as m } from 'framer-motion';

// Image Imports
import headIcon from '../../img/terms-and-conditions-icon.png'

// Data Imports
import { netPrices } from '../../js/prices';
import { contacts } from '../../js/contacts';

// Component Imports
import Available from '../widgets/Available';
import HeadContainer from '../widgets/HeadContainer';
import SloganContainer from '../widgets/SloganContainer';

export default function TermsAndConditions() {
    return (
        <m.div
            className='page policies-and-pricing'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>

            <HeadContainer h2="Terms &#38; Conditions" headIcon={headIcon} />

            <SloganContainer h1="Service Agreement and Terms" />

            <div className="wrapper">
                <section>
                    <div className="container">

                        <h3 className='h3-style'>Agreement</h3>
                        <p className='p-style'>
                            The terms you and the client refer to the person or entity, business / company who 
                            is giving permission to <strong> {contacts.company.name}</strong> to carry out works. The terms we, 
                            our, and us refer to <strong> {contacts.company.name}</strong>, to our trading name <strong> {contacts.company.tradingName} </strong> and 
                            any of our representatives. Please ensure you read these terms before using our services. 
                            By making a booking or using our services, you are agreeing to these terms.
                        </p>

                        <h3 className='h3-style'>Labour</h3>
                        <p className='p-style'>
                            Our regular weekday working hours hourly rate is <strong>£{netPrices.weekdays.dayTime}</strong> per hour plus vat. 
                            The first hour is always charged in full, and thereafter time spent will be charged in <strong>20-minute</strong> increments. 
                            This covers a <strong>24-hour</strong> period, for example, if we have to return the following day to finish off work or 
                            complete something that was not possible to be completed on the original visit, the first hour of the second visit 
                            is also charged in full. Exceptions will be made on a case by case basis, but this is a decision that will solely 
                            be made by us. Please visit our website for further information including our after-hours and weekend rates as 
                            these are different and are subject to change. Unless an official quote is issued to you, all investigations and 
                            any work carried out is charged by the hour.
                        </p>

                        <h3 className='h3-style'>Material collection</h3>
                        <p className='p-style'>
                            The collection of non-stock items is chargeable. Time taken will be kept to a minimum and should not 
                            exceed <strong>60 minutes per 24 hour</strong> period charged at the rate appropriate depending on the time and day. 
                            Discretion will be applied and often we will only charge <strong>30 mins</strong> collection time. For any out of hours work, 
                            full time will be charged for materials collection.
                        </p>

                        <p className='p-style'>
                            Multiple operatives: Our rates apply per person, therefore if there are two operatives required on-site, you will 
                            be informed of this and we will charge for them accordingly. Example if two plumbers are required for 1 hour on a 
                            Monday at 8am, then two hours would be charged at <strong>£{netPrices.weekdays.dayTime}</strong> per hour plus VAT 
                            each which would total <strong>£{netPrices.weekdays.dayTime * 2 * netPrices.vat}</strong> inc VAT with no materials.
                        </p>

                        <p className='p-style'>
                            Rubble disposal is never included unless specified in writing.
                        </p>

                        <p className='p-style'>
                            Painting and decoration is never included unless specified in writing and this specifically includes following intrusive investigations and works that involve removing access hatches, bath panels and anything else of this and other nature.                        
                        </p>

                        <p className='p-style'>
                            Intrusive investigations will involve damage and repair and is never included unless specified in writing. A single example would be damage to the aesthetic of a bath panel after removing it to investigate a leak under the bath, or to cut a ceiling open to investigate water dripping through a light fitting. This is one example but not the only situation damage may occur.
                        </p>

                        <p className='p-style'>
                            Unless you receive a formal quotation from us, all works including investigative works will be chargeable by the appropriate hourly 
                            rate advertised on the website <strong><a href="http://dmfplumbingandheating.com">dmfplumbingandheating.com</a></strong>
                        </p>

                        <h3 className='h3-style'>How we work</h3>
                        <p className='p-style'>
                            We start charging (start our timer) as soon as we arrive on site and knock on your door- we then assess-investigate-get tools from the van- protect any surrounding if deemed necessary and discuss what work is involved verbally with the client if we deem it necessary to do so and if they are present. We then get materials from the van or a local supplier if necessary- return to site and carry out the works- we will then update our notes while onsite which may include adding pictures, details of works carried out as well as discussion with the client or tenant on site and then our timer is stopped and at this stage billing is halted. The bill payer will need to be present, and we will ask for a signature and payment. Please note that we charge from arrival at the property until we leave the site making all time spent chargeable at the appropriate rates.
                        </p>

                        <h3 className='h3-style'>Drainage / blockages</h3>
                        <p className='p-style'>
                            We do not guarantee how long the clearance of a blockage will last for unless you have paid for a camera survey as well as a jetting clearance. Prices for these can be given upon request if we are offering this service. The warranties will be decided on a case-by-case basis and we may opt to not provide any warranty at our discretion. We do not take any responsibility nor liability for any plumbing fittings whatsoever that could fail as a result of us attempting to clear a blockage. One example could be a soil stack fitting becoming unattached from a soil pipe as a result of plunging a toilet. A second example could be plumbing system failure due to not being able to withstand the pressure from a jetting machine.
                        </p>

                        <h3 className='h3-style'>Arrival time</h3>
                        <p className='p-style'>
                            We will always endeavor to get to you within the agreed arrival window we offer you, however, we 
                            do not guarantee this as periodically there can be reasons we are unable to attend and in this instance, 
                            we will always offer you the next available slot we have and you will be charged at the rate you should 
                            have paid at the time of the original booking. Example, if we fail to arrive on a Friday morning 
                            between <strong>8-1 pm</strong> arrival window charged at <strong>£{netPrices.weekdays.dayTime}</strong> per hour plus VAT and we offer you a Saturday morning 
                            arrival instead, you will not be charged at the weekend surcharge rate, but at the regular weekday rate.
                        </p>

                        <h3 className='h3-style'>Key collection</h3>
                        <p className='p-style'>
                            If we are required to collect keys to access a property on your behalf, we will start the timer and begin to charge you from the moment we arrived at the location where the keys are held, for example, at the estate agents office, and keep the timer running from this time until the work has been either complete or has entered into a status that nothing further can be done until further agreement and or instruction has been granted to us from the client.
                        </p>

                        <h3 className='h3-style'>Absentee owners</h3>
                        <p className='p-style'>
                            If there is no one at the property to authorize works to proceed and we deem the situation one that is essential that we have further written instructions and approval for, we reserve the right to charge for the time spent on site and to abort the works until we have the instruction we deem sufficient.
                        </p>

                        <h3 className='h3-style'>Payment terms</h3>
                        <p className='p-style'>
                            Unless you have written confirmation from <strong>{contacts.company.director}</strong>, the Director of 
                            <strong> {contacts.company.name}</strong> and <strong> {contacts.company.tradingName}</strong>, 
                            payment is due in full upon satisfactory completion of the works on the day the invoice is issued 
                            to you. Quoted works terms are different and will be issued to you if we agree to carry out works for you on this 
                            basis.
                        </p>

                        <h3 className='h3-style'>Warranty calls</h3>
                        <p className='p-style'>
                            These will be attended to as quickly as possible and within normal working hours 
                            between <strong>8am - 5pm Monday to Friday</strong> subject to availability.
                        </p>

                    </div>
                </section >
            </div>

            <Available />
        </m.div>
    )
}
