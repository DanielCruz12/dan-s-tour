import { Header } from "@/components/header";
import { TourCard } from "@/components/tour-card";

const savedTours = [
  {
    image: "/tour.jpg",
    title: "California Sunset/Twilight Boat Cruise",
    rating: 5.0,
    reviews: 672,
    duration: "7 days 6 nights",
    groupSize: "Small group",
    price: 35.62,
    description: "Experience the magic of California as you sail at sunset or under the stars. This 7-day, 6-night small-group boat cruise offers spectacular ocean views, unforgettable sunsets, and serene nature. Perfect for couples or small groups seeking an intimate and relaxing adventure."
  },
  {
    image: "/tour1.jpg",
    title: "NYC: Food Tastings and Culture Tour",
    rating: 4.96,
    reviews: 672,
    duration: "3 days 3 nights",
    groupSize: "Company",
    price: 17.32,
    description: "Explore the flavors and culture of the city that never sleeps. Over 3 days and 3 nights, indulge in local cuisine, discover iconic neighborhoods, and immerse yourself in the vibrant history of New York. Perfect for food lovers and culture enthusiasts."
  }
];


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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
