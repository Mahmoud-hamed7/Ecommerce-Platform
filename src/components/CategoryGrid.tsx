import axios from "axios";

import type { ICategory  } from "../Types/types";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function CategoryGrid() {


  const [ApiGate, setApiGate] = useState<ICategory[]>([])
function handleGategories() {
  
   axios.get<{ data: ICategory[] }>('https://ecommerce.routemisr.com/api/v1/categories').then(({ data }) => {
        // console.log(data.data);

        setApiGate(data.data);
      })
}


useEffect(()=>{
 handleGategories()
},[])
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-[#0aad0a] mb-8">
        All Categories
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
        {ApiGate.map((category) => (
          <div
            key={category._id}
            className="flex flex-col gap-3 group cursor-pointer"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-md bg-[#f8f9fa] flex items-center justify-center border border-gray-100 transition-all group-hover:border-[#0aad0a] group-hover:shadow-md">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Link to={`/CategoryDetails/${category._id}`}>                <button className="flex items-center gap-2 bg-[#0aad0a] hover:bg-[#088f08] text-white py-2 px-5 rounded-lg font-medium transition-all transform scale-90 group-hover:scale-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-eye-icon lucide-eye"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Show
                </button>
                </Link>

              </div>
            </div>

            <span className="text-gray-800 font-medium text-sm text-center transition-colors group-hover:text-[#0aad0a]">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
