import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import UpdateProduct from "./components/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/update-product/:id",
    element: <UpdateProduct />,
  },
]);

function App() {
  return (
    <div className="mx-auto w-full max-w-[1380px] p-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
