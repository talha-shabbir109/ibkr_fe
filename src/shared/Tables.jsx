import { format } from "date-fns";
import React, {  useState } from "react";
const REACT_APP_BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

function Tables({ initialTrades }) {

  const [trades, setTrades] = useState(initialTrades);

  // Function to handle delete
  const handleDelete = async (tradeId) => {
    try {
      // Make API call to delete the trade
      const response = await fetch(`${REACT_APP_BACKEND_API_URL}/order/${tradeId}`, {
        method: 'DELETE',
      });

      // Check if the response is okay
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Filter out the deleted trade from the trades array
      setTrades(trades.filter((trade) => trade.order.permId !== tradeId));
    } catch (error) {
      console.error("Error deleting trade:", error);
    }
  };

  return (
    <div className="overflow-x-auto rounded-t-lg">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Id
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Stocks
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Action
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Type
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              TotalQuantity
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Price
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Created at
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Status
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {console.log("trades ------------->",trades)}
          {trades.map((trade, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {trade.order.permId}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                  {trade.contract.symbol}
                </span>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <td
                  className={`whitespace-nowrap rounded-full px-2.5 py-0.5 ${
                    trade.order.action === "BUY"
                      ? "bg-green-100 text-green-500"
                      : trade.order.action === "SELL"
                      ? "bg-red-100 text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  {trade.order.action}
                </td>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {trade.order.orderType}
              </td>

              <td className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                {trade.order.totalQuantity}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                ${trade.order.lmtPrice}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {format(trade.log[0].time, "MMMM dd, yyyy hh:mm:ss a")}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <span class="whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700">
                  {trade.orderStatus.status}
                </span>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <button
                  onClick={() => handleDelete(trade.order.permId)}
                  className="inline-block rounded border border-red-600 bg-red-600 px-1 py-1 text-sm font-small text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
