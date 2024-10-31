import React, { useEffect, useState } from "react";
import SignalTables from "../shared/SignalTables";

const REACT_APP_BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

const SignalComponent = () => {
  const [signals, setSignal] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await fetch(`${REACT_APP_BACKEND_API_URL}/fetch-signals`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          // setSignal([]);
          throw new Error("Network response was not ok " + response.statusText);
        }

        const resp = await response.json();
        setSignal(resp["data"]); // Set the signals data
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
      <div className="rounded-lg border border-gray-100 my-4 p-4">
        <div className="lg:flex flex-nowrap justify-between items-end">
          <h1 class="mt-6 font-bold text-gray-900 text-xl">
            Trading Signals 🚀
          </h1>
        </div>
        <SignalTables signals={signals}></SignalTables>
        <div>{console.log(signals)}</div>
      </div>
    </div>
  );
};

export default SignalComponent;