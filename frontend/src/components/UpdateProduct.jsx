import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [updateProduct, setUpdateProduct] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
  });

  const API = "http://127.0.0.1:8080";
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        setUpdateProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !updateProduct.title &&
      !updateProduct.description &&
      !updateProduct.price &&
      !updateProduct.discountPercentage &&
      !updateProduct.rating &&
      !updateProduct.rating &&
      !updateProduct.stock &&
      !updateProduct.brand &&
      !updateProduct.category &&
      !updateProduct.thumbnail
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    axios
      .put(`${API}/products/${id}`, updateProduct)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-center text-4xl">Update Product</h1>

        <Link
          to="/"
          className="cursor-pointer rounded-md border  border-blue-500 bg-blue-500 px-3 py-2 text-xl font-semibold text-white transition-all delay-150 ease-in-out hover:border-blue-500 hover:bg-white hover:text-blue-500"
        >
          <BsArrowLeft />
        </Link>
      </div>

      <form
        action="#"
        method="POST"
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <label htmlFor="title" className="text-gray-600">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={updateProduct?.title}
            id="title"
            className="block w-1/3 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="description" className="text-gray-600">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={updateProduct?.description}
            id="description"
            className="block w-1/3 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="price" className="text-gray-600">
            Price in $
          </label>
          <input
            type="text"
            name="price"
            value={updateProduct?.price}
            id="price"
            className="block w-1/3 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="discountPercentage" className="text-gray-600">
            Discount Percentage
          </label>
          <input
            type="text"
            name="discountPercentage"
            value={updateProduct?.discountPercentage}
            id="discountPercentage"
            className="block w-1/3 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="rating" className="text-gray-600">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            value={updateProduct?.rating}
            id="rating"
            className="block w-1/3 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="stock" className="text-gray-600">
            Stock
          </label>
          <input
            type="text"
            name="stock"
            value={updateProduct?.stock}
            id="stock"
            className="block w-1/3 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="brand" className="text-gray-600">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            value={updateProduct?.brand}
            id="brand"
            className="block w-1/3 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="category" className="text-gray-600">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={updateProduct?.category}
            id="category"
            className="block w-1/3 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="thumbnail" className="text-gray-600">
            Thumbnail
          </label>
          <input
            type="text"
            name="thumbnail"
            value={updateProduct?.thumbnail}
            id="thumbnail"
            className="block w-1/3 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
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
            className="cursor-pointer rounded-md border border-blue-500 bg-blue-500 px-3 py-2 font-semibold text-white transition-all delay-150 ease-in-out hover:border-blue-500 hover:bg-white hover:text-blue-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
