import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-[#f3e5d0] shadow-sm">

        <div className="flex items-center justify-between px-5 py-4">

          {/* Logo */}
          <h1 className="text-2xl font-black tracking-wide text-[#b8792f]">
            TAMOOH
          </h1>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Premium Cart */}
            <button className="relative bg-[#b8792f] text-white p-3 rounded-full shadow-lg">

              <ShoppingBag size={20} strokeWidth={2.5} />

              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                1
              </span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="bg-black text-white p-3 rounded-full shadow-lg"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Space */}
      <div className="h-[78px]"></div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Top */}
        <div className="flex items-center justify-between p-5 border-b border-[#f3e5d0]">

          <h2 className="text-2xl font-black text-[#b8792f]">
            TAMOOH
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="bg-black text-white p-2 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-7 p-6 text-lg font-semibold text-gray-700">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#b8792f] transition"
          >
            Home
          </a>

          <a
            href="#product"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#b8792f] transition"
          >
            Product
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#b8792f] transition"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#b8792f] transition"
          >
            Contact
          </a>

          {/* Sidebar Cart */}
          <button className="mt-5 bg-[#b8792f] text-white py-4 rounded-full flex items-center justify-center gap-3 shadow-lg">

            <ShoppingBag size={20} />

            Cart (1)
          </button>
        </nav>
      </div>
    </>
  )
            }
