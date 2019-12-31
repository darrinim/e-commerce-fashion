import React from 'react';
import './contact.css';

const Contact = () => {

  return(
    <div className="contactContainer">
      <div className="contactMainWrap">
        <div className="followWrap">
          <h4 className="contactTitle">Follow us:</h4>
            <div className="iconWrap">
              <i class="fab fa-facebook icon"></i>
              <i class="fab fa-instagram icon"></i>
              <i class="fab fa-twitter icon"></i>
            </div>
        </div>
        <div className="customerWrap">
          <h4 className="contactTitle">Customers:</h4>
          <a href="google.com" className="contactLink">care@sonnenbrille.com</a>
        </div>
        <div className="businessWrap">
          <h4 className="contactTitle">Business:</h4>
          <a href="google.com" className="contactLink">business@sonnenbrille.com</a>
        </div>
      </div>

      <div className="contactLinksWrap">
        <ul className="linksInnerWrap">
          <li><a href="google.com">Help</a></li>
          <li><a href="google.com">Shipping Details</a></li>
          <li><a href="google.com">Terms & Conditions</a></li>
          <li><a href="google.com">Privacy Policy</a></li>
          <li><a href="google.com">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;
