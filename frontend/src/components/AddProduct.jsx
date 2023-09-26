import React from "react";
import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-center">Add Product</h1>

        <Link
          to="/"
          className="bg-blue-500 px-3 py-2 font-semibold rounded-md text-white cursor-pointer border border-blue-500 hover:border-blue-500 hover:bg-white hover:text-blue-500 transition-all delay-150 ease-in-out "
        >
          Go Back
        </Link>
      </div>

      <form action="#" method="POST" className="space-y-4">
        <div className="flex items-center justify-between">
          <label for="title" className="text-gray-600">
            Title
          </label>
          <input
            type="text"
            name=""
            id="title"
            class="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <label for="description" className="text-gray-600">
            Description
          </label>
          <input
            type="text"
            name=""
            id="description"
            class="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <label for="price" className="text-gray-600">
            Price in $
          </label>
          <input
            type="text"
            name=""
            id="price"
            class="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <label for="discount" className="text-gray-600">
            Discount Percentage
          </label>
          <input
            type="text"
            name=""
            id="discount"
            class="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <label for="rating" className="text-gray-600">
            Rating
          </label>
          <input
            type="text"
            name=""
            id="rating"
            class="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <label for="stock" className="text-gray-600">
            Stock
          </label>
          <input
            type="text"
            name=""
            id="stock"
            class="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <label for="brand" className="text-gray-600">
            Brand
          </label>
          <input
            type="text"
            name=""
            id="brand"
            class="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <label for="category" className="text-gray-600">
            Category
          </label>
          <input
            type="text"
            name=""
            id="category"
            class="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
          />
        </div>

        <div className="flex items-center justify-between">
          <label for="thumbnail" className="text-gray-600">
            Thumbnail
          </label>
          <input
            type="text"
            name=""
            id="thumbnail"
            class="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
          />
          {/* <img
            id="thumbnail"
            src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            alt="Thumbnail"
            className="w-16 h-16"
          /> */}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 px-3 py-2 font-semibold rounded-md text-white cursor-pointer border border-blue-500 hover:border-blue-500 hover:bg-white hover:text-blue-500 transition-all delay-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
