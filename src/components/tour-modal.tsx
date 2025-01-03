"use client";
import Image from "next/image";
import { Info, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: {
    image: string;
    title: string;
    rating: number;
    reviews: number;
    duration: string | number;
    groupSize: string;
    price: number;
    exceptional?: boolean;
    description: string;
  };
}

export function TourModal({ isOpen, onClose, tour }: TourModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>{tour.title}</DialogTitle>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{tour.rating}</span>
            <span className="text-gray-600 text-sm">
              ({tour.reviews} reviews)
            </span>
          </div>
        </DialogHeader>
        <div className="">
          <Image
            src={tour.image}
            alt={tour.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
          {/* PONER VIDEO AUTOPLAY */}
          <div className="mt-4">
            <p className="text-gray-600 text-sm mb-2">
              {tour.duration} days - {tour.groupSize}
            </p>
            <p className="text-gray-800 mb-4 text-justify">
              {tour.description}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-lg">${tour.price}</span>
                <span className="text-gray-600 text-sm"> / person</span>
              </div>
              {/*  <a href="https://pay.tiankii.com/m/dandubua/2fdc645d-bd76-4e25-b375-728bd747cbac" target="_blank" rel="noopener noreferrer">
                <Button>Book Now</Button>
              </a> */}
              <Link href={""}>
                <Button>
                  <Info className="w-4 h-4" />
                  See information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
