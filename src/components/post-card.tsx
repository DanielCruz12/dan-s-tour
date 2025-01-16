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

export function PostCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  author,
}: PostCardProps) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md">
      <div className="relative flex">
        <div className="relative w-full aspect-[2/1] md:aspect-[9/2.5]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        <Badge variant="secondary" className="absolute top-4 right-4">
          {category}
        </Badge>
      </div>
      <div className="flex flex-col p-6">
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
        <h2 className="text-lg md:text-xl font-semibold text-wrap line-clamp-2 md:line-clamp-3">
          {title}
        </h2>
        <p className="mb-2 font-normal text-sm md:text-base text-muted-foreground text-wrap line-clamp-2 w-full max-w-3xl">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{readTime}</span>
          </div>
          <Button variant="secondary" size="sm">
            Keep Reading
          </Button>
        </div>
      </div>
    </div>
  );
}
