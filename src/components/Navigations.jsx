// React Imports
import React from 'react';
import { Link } from 'react-router-dom';
// Icon Imports
import { FaFacebookF as FacebookIcon, FaTwitter as TwitterIcon } from "react-icons/fa";
import { FaPhone as PhoneIcon } from "react-icons/fa6";
import { MdEmail as MailIcon } from "react-icons/md";
// Image Imports
import logo from '../img/logo.png';

export function MainNavigation() {
    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/prices-and-charges', text: 'Prices & Charges' },
        { to: '/terms-and-conditions', text: 'Terms & Conditions' },
        { to: '/contact', text: 'Contact' },
    ];

    return (
        <nav className='main-nav'>
            <div className="container">
                <div className="box">
                    <h1>
                        <Link to='/'>
                            <img className='logo' src={logo} alt="DMF Logo" />
                            <div>
                                <span>DMF Plambing</span>
                                <span>&#38; Heating</span>
                            </div>
                        </Link>
                    </h1>
                </div>

                <div className="box">
                    {navLinks.map((link) => (
                        <Link className='link' key={link.to + 'main'} to={link.to}>{link.text}</Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export function SideNavigation() {
    const sideLinks = [
        { http: 'tel:+447794156943', icon: <PhoneIcon className='icon' />, text: '+447794156943' },
        { http: 'mailto:info@dmfplumbingandheating.com', icon: <MailIcon className='icon' />, text: 'info@dmfplumbingandheating.com' },
    ];

    return (
        <nav className='side-nav'>
            <ul>
                {sideLinks.map((link) => (
                    <li key={link.http + 'side'}>
                        <div>
                            {link.icon}
                        </div>
                        <a className='link' href={link.http} target="_blank" rel="noopener noreferrer">{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export function MobileNavigation() {
    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/prices-and-charges', text: 'Prices & Charges' },
        { to: '/terms-and-conditions', text: 'Terms & Conditions' },
        { to: '/contact', text: 'Contact' },
    ];

    return (
        <nav className='mobile-nav'>
            <div className="container">
                <div className="box">
                    <h1>
                        <Link to='/'>
                            <img className='logo' src={logo} alt="DMF Logo" />
                            <div>
                                <span>DMF Plambing</span>
                                <span>&#38; Heating</span>
                            </div>
                        </Link>
                    </h1>
                </div>

                <div className="box">
                    {navLinks.map((link) => (
                        <Link className='link' key={link.to + 'mobile'} to={link.to}>{link.text}</Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}


export function SecNavigation() {
    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/prices-and-charges', text: 'Prices & Charges' },
    ];

    const iconLinks = [
        { http: 'tel:+447794156943', icon: <PhoneIcon className='icon' /> },
        { http: 'http://twitter.com', icon: <TwitterIcon className='icon' /> },
        { http: 'http://facebook.com', icon: <FacebookIcon className='icon' /> },
    ];

    return (
        <nav className='sec-nav'>
            <div className='container'>
                <div className='box'>
                    {navLinks.map((link) => (
                        <Link className='link internal-link' key={link.to + 'sec'} to={link.to}>{link.text}</Link>
                    ))}
                </div>

                <div className='box'>
                    {iconLinks.map((link) => (
                        <a className='link external-link' key={link.http} href={link.http} target="_blank" rel="noopener noreferrer">{link.icon}</a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export function ThirdNavigation() {
    const navLinks = [
        { to: '/contact', text: 'Contact' },
        { to: '/terms-and-conditions', text: 'Terms & Conditions' },
    ];

    return (
        <nav className='third-nav'>
            {navLinks.map((link) => (
                <Link key={link.to + 'third'} to={link.to}>{link.text}</Link>
            ))}
        </nav>
    );
}
