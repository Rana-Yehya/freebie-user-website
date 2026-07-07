"use client";

import { useState } from "react";

interface RatingProps {
  rating: number; // 0-5
  maxRating?: number;
  size?: number;
  color?: string;
  showNumber?: boolean;
  showReviews?: boolean;
  reviewCount?: number;
  className?: string;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

export default function RatingDisplay({
  rating,
  maxRating = 5,
  size = 5,
  color = "text-honey",
  showNumber = false,
  showReviews = false,
  reviewCount = 0,
  className = "",
  interactive = false,
  onRatingChange,
}: RatingProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  const displayRating = interactive ? currentRating : rating;

  const handleMouseEnter = (index: number) => {
    if (interactive) {
      setHoverRating(index);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0);
    }
  };

  const handleClick = (index: number) => {
    if (interactive && onRatingChange) {
      setCurrentRating(index);
      onRatingChange(index);
    }
  };

  const getStarType = (starIndex: number) => {
    const current = hoverRating || displayRating;

    if (starIndex <= Math.floor(current)) {
      return "full";
    } else if (starIndex === Math.floor(current) + 1 && current % 1 >= 0.5) {
      return "half";
    } else {
      return "empty";
    }
  };

  const starClass = `w-${size} h-${size} ${color}`;
  return (
    <div
      data-motion="rating"
      className="flex items-center gap-3"
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      }}
    >
      <div
        className={`flex items-center gap-0.5 ${className}`}
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: maxRating }).map((_, i) => {
          const starIndex = i + 1;
          const starType = getStarType(starIndex);
          const src = `/star-${starType}.svg`;
          const isInteractive =
            interactive && starIndex === Math.ceil(displayRating);

          return (
            <button
              key={i}
              type="button"
              onMouseEnter={() => handleMouseEnter(starIndex)}
              onClick={() => handleClick(starIndex)}
              className={`${interactive ? "cursor-pointer transition-transform hover:scale-110" : "cursor-default"} focus:outline-none`}
              disabled={!interactive}
              aria-label={`${starIndex} stars`}
            >
              <img
                src={src}
                alt={`${starType} star`}
                width={size * 4}
                height={size * 4}
                className={`${starClass} ${starType === "empty" ? "text-gray-300 dark:text-gray-600" : ""}`}
              />
            </button>
          );
        })}

        {/* Show Rating Number */}
        {showNumber && (
          // <span className="ml-2 text-sm font-medium text-slate-600 dark:text-neutral-400">
          //   {rating.toFixed(1)}
          // </span>
          <span className="text-slate-600 dark:text-neutral-400 text-sm">
            (rating.toFixed(1))
          </span>
        )}
      </div>
    </div>
  );
}
