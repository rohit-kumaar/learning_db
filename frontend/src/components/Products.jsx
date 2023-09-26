import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../config/config";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-center">Product's</h1>

        <Link
          to="/add-product"
          className="bg-blue-500 px-3 py-2 font-semibold rounded-md text-white cursor-pointer border border-blue-500 hover:border-blue-500 hover:bg-white hover:text-blue-500 transition-all delay-150 ease-in-out text-xl"
        >
          <MdProductionQuantityLimits />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map((product) => {
          return (
            <div
              key={product._id}
              className="xl:max-w-md  bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                loading="lazy"
                src={product.thumbnail}
                alt={product.title}
                title={product.title}
                className="w-full h-64 xl:object-cover"
              />

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-gray-800">
                    {product.title}
                  </h1>

                  <Link to="#" title="Update" className="p-1 text-red-700">
                    <AiFillEdit />
                  </Link>
                </div>

                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl text-gray-800">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-600">
                    Rating: {product.rating}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    In Stock: {product.stock}
                  </span>
                  <span className="text-sm text-green-500">
                    {product.discountPercentage}% Off
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-600">
                    Brand: {product.brand}
                  </span>
                  <span className="text-sm text-gray-600 ml-4">
                    Category: {product.category}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
