import { useState } from "react"
import {
  Menu,
  X,
  ShoppingBag
} from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const openMenu = () => setMenuOpen(true)

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="mx-4 mt-4 backdrop-blur-xl bg-white/70 border border-[#f3e5d0] rounded-3xl shadow-lg">

          <div className="flex items-center justify-between px-5 py-3">

            {/* LOGO + BRAND */}
            <div className="flex items-center gap-3">

              {/* LOGO IMAGE */}
              <img
                import logo from "../assets/logo.jpg"
                alt="Tamooh Logo"
                className="w-10 h-10 object-contain rounded-xl"
              />

              <div>
                <h1 className="text-xl font-black tracking-wide text-[#b8792f] leading-tight">
                  TAMOOH
                </h1>
                <p className="text-[10px] tracking-[3px] text-gray-400 uppercase">
                  Premium Spices
                </p>
              </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">

              {/* CART (minimal premium) */}
              <button className="relative p-2.5 rounded-2xl border border-[#c79243]/40 bg-white/40 backdrop-blur-xl hover:border-[#c79243] transition">

                <ShoppingBag size={18} className="text-[#9f6a1d]" />

                <span className="absolute -top-1 -right-1 bg-[#9f6a1d] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
              </button>

              {/* SMALL HAMBURGER (same color) */}
              <button
                onClick={openMenu}
                className="p-2 rounded-xl border border-[#b8792f]/40 text-[#b8792f] hover:bg-[#b8792f]/10 transition"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[100px]" />

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="bg-gradient-to-br from-[#d8a04d] to-[#9f6a1d] p-6 text-white">

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-wide">
              TAMOOH
            </h2>

            <button
              onClick={closeMenu}
              className="p-2 rounded-xl bg-white/20"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-xs text-yellow-100 mt-1">
            Premium Spice Experience
          </p>
        </div>

        {/* TEXT ONLY MENU (NO ICONS) */}
        <nav className="p-6 flex flex-col gap-5">

          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-700 hover:text-[#b8792f] transition"
          >
            Home
          </a>

          <a
            href="#product"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-700 hover:text-[#b8792f] transition"
          >
            Product
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-700 hover:text-[#b8792f] transition"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-700 hover:text-[#b8792f] transition"
          >
            Contact
          </a>
        </nav>

        {/* BOTTOM PREMIUM BOX */}
        <div className="absolute bottom-6 left-0 w-full px-6">
          <div className="bg-[#fff8ea] rounded-2xl p-4 text-center">
            <p className="text-xs text-gray-500">
              Premium Spice Experience
            </p>
            <h3 className="text-[#b8792f] font-bold mt-1">
              Tamooh Spices
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
