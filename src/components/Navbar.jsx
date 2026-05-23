import { useState, useEffect } from 'react'
import { Menu, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false)
    }

    if (menuOpen) {
      window.addEventListener('click', closeMenu)
    }

    return () => {
      window.removeEventListener('click', closeMenu)
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#f1e4cf] shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-black tracking-wide text-[#b8792f]">
          TAMOOH
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-gray-700">

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

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Premium Cart Icon */}
          <button className="relative bg-[#b8792f] text-white p-3 rounded-full hover:scale-105 transition duration-300 shadow-lg">

            <ShoppingBag size={21} strokeWidth={2.2} />

            {/* Cart Count */}
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              1
            </span>
          </button>

          {/* Hamburger */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen(!menuOpen)
            }}
            className="md:hidden bg-black text-white p-3 rounded-full shadow-lg"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-[#f1e4cf] shadow-2xl"
        >

          <nav className="flex flex-col px-6 py-8 gap-6 font-semibold text-gray-700">

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
          </nav>
        </div>
      )}
    </header>
  )
        }
