// React Imports
import React from 'react';
import { Link } from 'react-router-dom';
// Icon Imports
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
// Component Imports
import Available from '../Available';
// Data Imports
import { contacts } from '../../js/contacts';
import { netPrices } from '../../js/prices';

export default function Prices() {
    return (
        <div className='page prices'>

            <div className='head-container'>
                <div className='box'>
                    <div className='content-box'>
                        <div>
                            <h2>Prices &#38; Charges</h2>
                            <p>
                                <Link to={'/'}>Home</Link>
                                <ArrowIcon className='icon' />
                                Prices &#38; Charges
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='slogan'>Transparent Pricing</h1>

            <section className='page-section'>
                <div className="container">
                    <h3 className='h3-style'>Charges</h3>
                    <p className='p-style'>
                        The quality and service provided by <strong>{contacts.company.tradingName}</strong> does not mean higher charges when combined with our comprehensive back up service and guarantee, our charges are competitive and value for money. Work is carried out on an hourly rate, or a fixed price can be given for larger jobs. Our rates are completely transparent and a full schedule is shown on our company charges page, and all invoices show a full breakdown on how your job has been costed.
                    </p>

                    <div className="table-container">
                        <table>
                            <caption>
                                Monday - Friday
                            </caption>
                            <tbody>
                                <tr>
                                    <td><h4>8am - 6pm</h4></td>
                                    <td>£{netPrices.weekdays.dayTime} + VAT = £{netPrices.weekdays.dayTime * (netPrices.vat)}</td>
                                </tr>
                                <tr>
                                    <td><h4 >6pm - 10pm</h4></td>
                                    <td>£{netPrices.weekdays.evening} + VAT = £{netPrices.weekdays.evening * (netPrices.vat)}</td>
                                </tr>
                                <tr>
                                    <td><h4 >10pm - 8am</h4></td>
                                    <td>£{netPrices.weekdays.night} + VAT = £{netPrices.weekdays.night * (netPrices.vat)}</td>
                                </tr>
                            </tbody>
                        </table>

                        <table>
                            <caption>
                                Saturday - Sunday
                            </caption>
                            <tbody>
                                <tr>
                                    <td><h4>8am - 12pm</h4></td>
                                    <td>£{netPrices.weekends.dayTime} + VAT = £{netPrices.weekends.dayTime * (netPrices.vat)}</td>
                                </tr>
                                <tr>
                                    <td><h4 >12pm - 8am</h4></td>
                                    <td>£{netPrices.weekends.night} + VAT = £{netPrices.weekends.night * (netPrices.vat)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className='p-style'>
                        <strong>{contacts.company.tradingName}</strong> is a plumbing and services company that has complete transparent charges and we have an honest, upfront, open, and clear pricing system. Our rates are shown here on our website and our call center staff will make customers fully aware of our rates at the time they book their job if you request them.
                    </p>

                    <p className='p-style'>
                        <strong>Please note: All prices are subject to VAT.</strong>
                    </p>

                    <p className='p-style'>We have a one-hour minimum charge but thereafter we bill/charge in 20-minute increments so you're only paying for the time worked by our engineer. Our engineers will always show a comprehensive description of work carried out and a full breakdown of the labour and material charges are shown on all invoices.</p>

                    <h3 className='h3-style'>Hourly rates</h3>
                    <p className='p-style'>There is a minimum charge of one hour on all jobs, thereafter work is charged in 20-minute increments.</p>

                    <h3 className='h3-style'>Fixed price</h3>
                    <p className='p-style'>Any fixed price work undertaken will require a deposit of 50% before any work is undertaken, and the remainder paid upon satisfactory completion of the works.</p>

                    <h3 className='h3-style'>Material collection</h3>
                    <p className='p-style'>Material collection time for non-stock items will be kept to a minimum - any charge will not exceed 30 minutes billable time in any 24 hour period.</p>

                    <h3 className='h3-style'>Estimates</h3>
                    <p className='p-style'>Estimates are available from our engineers or we are happy to make an appointment for an estimator to visit you.</p>

                    <h3 className='h3-style'>Invoice</h3>
                    <p className='p-style'>An invoice will always be produced clearly showing a full description of work carried out - time started/time finished, a full breakdown of the cost of Labour and materials used.</p>

                    <h3 className='h3-style'>Payment</h3>
                    <p className='p-style'>Payment must be made in full by bank transfer or card upon receipt of the invoice.</p>

                    <h3 className='h3-style'>Cancellation</h3>
                    <p className='p-style'>Cancellations for <strong>emergency call outs</strong> will be chargeable at half a chargeable hour at whatever time of day it may be, IE, a cancellation at 17:00 on Monday afternoon will incur a £51.00 inc VAT fee. Please note that all other cancellations do not carry a fee but we ask you to give as much notice as possible.</p>

                    <h3 className='h3-style'>Rubble disposal</h3>
                    <p className='p-style'>This is NEVER included unless stipulated by the engineer and pre-quoted for.</p>

                </div>
            </section >

            <Available />
        </div >
    )
}
