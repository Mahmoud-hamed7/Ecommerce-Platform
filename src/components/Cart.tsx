import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import type { ICartData } from "../Types/types";
// import type { ICategory } from "../Types/types";

export default function Cart() {
  const { getUserCart,updateCartDetails,deleteCartItem,clearCart } = useContext(CartContext);
  const [cartDetails, setCartDetails] = useState<ICartData | null>(null);
  async function getCartItem() {
    const response = await getUserCart();
    console.log(response.data);
    setCartDetails(response.data.data);
  }
   async function updateCart(id:string,count:number) {
    const response = await updateCartDetails(id,count);
    console.log(response.data);
    setCartDetails(response.data.data);
  }

     async function deleteCart(id:string) {
    const response = await deleteCartItem(id);
    console.log(response.data);
    setCartDetails(response.data.data);
  }

     async function ClearAllItem() {
    const response = await clearCart();
    console.log(response.data);
    setCartDetails(response.data.data);
  }
// updateCartDetails
  useEffect(() => {
    getCartItem();
  }, []);

  return (
    <>
    <div className=" mt-28 relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
     <h1 className= "  m-4 text-center fill-green-600 text-3xl "> shopping Cart </h1>
     {cartDetails && <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Product
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Qty
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Price
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {cartDetails?.products.map((item) => ()} */}
    
          {cartDetails?.products.map((product) => (
            <tr
              key={product.product.id}
              className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
            >
              <td className="p-4">
                <img
                  src={product.product.imageCover}
                  alt={product.product.title}
                  className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
                  width={80}
                  height={80}
                />{" "}
              </td>
              <td className="px-6 py-4 font-semibold text-heading">
                {product.product.title}
              </td>
              <td className="px-6 py-4">
                <form className="max-w-xs mx-auto">
                  <label htmlFor="counter-input-1" className="sr-only">
                    {product.count}:
                  </label>
                  <div className="relative flex items-center">
                    <button
                                        onClick={()=>updateCart(product.product.id,product.count-1)}

                      type="button"
                      id="decrement-button-1"
                      data-input-counter-decrement="counter-input-1"
                      className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6"
                    >
                      <svg
                        className="w-3 h-3 text-heading"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <span className="m-2">{product.count}</span>
                    <button
                    onClick={()=>updateCart(product.product.id,product.count+1)}
                      type="button"
                      id="increment-button-1"
                      data-input-counter-increment="counter-input-1"
                      className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6"
                    >
                      <svg
                        className="w-3 h-3 text-heading"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14m-7 7V5"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </td>
              <td className="px-6 py-4 font-semibold text-heading">
                {product.price}
              </td>
              <td className="px-6 py-4">
                <a
                onClick={()=>{deleteCart(product.product.id)}}
                  href="#"
                  className="font-medium text-fg-danger hover:underline"
                >
                  Remove
                </a>
              </td>
               
               {/* <a
                onClick={()=>{ClearAllItem()}}
                  href="#"
                  className="font-medium text-fg-danger hover:underline"
                >
                  clear
                </a> */}
            </tr>
            

          
          ))}

        </tbody>
      </table>}
     

    </div>
    </>
  );
}
