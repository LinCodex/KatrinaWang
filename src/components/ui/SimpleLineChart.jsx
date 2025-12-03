/**
 * Simple SVG line chart for price history
 */
const SimpleLineChart = ({ data, isDark }) => {
  if (!data || data.length === 0) return (
    <div className="h-48 flex items-center justify-center text-zinc-500 font-mono text-xs">No Data Available</div>
  );

  const prices = data.map(d => d.price);
  const minPrice = Math.min(...prices) * 0.9;
  const maxPrice = Math.max(...prices) * 1.1;
  const width = 100;
  const height = 60;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d.price - minPrice) / (maxPrice - minPrice)) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full h-48 relative">
      <svg viewBox={`0 0 ${width} ${height + 10}`} className="w-full h-full overflow-visible">
        <polyline
          points={points}
          fill="none"
          stroke={isDark ? "white" : "black"}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * width;
          const y = height - ((d.price - minPrice) / (maxPrice - minPrice)) * height;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="2" fill={isDark ? "black" : "white"} stroke={isDark ? "white" : "black"} strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <text x={x} y={y - 5} textAnchor="middle" fontSize="4" fill={isDark ? "white" : "black"} className="font-mono">
                {d.price}M
              </text>
              <text x={x} y={height + 8} textAnchor="middle" fontSize="3" fill={isDark ? "#71717a" : "#a1a1aa"} className="font-mono">
                {d.date}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default SimpleLineChart;
