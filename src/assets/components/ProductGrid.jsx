import React from "react";


import ProductCard from './ProductCard';
import { useSelector } from "react-redux";

function ProductGrid() {
    const products= useSelector((state) => state.products.filteredItems);
    
    return(
        <div className="container mx-auto px-4 my-24">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

    )
}
 export default ProductGrid;