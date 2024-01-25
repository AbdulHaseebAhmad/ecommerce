import React from "react";
import Home from "./Pages/Home";
import Products, {loader as productsLoader, action as getBikes} from "./Pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<Home/>,},
        {path:'products',element:<Products/>,loader:productsLoader,action:getBikes}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
