import Image from 'next/image';
import Link from 'next/link';

export default function Categories() {
    const categories = [
      { name: 'Living Room', image: '/images/livingroom.jpg' },
      { name: 'Bedroom', image: '/images/bedroom.jpg' },
      { name: 'Dining', image: '/images/dining.jpg' },
      { name: 'Office', image: '/images/office.jpg' },
    ]
  
    return (
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category) => (
              <Link href={`/shop?category=${category.name.toLowerCase()}`} key={category.name}>
                <div className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, 
                             (max-width: 768px) 50vw, 
                             (max-width: 1024px) 25vw,
                             25vw"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mt-2 group-hover:text-[#2B9DC3] transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
}