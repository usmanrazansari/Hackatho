import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductFilter from '../components/ProductFilter'
import ProductGrid from '../components/ProductGrid'
import Image from 'next/image'

export default function Products() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters - Mobile Toggle */}
        <button className="md:hidden w-full bg-white py-2 rounded-lg shadow-sm text-center">
          Show Filters
        </button>

        {/* Filters - Sidebar */}
        <div className="hidden md:block md:w-64">
          <ProductFilter />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <select className="w-full sm:w-auto border p-2 rounded-lg bg-white">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
          <ProductGrid />
        </div>
      </div>

      {/* Centered Text Section for Email Subscription */}
      <div className="text-center my-8 py-8">
        <p className="text-4xl font-bold py-8">Subscribe to our newsletter for the latest updates!</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-2 p-2 border rounded"
        />
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
      </div>
      <div className="text-center my-8 py-8">
        <p className="text-4xl font-bold py-8">Follow Products And Discounts On Instagram</p>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="relative w-full h-64">
          
          <Image
            src="/images/chair4.png" 
            alt="Additional Image 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/images/chair7.png" // Replace with your image path
            alt="Additional Image 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/images/chair5.png" // Replace with your image path
            alt="Additional Image 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/images/chair6.png" // Replace with your image path
            alt="Additional Image 4"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/images/chair1.png" // Replace with your image path
            alt="Additional Image 5"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/images/chair.png" // Replace with your image path
            alt="Additional Image 6"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}