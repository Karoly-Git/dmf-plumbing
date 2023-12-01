// React Imports
import React from 'react';
import { Link } from 'react-router-dom';
// Icon Imports
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
// Component Imports
import Certificates from '../Certificates';
import Available from '../Available';

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

            <Certificates />

            <section className='page-section'>
                <div className="container">
                    <h2>Charges</h2>
                    <p>
                        The quality and service provided by <strong>DMF Plumbing &#38; Heating</strong> does not mean higher charges when combined with our comprehensive back up service and guarantee, our charges are competitive and value for money. Work is carried out on an hourly rate, or a fixed price can be given for larger jobs. Our rates are completely transparent and a full schedule is shown on our company charges page, and all invoices show a full breakdown on how your job has been costed.
                    </p>

                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>
                                    Mon - Fri
                                    <br />
                                    8am - 6pm
                                </th>
                                <th>
                                    Mon - Fri
                                    <br />
                                    6pm - 10pm
                                </th>
                                <th>
                                    Mon - Sun
                                    <br />
                                    10pm - 8am
                                </th>
                                <th>
                                    Sat
                                    <br />
                                    8am - 12pm
                                </th>
                                <th>
                                    Sat - Mon
                                    <br />
                                    12pm - 8am
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    Plumbing
                                </td>
                                <td >£85 + VAT = £102</td>
                                <td >£125 + Vat = £150</td>
                                <td >£195 + VAT= £234</td>
                                <td >£125 + VAT = £150</td>
                                <td >£195 + VAT = £234</td>
                            </tr>
                            <tr >
                                <td>
                                    <h4 >Heating/Gas</h4>
                                </td>
                                <td >£85 + VAT = £102</td>
                                <td >£125 + Vat = £150</td>
                                <td >£195 + VAT = £234</td>
                                <td >£125 + VAT = £150</td>
                                <td >£195 + VAT = £234</td>
                            </tr>
                            <tr >
                                <td >
                                    <h4 >Drain Services</h4>
                                </td>
                                <td >£85 + VAT = £102</td>
                                <td >£125 + Vat = £150</td>
                                <td >£195 + VAT = £234</td>
                                <td >£125 + VAT = £150</td>
                                <td >£195 + VAT = £234</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        **TBA = To be advised on request/ circumstance. <strong>DMF Plumbing &#38; Heating</strong> is a plumbing and services company that has complete transparent charges and we have an honest, upfront, open, and clear pricing system. Our rates are shown here on our website and our call center staff will make customers fully aware of our rates at the time they book their job if you request them.
                    </p>

                    <p>
                        <strong>Please note: All prices are subject to VAT.</strong>
                    </p>

                    <p>We have a one-hour minimum charge but thereafter we bill/charge in 20-minute increments so you're only paying for the time worked by our engineer. Our engineers will always show a comprehensive description of work carried out and a full breakdown of the labour and material charges are shown on all invoices.</p>

                    <h2>Hourly rates</h2>
                    <p>There is a minimum charge of one hour on all jobs, thereafter work is charged in 20-minute increments.</p>

                    <h2>Fixed price</h2>
                    <p>Any fixed price work undertaken will require a deposit of 50% before any work is undertaken, and the remainder paid upon satisfactory completion of the works.</p>

                    <h2>Material collection</h2>
                    <p>Material collection time for non-stock items will be kept to a minimum - any charge will not exceed 30 minutes billable time in any 24 hour period.</p>

                    <h2>Estimates</h2>
                    <p>Estimates are available from our engineers or we are happy to make an appointment for an estimator to visit you.</p>

                    <h2>Invoice</h2>
                    <p>An invoice will always be produced clearly showing a full description of work carried out - time started/time finished, a full breakdown of the cost of Labour and materials used.</p>

                    <h2>Payment</h2>
                    <p>Payment must be made in full by bank transfer or card upon receipt of the invoice.</p>

                    <h2>Cancellation</h2>
                    <p>Cancellations for <strong>emergency call outs</strong> will be chargeable at half a chargeable hour at whatever time of day it may be, IE, a cancellation at 17:00 on Monday afternoon will incur a £51.00 inc VAT fee. Please note that all other cancellations do not carry a fee but we ask you to give as much notice as possible.</p>

                    <h2>Rubble disposal</h2>
                    <p>This is NEVER included unless stipulated by the engineer and pre-quoted for.</p>

                </div>
            </section >
        </div >
    )
}
