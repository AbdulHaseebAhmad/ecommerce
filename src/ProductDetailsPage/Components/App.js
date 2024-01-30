import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RootLayOut from "./Pages/RootLayOut";
import Tutors from "./Pages/Tutors";
import Nannies from "./Pages/Nannies";
import Governess from "./Pages/Governess";
import Blog , {loader as blogsLoader} from "./Pages/Blog";
import Contactus from "../src/Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import BecomeCandidate from "./Pages/BecomeCandidate";
import Article from "./Pages/Article";
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      loader:blogsLoader,
      id:'blogs',
      children:[
        {index:true,element:<Home/>},
        {path:'/tutors',element:<Tutors/>},
        {path:'/nannies',element:<Nannies/>},
        {path:'/governess', element:<Governess/>},  
        { 
          path:'/blogs',
          
          children:[
            {
              path:'',
              element:<Blog/>,
            },
            {
              path:':articleId',
              element:<Article/>}

          ]
      },
        {path:'/contact-us',element:<Contactus/>},
        {path:'/about-us',element:<Aboutus/>},
        {path:'/become-candidate',element:<BecomeCandidate/>},
    ]}
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
