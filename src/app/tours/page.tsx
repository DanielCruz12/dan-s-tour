import Link from "next/link";
import Image from "next/image";
//! MOSTRAR TODOS LOS TOURS
export default function Packages() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4">
      <h1 className="text-xl font-semibold mb-4">Our Travel Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Link key={pkg.id} href={`/tours/${pkg.id}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
                <p className="text-gray-600 mb-2">{pkg.duration}</p>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-primary font-semibold">{pkg.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const packages = [
  {
    id: 1,
    name: "Tropical Paradise Getaway",
    description: "Experience the beauty of pristine beaches and lush forests.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "7 days",
    price: "From $1,299",
  },
  {
    id: 2,
    name: "European City Tour",
    description:
      "Explore the rich history and culture of Europe's iconic cities.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "10 days",
    price: "From $1,799",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    description: "Escape to the serenity of majestic mountains and fresh air.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "5 days",
    price: "From $999",
  },
  {
    id: 4,
    name: "Cultural Immersion Experience",
    description:
      "Dive deep into local traditions and customs of ancient civilizations.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "8 days",
    price: "From $1,499",
  },
  {
    id: 5,
    name: "Island Hopping Adventure",
    description: "Discover the unique charm of multiple tropical islands.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "9 days",
    price: "From $1,699",
  },
  {
    id: 6,
    name: "Safari Expedition",
    description: "Witness the majesty of wildlife in their natural habitats.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "6 days",
    price: "From $2,299",
  },
];
