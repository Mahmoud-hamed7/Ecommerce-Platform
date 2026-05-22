import type { IProduct } from "../Types/types";

import { Link } from "react-router";
import { ClipLoader } from "react-spinners";
import useProduct from "../hooks/useProduct";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import toast from "react-hot-toast";

export function ProductCard({ product }: { product: IProduct }) {
  const [currentId, setCurrentId] = useState("");
  const [Loading, setLoading] = useState(false);

  let { addCartProduct } = useContext(CartContext);
  async function addCart(id: string) {
    setCurrentId(id);
    setLoading(true);
    let res = await addCartProduct(id);
    if (res.data.status == "success") {
      setLoading(false);
      toast.success("added", {
        duration: 2000,
        position: "top-center",
        className: "mt-7",
      });
    } else {
      toast.error("Not added", {
        duration: 2000,
        position: "top-center",
        className: "mt-7",
      });
      setLoading(false);
    }
    console.log(res);
  }
  return (
    <div className="group cursor-pointer">
      <>
        <Link to={`/productDetails/${product.id}/${product.category._id}`}>
          <div className="relative overflow-hidden rounded-md border border-gray-100 bg-[#f8f9fa] mb-3 aspect-3/4 flex items-center justify-center p-4 transition-all hover:shadow-md hover:border-[#0aad0a]">
            <img
              src={product.imageCover}
              alt={product.title}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />

            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#0aad0a] hover:text-white transition-colors text-slate-700">
                <svg
                  onClick={() => console.log("Heart clicked")}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#0aad0a] hover:text-white transition-colors text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-1">
          <span className="text-[#0aad0a] text-xs font-medium">
            {product.category.name}
          </span>
          <h3 className="text-slate-800 font-bold text-sm truncate">
            {product.title.split(" ").splice(0, 2).join("")}
          </h3>
          <div className="flex items-center justify-between mt-1 mb-2">
            <span className="text-slate-900 font-semibold text-sm">
              {product.price} EGP
            </span>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-xs">★</span>
              <span className="text-gray-500 text-xs">
                {product.ratingsAverage}
              </span>
            </div>
          </div>

          <button
            onClick={() => addCart(product.id)}
            className="w-full bg-[#0aad0a] hover:bg-[#088f08] text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
          >
            {currentId === product.id && Loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-neutral-tertiary animate-spin fill-success"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Add To Cart"
            )}
            {/*
             */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </>
    </div>
  );
}

export default function RecentProducts({ HeadTitle }: { HeadTitle: string }) {
  let { data, error, isError, isLoading } = useProduct();

  // console.log(data?.data.data,isError,error,isFetched);

  // const [ApiRecentProduct, setApiRecentProduct] = useState<IProduct[]>([]);

  // function getRecentProduct() {
  //   axios
  //     .get<IProductsResponse>("https://ecommerce.routemisr.com/api/v1/products")
  //     .then(({ data }) => {
  //       console.log(data.data);
  //       setApiRecentProduct(data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // useEffect(() => {
  //   getRecentProduct();
  // }, []);

  if (isError) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <h1>{error?.message}</h1>
        </div>
      </>
    );
  }
  return (
    <>
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <ClipLoader color="#0aad0a" size={50} aria-label="Loading Spinner" />
        </div>
      ) : (
        <section className="w-full mt-11   max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-semibold text-[#0aad0a] mb-8">
            {HeadTitle}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {data?.map((product: IProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
