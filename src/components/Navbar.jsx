export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-3xl font-bold text-[#b8792f]">TAMOOH</h1>

        <nav className="hidden md:flex gap-8 font-semibold">
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
