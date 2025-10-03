import React from "react";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer hover:opacity-80 transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-contain"
      />
      <span className="mt-2 text-sm">{product.name}</span>
    </div>
  );
}
