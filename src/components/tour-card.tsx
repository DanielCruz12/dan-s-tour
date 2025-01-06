"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface TourCardProps {
  id: string;
  image: string;
  title: string;
  reviews: number;
  rating: number;
  groupSize: string;
  category: string;
  duration: string | number;
  price: number;
  exceptional?: boolean;
  description: string;
}

export function TourCard({
  id,
  image,
  title,
  rating,
  reviews,
  duration,
  groupSize,
  category,
  price,
  description,
}: TourCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/tours/${id}`}>
      <motion.div
        className="relative aspect-[16/10] rounded-lg cursor-pointer"
        initial={false}
        animate={{ scale: isHovered ? 1.03 : 1, zIndex: isHovered ? 10 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ transformOrigin: "center center" }}
      >
        <Card className=" overflow-hidden rounded-3xl border-0 shadow-lg">
          <div className="relative">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
           {/*  <button className="absolute right-4 top-4 rounded-full p-1 bg-transparent shadow-sm">
              <Heart className="h-4 w-4 " />
            </button> */}
            <div className="absolute bottom-[-6px] left-4 flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg bg-white dark:bg-gray-200">
              <span className="text-muted-foreground dark:text-gray-700">{category}</span>
            </div>
          </div>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="font-normal">{rating}</span>
              <span className="text-muted-foreground text-sm">
                ({reviews} reviews)
              </span>
            </div>
            <h3 className="text-xl font-bold">
              {title.length > 30 ? `${title.slice(0, 30)}...` : title}
            </h3>
            <span className="font-normal text-muted-foreground">
              {description.length > 80
                ? `${description.slice(0, 80)}..`
                : description}
            </span>
            <p className="text-muted-foreground">
              {duration} {Number(duration) > 1 ? "days" : "day"}
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between pt-0">
            <div>
              <span className="text-2xl font-bold">${price}</span>
              <span className="text-sm text-muted-foreground">
                / {groupSize}
              </span>
            </div>
            <Button
              className="rounded-full px-6"
              variant={isHovered ? "default" : "secondary"}
            >
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      {/*  <TourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tour={{
          image,
          title,
          rating,
          reviews,
          duration,
          groupSize,
          price,
          exceptional,
          description,
        }}
      /> */}
    </Link>
  );
}
