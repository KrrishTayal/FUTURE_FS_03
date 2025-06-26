// import React from "react";
// import { Link } from "react-router-dom";

// function ProductCard({ product }) {
//     return(
//      <Link to= {`/product/${product.id}`}>
//         <div className="shadow-lg rounded-md cursor-pointer">
//             <img src={product.image} className="p-4" />
//             <div className="bg-gray-50 p-4">
//                 <h2 className="text-lg font-semibold my-4">{product.title.substring(0,20)+"..."}</h2>
//                 <p className="text-sm text-zinc-500 border-b-2 pb-4"> {product.description.substring(0,75)+"..."} </p>
//                 <div className="flex justify-between items-center mt-4">
//                     <p className="text-xl font-semibold"> ${product.price}</p>
//                      <p>View Details</p>
                    
//                 </div>
//             </div>
//         </div>
//      </Link>
//     );

// }

// export default ProductCard;


import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer flex flex-col h-full">
        <img
          src={product.image}
          alt={product.title}
          className="p-4 w-full h-48 object-contain"
        />
        <div className="bg-gray-50 p-4 flex flex-col flex-grow">
          <h2 className="text-lg font-semibold mb-2 min-h-[56px]">
            {product.title.substring(0, 20) + "..."}
          </h2>
          <p className="text-sm text-zinc-500 border-b pb-4 min-h-[72px]">
            {product.description.substring(0, 75) + "..."}
          </p>
          <div className="flex justify-between items-center mt-auto pt-4">
            <p className="text-xl font-semibold">${product.price}</p>
            <p className="text-sm text-blue-600">View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
