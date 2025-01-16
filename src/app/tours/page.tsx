import Link from "next/link";
import Image from "next/image";
//! MOSTRAR TODOS LOS TOURS
export default function Packages() {
  return (
    <div className="container min-h-screen mx-auto px-4 pt-5">
      <h1 className="text-xl font-semibold mb-4">Our Travel Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Link key={pkg.id} href={`/tours/${pkg.id}`} className="group">
            <div className=" rounded-lg shadow-md overflow-hidden">
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
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    video: "https://www.youtube.com/watch?v=O8Dha2vJTqQ",
    duration: "7 days",
    price: "From $1,299",
  },
  {
    id: 2,
    name: "European City Tour",
    description:
      "Explore the rich history and culture of Europe's iconic cities.",
    image:
      "https://images.unsplash.com/photo-1564694202779-bc908c327862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    video: "https://www.youtube.com/watch?v=O8Dha2vJTqQ",
    duration: "10 days",
    price: "From $1,799",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    description: "Escape to the serenity of majestic mountains and fresh air.",
    image: "/tour.jpg",
    video: "https://www.youtube.com/watch?v=O8Dha2vJTqQ",
    duration: "5 days",
    price: "From $999",
  },
];
