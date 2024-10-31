import React, { useEffect, useState } from "react";
import Tables from "../shared/Tables";
import CardsTickets from "../components/CardsTickets.jsx";
import CreateOrder from "../components/CreateOrder.jsx";

const REACT_APP_BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

const TradesComponent = () => {
  const [trades, setTrades] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await fetch(`${REACT_APP_BACKEND_API_URL}/trades`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          // setTrades([]);
          throw new Error("Network response was not ok " + response.statusText);
        }

        const resp = await response.json();
        setTrades(resp["data"]); // Set the trades data
      } catch (err) {
        setError(err.message); // Set the error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchTrades();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

  return (
    <div>
      <CardsTickets
        totalOrders={trades["totalOrders"]}
        totalBuy={trades["totalBuy"]}
        totalSells={trades["totalSells"]}
      ></CardsTickets>

      <div className="rounded-lg border border-gray-100 my-4 p-4">
        <div className="lg:flex  justify-between items-end">
          <h1 class="mt-6 font-bold text-gray-900 text-xl">
            Open Trades 💰
          </h1>
          <CreateOrder />
        </div>
        <Tables initialTrades={trades["allOrders"]}></Tables>
        {/* <div>{console.log(initialTrades)}</div> */}
      </div>
    </div>
  );
};

export default TradesComponent;
