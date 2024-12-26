/* eslint-disable @next/next/no-img-element */
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    comment:
      "Amazing experience! The tour was well organized and our guide was knowledgeable and friendly.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    comment:
      "Exceeded my expectations. The local insights and hidden gems we discovered were incredible.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    comment:
      "Perfect blend of adventure and culture. Will definitely book another tour!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What our clients are saying about us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                </div>
                <p className="text-muted-foreground">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
