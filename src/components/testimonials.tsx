"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Atend John",
    location: "California",
    image: "https://picsum.photos/200/300?random=A+J.png",
    rating: 5,
    text: "I had a last-minute business trip, and the hotel booking system came to the rescue. I was able to find a high-quality hotel in no time and even got a great deal on the room. The confirmation process was straightforward",
  },
  {
    id: 2,
    name: "Sara Mohan",
    location: "Jakarta",
    image: "https://picsum.photos/200/300?random=S+M.png",
    rating: 5,
    text: "I've been using the hotel booking service for several months now, and it's become my go-to platform for all my travels. The interface is user-friendly, providing accurate information and real-time availability.",
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Singapore",
    image: "https://picsum.photos/200/300?random=M+C.png",
    rating: 5,
    text: "The service has been exceptional for several years now. I appreciate the detailed information provided about hotels. , and I received all the necessary information promptly.",
  },
  {
    id: 4,
    name: "Pepe Chen",
    location: "Singapore",
    image: "https://picsum.photos/200/300?random=P+Doe.png",
    rating: 5,
    text: "The service has been exceptional for several years now. I appreciate the detailed information provided about hotels.",
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  return (
    <section className=" px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-1 dark:bg-gray-800 rounded-full px-4 py-2 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image
                    src={`https://picsum.photos/200/300?random=${i}`}
                    alt={`Avatar ${i}`}
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium ml-2">Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What our clients are saying about us?
          </h2>

          <p className="dark:text-gray-500 max-w-2xl">
            Discover how you can offset your adventures carbon emissions and
            support the sustainable initiatives practiced by our operators
            worldwide.
          </p>
        </div>

        <div className="">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-6 rounded-2xl h-full">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="dark:text-gray-200 mb-6">{testimonial.text}</p>

                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={12}
                        height={12}
                        className="h-12 w-12 sm:h-11 sm:w-11 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative " />
              <CarouselNext className="relative" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
