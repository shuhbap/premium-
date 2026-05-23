import { useState } from "react"
import {
  Menu,
  X,
  ShoppingBag,
  Home,
  Package,
  Info,
  Phone
} from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const openMenu = () => setMenuOpen(true)

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="mx-4 mt-4 backdrop-blur-xl bg-white/70 border border-[#f3e5d0] rounded-3xl shadow-lg">

          <div className="flex items-center justify-between px-5 py-4">

            {/* BRAND */}
            <div>
              <h1 className="text-2xl font-black tracking-wide text-[#b8792f]">
                TAMOOH
              </h1>
              <p className="text-[11px] tracking-[3px] text-gray-400 uppercase">
                Premium Spices
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">

              {/* CART - PREMIUM BORDER STYLE */}
              <button className="relative group p-3 rounded-2xl border border-[#c79243]/40 bg-white/40 backdrop-blur-xl hover:border-[#c79243] transition">

                <ShoppingBag
                  size={20}
                  className="text-[#9f6a1d] group-hover:scale-110 transition"
                />

                <span className="absolute -top-1 -right-1 bg-[#9f6a1d] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
              </button>

              {/* HAMBURGER */}
              <button
                onClick={openMenu}
                className="p-3 rounded-2xl bg-black text-white shadow-md active:scale-95 transition"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[110px]" />

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="relative bg-gradient-to-br from-[#d8a04d] to-[#9f6a1d] p-6 text-white">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-2xl font-black tracking-wide">
                TAMOOH
              </h2>
              <p className="text-xs text-yellow-100 mt-1">
                Premium Spice Experience
              </p>
            </div>

            {/* CLOSE BUTTON FIXED */}
            <button
              onClick={closeMenu}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition"
            >
              <X size={20} />
            </button>
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-300 opacity-20 blur-3xl rounded-full" />
        </div>

        {/* NAV ITEMS (MINIMAL PREMIUM STYLE) */}
        <nav className="p-6 space-y-4">

          {[
            { icon: Home, label: "Home", href: "#home" },
            { icon: Package, label: "Product", href: "#product" },
            { icon: Info, label: "About", href: "#about" },
            { icon: Phone, label: "Contact", href: "#contact" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#fff8ea] hover:bg-[#f3e3c4] transition group"
            >
              <item.icon
                size={20}
                className="text-[#b8792f] group-hover:scale-110 transition"
              />

              {/* TEXT ONLY (clean premium) */}
              <span className="font-medium text-gray-700">
                {item.label}
              </span>
            </a>
          ))}

          {/* PREMIUM CART BUTTON */}
          <button className="mt-6 w-full bg-gradient-to-r from-[#c79243] to-[#9f6a1d] text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg active:scale-95">
            <ShoppingBag size={20} />
            <span className="font-semibold">Cart (1)</span>
          </button>
        </nav>

        {/* FOOTER */}
        <div className="absolute bottom-5 left-0 w-full px-6">
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
