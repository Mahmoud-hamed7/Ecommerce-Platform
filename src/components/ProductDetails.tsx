import { useState, useEffect, useContext } from "react";

import axios from "axios";
import { useParams } from "react-router";
import type { IProduct, IProductsResponse } from "../Types/types";
import ProductsSection from "./ProductsSectionProps";
import { CartContext } from "../contexts/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { id, cat } = useParams();
  //  console.log(id);
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

  const [currentImage, setCurrentImage] = useState(0);

  const [ApiProductDetails, setApiProductDetails] = useState<IProduct | null>(
    null,
  );
  const [ApiProductRelated, setApiProductRelated] = useState<IProduct[]>([]);
  function getProductDetails(id: any) {
    axios
      .get<{ data: IProduct }>(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      )
      .then(({ data }) => {
        // console.log(data.data);

        setApiProductDetails(data.data);
      })

      .catch(() => {});
  }

  function getRelatedProduct(cat: any) {
    axios
      .get<IProductsResponse>(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        // console.log(data.data);
        let AllData = data.data;
        const filterData = AllData.filter(
          (product) => product.category._id == cat,
        );

        setApiProductRelated(filterData);
      })

      .catch(() => {});
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === (ApiProductDetails?.images?.length ?? 1) - 1 ? 0 : prev + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [ApiProductDetails?.images.length]);

  useEffect(() => {
    getProductDetails(id);
    getRelatedProduct(cat);
  }, [id, cat]);

  return (
    <>
      <section className=" mt-28 w-full max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="w-full bg-[#f8f9fa] rounded-md overflow-hidden aspect-4/5 border border-gray-100 flex items-center justify-center p-4">
              <img
                src={ApiProductDetails?.images[currentImage]}
                alt={ApiProductDetails?.id}
                className="w-full h-full object-contain transition-opacity duration-500"
              />
            </div>
            <div className="flex items-center gap-4 justify-start">
              {ApiProductDetails?.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-20 cursor-pointer border-2 rounded-md overflow-hidden bg-[#f8f9fa] p-1 transition-all ${
                    currentImage === index
                      ? "border-blue-500"
                      : "border-gray-200 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-semibold text-slate-800">
                {ApiProductDetails?.title}
              </h1>
              <button className="text-red-500 hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-1">
              {ApiProductDetails?.description}
            </p>

            <span className="text-[#0aad0a] text-sm font-medium mt-1">
              {ApiProductDetails?.category.name}
            </span>

            <div className="flex items-center justify-between mt-2">
              <span className="text-2xl font-bold text-slate-800">
                {ApiProductDetails?.price}EGP
              </span>
              <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                <span className="text-yellow-400 text-lg">★</span>
                {ApiProductDetails?.ratingsAverage}
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex items-center justify-between text-slate-700 font-medium">
              <span>{ApiProductDetails?.brand.slug}</span>
              <span className="text-xl font-light tracking-wide">
                {ApiProductDetails?.brand.name}
              </span>
            </div>

            <button
              onClick={() => {
                if (ApiProductDetails?.id) {
                  addCart(ApiProductDetails.id);
                }
              }}
              className="w-full bg-[#0aad0a] hover:bg-[#088f08] text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
            >
              {currentId === ApiProductDetails?.id && Loading ? (
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
        </div>
      </section>

      <ProductsSection title="Related Products" products={ApiProductRelated} />
    </>
  );
}
