import Image from "next/image";
import { MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    name: "Paris",
    country: "France",
    image: "/placeholder.svg?height=400&width=300",
    tours: 156,
  },
  {
    name: "Tokyo",
    country: "Japan",
    image: "/placeholder.svg?height=400&width=300",
    tours: 143,
  },
  {
    name: "Rome",
    country: "Italy",
    image: "/placeholder.svg?height=400&width=300",
    tours: 132,
  },
  {
    name: "Barcelona",
    country: "Spain",
    image: "/placeholder.svg?height=400&width=300",
    tours: 128,
  },
];

export function PopularDestinations() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Popular Destinations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {destination.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {destination.country}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {destination.tours} tours
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
