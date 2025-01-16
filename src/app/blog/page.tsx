import { Search } from "lucide-react";
import { PostCard } from "@/components/post-card";
import { TrendingPost } from "@/components/trending-post";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function RecentPosts() {
  const posts = [
    {
      title:
        "Surfing the Pacific: A Journey Through California's Coastal Paradise",
      excerpt:
        "Embark on an epic adventure along California's iconic coastline, where golden beaches meet rolling waves. Discover hidden surf spots, local beach culture, and the perfect conditions for both beginners and seasoned surfers. From Santa Cruz to San Diego, explore the diverse surfing scenes that make the Pacific Coast a surfer's paradise.",
      category: "Adventure",
      date: "12 January 2024",
      readTime: "6 mins",
      comments: 38,
      image: "/placeholder.svg?height=600&width=800",
      author: {
        name: "Jimmy Dave",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      title: "Mountain Escapes: Hiking the Trails of New Zealand",
      excerpt:
        "Journey through New Zealand's breathtaking landscapes, from the majestic Southern Alps to the volcanic peaks of the North Island. This comprehensive guide covers the best hiking trails, seasonal considerations, essential gear, and local insights for an unforgettable hiking adventure in one of the world's most stunning natural playgrounds.",
      category: "Travel",
      date: "10 January 2024",
      readTime: "8 mins",
      comments: 45,
      image: "/placeholder.svg?height=600&width=800",
      author: {
        name: "Sarah Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      title: "Cultural Immersion: A Food Tour Through Tokyo's Hidden Streets",
      excerpt:
        "Dive deep into Tokyo's culinary scene as we explore the lesser-known alleyways and local favorites. From traditional izakayas to modern fusion restaurants, discover the authentic flavors that make Tokyo a gastronomic wonderland. Learn about seasonal specialties, cooking techniques, and the stories behind beloved Japanese dishes.",
      category: "Food",
      date: "8 January 2024",
      readTime: "7 mins",
      comments: 52,
      image: "/placeholder.svg?height=600&width=800",
      author: {
        name: "Ken Tanaka",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
  ];

  const trendingPosts = [
    {
      title: "How to get better agents in New York, USA",
      date: "18 Sep 2024",
      updateDate: "12 January 2024",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Beyond the Pixels: My Art-Tech Lifestyle Journey",
      date: "18 Sep 2024",
      updateDate: "12 January 2024",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Digital Nomad Guide: Working From Southeast Asia",
      date: "15 Sep 2024",
      updateDate: "11 January 2024",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Sustainable Travel: Eco-Friendly Adventures in Costa Rica",
      date: "12 Sep 2024",
      updateDate: "10 January 2024",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Photography Tips: Capturing the Northern Lights",
      date: "10 Sep 2024",
      updateDate: "9 January 2024",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  return (
    <div className=" bg-gray-50">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1fr,380px]">
          <div>
            <div className="mb-8">
              <h1 className="mb-2 text-4xl font-bold">Recent Posts</h1>
              <p className="text-xl text-muted-foreground">
                Favorite destinations based on customer reviews
              </p>
            </div>
            <div className="grid gap-8">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="sticky top-4">
              <div className="relative mb-8">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 bg-white"
                />
                <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
              </div>

              <div className="p-6 bg-white rounded-xl sticky max-w-">
                <h2 className="mb-6 text-xl font-semibold">Trending Now</h2>
                <div className="grid gap-6">
                  {trendingPosts.map((post, index) => (
                    <TrendingPost key={index} {...post} />
                  ))}
                </div>
              </div>

              <div className="p-6 mt-8 bg-white rounded-xl">
                <h2 className="mb-6 text-xl font-semibold">Featured Gallery</h2>
                <div className="grid grid-cols-3 gap-2">
                  {Array(6)
                    .fill(null)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="relative aspect-square group overflow-hidden rounded-lg"
                      >
                        <Image
                          src="/placeholder.svg?height=120&width=120"
                          alt={`Gallery image ${index + 1}`}
                          width={120}
                          height={120}
                          className="object-cover w-full h-full transition-transform group-hover:scale-110"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
