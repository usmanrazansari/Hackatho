import Image from 'next/image';
import Link from 'next/link';

export default function ProductGrid() {
    const products = [
      { id: 1, name: 'Modern Sofa', price: 999, image: '/images/modernsofa.jpg', sale: true },
      { id: 2, name: 'Dining Table', price: 599, image: '/images/diningtable.jpg', sale: false },
      { id: 3, name: 'Bed Frame', price: 799, image: '/images/bedframe.jpg', sale: false },
      { id: 4, name: 'Office Chair', price: 299, image: '/images/officechair.jpg', sale: true },
      { id: 5, name: '2 Person Sofa', price: 999, image: '/images/Product Card.png', sale: true },
      { id: 6, name: 'Modern Chair', price: 599, image: '/images/Product Card (1).png', sale: false },
      { id: 7, name: 'Old school Chair', price: 799, image: '/images/Product Card (2).png', sale: false },
      { id: 8, name: 'Stylish Chair', price: 299, image: '/images/chair.png', sale: true },
      { id: 9, name: 'Modern Sofa', price: 999, image: '/images/chair1.png', sale: true },
      { id: 10, name: 'Dining Table', price: 599, image: '/images/chair2.png', sale: false },
      { id: 11, name: 'Bed Frame', price: 799, image: '/images/chair3.png', sale: false },
      { id: 12, name: 'Office Chair', price: 299, image: '/images/chair4.png', sale: true },
      
    ]
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="group cursor-pointer bg-white rounded-lg p-2 transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 
                         (max-width: 768px) 33vw,
                         33vw"
                />
                {product.sale && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
              </div>
              <div className="mt-3 px-1">
                <h3 className="text-sm sm:text-base font-bold group-hover:text-[#2B9DC3] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
}