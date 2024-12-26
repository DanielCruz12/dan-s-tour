import { Header } from "@/components/header";
import { TourCard } from "@/components/tour-card";

const savedTours = [
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Paris City Tour & Seine River Cruise",
    rating: 4.9,
    reviews: 482,
    duration: "1 day",
    groupSize: "Small group",
    price: 89.99,
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Tokyo Night Food Tour",
    rating: 4.95,
    reviews: 328,
    duration: "4 hours",
    groupSize: "Small group",
    price: 75.5,
  },
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
