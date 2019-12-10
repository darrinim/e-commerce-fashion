import React from 'react';
import './created.css'
import '../../components/CreatedDesigned/createdDesigned.css';

const Created = () => {

  return(
    <div className="createdContainer">
      <div className="createdImgWrapper">
        <img
          className="featureImageCr test"
          src="https://res.cloudinary.com/darrin-im/image/upload/v1575958444/sunglasses-guy_gz0pq7.jpg"
        />
      </div>
      <div className="createdTextWrapper">
        <h2 className="creDesTextTitle">Created...</h2>
        <p className="creDesText">With you in mind and some other stuff about how we're made with high quality materials and we're the shit. Here's another sentence because just the last one looked really short.</p>
      </div>
    </div>
  )
}


export default Created;
