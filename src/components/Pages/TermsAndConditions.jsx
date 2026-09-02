// React Imports
import React from 'react';
import { motion as m } from 'framer-motion';

// Image Imports
import headIcon from '../../img/terms-and-conditions-icon.png';

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
            transition={{ duration: 1 }}
        >
            <HeadContainer
                h2="Terms &#38; Conditions"
                headIcon={headIcon}
            />

            <SloganContainer h1="Service Agreement and Terms" />

            <div className="wrapper">
                <section>
                    <div className="container">

                        {/* 1. DEFINITIONS AND INCORPORATION */}
                        <h3 className='h3-style'>
                            1. Definitions and Incorporation
                        </h3>

                        <p className='p-style'>
                            <strong>The Company:</strong> Refers strictly to{' '}
                            <strong>
                                <a target='_blank' href='https://find-and-update.company-information.service.gov.uk/company/07951171/officers'>
                                    DMF Plumbing & Heating Limited
                                </a>
                            </strong>{' '}
                            (referred to as "we", "us", or "our").
                        </p>

                        <p className='p-style'>
                            <strong>The Client:</strong> Refers to any individual
                            consumer, homeowner, landlord, tenant, commercial entity,
                            or corporate representative booking services (referred to
                            as "you" or "your").
                        </p>

                        <p className='p-style'>
                            <strong>The Contract:</strong> These terms and conditions
                            apply universally to all communications, digital forms,
                            written estimates, quotations, and on-site works provided
                            by the Company. They explicitly override and exclude any
                            alternative terms you may attempt to introduce.
                        </p>

                        <p className='p-style'>
                            <strong>Written Communication:</strong> For clarity, all
                            terms "in writing" include formal emails, digital service
                            notes, or electronic signatures captured live on our field
                            engineer's handheld devices or screens.
                        </p>


                        {/* 2. HOURLY RATES */}
                        <h3 className='h3-style'>
                            2. Hourly Rates and the Field Billing Timer
                        </h3>

                        <p className='p-style'>
                            <strong>Commencement of Charging:</strong> Our billing
                            timer starts the exact moment our field engineer arrives
                            at your physical property boundary and makes the initial
                            knock on the door or rings the bell.
                        </p>

                        <p className='p-style'>
                            <strong>Chargeable Time:</strong> All time spent on-site
                            is fully billable. This explicitly includes initial visual
                            assessment, diagnostic tracing, retrieval of specific tools
                            or diagnostic equipment from our vehicle, structural
                            protection measures, drafting on-site digital reports,
                            capturing reference photos, and discussing immediate
                            technical findings with you, your tenant, or your property
                            agent.
                        </p>

                        <p className='p-style'>
                            <strong>Minimum Charge:</strong> We enforce a strict
                            minimum charge of <strong>one (1) hour</strong> on all
                            hourly rate assignments. Billable time exceeding the first
                            hour is structured and calculated in rolling{' '}
                            <strong>20-minute increments</strong>.
                        </p>

                        <p className='p-style'>
                            <strong>Material Collection Limits:</strong> If an engineer
                            must temporarily depart the site to collect non-stock
                            materials from a merchant, the billable travel and
                            collection time is firmly capped at a maximum of{' '}
                            <strong>60 minutes</strong> within any single 24-hour cycle.
                        </p>

                        <p className='p-style'>
                            <strong>Timer Stop:</strong> The billing timer is stopped
                            only when the physical engineering work is finished, the
                            on-site digital entry is closed, and the engineer prepares
                            to leave the property.
                        </p>


                        {/* 3. QUOTATIONS */}
                        <h3 className='h3-style'>
                            3. Fixed Price Quotations, Estimates, and Material Markup
                        </h3>

                        <p className='p-style'>
                            <strong>Estimates vs Quotes:</strong> An estimate is a
                            realistic gauge of cost and is non-binding. A fixed-price
                            quotation is a binding offer that remains valid for{' '}
                            <strong>30 days</strong> from issuance.
                        </p>

                        <p className='p-style'>
                            <strong>Material Markup Policy:</strong> All parts,
                            materials, and components supplied by the Company are
                            subject to a <strong>trade markup of between 10% and 30%</strong>{' '}
                            added directly to the cost price. The exact percentage
                            applied within this range is determined at the Company's
                            sole discretion based on sourcing complexity, logistics,
                            and parts handling. This fee covers material procurement,
                            administration, and vendor risk management.
                        </p>

                        <p className='p-style'>
                            <strong>Deposits:</strong> For all fixed-price projects or
                            larger installations, a secure deposit of{' '}
                            <strong>50% of the total quoted amount</strong> must be paid
                            before any materials are ordered or work begins on-site.
                        </p>

                        <p className='p-style'>
                            <strong>Variations:</strong> Any alterations, unforeseen
                            systemic obstructions, or extra works requested by the
                            Client after work has started will be billed as a variation
                            at our standard hourly rates, unless otherwise agreed in
                            writing.
                        </p>


                        {/* 4. PAYMENT */}
                        <h3 className='h3-style'>
                            4. Invoicing, Prompt Payment, and Third-Party Liability
                        </h3>

                        <p className='p-style'>
                            <strong>Presence at Completion:</strong> The designated
                            bill payer (or an authorised representative) must be
                            physically present when our engineer finishes the work
                            on-site.
                        </p>

                        <p className='p-style'>
                            <strong>Immediate Settlement:</strong> An invoice will be
                            generated and issued immediately upon completion of the
                            work. Payment is due <strong>immediately on receipt</strong>{' '}
                            strictly by <strong>BACS (direct bank transfer)</strong> or{' '}
                            <strong>cash</strong>. Credit cards and alternative payment
                            methods are explicitly not accepted.
                        </p>

                        <p className='p-style'>
                            <strong>Snagging Restrictions:</strong> Where structural
                            works are completed subject to minor cosmetic adjustments
                            or snagging, a minimum of{' '}
                            <strong>95% of the total outstanding invoice value</strong>{' '}
                            must be settled immediately. The remaining 5% balance is
                            due within 14 days or immediately upon completion of the
                            adjustment, whichever occurs sooner. Access must be granted
                            without delay.
                        </p>

                        <p className='p-style'>
                            <strong>Third-Party Booking Liability:</strong> Where a
                            booking is placed by a third-party representative (such as
                            a managing estate agent, letting agent, developer, landlord,
                            or tenant), that third party assumes direct and joint
                            financial liability for immediate settlement if the primary
                            property owner defaults on payment.
                        </p>

                        <p className='p-style'>
                            <strong>Late Payment Penalties:</strong> We reserve our
                            statutory rights under English law to apply interest and
                            fixed administration fees to all overdue invoices.
                        </p>


                        {/* 5. DIAGNOSTICS */}
                        <h3 className='h3-style'>
                            5. Diagnostic Work and Fault Finding
                        </h3>

                        <p className='p-style'>
                            <strong>Diagnostic Liability:</strong> If our works involve
                            a complex diagnostic process to isolate a system failure,
                            and a component is identified as faulty and replaced, the
                            Client remains fully liable to pay for that specific
                            component and associated labour, even if subsequent testing
                            reveals secondary, deeper, or underlying system faults
                            elsewhere in the infrastructure.
                        </p>

                        <p className='p-style'>
                            <strong>Visual Surveys:</strong> Pre-purchase plumbing
                            surveys or visual checks are strictly non-invasive. The
                            Company accepts no liability for defects, leaks, blockages,
                            or structural failures concealed behind walls, flooring, or
                            within unexposed structures.
                        </p>


                        {/* 6. CANCELLATIONS */}
                        <h3 className='h3-style'>
                            6. Cancellation Rights
                        </h3>

                        <p className='p-style'>
                            <strong>Standard Cancellation:</strong> You may cancel or
                            reschedule a standard appointment without penalty, provided
                            you give us at least <strong>24 hours' notice</strong>.
                            Cancellations made with less than 24 hours' notice will
                            incur a charge equal to our one-hour minimum rate.
                        </p>

                        <p className='p-style'>
                            <strong>Consumer Statutory Rights:</strong> Under the{' '}
                            <em>Consumer Contracts Regulations</em>, clients booking
                            online or over the phone have a statutory{' '}
                            <strong>14-day cooling-off period</strong>.
                        </p>

                        <p className='p-style'>
                            <strong>Emergency Work Waiver:</strong> If you request an
                            emergency call-out or immediate repair work within that
                            14-day window, you explicitly request that our services
                            begin immediately. Consequently, you waive your right to
                            cancel once the work has commenced on site.
                        </p>


                        {/* 7. GUARANTEE */}
                        <h3 className='h3-style'>
                            7. Workmanship Guarantee, Material Warranties & Liability Limits
                        </h3>

                        <p className='p-style'>
                            <strong>Company Guarantee:</strong> We provide a{' '}
                            <strong>12-month guarantee</strong> covering our workmanship,
                            applicable solely to the specific repairs or installations
                            we executed. This guarantee becomes active only once the
                            respective invoice has been paid in full by the due date.
                        </p>

                        <p className='p-style'>
                            <strong>Drainage Guarantee Exclusion:</strong> Clearance of
                            blocked drains, internal waste pipes, traps, and external
                            drainage systems is strictly excluded from our 12-month
                            workmanship guarantee. The Company cannot guarantee against
                            immediate re-blockages caused by structural pipe
                            degradation, tree root ingress, or ongoing structural
                            misuse post-departure.
                        </p>

                        <p className='p-style'>
                            <strong>Exclusions from Guarantee:</strong> Our guarantee
                            does not cover defects caused by pre-existing system
                            configurations, underlying plumbing wear and tear,
                            structural defects, third-party tampering, or user
                            negligence.
                        </p>

                        <p className='p-style'>
                            <strong>Materials and Goods Warranty:</strong> Any warranties
                            for physical goods and materials supplied by us are held
                            either directly between the Client and us, or between the
                            Client and the manufacturer.
                        </p>

                        <p className='p-style'>
                            <strong>Written Confirmation:</strong> The Client must
                            request confirmation in writing if they require formal
                            clarification on where a specific material warranty resides.
                        </p>

                        <p className='p-style'>
                            <strong>Sourcing Requirements:</strong> If the Client has
                            niche, particular, or specific warranty requirements for
                            parts, they may be required to purchase the materials
                            directly from their chosen supplier and hold that product
                            warranty independently. The Company accepts no liability
                            for parts supplied directly by the Client.
                        </p>

                        <p className='p-style'>
                            <strong>Limitation of Liability:</strong> In line with
                            English Law, we do not restrict liability for personal
                            injury or death caused by our direct negligence. For all
                            other instances, our total liability for any property
                            damage, loss, or system failure is strictly capped at the
                            total value of the invoice paid for that specific job.
                        </p>


                        {/* 8. CLIENT OBLIGATIONS */}
                        <h3 className='h3-style'>
                            8. Client Obligations and Property Safety
                        </h3>

                        <p className='p-style'>
                            <strong>Safe Access:</strong> The Client must provide clear,
                            safe, and unobstructed access to all relevant stopcocks,
                            boilers, meters, and pipework, alongside a consistent,
                            clean water supply and electrical power source.
                        </p>

                        <p className='p-style'>
                            <strong>Pre-existing System Fragility:</strong> The Company
                            is not liable for structural failures or fractures that
                            occur to old, corroded, or poorly maintained pipes and
                            fixtures during standard, professional repair attempts.
                            This includes structural cracks discovered in pre-existing
                            frozen pipe layouts.
                        </p>

                        <p className='p-style'>
                            <strong>Rubble and Waste Disposal:</strong> Unless explicitly
                            written into a fixed quotation, the clearing and commercial
                            disposal of site rubble, old boilers, and system debris
                            remain the sole responsibility and financial obligation of
                            the Client.
                        </p>


                        {/* 9. GOVERNING LAW */}
                        <h3 className='h3-style'>
                            9. Governing Law
                        </h3>

                        <p className='p-style'>
                            These Terms and Conditions are governed exclusively by the{' '}
                            <strong>laws of England and Wales</strong>, and both parties
                            agree to submit to the exclusive jurisdiction of the English
                            Courts.
                        </p>


                        {/* COMPANY DETAILS */}
                        <h3 className='h3-style'>
                            Company Registration Details
                        </h3>

                        <p className='p-style'>
                            <strong>Registered Company Name:</strong>{' '}
                            DMF Plumbing & Heating Limited
                        </p>

                        <p className='p-style'>
                            <strong>Company Registration Number:</strong>{' '}
                            <a
                                href="https://find-and-update.company-information.service.gov.uk/company/07951171"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                07951171
                            </a>{' '}
                            (Registered in England & Wales)
                        </p>

                        <p className='p-style'>
                            <strong>VAT Registration Number:</strong> 271851494
                        </p>

                        <p className='p-style'>
                            <strong>DMF Plumbing and Heating LTD</strong>
                            <br />
                            Tel:{' '}
                            <a href="tel:07794156943">
                                07794 156943
                            </a>
                            <br />
                            Email:{' '}
                            <a href="mailto:info@dmfplumbingandheating.com">
                                info@dmfplumbingandheating.com
                            </a>
                            <br />
                            Website:{' '}
                            <a
                                href="https://dmfplumbingandheating.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                dmfplumbingandheating.com
                            </a>
                        </p>

                    </div>
                </section>
            </div>

            <Available />
        </m.div>
    );
}