import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users, Clock, Check } from "lucide-react";

export default function PackageDetail({ params }: { params: { id: string } }) {
  const packageId = parseInt(params.id);
  const packageDetails = packages.find((pkg) => pkg.id === packageId);

  if (!packageDetails) {
    return <div className="container mx-auto px-4 py-8">Package not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{packageDetails.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={packageDetails.image}
              alt={packageDetails.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">About this package</h2>
            <p className="text-gray-600 mb-4">{packageDetails.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar className="text-primary mr-2" />
                <span>{packageDetails.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-2" />
                <span>{packageDetails.destination}</span>
              </div>
              <div className="flex items-center">
                <Users className="text-primary mr-2" />
                <span>Max {packageDetails.groupSize} people</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-primary mr-2" />
                <span>{packageDetails.startTime} start time</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
            <ul className="space-y-4">
              {packageDetails.itinerary.map((item, index) => (
                <li key={index} className="flex">
                  <span className="font-semibold mr-2">{`Day ${index + 1}:`}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-semibold mb-4">Price Details</h2>
            <p className="text-3xl font-bold text-primary mb-4">
              {packageDetails.price}
            </p>
            <ul className="space-y-2 mb-6">
              {packageDetails.included.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/payment"
              className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const packages = [
  {
    id: 1,
    name: "Tropical Paradise Getaway",
    description:
      "Experience the beauty of pristine beaches and lush forests in this 7-day tropical adventure. Relax on white sandy beaches, explore vibrant coral reefs, and immerse yourself in the local culture.",
    image: "/placeholder.svg?height=400&width=600",
    price: "From $1,299",
    duration: "7 days",
    destination: "Bali, Indonesia",
    groupSize: 12,
    startTime: "9:00 AM",
    itinerary: [
      "Arrival and welcome dinner",
      "Beach relaxation and snorkeling",
      "Rainforest hike and waterfall visit",
      "Local village tour and cooking class",
      "Island hopping boat trip",
      "Free day for optional activities",
      "Departure",
    ],
    included: [
      "Round-trip flights",
      "Accommodation in 4-star resorts",
      "Daily breakfast and select meals",
      "All activities and entrance fees",
      "English-speaking guide",
      "Airport transfers",
    ],
  },
  // ... (other package details)
];
