import React from "react";
import Products from "./components/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProduct from "./components/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
]);

function App() {
  return (
    <div className="max-w-[1380px] w-full p-4 mx-auto ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
