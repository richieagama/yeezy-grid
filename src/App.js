import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductGrid from "./components/ProductGrid";
import PaperModal from "./components/PaperModal";
import "./index.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <ProductGrid onSelect={setSelectedProduct} />

      <AnimatePresence>
        {selectedProduct && (
          <PaperModal
            key={selectedProduct.id}
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
