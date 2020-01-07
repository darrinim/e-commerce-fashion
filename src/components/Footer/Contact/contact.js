import React from 'react';
import './contact.css';

const Contact = () => {

  return(
    <div className="contactContainer">
      <div className="contactMainWrap">
        <div className="followWrap">
          <h4 className="contactTitle">Follow us:</h4>
            <div className="iconWrap">
              <a className="icon" target= "blank" href="https://www.linkedin.com/in/darrin-im/">
                <i class="fab fa-facebook icon"></i>
              </a>
              <a className="icon" target= "blank" href="https://www.linkedin.com/in/darrin-im/">
                <i class="fab fa-instagram icon"></i>
              </a>
              <a className="icon" target= "blank" href="https://www.linkedin.com/in/darrin-im/">
                <i class="fab fa-twitter icon"></i>
              </a>
            </div>
        </div>
        <div className="customerWrap">
          <h4 className="contactTitle">Customers:</h4>
          <a href="https://www.linkedin.com/in/darrin-im/" className="contactLink">care@sonnenbrille.com</a>
        </div>
        <div className="businessWrap">
          <h4 className="contactTitle">Business:</h4>
          <a href="https://www.linkedin.com/in/darrin-im/" className="contactLink">business@sonnenbrille.com</a>
        </div>
      </div>

      <div className="contactLinksWrap">
        <ul className="linksInnerWrap">
          <li><a href="https://www.linkedin.com/in/darrin-im/">Help</a></li>
          <li><a href="https://www.linkedin.com/in/darrin-im/">Shipping Details</a></li>
          <li><a href="https://www.linkedin.com/in/darrin-im/">Terms & Conditions</a></li>
          <li><a href="https://www.linkedin.com/in/darrin-im/">Privacy Policy</a></li>
          <li><a href="https://www.linkedin.com/in/darrin-im/">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;
