import { useEffect, useState } from "react";
 import heroS1 from '../assets/images/Home_files/hero1.jpeg'
 import heroS2 from '../assets/images/Home_files/hero2.jpeg'
 import heroS3 from '../assets/images/Home_files/hero3.jpeg'
import type { SlideType } from "../Types/types";


export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides:SlideType[] = [
    {
      title: "Cokoladni Kolutici Lasta",
      description: "Only on this week... Don't miss",
      image: heroS2,
      price: "500 EGP"
    },
    {
      title: "Fresh Summer Deals",
      description: "Get up to 50% off on all fruits",
      image:heroS1,
      price: "250 EGP"
    },
    {
      title: "Healthy Breakfast",
      description: "Start your day with energy",
      image: heroS3,
      price: "120 EGP"
    }
  ];

const bgColors: { [key: number]: string } = {
  0: "#f3e8d6", // اللون الأول (Default)
  1: "#d6ebee", // اللون الثاني
  2: "#eae6da"  // اللون الثالث
};

useEffect(()=>{
  const intervel = setInterval(()=>{
  setCurrentSlide((perv)=> perv === slides.length -1 ?0 : perv + 1 )
  },3000)

  return ()=>{clearInterval(intervel)}
},[slides.length])
// جوه الـ JSX


  return (
    <section style={{ backgroundColor: bgColors[currentSlide] || "" }}  className="  relative w-full max-w-7xl mx-auto mt-28  rounded-3xl overflow-hidden flex items-center p-12 min-h-[450px]">
     
      <div className="w-1/2 z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-700 font-medium">Exclusive Offer</span>
          <span className="bg-[#e74c3c] text-white text-xs px-2 py-1 rounded-full font-bold">20%</span>
        </div>
        
        <h1 className="text-6xl font-bold text-slate-900 mb-4 leading-[1.1]">
          {slides[currentSlide].title}
        </h1>
        
        <p className="text-gray-500 text-lg mb-6">
          {slides[currentSlide].description}
        </p>
        
        <div className="text-2xl mb-8">
          <span className="text-gray-500">Start From </span>
          <span className="text-[#e74c3c] font-bold">{slides[currentSlide].price}</span>
        </div>
        
        <button className="bg-[#0aad0a] hover:bg-[#088f08] text-white px-8 py-3 rounded-xl font-semibold transition-all">
          Shop Deals Now
        </button>
      </div>

      {/* Image Side */}
      <div className="absolute right-0     flex justify-end items-center">
        <img 
          key={currentSlide} // عشان الـ Animation يشتغل لما الصورة تتغير
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].title} 
          className="h-[90%] object-contain animate-fade-in" 
        />
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-slate-800 w-6" : "bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}