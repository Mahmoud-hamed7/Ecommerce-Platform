import hImge from '../assets/images/featuresec.svg'


export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "10 minute grocery now",
      desc: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
      title: "Best Prices & Offers",
      desc: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.",
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
      title: "Wide Assortment",
      desc: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
      title: "Easy Returns",
      desc: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-8">
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
          <h1 className="text-3xl font-bold text-slate-800">
            One Stop Grocery Shop
          </h1>
          <p className="text-gray-500 text-base max-w-md leading-relaxed">
            Shopping for your furry friend? Find food, treats, and more in one easy spot.
          </p>
          <button className="mt-2 bg-black text-white px-6 py-2.5 rounded-md font-medium hover:bg-gray-800 transition-colors">
            Get Discount on Share
          </button>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-end">
          <img 
            src={hImge} 
            alt="Grocery illustration" 
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start gap-3">
            <div className="text-[#0aad0a] mb-2">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-slate-800 text-[17px]">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}