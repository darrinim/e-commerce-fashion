import React from 'react';
import './footer.css'
import Contact from '../Footer/Contact/contact';
import Newsletter from '../Footer/Newsletter/newsletter';
import Copyright from '../Footer/Copyright/copyright';

const Footer = () => {

  return(
    <>
      <div className="footerContainer">
        <Contact />
        <Newsletter />
      </div>
      <Copyright />
    </>
  )
}


export default Footer;
