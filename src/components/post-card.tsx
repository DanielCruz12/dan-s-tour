import { Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  comments: number;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

export default function PostCardDemo() {
  // Demo data for individual component view
  const post = {
    title:
      "Surfing the Pacific: A Journey Through California's Coastal Paradise",
    excerpt:
      "Embark on an epic adventure along California's iconic coastline, where golden beaches meet rolling waves. Discover hidden surf spots, local beach culture, and the perfect conditions for both beginners and seasoned surfers.",
    category: "Adventure",
    date: "12 January 2024",
    readTime: "6 mins",
    comments: 38,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ccHiU8BFwg5pQlaIEIjChq9iE0eSkl.png",
    author: {
      name: "Jimmy Dave",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <PostCard {...post} />
    </div>
  );
}

export function PostCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  comments,
  image,
  author,
}: PostCardProps) {
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-xl shadow-sm transition-shadow hover:shadow-md">
      <div className="relative flex">
        <div className="relative w-full aspect-[16/9] md:aspect-[4/3]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <button className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <Badge variant="secondary" className="absolute top-4 right-4">
          {category}
        </Badge>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-2 mb-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">By {author.name}</p>
            <time className="text-muted-foreground">{date}</time>
          </div>
        </div>
        <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
        <p className="mb-6 text-muted-foreground flex-grow">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{readTime}</span>
            <span>{comments} comments</span>
          </div>
          <Button variant="secondary" size="sm">
            Keep Reading
          </Button>
        </div>
      </div>
    </div>
  );
}
