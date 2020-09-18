import React from "react";
import StarRatings from "react-star-ratings";

const Rating = ({ rating, trackerStatus, changeRating }) => {
  return trackerStatus === "delivered" ? (
    <div className="rating">
      {changeRating ? (
        <h3>Rate the carrier fairly</h3>
      ) : (
        <h3>You were rated</h3>
      )}

      <StarRatings
        rating={rating}
        starRatedColor="#2AD2BE"
        numberOfStars={5}
        name="rating"
        starDimension="40px"
        changeRating={changeRating}
      />
    </div>
  ) : null;
};

export default Rating;
