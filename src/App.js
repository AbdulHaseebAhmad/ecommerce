import React from "react";
import Home from "./Pages/Home";
import Products, {
  loader as productsLoader,
  action as getBikes,
} from "./Pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails, {loader as productDetailLoader} from "./Pages/ProductDetails";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";

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
        {path:'/blogs',element:<Blogs/>},
        {path:'/about-us',element:<About/>}
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
