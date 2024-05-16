[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/KAR25wAV)
# Fried Chicken Guide Web App

Dear students,

Use your React Js Skills to build an app that can find the best Fried Chicken Restaurant in Baghdad

## Task Instructions

Please follow the steps below to complete the task:

1. Create a `RestaurantList` component representing a page that displays a list of fried chicken restaurants. Consider adding `data-testid='restaurants-list'` to the container element `div` of the restaurant list for testing purposes.

2. Design a `RestaurantCard` component to showcase each restaurant's information. Include details like name, location, and a rating system (1-5 stars). Make sure to add these props attributes to target specific elements within the card for testing:
   1. `data-testid='restaurant-name'` for the restaurant name element.
   2. `data-testid='restaurant-location'` for the restaurant location element.
   3. `data-testid='restaurant-rating'` for the rating element.

3. Build a `RestaurantForm` component with an input field for users to add new restaurants to the list. Clicking an "Add" button should seamlessly add the new restaurant. Include these data-testid attributes for testing:
   1. `data-testid='restaurant-name-input'` for the name input field.
   2. `data-testid='restaurant-location-input'` for the location input field.
   3. `data-testid='range-input'` for the rating input field (assuming it's a range input).

4. Add a "Delete" button beside each restaurant card. This allows users to remove unwanted restaurants from the list.

5. Add a "Change Rate" button next to each restaurant card, allowing users to modify the rating.

6. When a user clicks on a specific restaurant card, the app should navigate to a dedicated `RestaurantDetails` component. This component will display detailed information about the chosen restaurant.

## Rules

1. Use state and props.
2. Use es6 methods.

## Extra Points

1. Make the web app gives the user a fried chicken restaurant vibe.
2. Make it responsive.

Please feel free to reach out if you have any questions or need further assistance.
