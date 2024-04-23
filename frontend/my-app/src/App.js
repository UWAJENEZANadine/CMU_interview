import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import calculateDiscount from "./calculateDiscount"; // Import the discount calculation function

// Component to display discount percentage
function DiscountCalculator({ orders, totalPriceOfThreeHighestOrders }) {
  const [result, setResult] = useState(null); // State to hold the calculated discount result

  // Function to handle form submission and calculate the discount
  const handleSubmit = (e) => {
    e.preventDefault();
    const discountPercentage = calculateDiscount(
      orders,
      totalPriceOfThreeHighestOrders
    );
    setResult(discountPercentage);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Calculate Discount</button>
      </form>
      {result !== null && (
        <div>
          <h2>Discount Percentage:</h2>
          <p>{result}%</p>
        </div>
      )}
    </div>
  );
}

function App() {
  const [orders, setOrders] = useState(""); // State to hold number of orders
  const [totalPriceOfThreeHighestOrders, setTotalPriceOfThreeHighestOrders] =
    useState(""); // State to hold total price of the highest three orders

  // Function to handle input change for orders
  const handleOrdersChange = (e) => {
    setOrders(e.target.value);
  };

  // Function to handle input change for total price of the highest three orders
  const handleTotalPriceChange = (e) => {
    setTotalPriceOfThreeHighestOrders(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Discount Calculator</h1>
        <div>
          <label>
            Number of Orders:
            <input type="number" value={orders} onChange={handleOrdersChange} />
          </label>
        </div>
        <div>
          <label>
            Total Price of the Highest Three Orders:
            <input
              type="number"
              value={totalPriceOfThreeHighestOrders}
              onChange={handleTotalPriceChange}
            />
          </label>
        </div>
        <DiscountCalculator
          orders={parseInt(orders)}
          totalPriceOfThreeHighestOrders={parseInt(
            totalPriceOfThreeHighestOrders
          )}
        />
      </header>
    </div>
  );
}

export default App;
