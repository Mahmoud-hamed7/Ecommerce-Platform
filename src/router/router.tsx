import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import BrandsGrid from "../components/BrandsGrid";
import Register from "../components/Register";
import Login from "../components/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductDetails from "../components/ProductDetails";
import CategoryDetails from "../components/CategoryDetails";
import Cart from "../components/Cart";


export default createBrowserRouter([
  
  {path: "/", element:<MainLayouts></MainLayouts>
  // ,ErrorBoundary:NOTFOUND
    ,children:[
        {path: "/", 
          element:<ProtectedRoute><Home></Home></ProtectedRoute> 
        
        }
        ,{path: "/Products",
           element:
           <ProtectedRoute><Products></Products></ProtectedRoute>
          }
          ,
        {path: "/categories",
           element:
           <ProtectedRoute> <Categories></Categories></ProtectedRoute>
       }
        ,
        {path: "/brands",
           element:
           <ProtectedRoute><BrandsGrid></BrandsGrid></ProtectedRoute>
        }
       ,  {path: "/cart",
           element:
           <ProtectedRoute><Cart></Cart></ProtectedRoute>
        }
        , {path: "/productDetails/:id/:cat",
           element:
           <ProtectedRoute><ProductDetails></ProductDetails></ProtectedRoute>
        }
         , {path: "/CategoryDetails/:id",
           element:
           <ProtectedRoute><CategoryDetails></CategoryDetails></ProtectedRoute>
        }
      //   CategoryDetails
        // productDetails
        ,{path: "/register",
           element:
        <Register></Register>}
         ,{path: "/login",
           element:
        <Login></Login>}



      ],
  },
]);