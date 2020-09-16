import React from "react";
import StarRatings from "react-star-ratings";

const Rating = ({ rating, trackerStatus }) => {
  return trackerStatus === "delivered" ? (
    <div className="rating">
      <h3>You were rated</h3>
      <StarRatings
        rating={rating}
        starRatedColor="#2AD2BE"
        numberOfStars={5}
        name="rating"
        starDimension="40px"
      />
    </div>
  ) : null;
};

export default Rating;
