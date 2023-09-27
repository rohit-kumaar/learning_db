import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

function Products() {
  const API = "http://127.0.0.1:8080";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would You Like To Delete?");
    if (confirm) {
      axios
        .delete(`${API}/products/${id}`)
        .then((res) => {
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product._id !== id),
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-center text-4xl">Product's</h1>

        <Link
          to="/add-product"
          className="cursor-pointer rounded-md border border-blue-500 bg-blue-500 px-3 py-2 text-xl font-semibold text-white transition-all delay-150 ease-in-out hover:border-blue-500 hover:bg-white hover:text-blue-500"
        >
          <MdProductionQuantityLimits />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => {
          return (
            <div
              key={product?._id}
              className="overflow-hidden  rounded-lg bg-white shadow-lg xl:max-w-md"
            >
              <img
                loading="lazy"
                src={product?.thumbnail}
                alt={product?.title}
                title={product?.title}
                className="h-64 w-full xl:object-cover"
              />

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-gray-800">
                    {product?.title}
                  </h1>

                  <div className="flex items-center gap-3">
                    <Link
                      to={`update-product/${product?._id}`}
                      title="Update"
                      className=" text-green-500"
                    >
                      <AiFillEdit />
                    </Link>

                    <button
                      title="Delete"
                      className=" text-red-500"
                      onClick={(e) => handleDelete(product?._id)}
                    >
                      <AiTwotoneDelete />
                    </button>
                  </div>
                </div>

                <p className="mt-2 text-gray-600">{product?.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl text-gray-800">
                    ${product?.price}
                  </span>
                  <span className="text-sm text-gray-600">
                    Rating: {product?.rating}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    In Stock: {product?.stock}
                  </span>
                  <span className="text-sm text-green-500">
                    {product?.category}
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
