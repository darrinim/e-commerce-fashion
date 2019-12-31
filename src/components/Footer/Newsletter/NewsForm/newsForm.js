import React from 'react';
import './newsForm.css';


const NewsForm = () => {

  return(
    <div className="newsFormContainer">
      <form>
        <input className="emailInput" type="text" placeholder="Email"></input>
        <button className="emailSubmit">Submit</button>
      </form>
    </div>
  )
}

export default NewsForm;
