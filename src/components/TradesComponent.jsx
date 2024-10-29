import React, { useEffect, useState } from "react";
import Tables from "../shared/Tables";
import CardsTickets from "../components/CardsTickets.jsx";
import CreateOrder from "../components/CreateOrder.jsx";

const TradesComponent = () => {
  const [trades, setTrades] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await fetch("http://localhost:9125/trades", {
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

      <div>
        <div className="lg:flex flex-nowrap justify-between items-end">
          <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Open Trades 💰
          </h1>
          <CreateOrder />
        </div>
        <Tables trades={trades["allOrders"]}></Tables>
        <div>{console.log(trades)}</div>
      </div>
    </div>
  );
};

export default TradesComponent;
