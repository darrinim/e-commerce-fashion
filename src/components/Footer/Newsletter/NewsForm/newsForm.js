import React from 'react';
import './newsForm.css';


const NewsForm = () => {

  return(
    <div className="newsFormContainer">
      <form className="newsForm" action="mailto:darrinj.im@gmail.com">
        <input className="emailInput" type="text" placeholder="Email"></input>
        <input className="emailSubmit" type="submit"></input>
      </form>
    </div>
  )
}

export default NewsForm;
