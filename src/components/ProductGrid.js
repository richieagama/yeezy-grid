import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ onSelect }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onSelect(product)}
        />
      ))}
    </div>
  );
}
