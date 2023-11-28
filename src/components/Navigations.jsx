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
        //console.log(newPositions)
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
        { http: 'tel:+447794156943', icon: <PhoneIcon className='icon' />, text: '+447794156943' },
        { http: 'mailto:info@dmfplumbingandheating.com', icon: <MailIcon className='icon' />, text: 'info@dmfplumbingandheating.com' },
    ];

    return (
        <nav className='side-nav'>
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
        { to: '/prices-and-charges', text: 'Prices & Charges' },
        { to: '/terms-and-conditions', text: 'Terms & Conditions' },
    ];

    return (
        <nav className='third-nav'>
            <div className='container'>
                <div className='box'>
                    <h3>Quick Contact</h3>
                    <p>
                        5 Hammer Lane, Haslemere,
                        <br />
                        West Sussex
                        <br />
                        GU27 3QD
                    </p>
                    <p>
                        Call us now for a quote or advice:
                        <br />
                        Phone 0800 118 2460
                    </p>
                    <a href='mailto:info@dmfplumbingandheating.com' target="_blank" rel="noopener noreferrer">info@dmfplumbingandheating.com</a>
                </div>

                <div className='box'>
                    <h3>Maintenance &#38; Services</h3>
                    <Link to='/' >Plumbing</Link>
                    <Link to='/'>Heating &#38; Boilers</Link>
                    <Link to='/'>Bathroom Fittings</Link>
                </div>
            </div>
            <div className="container">
                <div className="box link-box">
                    {navLinks.map((link) => (
                        <div className="link-wrapper">
                            <Link className='link' key={link.to + 'main'} to={link.to}>{link.text}</Link>
                        </div>
                    ))}
                </div>
                <div className='box copyright'>Copyright &copy; {new Date().getFullYear()} DMF Plambing &#38; Heating</div>
            </div>
        </nav>
    );
}
