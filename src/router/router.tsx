import { createBrowserRouter, createHashRouter } from "react-router"; // تأكد إنها react-router-dom
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

export default createHashRouter(
  [
    {
      path: "/",
      element: <MainLayouts />,
      // ErrorBoundary: NOTFOUND,
      children: [
        {
          index: true, // يفضل استخدام index للصفحة الرئيسية بدل path: "/"
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "Products", // شيلنا الـ / عشان هو بيكمل على المسار الأب
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <BrandsGrid />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "productDetails/:id/:cat",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "CategoryDetails/:id",
          element: (
            <ProtectedRoute>
              <CategoryDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ],
  {
    // هنا المكان الصح للـ basename في Object منفصل
    basename: "/Ecommerce-Platform",
  }
);