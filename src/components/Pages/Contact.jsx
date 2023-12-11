// React Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Icon Imports
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";

// Component Imports
import Certificates from '../Certificates';

// Form Handling Imports
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

            <div className='head-container'>
                <div className='box'>
                    <div className='content-box'>
                        <div>
                            <h2>Contacts</h2>
                            <p>
                                <Link to={'/'}>Home</Link>
                                <ArrowIcon className='icon' />
                                Contacts
                            </p>
                        </div>
                    </div>
                </div>
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

                <button>Submit</button>

            </form>
        </div>
    )
}
