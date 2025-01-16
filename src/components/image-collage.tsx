"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import Autoplay from "embla-carousel-autoplay";
import Share from "yet-another-react-lightbox/plugins/share";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    alt: "Foggy mountains",
    className: "col-span-2 row-span-2 h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    alt: "Sunlight through forest",
    className: "col-span-1 row-span-2 h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    alt: "Lake and mountains",
    className: "col-span-1 row-span-1 h-[150px]",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Autumn forest path",
    className: "col-span-1 row-span-1 h-[150px]",
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    alt: "Mountain lake",
    className: "col-span-1 row-span-1 h-[150px]",
  },
];

export default function ImageCollage() {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className=" mx-auto py-4">
      <div className="md:hidden mb-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                    <p className="text-white p-4 font-semibold">{image.alt}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg hover:cursor-pointer ${image.className}`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-110"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500 opacity-0 hover:opacity-100 flex items-end">
              <p className="text-white p-4 font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={images}
            index={currentIndex}
            plugins={[Fullscreen, Download, Captions, Zoom, Share]}
          />
        </>
      )}
    </section>
  );
}
