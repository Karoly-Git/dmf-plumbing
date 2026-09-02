// React Imports
import React from 'react';
import { motion as m } from 'framer-motion';

// Data Imports
import { contacts } from '../../js/contacts';
import { netPrices } from '../../js/prices';

// Image Imports
import headIcon from '../../img/prices-and-charges-icon.png';

// Component Imports
import Available from '../widgets/Available';
import HeadContainer from '../widgets/HeadContainer';
import SloganContainer from '../widgets/SloganContainer';

export default function PricesAndCharges() {
    return (
        <m.div
            className='page policies-and-pricing'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

            <HeadContainer
                h2="Prices &#38; Charges"
                headIcon={headIcon}
            />

            <SloganContainer h1="Transparent Pricing" />

            <div className="wrapper">
                <section>
                    <div className="container">

                        {/* CHARGES */}
                        <h3 className='h3-style'>Charges</h3>

                        <p className='p-style'>
                            The quality and service provided by{' '}
                            <strong>{contacts.company.tradingName}</strong> does not
                            mean higher charges. When combined with our comprehensive
                            service and workmanship guarantee, our charges remain
                            competitive and represent value for money.
                        </p>

                        <p className='p-style'>
                            Work may be carried out at our applicable hourly rate, or
                            a fixed-price quotation may be provided for larger jobs.
                            Our rates are shown below, and invoices provide a breakdown
                            of applicable labour, materials and other incurred charges.
                        </p>


                        {/* PRICE TABLE */}
                        <div className="table-container">

                            <table>
                                <caption>
                                    Monday - Friday
                                </caption>

                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>8am - 6pm</h4>
                                        </td>

                                        <td>
                                            £{netPrices.weekdays.dayTime} + VAT = £
                                            {netPrices.weekdays.dayTime * netPrices.vat}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <p className='p-style'>
                            <strong>
                                Please ask for price for out-of-work-hours services.
                            </strong>
                        </p>


                        {/* VAT */}
                        <p className='p-style'>
                            <strong>
                                Please note: All prices are subject to VAT.
                            </strong>
                        </p>


                        {/* GENERAL BILLING */}
                        <p className='p-style'>
                            We have a <strong>one-hour minimum charge</strong>.
                            After the first hour, billable time is calculated in{' '}
                            <strong>20-minute increments</strong>.
                        </p>

                        <p className='p-style'>
                            Chargeable time includes all time spent on-site in
                            connection with the work. This includes initial visual
                            assessment, diagnostic tracing, retrieving specific tools
                            or diagnostic equipment from our vehicle, protecting
                            surrounding areas where necessary, preparing on-site
                            digital reports, taking reference photographs and
                            discussing immediate technical findings with the Client,
                            tenant or property representative.
                        </p>


                        {/* HOURLY RATES */}
                        <h3 className='h3-style'>
                            Hourly rates
                        </h3>

                        <p className='p-style'>
                            There is a minimum charge of{' '}
                            <strong>one hour</strong> on all hourly-rate assignments.
                            After the first hour, billable time is charged in{' '}
                            <strong>20-minute increments</strong>.
                        </p>


                        {/* BILLING TIMER */}
                        <h3 className='h3-style'>
                            Billing timer
                        </h3>

                        <p className='p-style'>
                            Our billing timer starts when our field engineer arrives
                            at the physical property boundary and makes the initial
                            knock on the door or rings the bell.
                        </p>

                        <p className='p-style'>
                            The billing timer stops only when the physical engineering
                            work has been completed, the on-site digital entry has
                            been closed and the engineer is preparing to leave the
                            property.
                        </p>


                        {/* FIXED PRICE */}
                        <h3 className='h3-style'>
                            Fixed price quotations
                        </h3>

                        <p className='p-style'>
                            A fixed-price quotation is a binding offer and remains
                            valid for <strong>30 days</strong> from the date of issue.
                        </p>

                        <p className='p-style'>
                            Fixed-price projects and larger installations require a{' '}
                            <strong>50% deposit of the total quoted amount</strong>{' '}
                            before any materials are ordered or work begins on-site.
                        </p>


                        {/* VARIATIONS */}
                        <h3 className='h3-style'>
                            Variations and additional work
                        </h3>

                        <p className='p-style'>
                            Any alterations, unforeseen systemic obstructions or
                            additional works requested by the Client after work has
                            started will be charged as a variation at our applicable
                            standard hourly rates unless otherwise agreed in writing.
                        </p>


                        {/* MATERIAL COLLECTION */}
                        <h3 className='h3-style'>
                            Material collection
                        </h3>

                        <p className='p-style'>
                            Where an engineer needs to temporarily leave the site to
                            collect non-stock materials from a merchant, billable
                            travel and collection time will be kept to a minimum and
                            will not exceed <strong>60 minutes</strong> within any
                            single <strong>24-hour period</strong>.
                        </p>


                        {/* MATERIAL MARKUP */}
                        <h3 className='h3-style'>
                            Materials and parts
                        </h3>

                        <p className='p-style'>
                            All parts, materials and components supplied by{' '}
                            <strong>{contacts.company.tradingName}</strong> are
                            subject to a{' '}
                            <strong>trade markup of between 10% and 30%</strong>{' '}
                            added directly to the cost price.
                        </p>

                        <p className='p-style'>
                            The exact percentage applied within this range is
                            determined by the Company based on sourcing complexity,
                            logistics and parts handling. This charge covers material
                            procurement, administration and vendor risk management.
                        </p>


                        {/* ESTIMATES */}
                        <h3 className='h3-style'>
                            Estimates
                        </h3>

                        <p className='p-style'>
                            An estimate provides a realistic indication of the
                            expected cost of the work but is{' '}
                            <strong>non-binding</strong>.
                        </p>

                        <p className='p-style'>
                            Estimates may be provided by our engineers, or we may
                            arrange for an estimator to visit where we consider it
                            appropriate for the work required.
                        </p>

                        <p className='p-style'>
                            Depending on the nature of the work, we may determine that
                            the work can only be undertaken at the applicable hourly
                            rates rather than on a fixed-price basis.
                        </p>


                        {/* INVOICE */}
                        <h3 className='h3-style'>
                            Invoice
                        </h3>

                        <p className='p-style'>
                            An invoice will be generated and issued immediately upon
                            completion of the work and will show the applicable labour,
                            materials and any other incurred charges.
                        </p>


                        {/* PAYMENT */}
                        <h3 className='h3-style'>
                            Payment
                        </h3>

                        <p className='p-style'>
                            Payment is due{' '}
                            <strong>immediately upon receipt of the invoice</strong>{' '}
                            and must be made strictly by{' '}
                            <strong>BACS (direct bank transfer) or cash</strong>.
                        </p>

                        <p className='p-style'>
                            Credit cards and alternative payment methods are not
                            accepted.
                        </p>


                        {/* SNAGGING */}
                        <h3 className='h3-style'>
                            Snagging
                        </h3>

                        <p className='p-style'>
                            Where structural works have been completed but remain
                            subject to minor cosmetic adjustments or snagging, a
                            minimum of{' '}
                            <strong>
                                95% of the total outstanding invoice value
                            </strong>{' '}
                            must be paid immediately.
                        </p>

                        <p className='p-style'>
                            The remaining <strong>5%</strong> is due within{' '}
                            <strong>14 days</strong> or immediately upon completion of
                            the adjustment, whichever occurs sooner. Access must be
                            granted without delay to allow the adjustment to be
                            completed.
                        </p>


                        {/* CANCELLATION */}
                        <h3 className='h3-style'>
                            Cancellation
                        </h3>

                        <p className='p-style'>
                            Standard appointments may be cancelled or rescheduled
                            without penalty provided that at least{' '}
                            <strong>24 hours' notice</strong> is given.
                        </p>

                        <p className='p-style'>
                            Cancellations made with less than 24 hours' notice will
                            incur a charge equal to our{' '}
                            <strong>one-hour minimum rate</strong>.
                        </p>


                        {/* CONSUMER CANCELLATION RIGHTS */}
                        <h3 className='h3-style'>
                            Consumer cancellation rights
                        </h3>

                        <p className='p-style'>
                            Under the Consumer Contracts Regulations, consumers
                            booking online or over the telephone have a statutory{' '}
                            <strong>14-day cooling-off period</strong>.
                        </p>

                        <p className='p-style'>
                            If you request an emergency call-out or immediate repair
                            work within this 14-day period, you expressly request that
                            our services begin immediately. Consequently, you waive
                            your right to cancel once the requested work has commenced
                            on-site.
                        </p>


                        {/* RUBBLE */}
                        <h3 className='h3-style'>
                            Rubble and waste disposal
                        </h3>

                        <p className='p-style'>
                            Unless explicitly included within a fixed-price quotation,
                            the clearing and commercial disposal of site rubble, old
                            boilers and system debris remains the responsibility and
                            financial obligation of the Client.
                        </p>


                        {/* TERMS */}
                        <h3 className='h3-style'>
                            Terms & Conditions
                        </h3>

                        <p className='p-style'>
                            All bookings, quotations and works carried out by{' '}
                            <strong>{contacts.company.tradingName}</strong> are subject
                            to our full Terms & Conditions.
                        </p>

                        <p className='p-style'>
                            <strong>
                                <a href="/terms-and-conditions">
                                    View our full Terms & Conditions
                                </a>
                            </strong>
                        </p>

                    </div>
                </section>
            </div>

            <Available />

        </m.div>
    );
}