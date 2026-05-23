import { useState } from 'react'
import {
  Menu,
  X,
  ShoppingBag,
  Home,
  Package,
  Info,
  Phone
} from 'lucide-react'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Premium Top Bar */}
      <header className="fixed top-0 left-0 w-full z-50">

        <div className="mx-4 mt-4 bg-white/90 backdrop-blur-2xl border border-[#f3e5d0] rounded-3xl shadow-xl">

          <div className="flex items-center justify-between px-5 py-4">

            {/* Brand */}
            <div>
              <h1 className="text-2xl font-black tracking-wide text-[#b8792f]">
                TAMOOH
              </h1>

              <p className="text-[11px] tracking-[3px] text-gray-400 uppercase">
                Premium Spices
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">

              {/* Premium Cart */}
              <button className="relative bg-gradient-to-br from-[#c79243] to-[#9f6a1d] text-white p-3 rounded-2xl shadow-lg active:scale-95 transition">

                <ShoppingBag size={20} strokeWidth={2.5} />

                {/* Count */}
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="bg-black text-white p-3 rounded-2xl shadow-lg active:scale-95 transition"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[110px]"></div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Premium Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white z-50 shadow-2xl transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Sidebar Top */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#d8a04d] to-[#9f6a1d] p-6 text-white">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-3xl font-black tracking-wide">
                TAMOOH
              </h2>

              <p className="text-sm text-yellow-100 mt-1">
                Instant Biriyani Masala
              </p>
            </div>

            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="bg-white/20 p-2 rounded-xl backdrop-blur-lg"
            >
              <X size={22} />
            </button>
          </div>

          {/* Glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-300 opacity-20 rounded-full blur-3xl"></div>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col p-6 gap-5">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 bg-[#fff8ea] hover:bg-[#f8ecd4] p-4 rounded-2xl transition"
          >
            <Home size={22} className="text-[#b8792f]" />

            <span className="font-semibold text-gray-700">
              Home
            </span>
          </a>

          <a
            href="#product"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 bg-[#fff8ea] hover:bg-[#f8ecd4] p-4 rounded-2xl transition"
          >
            <Package size={22} className="text-[#b8792f]" />

            <span className="font-semibold text-gray-700">
              Product
            </span>
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 bg-[#fff8ea] hover:bg-[#f8ecd4] p-4 rounded-2xl transition"
          >
            <Info size={22} className="text-[#b8792f]" />

            <span className="font-semibold text-gray-700">
              About
            </span>
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 bg-[#fff8ea] hover:bg-[#f8ecd4] p-4 rounded-2xl transition"
          >
            <Phone size={22} className="text-[#b8792f]" />

            <span className="font-semibold text-gray-700">
              Contact
            </span>
          </a>

          {/* Premium Cart */}
          <button className="mt-4 bg-gradient-to-r from-[#c79243] to-[#9f6a1d] text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition">

            <ShoppingBag size={22} />

            <span className="font-semibold text-lg">
              Cart (1)
            </span>
          </button>
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-5 left-0 w-full px-6">

          <div className="bg-[#fff8ea] rounded-2xl p-4 text-center">

            <p className="text-sm text-gray-500">
              Premium Spice Experience
            </p>

            <h3 className="text-[#b8792f] font-bold text-lg mt-1">
              Tamooh Spices
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
