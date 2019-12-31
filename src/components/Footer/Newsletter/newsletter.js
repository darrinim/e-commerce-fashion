import React from 'react';
import './newsletter.css';
import NewsForm from '../../Footer/Newsletter/NewsForm/newsForm';


const Newsletter = () => {

  return(
    <div className="newsletterContainer">
      <div className="newsletterWrap">
        <h3>Come hang!</h3>
        <p>All the cool stuff you see here we can send in a newsletter.</p>
        <NewsForm />
      </div>
    </div>
  )
}

export default Newsletter;
