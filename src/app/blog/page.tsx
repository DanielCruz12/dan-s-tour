"use client";
import { PostCard } from "@/components/post-card";
import { TrendingPost } from "@/components/trending-post";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RecentPosts() {
  const pathname = usePathname();
  const posts = [
    {
      id: 1,
      title:
        "Surfing the Pacific: A Journey Through California's Coastal Paradise",
      excerpt:
        "Embark on an epic adventure along California's iconic coastline, where golden beaches meet rolling waves. Discover hidden surf spots, local beach culture, and the perfect conditions for both beginners and seasoned surfers.",
      category: "Adventure",
      date: "12 January 2024",
      readTime: "6 mins",
      comments: 38,
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      author: {
        name: "Jimmy Dave",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a75b8e",
      },
    },
    {
      id: 2,
      title: "Mountain Escapes: Hiking the Trails of New Zealand",
      excerpt:
        "Journey through New Zealand's breathtaking landscapes, from the majestic Southern Alps to the volcanic peaks of the North Island. This comprehensive guide covers the best hiking trails and essential gear.",
      category: "Travel",
      date: "10 January 2024",
      readTime: "8 mins",
      comments: 45,
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      author: {
        name: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
    },
    {
      id: 3,
      title: "Cultural Immersion: A Food Tour Through Tokyo's Hidden Streets",
      excerpt:
        "Dive deep into Tokyo's culinary scene as we explore the lesser-known alleyways and local favorites. Discover the authentic flavors that make Tokyo a gastronomic wonderland.",
      category: "Food",
      date: "8 January 2024",
      readTime: "7 mins",
      comments: 52,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      author: {
        name: "Ken Tanaka",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      },
    },
  ];

  const trendingPosts = [
    {
      id: 4,
      title:
        "Exploring the Ocean's Depths: A Journey Through Marine Conservation",
      date: "18 Sep 2024",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    },
    {
      id: 5,
      title: "The Art of Storytelling: A Journey Through Digital Media",
      date: "18 Sep 2024",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    },
    {
      id: 6,
      title: "Embracing the Remote Work Lifestyle in Southeast Asia",
      date: "15 Sep 2024",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
    {
      id: 7,
      title: "Eco-Friendly Escapes: Sustainable Travel in Costa Rica",
      date: "12 Sep 2024",
      image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    },
    {
      id: 8,
      title: "Capturing the Magic of the Northern Lights",
      date: "10 Sep 2024",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
    },
  ];

  return (
    <div className="max-w-7xl py-12 mx-auto px-2">
      <div className="grid gap-8 lg:grid-cols-[1fr,380px]">
        <div>
          <div className="mb-8">
            <h1 className="text-xl md:text-4xl font-semibold">Recent Posts</h1>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Favorite destinations based on customer reviews
            </p>
          </div>
          <div className="grid gap-8">
            {pathname === "/blog"
              ? posts.map((post, index) => (
                  <Link key={index} href={`/blog/${post.id}`}>
                    <PostCard {...post} />
                  </Link>
                ))
              : posts.slice(0, 1).map((post, index) => (
                  <Link key={index} href={`/blog/${post.id}`}>
                    <PostCard {...post} />
                  </Link>
                ))}
          </div>
          {pathname === "/" && (
            <div className="mt-8 text-center">
              <Link href="/blog">
                <Button variant={"secondary"}>See All Posts</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="md:mt-20">
          <h2 className="mb-6 pt-4 text-xl font-semibold">Trending Now</h2>
          <div className="grid gap-6">
            {trendingPosts.slice(0, 2).map((post, index) => (
              <TrendingPost key={index} {...post} updateDate={post.date} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
