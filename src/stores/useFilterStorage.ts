import { create } from "zustand";

export enum Category {
  TOURS = "Tours",
  HOTELS = "Hotels",
  TICKETS = "Tickets",
  RENTAL = "Rental",
  DAY_PASS = "Day pass",
}

export type FilterOptions = {
  category: Category | null;
  duration: number | null; // Adjusted to number
  rating: number | null; // Adjusted to number
  price: string | null;
};

interface FiltersStore {
  selectedCategory: Category;
  filters: FilterOptions;
  setCategory: (category: Category) => void;
  setFilters: (newFilters: Partial<FilterOptions>) => void;
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  selectedCategory: Category.TOURS,
  filters: {
    category: Category.TOURS,
    duration: null,
    rating: null,
    price: null,
  },
  setCategory: (category: Category) =>
    set((state) => ({
      selectedCategory: category,
      filters: { ...state.filters, category },
    })),
  setFilters: (newFilters: Partial<FilterOptions>) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
}));
