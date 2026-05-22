import axios from "axios";
import { createContext } from "react";

export const CartContext = createContext<any>(null);

export default function CartContextProvider(props: any) {
  let headers = { token: localStorage.getItem("userToken") };
  function getUserCart() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", { headers })
      .then((res) => res)
      .catch((err) => err);
  }
  function addCartProduct(id:string) {
       return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId:id},{headers}).then((res) => res)
      .catch((err) => err);

  }
    function updateCartDetails(id:string,count:string) {
       return  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count},{headers}).then((res) => res)
      .catch((err) => err);

  }
  function deleteCartItem(id:string) {
       return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers}).then((res) => res)
      .catch((err) => err);

  }

  function clearCart() {
       return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers}).then((res) => res)
      .catch((err) => err);

  }


  return (
    <CartContext.Provider value={{ getUserCart,addCartProduct,updateCartDetails,deleteCartItem,clearCart }}>
      return {props.children}
    </CartContext.Provider>
  );
}
