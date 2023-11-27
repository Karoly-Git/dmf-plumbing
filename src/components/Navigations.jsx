// React Imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Icon Imports
import { FaFacebookF as FacebookIcon, FaTwitter as TwitterIcon } from "react-icons/fa";
import { FaPhone as PhoneIcon } from "react-icons/fa6";
import { MdEmail as MailIcon } from "react-icons/md";
import { LiaHandPointUp as PointerIcon } from "react-icons/lia";
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

    const [positions, setPositions] = useState([42, 42, 42]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            let getLinks = [...document.querySelectorAll('.side-nav ul li .link div:last-child')];
            let newPositions = [...positions];
            newPositions.forEach((link, i) => {
                newPositions[i] -= getLinks[i].clientWidth;
            })
            setPositions([...newPositions]);
            setLinks([...getLinks]);
        }, 300);
    }, []);

    function handleMouseEnter(index) {
        let newPositions = [...positions];
        newPositions.forEach((link, i) => {
            if (i !== index) {
                newPositions[i] -= links[i].clientWidth;
            } else {
                newPositions[i] = 42;
            };
        })

        setPositions(newPositions);
    }

    function handleMouseLeave() {
        let newPositions = [...positions];
        newPositions.forEach((link, i) => {
            newPositions[i] -= links[i].clientWidth;
        })
        setPositions([...newPositions]);
    }

    const sideLinks = [
        { http: 'tel:+447794156943', icon: <PhoneIcon className='icon' />, text: '+447794156943' },
        { http: 'mailto:info@dmfplumbingandheating.com', icon: <MailIcon className='icon' />, text: 'info@dmfplumbingandheating.com' },
    ];

    return (
        <nav className='side-nav'>
            <ul onMouseLeave={() => handleMouseLeave()}>
                <li>
                    <Link className='link' to='/'>
                        <div className='box' onMouseEnter={() => handleMouseEnter(0)} ><PointerIcon className='icon' /></div>
                        <div className='box' style={{ right: `${positions[0]}px` }}>Contact</div>
                    </Link>
                </li>

                {sideLinks.map((link, index) => (
                    <li key={link.http + 'side'}>
                        <a className='link' href={link.http} target="_blank" rel="noopener noreferrer">
                            <div className='box' onMouseEnter={() => handleMouseEnter(index + 1)}>{link.icon}</div>
                            <div className='box' style={{ right: `${positions[index + 1]}px` }}>{link.text}</div>
                        </a>
                    </li>
                ))}
            </ul>
        </nav >
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
