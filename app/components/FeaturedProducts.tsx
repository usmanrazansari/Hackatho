import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProducts() {
    const products = [
      { id: 1, name: 'Modern Sofa', price: 999, image: '/images/modernsofa.jpg' },
      { id: 2, name: 'Dining Table', price: 599, image: '/images/diningtable.jpg' },
      { id: 3, name: 'Bed Frame', price: 799, image: '/images/bedframe.jpg' },
      { id: 4, name: 'Office Chair', price: 299, image: '/images/officechair.jpg' },
    ]
  
    return (
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Featured Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, 
                             (max-width: 768px) 50vw, 
                             (max-width: 1024px) 25vw,
                             25vw"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-bold group-hover:text-[#2B9DC3] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
}