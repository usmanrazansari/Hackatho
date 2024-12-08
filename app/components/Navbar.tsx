export default function Navbar() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#2B2845] text-white py-2 text-sm sm:text-base">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center">
            <span className="text-center">
              ✓ Free Shipping On All Orders Over $50
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <select className="bg-transparent border-none text-white">
              <option value="en">Eng</option>
            </select>
            <span className="hidden sm:inline">Faqs</span>
            <span className="hidden sm:inline">Need Help</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-[#2B9DC3] text-2xl sm:text-3xl">🛋️</span>
                <span className="font-bold text-lg sm:text-xl ml-2">
                  Comforty
                </span>
              </a>
            </div>

            {/* Main Menu - Desktop */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="/" className="hover:text-gray-600">
                Home
              </a>

              <a href="/product" className="hover:text-gray-600">
                Product
              </a>

              <a href="/about" className="hover:text-gray-600">
                About
              </a>
              <a href="/faq" className="hover:text-gray-600">
                FAQs
              </a>
              <a href="/contact" className="hover:text-gray-600">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-sm">Contact:</div>
                <div className="text-sm font-medium">(808) 555-0111</div>
              </div>
              <a href="/cart" className="flex items-center">
                <span className="hidden sm:inline mr-2">Cart</span>
                <span className="bg-[#2B9DC3] text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                  2
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Hidden by default */}
        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md hover:bg-gray-50">
              Home
            </a>

            <a
              href="/product"
              className="block px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Product
            </a>
            <a
              href="/pages"
              className="block px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Pages
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="/faq"
              className="block px-3 py-2 rounded-md hover:bg-gray-50"
            >
              FAQs
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
