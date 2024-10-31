import { format } from "date-fns";

function SignalTables({ signals }) {
  return (
    <div className="overflow-x-auto rounded-t-lg">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Date Formated
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Price
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
             Signal
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {signals.map((signal, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {signal.date_formated}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {signal.price}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {/* <span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-700">
                                    {signal.order.action}
                                </span> */}
                <td
                  className={`whitespace-nowrap rounded-full px-2.5 py-0.5 ${
                    signal.signal === "BUY"
                      ? "bg-green-100 text-green-500"
                      : signal.signal === "SELL"
                      ? "bg-red-100 text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  {signal.signal}
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SignalTables;
