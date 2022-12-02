import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook, faTwitter,faTelegram,faInstagram, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';


const Footer = () =>{
    return <footer className='row py-5 mt-5 shadow-sm bg-white text-center'>
        <div className='offset-md-3 col-md-6 my-5'>
            <h3 className='logo'>Book My Table</h3>
            <hr/>
            <div className='social'>
                <a href='#'><FontAwesomeIcon icon={faFacebook}/></a>
                <a href='#'><FontAwesomeIcon icon={faTwitter}/></a>
                <a href='#'><FontAwesomeIcon icon={faTelegram}/></a>
                <a href='#'><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
            <div className='quick-links'>
                <a href='#'>Services</a>|
                <a href='#'>Menu</a>|
                <a href='#'>About us</a>
            </div>
            <p className='copy'>Copyright © {new Date().getFullYear()} <b>Book My Table</b> All rights reserved.</p>
        </div>
        <div className='col-md-3 my-5 download-links'>
            <h4 className='mb-3 fw-lighter'>Download Our App</h4>
            <a href='#' className='me-4'><FontAwesomeIcon icon={faApple}/></a>
            <a href='#'><FontAwesomeIcon icon={faGooglePlay}/></a>
        </div>
    </footer>
}

export default Footer;
