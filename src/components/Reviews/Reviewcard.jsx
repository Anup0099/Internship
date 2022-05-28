import React from "react";
import images from "../images";
import "./reviewcard.css";
const Reviewcard = () => {
  return (
    <div>
      <div className="review-card">
        <div className="reviews-dp">
          <div className="review-card-img">
            <img src={images.Benny} alt="green iguana" />
          </div>
          <div className="review-card-content">
            <h3>Benny dayal</h3>
            <h4 >PALO,ALTO</h4>
          </div>
        </div>

        <div className="review-card-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
