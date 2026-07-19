// Price range slider
export default function PriceRange({
  minVal,
  maxVal,
  onMinChange,
  onMaxChange,
  minLimit = 0,
  maxLimit = 1000,
}: {
  minVal: number;
  maxVal: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  minLimit?: number;
  maxLimit?: number;
}) {
  const minPercent = ((minVal - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((maxVal - minLimit) / (maxLimit - minLimit)) * 100;

  return (
    <div className="pt-2">
      <div className="relative">
        <div className="h-1 bg-gray-200 rounded-full relative">
          <div
            className="absolute h-1 bg-blue-600 rounded-full"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />
        </div>

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minVal}
          className="absolute top-0 w-full h-1 bg-transparent appearance-none cursor-pointer focus:outline-none"
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxVal - 1);
            onMinChange(val);
          }}
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxVal}
          className="absolute top-0 w-full h-1 bg-transparent appearance-none cursor-pointer focus:outline-none"
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minVal + 1);
            onMaxChange(val);
          }}
        />

        <div className="flex justify-between text-slate-600 text-sm mt-4">
          <span>${minVal}</span>
          <span>${maxVal}</span>
        </div>
      </div>
    </div>
  );
}
