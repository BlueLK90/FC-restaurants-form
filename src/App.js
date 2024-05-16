import RestaurantList from "./Components/RestaurantList";
import { RestaurantDetails } from "./Components/RestaurantCard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/detail" element={<RestaurantDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
