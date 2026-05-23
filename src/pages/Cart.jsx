import { useState } from "react"
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight
} from "lucide-react"

import productImage from "../assets/product.jpg"

export default function Cart() {

  const [quantity, setQuantity] = useState(1)

  const increaseQty = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const price = 199
  const total = price * quantity

  return (
    <div className="min-h-screen bg-[#fffdf9] px-4 py-6">

      {/* TOP HEADER */}
      <div className="max-w-6xl mx-auto">

        <div className="bg-white border border-[#f1e2c8] rounded-[30px] p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-[#b89b63] font-medium tracking-widest uppercase">
                Premium Checkout
              </p>

              <h1 className="text-3xl font-black text-[#9f6a1d] mt-1">
                Your Cart
              </h1>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f5dfb2] to-[#c8923d] flex items-center justify-center shadow-lg">
              <ShoppingBag className="text-white" size={24} />
            </div>
          </div>
        </div>

        {/* CART SECTION */}
        <div className="grid lg:grid-cols-[1.4fr_.8fr] gap-6 mt-6">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {/* PRODUCT CARD */}
            <div className="bg-white border border-[#f3e6cf] rounded-[30px] p-5 shadow-sm">

              <div className="flex gap-5 flex-col sm:flex-row">

                {/* IMAGE */}
                <div className="w-full sm:w-[180px] h-[180px] rounded-3xl overflow-hidden bg-[#fff7e8]">

                  <img
                    src={productImage}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1">

                  <div className="flex items-start justify-between">

                    <div>
                      <p className="text-xs tracking-[4px] uppercase text-[#c6a46a] font-semibold">
                        Tamooh Spices
                      </p>

                      <h2 className="text-2xl font-black text-[#9f6a1d] mt-1">
                        Instant Biriyani Masala
                      </h2>

                      <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-md">
                        Premium royal spice blend crafted for rich aroma,
                        authentic taste and luxury biriyani experience.
                      </p>
                    </div>

                    {/* DELETE */}
                    <button className="w-11 h-11 rounded-2xl border border-red-100 text-red-500 hover:bg-red-50 transition flex items-center justify-center">
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* BOTTOM */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-6">

                    {/* QUANTITY */}
                    <div className="flex items-center gap-3">

                      <button
                        onClick={decreaseQty}
                        className="w-11 h-11 rounded-2xl border border-[#ecd6ad] bg-[#fffaf1] flex items-center justify-center hover:bg-[#fdf3dd] transition"
                      >
                        <Minus size={18} className="text-[#9f6a1d]" />
                      </button>

                      <div className="w-14 h-11 rounded-2xl bg-[#fff7e8] border border-[#f1dfbd] flex items-center justify-center font-bold text-[#9f6a1d] text-lg">
                        {quantity}
                      </div>

                      <button
                        onClick={increaseQty}
                        className="w-11 h-11 rounded-2xl border border-[#ecd6ad] bg-[#fffaf1] flex items-center justify-center hover:bg-[#fdf3dd] transition"
                      >
                        <Plus size={18} className="text-[#9f6a1d]" />
                      </button>
                    </div>

                    {/* PRICE */}
                    <div className="text-right">

                      <p className="text-sm text-gray-400">
                        Price
                      </p>

                      <h3 className="text-3xl font-black text-[#9f6a1d]">
                        ₹{total}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-white border border-[#f3e6cf] rounded-[30px] p-6 shadow-sm sticky top-6">

              <p className="text-sm tracking-[4px] uppercase text-[#c6a46a] font-semibold">
                Payment
              </p>

              <h2 className="text-3xl font-black text-[#9f6a1d] mt-2">
                Order Summary
              </h2>

              {/* SUMMARY */}
              <div className="mt-8 space-y-5">

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Product Price
                  </span>

                  <span className="font-semibold text-[#9f6a1d]">
                    ₹{price}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Quantity
                  </span>

                  <span className="font-semibold text-[#9f6a1d]">
                    {quantity}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="font-semibold text-green-600">
                    Free
                  </span>
                </div>

                <div className="border-t border-dashed border-[#ead7b3] pt-5 flex items-center justify-between">

                  <span className="text-lg font-semibold text-gray-700">
                    Total
                  </span>

                  <span className="text-4xl font-black text-[#9f6a1d]">
                    ₹{total}
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <button className="mt-8 w-full bg-gradient-to-r from-[#d7a24f] to-[#9f6a1d] hover:scale-[1.02] transition-all duration-300 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#d7a24f]/30">

                Proceed To Checkout

                <ArrowRight size={20} />
              </button>

              {/* TRUST */}
              <div className="mt-5 bg-[#fff8ea] border border-[#f1dfbd] rounded-2xl p-4 text-center">

                <p className="text-sm text-gray-500">
                  100% Secure Payment
                </p>

                <h3 className="text-[#b8792f] font-bold mt-1">
                  Premium Spice Experience
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
          }
