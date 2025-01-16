import Image from "next/image";
import Link from "next/link";

interface TrendingPostProps {
  title: string;
  date: string;
  updateDate: string;
  image: string;
}

export default function TrendingPostDemo() {
  // Demo data for individual component view
  const post = {
    title: "How to get better agents in New York, USA",
    date: "18 Sep 2024",
    updateDate: "12 January 2024",
    image: "/placeholder.svg?height=80&width=80",
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl">
      <h2 className="mb-6 text-xl font-semibold">Trending Post Example</h2>
      <TrendingPost {...post} />
    </div>
  );
}

export function TrendingPost({
  title,
  date,
  updateDate,
  image,
}: TrendingPostProps) {
  return (
    <Link href="#" className="flex items-center gap-4 group">
      <div className="relative w-20 h-20 overflow-hidden rounded-lg shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={80}
          height={80}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium leading-snug group-hover:text-primary line-clamp-2">
          {title}
        </h3>
        <div className="flex gap-2 text-sm text-muted-foreground">
          <time>{date}</time>
          <span>•</span>
          <time>{updateDate}</time>
        </div>
      </div>
    </Link>
  );
}
