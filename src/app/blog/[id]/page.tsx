import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from 'lucide-react'
import { data } from "@/utils/filters"
export default function BlogPost({ params }: { params: { id: string } }) {
  const blog = data.find((b: { id: number }) => b.id === parseInt(params.id))

  if (!blog) {
    notFound()
  }

  return (
    <article className="min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <Badge className="mb-4">{blog.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Image
                  src={blog.authorImage || "/placeholder.svg"}
                  alt={blog.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>

          <div className="relative aspect-[21/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src={blog.imageUrl || "/placeholder.svg"}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">{blog.excerpt}</p>
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

