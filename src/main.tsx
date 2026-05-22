import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserContextProvider from "./contexts/UserContext";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from "./contexts/CartContext";
import  { Toaster } from 'react-hot-toast';
 
 const query = new QueryClient({
  
 }) 

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={query}>
    <CartContextProvider>
  <UserContextProvider>
  <RouterProvider router={router} />
  <Toaster></Toaster>
  <ReactQueryDevtools/>
</UserContextProvider>
</CartContextProvider>
</QueryClientProvider>
);