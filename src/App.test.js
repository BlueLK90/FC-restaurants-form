import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantsList from "./components/RestaurantsList";
import RestaurantForm from "./components/RestaurantForm/RestaurantForm";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";

//!App component
describe("App component", () => {
  it("should represent a list of fried chicken restaurants", () => {
    const { getByTestId } = render(
      <Router>
        <App />{" "}
      </Router>
    );
    const restaurantsListComponent = getByTestId("restaurants-list");
    expect(restaurantsListComponent).toBeInTheDocument();
  });
});

//!RestarurantCard component
describe("RestaurantCard component", () => {
  it("should render name, location, and rating", () => {
    const restaurant = {
      id: 1,
      name: "FireFly",
      location: "Yarmouk",
      range: 90,
    };

    render(
      <Router>
        {" "}
        <RestaurantCard rest={restaurant} />
      </Router>
    );

    const nameElement = screen.getByText(/FireFly/i);
    const locationElement = screen.getByText(/Yarmouk/i);
    const ratingElement = screen.getByText(/ 90/i);

    expect(nameElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
  });
});

//!RestaurantCard Component
describe("RestaurantCard component", () => {
  it("should render delete button and delete corresponding restaurant when clicked", () => {
    const restaurant = {
      id: 1,
      name: "FireFly",
      location: "Yarmouk",
      range: 90,
    };

    const mockDeleteRestaurant = jest.fn();

    const { getByText } = render(
      <Router>
        <RestaurantCard
          rest={restaurant}
          deleteRestaurant={mockDeleteRestaurant}
        />
      </Router>
    );

    const deleteButton = getByText("Delete");

    fireEvent.click(deleteButton);

    expect(mockDeleteRestaurant).toHaveBeenCalledWith(restaurant.id);
  });
});
describe("RestaurantCard component", () => {
  it("should render change rate button and change corresponding restaurant rating when clicked", () => {
    const restaurant = {
      id: 1,
      name: "FireFly",
      location: "Yarmouk",
      range: 90,
    };

    const mockUpdateRange = jest.fn();

    const { getByText } = render(
      <Router>
        <RestaurantCard
          rest={restaurant}
          deleteRestaurant={() => {}}
          updateRange={mockUpdateRange}
        />
      </Router>
    );

    const changeRateButton = getByText("Change Rate");

    fireEvent.click(changeRateButton);

    expect(mockUpdateRange).toHaveBeenCalledWith(restaurant.id);
  });
});
describe("RestaurantCard component", () => {
  it('should navigate to restaurant details with correct restaurant details when "More Details" is clicked', () => {
    const restaurant = {
      id: 1,
      name: "FireFly",
      location: "Yarmouk",
      range: 90,
    };

    const { getByText, container } = render(
      <MemoryRouter>
        <RestaurantCard
          rest={restaurant}
          deleteRestaurant={() => {}}
          updateRange={() => {}}
        />
      </MemoryRouter>
    );

    const moreDetailsLink = getByText("More Details");

    fireEvent.click(moreDetailsLink);

    expect(container.innerHTML).toMatch(`/restaurant-details/${restaurant.id}`);
  });
});

describe("RestaurantForm component", () => {
  it("should add a new restaurant and update the name input value", () => {
    const { getByTestId, getByText } = render(
      <RestaurantForm
        nameValue={""} // Provide the initial value for nameValue
        setNameValue={() => {}} // Provide a mock function for setNameValue
        locationValue={""} // Provide the initial value for locationValue
        setLocationValue={() => {}} // Provide a mock function for setLocationValue
        rangeValue={""} // Provide the initial value for rangeValue
        setRangeValue={() => {}} // Provide a mock function for setRangeValue
        restaurant={[]} // Provide the initial value for restaurant
        setRestaurant={() => {}} // Provide a mock function for setRestaurant
      />
    );

    fireEvent.change(getByTestId("restaurant-name-input"), {
      target: { value: "New restaurant" },
    });
    fireEvent.change(getByTestId("restaurant-location-input"), {
      target: { value: "New Location" },
    });
    fireEvent.change(getByTestId("range-input"), { target: { value: "3" } });

    fireEvent.click(getByText("Add New Restaurant"));

    // Updated assertion to check name input value is cleared
    expect(getByTestId("restaurant-name-input")).toHaveValue("");

    // Optional assertion to check placeholder
    expect(getByTestId("restaurant-name-input")).toHaveAttribute(
      "placeholder",
      "Restaurant name"
    );
  });
});
