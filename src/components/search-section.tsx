"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultDialog } from "./results-dialog";
import { useFiltersStore, Category } from "@/stores/useFilterStorage";
import { durations, prices, ratings } from "@/utils/filters";

export default function SearchSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { selectedCategory, filters, setCategory, setFilters } =
    useFiltersStore();

  return (
    <div className="max-w-7xl mx-auto py-6">
      <ResultDialog isOpen={isDialogOpen} onClose={setIsDialogOpen} />
      <div>
        <div className="flex gap-2 overflow-x-auto pb-3">
          {Object.values(Category).map((item) => (
            <Button
              key={item}
              variant={selectedCategory === item ? "default" : "ghost"}
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative pt-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            onFocus={() => setIsDialogOpen(true)}
            type="text"
            placeholder="What are you looking for?"
            className="w-full pl-10 pr-4 py-2 rounded-md border"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {[
          { label: "Duration", options: durations, field: "duration" },
          { label: "Rating", options: ratings, field: "rating" },
          { label: "Price range", options: prices, field: "price" },
        ].map(({ label, options, field }) => (
          <Select
            key={field}
            onValueChange={(value) => setFilters({ [field]: value })}
          >
            <SelectTrigger className="w-[140px] ">
              <SelectValue
                placeholder={filters[field as keyof typeof filters] || label}
              />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>
    </div>
  );
}
