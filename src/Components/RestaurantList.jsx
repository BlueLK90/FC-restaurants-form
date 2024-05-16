import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantForm from "./RestaurantForm";

function RestaurantList() {
  const [allRes, setAllRes] = useState([
    { id: 1, name: "KFC", location: "Planet Earth", rating: 1 },
    { id: 2, name: "Fried Chicken", location: "Iraq", rating: 4 },
    { id: 3, name: "Chicken Express", location: "Iraq", rating: 3 },
  ]);
  const addNewRes = (formInfo) => {
    setAllRes([...allRes, formInfo]);
  };
  const deleteRes = (ResId) => {
    const modifiedArr = [...allRes];
    const index = modifiedArr.map((el) => el.id).indexOf(ResId);
    modifiedArr.splice(index, 1);
    setAllRes(modifiedArr);
  };
  return (
    <div data-testid="restaurants-list">
      <div className="form">
        <RestaurantForm restaurants={allRes} onSubmit={addNewRes} />
      </div>
      <h1>Restaurants List</h1>
      <div className="list">
        {allRes.map((el) => (
          <RestaurantCard
            id={el.id}
            name={el.name}
            location={el.location}
            rating={el.rating}
            deleteRes={deleteRes}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
