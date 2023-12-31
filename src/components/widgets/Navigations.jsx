// React Imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Icon Imports
import { FaFacebookF as FacebookIcon, FaTwitter as TwitterIcon } from "react-icons/fa";
import { FaPhone as PhoneIcon } from "react-icons/fa6";
import { MdEmail as MailIcon } from "react-icons/md";
import { LiaHandPointUp as PointerIcon } from "react-icons/lia";
import { FaArrowDown as ArrowIcon } from "react-icons/fa6";
import { ImMobile as MobileIcon } from "react-icons/im";

// Image Imports
import logo from '../../img/logo.png';
import checkatradeShortLogo from '../../img/checkatrade-short-logo-bright.png';

// Data Imports
import { contacts } from '../../js/contacts';

export function MainNavigation() {
    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/prices-and-charges', text: 'Prices & Charges' },
        { to: '/terms-and-conditions', text: 'Terms & Conditions' },
        { to: '/contact', text: 'Contact' },
    ];

    return (
        <nav className='navigation' id='main-nav'>
            <div className="container">
                <div className="box">
                    <h2>
                        <Link to='/'>
                            <img className='logo' src={logo} alt="DMF Plumbing & Heating logo" />
                            <div>
                                <span>DMF Plumbing</span>
                                <span>&#38; Heating</span>
                            </div>
                        </Link>
                    </h2>
                </div>

                <div className="box">
                    {navLinks.map((link) => (
                        <Link key={link.to + 'main'} className='link' to={link.to}>{link.text}</Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export function SideNavigation() {

    const [sizes, setSizes] = useState([]);
    const [positions, setPositions] = useState([-42, -42, -42]);
    const [opas, setOpas] = useState([0, 0, 0]);

    useEffect(() => {
        let links = [...document.querySelectorAll('.side-nav ul li a div:last-child')];
        let newSizes = [];

        links.forEach(link => newSizes.push(link.clientWidth));
        setSizes([...newSizes]);
    }, []);

    function handleMouseEnter(index) {
        let newPositions = [...positions];
        let newOpas = [...opas];
        newPositions.forEach((value, i) => {
            if (index === i) {
                newPositions[i] -= sizes[i];
                newOpas[i] = 1;
            } else {
                newPositions[i] = -42;
                newOpas[i] = 0;
            }
        })
        setPositions([...newPositions]);
        setTimeout(() => {
            setOpas([...newOpas]);
        }, 30);
    }

    function handleMouseLeave() {
        let newPositions = [...positions];
        let newOpas = [...opas];
        newPositions.forEach((value, i) => {
            newPositions[i] = -42;
            newOpas[i] = 0;
        })
        setPositions([...newPositions]);
        setOpas([...newOpas]);
    }

    const sideLinks = [
        { http: `tel:${contacts.mobile}`, icon: <MobileIcon className='icon' />, text: contacts.mobile },
        { http: `mailto:${contacts.email}`, icon: <MailIcon className='icon' />, text: contacts.email },
    ];

    return (
        <nav id='side-nav'>
            <ul >

                <li>
                    <Link className='link' to='/' onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave()}>
                        <div className='box' ><PointerIcon className='icon' /></div>
                        <div className='box' style={{ left: `${positions[0]}px`, opacity: opas[0] }}>Contact</div>
                    </Link>
                </li>

                {sideLinks.map((link, index) => (
                    <li key={link.http + 'side'}>
                        <a href={link.http} target="_blank" rel="noopener noreferrer" onMouseEnter={() => handleMouseEnter(index + 1)} onMouseLeave={() => handleMouseLeave()}>
                            <div className='box' >{link.icon}</div>
                            <div className='box' style={{ left: `${positions[index + 1]}px`, opacity: opas[index + 1] }}>{link.text}</div>
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
                    <h2>
                        <Link to='/'>
                            <img className='logo' src={logo} alt="DMF Logo" />
                            <div>
                                <span>DMF Plambing</span>
                                <span>&#38; Heating</span>
                            </div>
                        </Link>
                    </h2>
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
        { isActive: true, http: `tel:${contacts.mobile}`, icon: <PhoneIcon className='icon' /> },
        { isActive: true, http: `https://www.checkatrade.com/trades/swlondonplumbinglimited`, icon: <img src={checkatradeShortLogo} alt="Checkatrade Logo" className='checkatrade-short-logo' /> },
        { isActive: false, http: `${contacts.twitter}`, icon: <TwitterIcon className='icon' /> },
        { isActive: false, http: `${contacts.facebook}`, icon: <FacebookIcon className='icon' /> },
        { isActive: true, http: `mailto:${contacts.email}`, icon: <MailIcon className='icon' /> },
    ];

    return (
        <nav className='navigation' id='sec-nav'>
            <div className='container'>
                <div className='box'>
                    {navLinks.map((link) => (
                        <Link className='link internal-link' key={link.to + 'sec'} to={link.to}>{link.text}</Link>
                    ))}
                </div>

                <div className='box'>
                    {iconLinks.map((link) => (
                        link.isActive &&
                        <a className='link external-link' key={link.http} href={link.http} target="_blank" rel="noopener noreferrer">{link.icon}</a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export function ThirdNavigation() {

    const [isToTopVisible, setIsToTopVisible] = useState(false);

    const navLinks = [
        { to: '/contact', text: 'Contact' },
        { to: '/prices-and-charges', text: 'Prices & Charges' },
        { to: '/terms-and-conditions', text: 'Terms & Conditions' },
    ];

    function scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    useEffect(() => {
        function makeButtonVisible() {
            let scrollY = window.scrollY;
            const shouldShow = scrollY > 400;

            if (shouldShow !== isToTopVisible) {
                setIsToTopVisible(shouldShow);
            }
        }

        window.addEventListener('scroll', makeButtonVisible);

        return () => {
            window.removeEventListener('scroll', makeButtonVisible);
        }
    }, [isToTopVisible]);

    return (
        <nav className='navigation' id='third-nav'>
            <div className='container'>
                <div className='box'>
                    <h3>Quick Contact</h3>
                    <p>
                        {contacts.address.street}, {contacts.address.town}
                        <br />
                        {contacts.address.county},
                        <br />
                        {contacts.address.postcode}
                    </p>
                    <p>
                        Call us now for a quote or advice.
                        <br />
                        <br />
                        <a href={`tel:${contacts.phone}`} target="_blank" rel="noopener noreferrer">
                            <PhoneIcon className='icon' /><span>{contacts.phone}</span>
                        </a>

                        <a href={`mailto:${contacts.email}`} target="_blank" rel="noopener noreferrer">
                            <MailIcon className='icon' />
                            <span className='full-email'>{contacts.email}</span>
                            <span className='short-email'>{contacts.email.slice(0, 8)}...</span>
                        </a>
                    </p>
                </div>

                <div className='box'>
                    <h3>Maintenance &#38; Services</h3>
                    <Link to='/' style={{ pointerEvents: 'none' }}>Plumbing</Link>
                    <Link to='/' style={{ pointerEvents: 'none' }}>Heating &#38; Boilers</Link>
                    <Link to='/' style={{ pointerEvents: 'none' }}>Maintenance</Link>
                </div>
            </div>

            <div className="container">

                <div className='box' id='copyright-box'>
                    <span>
                        &copy; {new Date().getFullYear()} {contacts.company.tradingName}
                    </span>
                    <div
                        onClick={scrollToTop}
                        style={isToTopVisible ? { opacity: 1 } : { opacity: 0 }}
                    >
                        <ArrowIcon className='icon' />
                    </div>
                </div>

                <div className="box link-box">
                    {navLinks.map((link) => (
                        <div key={link.to + 'main'} className="link-wrapper">
                            <Link className='link' to={link.to}>{link.text}</Link>
                        </div>
                    ))}
                </div>

            </div>
        </nav>
    );
}
