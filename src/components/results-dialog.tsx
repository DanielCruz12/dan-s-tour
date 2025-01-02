import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Star } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import tours from "@/utils/data";

export function ResultDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}) {
  const filteredTours = tours.filter(
    (tour) => tour.title.toLowerCase() || tour.description.toLowerCase()
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Search Tours</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pl-10 pr-4 py-2 rounded-md border bg-gray-50"
              />
            </div>
          </div>

          <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            {filteredTours.map((tour, index) => (
              <div
                key={index}
                className="mb-4 p-4 border rounded-md flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <div className="flex-grow">
                  <h3 className="font-bold">{tour.title}</h3>
                  <p className="text-sm text-gray-600">{tour.duration}</p>
                  <p className="text-xl font-bold text-primary mt-1">
                    ${tour.price}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(tour.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      ({tour.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-sm mt-2 line-clamp-2">
                    {tour.description}
                  </p>
                </div>
                <div className="w-full sm:w-24 h-24 relative rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
