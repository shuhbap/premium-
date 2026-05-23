import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-[#f3e5d0]">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">

          {/* Logo */}
          <h1 className="text-2xl sm:text-3xl font-black tracking-wide text-[#b8792f]">
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

            {/* Premium Cart */}
            <button className="relative bg-[#b8792f] text-white p-3 rounded-full shadow-lg hover:scale-105 transition duration-300">

              <ShoppingBag size={20} strokeWidth={2.5} />

              {/* Count */}
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                1
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden bg-black text-white p-3 rounded-full shadow-lg"
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[80px]"></div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Top */}
        <div className="flex items-center justify-between px-6 py-5 border-b">

          <h2 className="text-2xl font-bold text-[#b8792f]">
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
        <nav className="flex flex-col p-6 gap-7 text-lg font-semibold text-gray-700">

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

          {/* Mobile Cart Button */}
          <button className="mt-6 bg-[#b8792f] text-white py-4 rounded-full flex items-center justify-center gap-3 shadow-lg">

            <ShoppingBag size={20} />

            Cart (1)
          </button>
        </nav>
      </div>
    </>
  )
      }
