export default function Home() {
  const handlePayment = () => {
    alert('Replace with Razorpay Key')
  }

  return (
    <div>
      <section id="home" className="min-h-screen px-6 py-20 bg-[#fff8ea]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-[#b8792f] font-semibold mb-4">
              Premium Spice Blend
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 text-[#6e4416]">
              Instant <br /> Biriyani Masala
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Enjoy authentic restaurant-style biriyani at home with Tamooh Instant Biriyani Masala.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button
                onClick={handlePayment}
                className="bg-[#b8792f] text-white px-10 py-4 rounded-full text-lg font-semibold"
              >
                Buy Now ₹199
              </button>

              <a
                href="https://wa.me/918263930362"
                target="_blank"
                className="border border-[#b8792f] text-[#b8792f] px-10 py-4 rounded-full text-lg font-semibold"
              >
                WhatsApp Order
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              alt="Biriyani"
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
