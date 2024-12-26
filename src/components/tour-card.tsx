import Image from "next/image";
import { Heart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

interface TourCardProps {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  duration: string;
  groupSize: string;
  price: number;
  exceptional?: boolean;
}

export function TourCard({
  image,
  title,
  rating,
  reviews,
  duration,
  groupSize,
  price,
  exceptional,
}: TourCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 text-white hover:text-white"
        >
          <Heart className="w-5 h-5" />
        </Button>
        {exceptional && (
          <div className="absolute bottom-2 left-2 bg-yellow-400 px-2 py-1 rounded text-sm font-medium">
            Exceptional
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating}</span>
          <span className="text-gray-600 text-sm">({reviews} reviews)</span>
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {duration} - {groupSize}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">${price}</span>
            <span className="text-gray-600 text-sm"> / person</span>
          </div>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
}
