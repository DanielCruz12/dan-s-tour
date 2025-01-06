import { TourCard } from "@/components/tour-card";
import { Category } from "@/stores/useFilterStorage";

const savedTours = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "California Sunset/Twilight Boat Cruise",
    rating: 5.0,
    reviews: 672,
    duration: 7,
    groupSize: "Small group",
    price: 35.62,
    exceptional: true,
    description:
      "Experience the magic of California as you sail at sunset or under the stars. This 7-day, small-group boat cruise offers spectacular ocean views, unforgettable sunsets, and serene nature. Perfect for couples or small groups seeking an intimate and relaxing adventure.",
    category: Category.TOURS,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    video: "https://www.youtube.com/watch?v=O8Dha2vJTqQ",
    title: "Luxury Stay at Grand Palace Hotel",
    rating: 4.9,
    reviews: 850,
    duration: 3,
    groupSize: "Couples",
    price: 400.0,
    exceptional: true,
    description:
      "Enjoy a luxurious stay at the Grand Palace Hotel. This 3-day package includes spa treatments, fine dining, and breathtaking city views. Perfect for couples seeking a romantic getaway.",
    category: Category.HOTELS,
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Profile</h1>
            <p className="text-muted-foreground">
              Manage your saved destinations and account settings
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Saved Destinations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedTours.map((tour, index) => (
                <TourCard key={index} {...tour} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
