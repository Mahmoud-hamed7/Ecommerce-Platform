import { useQuery } from '@tanstack/react-query'
import b1 from '../assets/images/brands/imgi_10_1678286465856.png'
import b2 from '../assets/images/brands/imgi_11_1678286421517.png'
import b3 from '../assets/images/brands/imgi_12_1678286391415.png'
import b4 from '../assets/images/brands/imgi_13_1678286366797.png'
import b5 from '../assets/images/brands/imgi_14_1678286321029.png'
import b6 from '../assets/images/brands/imgi_15_1678286281363.png'
import b7 from '../assets/images/brands/imgi_19_1678286142113.png'
import b8 from '../assets/images/brands/imgi_23_1678285837630.png'
import axios from 'axios'

export default function BrandsGrid() {
  const brands = [
    { id: 1, image: b1 },
    { id: 2, image: b2 },
    { id: 3, image: b3 },
    { id: 4, image: b4 },
    { id: 5, image: b5 },
    { id: 6, image: b6 },
    { id: 7, image: b7 },
    { id: 8, image: b8 },
  ];

  function  getApiBrands()  {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

 

const  res =  useQuery({queryKey:['getbrands'],queryFn:getApiBrands})

console.log(res?.data?.data.data,res.error);

  return (
    <section className="w-full max-w-7xl mt-28 mx-auto py-10 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {res?.data?.data.data.map((brand:any) => (
          <div key={brand._id} className="group cursor-pointer relative overflow-hidden rounded-md border border-gray-300 bg-white aspect-[3/2] flex items-center justify-center p-4 transition-all hover:border-[#0aad0a] hover:shadow-md">
            
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