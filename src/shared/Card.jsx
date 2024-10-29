function Card({ title, value, percentage, isUpward = 'none', description }) {
  return (

    <article className="rounded-lg border border-gray-100 bg-white p-6">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-medium text-gray-900">{value}</p>
    </div>

    <div className={`mt-1 flex gap-1 ${isUpward ? "text-green-600" : "text-red-600"}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isUpward 
            ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"  // Upward trend
            : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"  // Downward trend
          }
        />
      </svg>

      <p className="flex gap-2 text-xs">
        <span className="font-medium"> {percentage}% </span>
        <span className="text-gray-500"> {description} </span>
      </p>
    </div>
  </article>

  );
}

export default Card;