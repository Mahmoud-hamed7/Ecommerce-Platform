import { useQuery } from '@tanstack/react-query'

import axios from 'axios'

export default function BrandsGrid() {
 
  function  getApiBrands()  {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

 

const  res =  useQuery({queryKey:['getbrands'],queryFn:getApiBrands})

console.log(res?.data?.data.data,res.error);

  return (
    <section className="w-full max-w-7xl mt-28 mx-auto py-10 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {res?.data?.data.data.map((brand:any) => (
          <div key={brand._id} className="group cursor-pointer relative overflow-hidden rounded-md border border-gray-300 bg-white aspect-3/2 flex items-center justify-center p-4 transition-all hover:border-[#0aad0a] hover:shadow-md">
            
            <img 
              src={brand.image} 
              alt="brand" 
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
            />

            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-[#0aad0a] text-white text-xs py-2 px-5 rounded-md font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Show
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}