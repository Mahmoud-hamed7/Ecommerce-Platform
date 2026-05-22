
import { useEffect, useRef } from 'react'
import p1 from '../assets/images/Home_files/p1.png'
import p2 from '../assets/images/Home_files/p2.png'
import p3 from '../assets/images/Home_files/p3.png'


import p4 from '../assets/images/Home_files/p4.png'
import p5 from '../assets/images/Home_files/p5.png'
import p6 from '../assets/images/Home_files/p6.png'
import p7 from '../assets/images/Home_files/p7.png'
import type { ProductType } from '../Types/types'



export default function PopularCategories() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const categories:ProductType[] = [
    { id: 1, name: "Home", image: p1 },
    { id: 2, name: "Home", image: p1 },
    { id: 3, name: "Books", image: p2 },
    { id: 4, name: "Books", image: p2 },
    { id: 5, name: "Beauty & Health", image: p3 },
    { id: 6, name: "Beauty & Health", image: p3 },
    { id: 7, name: "Mobiles", image: p4 },
    { id: 8, name: "Mobiles", image: p4 },
    { id: 9, name: "Electronics", image: p5 },
    { id: 10, name: "Men's Fashion", image: p7 },
    { id: 11, name: "Music", image: p6 },
    { id: 12, name: "Men's Fashion", image: p7 },
    { id: 13, name: "Men's Fashion", image: p7 },
    { id: 14, name: "Men's Fashion", image: p7 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && !isDown.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 180, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="w-full max-w-7xl   mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-[#0aad0a] mb-6">
        Shop Popular Categories
      </h2>

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex no-scrollbar items-center gap-4 overflow-x-auto pb-6 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="shrink-0 flex flex-col gap-3 w-40 group pointer-events-none"
          >
            <div className="w-full h-45 overflow-hidden rounded-md bg-[#f8f9fa] flex items-center justify-center">
              <img
                src={category.image}
                alt={category.name}
                draggable="false"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <span className="text-gray-800 font-medium text-sm text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}