// React Imports
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// Form Handling Imports
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Icon Imports
import { FaPhone as PhoneIcon } from "react-icons/fa6";
import { MdEmail as MailIcon } from "react-icons/md";
import { MdLocationOn as LocationIcon } from "react-icons/md";

// Data Imports
import { contacts } from '../../js/contacts';

// Component Imports
import Available from '../widgets/Available';
import HeadContainer from '../widgets/HeadContainer';


export default function Contact() {
    const [isStatusBoxOpen, setIsStatusBoxOpen] = useState(false);
    const [sendingInProgress, setSendingInProgress] = useState(false);
    const [isSendingError, setIsSendingError] = useState(false);

    const messageURL = '';

    const schema = yup.object().shape({
        providedName: yup.string().required("You forgot to give your name."),
        providedEmail: yup.string().email("Not valid email address").required("You forgot to give your email."),
        providedSubject: yup.string().required("You forgot to give a subject."),
        providedMessage: yup.string().required("You forgot to type a message."),
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        setIsStatusBoxOpen(true);
        setSendingInProgress(true);
        try {
            const result = await fetch(messageURL,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            //console.log(result);

            if (!result.ok) {
                resetForm();
                setIsSendingError(true);
            }

        } catch (err) {
            //console.log(err.ok);
            setIsSendingError(true);
        } finally {
            setSendingInProgress(false);
        }
    };

    function closeStatusBox() {
        setIsStatusBoxOpen(false);
    }

    function resetForm() {
        reset({
            providedName: '',
            providedEmail: '',
            providedSubject: '',
            providedMessage: ''
        });
    }

    return (
        <div className='page contact'>

            <HeadContainer h2="Contactss" />

            <div className='form-container'>

                <div className='info-box'>
                    <p>For prompt assistance, please contact our office at:</p>
                    <p>
                        <a className='strong' href={`tel:${contacts.phone}`} rel="noopener noreferrer">
                            <PhoneIcon className='icon' />
                            {contacts.phone}
                        </a>
                    </p>

                    <p>If you prefer to reach out via email, you can use the following address:</p>
                    <p>
                        <a className='strong' href={`mailto:${contacts.email}`} rel="noopener noreferrer">
                            <MailIcon className='icon' />
                            <span className='full'>{contacts.email}</span>
                            <span className='short'>{contacts.email.slice(0, 8)}...</span>
                        </a>
                    </p>

                    <p>You can also visit us at our office located at:</p>
                    <p>
                        <a className='strong' href={contacts.maps} rel="noopener noreferrer" target='_blank'>
                            <LocationIcon className='icon' />
                            {contacts.address.street}, {contacts.address.town}, {contacts.address.county}, {contacts.address.postcode}
                        </a>
                    </p>


                    <p>Alternatively, you can use the contact form below to send us a direct email message, and a dedicated member of our team will respond to your inquiry within 24 hours.</p>

                    <p>We appreciate your comments and questions and look forward to assisting you.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.providedName && <span><p className='error'>{errors.providedName?.message}</p></span>}
                    <input placeholder="Name*" {...register('providedName')}></input>

                    {errors.providedEmail && <span><p className='error'>{errors.providedEmail?.message}</p></span>}
                    <input placeholder="Email*" {...register('providedEmail')}></input>

                    {errors.providedSubject && <span><p className='error'>{errors.providedSubject?.message}</p></span>}
                    <input placeholder="Message*" {...register('providedSubject')}></input>


                    {errors.providedMessage && <span><p className='error'>{errors.providedMessage?.message}</p></span>}
                    <textarea placeholder="Type your message here*" {...register('providedMessage')}></textarea>

                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>

            <Available />
        </div>
    )
}
