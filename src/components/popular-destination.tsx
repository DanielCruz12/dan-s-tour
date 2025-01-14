"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Destination {
  id: string;
  name: string;
  image: string;
  tours: number;
  activities: number;
  category: string;
  duration: string;
  country: string;
  rating: number;
  priceRange: number;
}

const destinations: Destination[] = [
  {
    id: "1",
    name: "Paris",
    country: "France",
    image: "/paris.jpeg",
    tours: 156,
    activities: 248,
    category: "City",
    duration: "5-7 days",
    rating: 4.8,
    priceRange: 13,
  },
  {
    id: "2",
    name: "Tokyo",
    country: "Japan",
    image: "/tokyo.jpg",
    tours: 143,
    activities: 200,
    category: "City",
    duration: "4-7 days",
    rating: 4.9,
    priceRange: 14.99,
  },
  {
    id: "3",
    name: "Rome",
    country: "Italy",
    image: "/roma.jpg",
    tours: 132,
    activities: 220,
    category: "City",
    duration: "3-5 days",
    rating: 4.7,
    priceRange: 200,
  },
  {
    id: "4",
    name: "El Salvador",
    country: "El Salvador",
    image: "/elsalvador.jpg",
    tours: 128,
    activities: 180,
    category: "Beach",
    duration: "2-4 days",
    rating: 4.6,
    priceRange: 3000,
  },
];

export default function PopularDestinations() {
  const [category, setCategory] = useState("all");
  const [ratingRange, setRatingRange] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredDestinations = destinations.filter((dest) => {
    if (category !== "all" && dest.category !== category) return false;
    if (ratingRange === "4.5-5" && (dest.rating < 4.5 || dest.rating > 5))
      return false;
    if (ratingRange === "4.0-4.5" && (dest.rating < 4.0 || dest.rating > 4.5))
      return false;
    if (priceRange === "0-50" && (dest.priceRange < 0 || dest.priceRange > 50))
      return false;
    if (
      priceRange === "51-1000" &&
      (dest.priceRange < 51 || dest.priceRange > 1000)
    )
      return false;
    if (priceRange === "1000+" && dest.priceRange <= 1000) return false;
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="space-y-4">
        <h2 className="text-xl md:text-4xl font-bold">Popular Destinations</h2>
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
          Favorite destinations based on customer reviews
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Categories</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={category}
                onValueChange={setCategory}
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="City">City</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Beach">
                  Beach
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Mountain">
                  Mountain
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Rating</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={ratingRange}
                onValueChange={setRatingRange}
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="4.5-5">
                  4.5 - 5
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="4.0-4.5">
                  4.0 - 4.5
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Price</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={priceRange}
                onValueChange={setPriceRange}
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="0-50">
                  $0 - $50
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="51-1000">
                  $51 - $1000
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="1000+">
                  $1000+
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-20 md:h-24">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="text-2xl font-semibold mr-2">
                      {destination.name}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base ml-2">
                      ${destination.priceRange}
                    </p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
                <p className="text-muted-foreground mt-2">
                  {destination.tours} Tours, {destination.activities} Activities
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
