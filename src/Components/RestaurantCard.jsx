import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ratingStar.css";

function RatingStars({ rating }) {
  const [rate, setRate] = useState(rating);
  const [hover, setHover] = useState(null);

  return (
    <div className="starRating">
      {[...Array(5)].map((star, i) => {
        const currentRating = i + 1;
        return (
          <>
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRate(currentRating)}
              />

              <FaStar
                className="star"
                size={20}
                color={currentRating <= (hover || rate) ? "#ffc107" : "#949494"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          </>
        );
      })}
    </div>
  );
}
const RestaurantDetails = ({ name, rating, location }) => {
  return (
    <div className="details">
      <img alt="resImage" src={require("./friedchicken.jpg")} />
      <div className="details">
        <h4>Restaurant Name: {name}</h4>
        <h4>
          Rating:
          <RatingStars rating={rating} />
        </h4>
        <h4>Location: {location}</h4>
      </div>
    </div>
  );
};

function RestaurantCard({ deleteRes, id, name, rating }) {
  return (
    <div className="resCard">
      <img alt="resImage" src={require("./friedchicken.jpg")} />
      <p data-testid="restaurant-name">{name}</p>
      <RatingStars rating={rating} data-testid="restaurant-rating" />
      <div className="buttons">
        <Link to={"/details"}>
          <button>See Details</button>
        </Link>
        <button onClick={() => deleteRes(id)}>Delete</button>
      </div>
    </div>
  );
}
export { RestaurantDetails };
export default RestaurantCard;
