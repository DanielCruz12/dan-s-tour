import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Journey, Your Way
          </h1>
          <p className="text-xl text-gray-600">
            Discover the Worlds Treasures with Travila
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="icon" variant="outline">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
