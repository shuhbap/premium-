import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-black tracking-wide text-[#b8792f]">
          TAMOOH
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
          <a
            href="#home"
            className="hover:text-[#b8792f] transition"
          >
            Home
          </a>

          <a
            href="#product"
            className="hover:text-[#b8792f] transition"
          >
            Product
          </a>

          <a
            href="#about"
            className="hover:text-[#b8792f] transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-[#b8792f] transition"
          >
            Contact
          </a>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* Cart Button */}
          <button className="relative bg-[#b8792f] text-white p-3 rounded-full hover:scale-105 transition">

            <ShoppingCart size={22} />

            {/* Cart Count */}
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden bg-black text-white p-3 rounded-full"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">

          <nav className="flex flex-col p-6 gap-5 font-semibold text-gray-700">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#b8792f]"
            >
              Home
            </a>

            <a
              href="#product"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#b8792f]"
            >
              Product
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#b8792f]"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#b8792f]"
            >
              Contact
            </a>

            {/* Mobile Cart */}
            <button className="bg-[#b8792f] text-white py-3 rounded-full flex items-center justify-center gap-3 mt-4">

              <ShoppingCart size={20} />

              Cart (1)
            </button>
          </nav>
        </div>
      )}
    </header>
  )
          }
