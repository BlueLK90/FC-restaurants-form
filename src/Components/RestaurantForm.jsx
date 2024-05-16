import React, { useState } from "react";
const RestaurantForm = ({ restaurants, onSubmit }) => {
  const errorMessage = <p>This Restaurant is altready listed</p>;
  const [formInfo, setInfo] = useState({
    id: "",
    name: "",
    location: "",
    rating: 5,
    msg: null,
  });
  function resetForm() {
    setInfo({
      id: "",
      name: "",
      location: "",
      rating: 5,
      msg: null,
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (restaurants.map((el) => el.id).includes(formInfo.id))
            setInfo({ ...formInfo, msg: errorMessage });
          else {
            onSubmit(formInfo);
            resetForm();
          }
        }}
      >
        <h3>Add a new FC restaurant:</h3>
        <label htmlFor="resName">Name:</label>
        <br />
        <input
          type="text"
          name="resName"
          data-testid="restaurant-name-input"
          value={formInfo.name}
          onChange={(e) =>
            setInfo({
              ...formInfo,
              id: e.target.value.trim(),
              name: e.target.value,
              msg: null,
            })
          }
          required
        />
        <br />
        <label htmlFor="resLocation">Location:</label>
        <br />
        <input
          type="text"
          name="resLocation"
          data-testid="restaurant-location-input"
          value={formInfo.location}
          onChange={(e) =>
            setInfo({
              ...formInfo,
              location: e.target.value,
            })
          }
          required
        />
        <br />
        <label htmlFor="resRating">Rate the restaurant:</label>
        <br />
        <div className="ratings">
          <input
            type="range"
            name="resRating"
            data-testid="range-input"
            value={formInfo.rating}
            onChange={(e) =>
              setInfo({
                ...formInfo,
                rating: e.target.value,
              })
            }
            min={1}
            max={5}
            required
          />
          <label> {formInfo.rating}</label>
        </div>
        <br />
        <button type="submit">Add</button>
        <p>{formInfo.msg}</p>
      </form>
    </div>
  );
};

export default RestaurantForm;
