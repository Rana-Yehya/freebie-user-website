import { OccasionItem } from "../../../../../types/occasion";

interface ProductOccasionsProps {
  occasions: OccasionItem[];
  onOccasionClick?: (occasion: OccasionItem) => void;
}

export default function ProductOccasions({
  occasions,
  onOccasionClick,
}: ProductOccasionsProps) {
  if (!occasions || occasions.length === 0) return null;

  const handleClick = (occasion: OccasionItem) => {
    if (onOccasionClick) {
      onOccasionClick(occasion);
    } else {
      // Default behavior: navigate to search with occasion filter
      const params = new URLSearchParams();
      params.set("occasion", occasion?.id || "");
      window.location.href = `/product/search?${params.toString()}`;
    }
  };

  return (
    <div className="bg-amber-50/40 rounded-lg border border-amber-200/30 p-3.5">
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-xs text-amber-600">✦</span>
        <span className="text-xs font-medium text-amber-700">Best for</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {occasions.map((occasion, index) => (
          <button
            key={index}
            onClick={() => handleClick(occasion)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-md border border-amber-200/20 text-xs text-slate-600 transition-all duration-200 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 hover:shadow-sm cursor-pointer group"
          >
            {occasion.image?.secureUrl && (
              <img
                src={occasion.image?.secureUrl}
                alt={occasion.name?.defaultName}
                className="w-4 h-4 rounded-full object-cover transition-transform duration-200 group-hover:scale-110"
              />
            )}
            <span className="transition-colors duration-200 group-hover:text-amber-700">
              {occasion.name?.defaultName}
            </span>
            <svg
              className="w-3 h-3 text-amber-300 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
