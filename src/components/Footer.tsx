import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="w-full mt-28 bg-[#f4f6f8] px-6 py-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-slate-800 mb-2">
          Get The FreshCart app
        </h2>
        <p className="text-slate-500 mb-6">
          We Will Send You A Link, Open It On Your Phone To Download The App..
        </p>

        <div className="g-yellow-300 flex flex-col sm:flex-row gap-4 mb-10 w-full ">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0aad0a] text-slate-700"
          />
          <button className="bg-[#0aad0a] hover:bg-[#088f08] transition-colors text-white px-8 py-2.5 rounded-md font-medium whitespace-nowrap">
            Share App Link
          </button>
        </div>

        <div className="border-t border-gray-300 py-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-slate-800 font-medium">Payment Partners</span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm text-slate-800">amazon<span className="text-[#ff9900]">pay</span></span>
              <span className="font-bold text-[10px] text-blue-600 leading-tight">AMERICAN<br/>EXPRESS</span>
              <div className="relative w-8 h-5 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-red-500 absolute left-0 opacity-80 mix-blend-multiply"></div>
                <div className="w-5 h-5 rounded-full bg-yellow-500 absolute right-0 opacity-80 mix-blend-multiply"></div>
                <span className="text-[6px] font-bold text-white z-10 italic mt-1">MasterCard</span>
              </div>
              <span className="font-bold text-sm text-blue-800 italic">PayPal</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-slate-800 font-medium">Get Deliveries With FreshCart</span>
            <div className="flex items-center gap-2">
              <button className="bg-black text-white px-3 py-1 rounded-md flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div className="text-left">
                  <div className="text-[8px] uppercase leading-none">GET IT ON</div>
                  <div className="text-xs font-semibold leading-none mt-0.5">Google Play</div>
                </div>
              </button>
              <button className="bg-black text-white px-3 py-1 rounded-md flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                <div className="text-left">
                  <div className="text-[8px] leading-none">Download on the</div>
                  <div className="text-xs font-semibold leading-none mt-0.5">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 py-6 text-slate-700 flex items-center">
          <p>
            © 2025 FreshCart All Rights Reserved By <span className="text-[#0aad0a] font-semibold">Mahmoud hamed </span>
          </p>
          <NavLink target="_blank"  to="https://github.com/sayedsafwe77/s1-react/tree/react-router-data-mode" className="ml-2 text-black hover:text-[#0aad0a] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}