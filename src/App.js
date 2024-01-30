import React from "react";
import Home from "./Pages/Home";
import Products, {
  loader as productsLoader,
  action as getBikes,
} from "./Pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails, {loader as productDetailLoader} from "./Pages/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        {
          path: "/products",
          id:'products',
          loader: productsLoader,
          children:[
            {
              path:'/products',
              element: <Products />,
              action: getBikes,
            }
            ,
            {
              path:':productId',
              element:<ProductDetails/>,
              loader:productDetailLoader,
            }
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
