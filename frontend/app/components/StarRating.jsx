"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function StarRating({
  maxStars = 5,
  value = 0,
  onChange,
  size = 48,
}) {
  const [hovered, setHovered] = useState(null);

  const handleClick = (rating) => {
    if (onChange) onChange(rating);
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;

        const isActive =
          hovered !== null ? starValue <= hovered : starValue <= value;

        return (
          <Star
            key={index}
            size={size}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(starValue)}
            className={`cursor-pointer transition-colors duration-200 ${
              isActive
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
}