import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const URL = `http://127.0.0.1:8080/products`;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        // setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-[1380px] w-full p-4 mx-auto ">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl text-center">Products</h1>

        <div className="grid grid-cols-3 gap-5">
          <div className="max-w-md  bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              alt="iPhone 9"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-gray-800">iPhone 9</h1>
              <p className="text-gray-600 mt-2">
                An apple mobile which is nothing like apple
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl text-gray-800">$549</span>
                <span className="text-sm text-gray-600">Rating: 4.69</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">In Stock: 94</span>
                <span className="text-sm text-green-500">12.96% Off</span>
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-600">Brand: Apple</span>
                <span className="text-sm text-gray-600 ml-4">
                  Category: Smartphones
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-md  bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              alt="iPhone 9"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-gray-800">iPhone 9</h1>
              <p className="text-gray-600 mt-2">
                An apple mobile which is nothing like apple
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl text-gray-800">$549</span>
                <span className="text-sm text-gray-600">Rating: 4.69</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">In Stock: 94</span>
                <span className="text-sm text-green-500">12.96% Off</span>
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-600">Brand: Apple</span>
                <span className="text-sm text-gray-600 ml-4">
                  Category: Smartphones
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-md  bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              alt="iPhone 9"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-gray-800">iPhone 9</h1>
              <p className="text-gray-600 mt-2">
                An apple mobile which is nothing like apple
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl text-gray-800">$549</span>
                <span className="text-sm text-gray-600">Rating: 4.69</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">In Stock: 94</span>
                <span className="text-sm text-green-500">12.96% Off</span>
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-600">Brand: Apple</span>
                <span className="text-sm text-gray-600 ml-4">
                  Category: Smartphones
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-md  bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              alt="iPhone 9"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-gray-800">iPhone 9</h1>
              <p className="text-gray-600 mt-2">
                An apple mobile which is nothing like apple
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl text-gray-800">$549</span>
                <span className="text-sm text-gray-600">Rating: 4.69</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">In Stock: 94</span>
                <span className="text-sm text-green-500">12.96% Off</span>
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-600">Brand: Apple</span>
                <span className="text-sm text-gray-600 ml-4">
                  Category: Smartphones
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
