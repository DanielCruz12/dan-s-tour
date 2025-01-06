/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";
import {
  CalendarIcon,
  MapPin,
  Users,
  Clock,
  Calendar,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function TourBooking() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("12:00");
  console.log(selectedTime);
  const [addons, setAddons] = useState<string[]>([]);
  const [tickets, setTickets] = useState({ adult1: 1, adult2: 1 });
  const plugin = useRef(Autoplay({ delay: 2200, stopOnInteraction: true }));
  const calculateTotal = () => {
    const ticketPrice = (tickets.adult1 + tickets.adult2) * 42.5;
    const addonPrice = addons.includes("service1")
      ? 32.0
      : 0 + (addons.includes("service2") ? 24.0 : 0);
    return ticketPrice + addonPrice;
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Tour Details Section */}
        <div className="lg:col-span-2 space-y-6 pr-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">4.96</span>
              <span className="text-muted-foreground">(672 reviews)</span>
            </div>

            <h1 className="text-xl md:text-3xl font-bold mb-4">
              The High Roller Experience: Tickets for The LINQ Observation
              Wheel, Las Vegas Strip
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Las Vegas, USA</span>
              </div>
              <button className="underline font-semibold">
                <a
                  href="https://www.google.com/maps/place/Miami+Beach,+Florida,+EE.+UU./@25.8103728,-80.2225436,23885m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88d9a6172bfeddb9:0x37be1741259463eb!8m2!3d25.790654!4d-80.1300455!16zL20vMHJubXk?hl=es-419&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show on map
                </a>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg shadow">
              <div className="flex items-center gap-2  rounded-lg">
                <Calendar className="w-5 h-5 text-primary rounded-xl" />
                <div>
                  <div className="text-sm font-medium">Duration</div>
                  <div className="text-sm text-muted-foreground">5-7 days</div>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-medium">Group Size</div>
                  <div className="text-sm text-muted-foreground">06 people</div>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-medium">Tour Type</div>
                  <div className="text-sm text-muted-foreground">
                    Daily Tour
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-medium">Languages</div>
                  <div className="text-sm text-muted-foreground">English</div>
                </div>
              </div>
            </div>
          </div>

          <Accordion
            type="multiple"
            defaultValue={["overview", "highlight"]}
            className="space-y-4"
          >
            <AccordionItem value="overview">
              <AccordionTrigger className="text-xl font-semibold">
                Overview
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Elevate your Las Vegas experience to new heights with a
                    journey aboard The High Roller at The LINQ. As the tallest
                    observation wheel in the world, standing at an impressive
                    550 feet tall, The High Roller offers a birds-eye
                    perspective of the iconic Las Vegas Strip and its
                    surrounding desert landscape. From the moment you step into
                    one of the spacious cabins, youll be transported on a
                    mesmerizing adventure, where every turn offers a new and
                    breathtaking vista of the vibrant city below.
                  </p>
                  <p>
                    Whether youre a first-time visitor or a seasoned Las Vegas
                    aficionado, The High Roller promises an unparalleled
                    experience that will leave you in awe. With its
                    climate-controlled cabins and immersive audio commentary,
                    this attraction provides a unique opportunity to see Las
                    Vegas from a whole new perspective, while learning about its
                    rich history and famous landmarks along the way.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="highlight">
              <AccordionTrigger className="text-xl font-semibold">
                Highlight
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ascend to the skies aboard the worlds tallest observation
                    wheel and marvel at the panoramic vistas stretching as far
                    as the eye can see. From the iconic landmarks of the Strip
                    to the majestic mountains in the distance, every moment
                    aboard The High Roller promises breathtaking sights and
                    unforgettable memories.
                  </p>
                  <p>
                    All rooms at the resort come with air conditioning, a
                    seating area, a flat-screen TV with satellite channels, a
                    safety deposit box and a private bathroom with a shower,
                    free toiletries and a hairdryer. At Pickalbatros Water
                    Valley Resort - Neverland Hurghada rooms are equipped with
                    bed linen and towels.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Booking Form */}
        <div className="px-3">
          <div>
            <Carousel plugins={[plugin.current]} className=" mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/tour.jpg"
                    alt="Tour Image 1"
                    className="rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/tour1.jpg"
                    alt="Tour Image 2"
                    className="rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/tour2.jpg"
                    alt="Tour Image 3"
                    className="rounded-lg"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
          <div className="pt-3">
            <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>From:</Label>
                <div className="flex items-center gap-2 border rounded-md p-2">
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="outline-none bg-transparent flex-1"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Time:</Label>
              <RadioGroup defaultValue="12:00" onValueChange={setSelectedTime}>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="12:00" id="12:00" />
                    <Label htmlFor="12:00">12:00</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="17:00" id="17:00" />
                    <Label htmlFor="17:00">17:00</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label>Tickets:</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Adult (18+ years)</span>
                  <div className="flex items-center gap-2">
                    <span>$42.50</span>
                    <Select
                      value={tickets.adult1.toString()}
                      onValueChange={(value) =>
                        setTickets({ ...tickets, adult1: parseInt(value) })
                      }
                    >
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Adult (18+ years)</span>
                  <div className="flex items-center gap-2">
                    <span>$42.50</span>
                    <Select
                      value={tickets.adult2.toString()}
                      onValueChange={(value) =>
                        setTickets({ ...tickets, adult2: parseInt(value) })
                      }
                    >
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Add Extra:</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={addons.includes("service1")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setAddons([...addons, "service1"]);
                        } else {
                          setAddons(addons.filter((a) => a !== "service1"));
                        }
                      }}
                    />
                    <span>Add service per Booking</span>
                  </div>
                  <span>$32.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={addons.includes("service2")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setAddons([...addons, "service2"]);
                        } else {
                          setAddons(addons.filter((a) => a !== "service2"));
                        }
                      }}
                    />
                    <span>Add service per Personal</span>
                  </div>
                  <span>$24.00</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Book Now
              </Button>
            </div>
            <div className="mt-6 text-center">
              <button className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 mx-auto">
                <Users className="w-4 h-4" />
                Need some help?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
