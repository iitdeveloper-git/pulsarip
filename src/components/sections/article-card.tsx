import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types";

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="focus-ring group flex flex-col rounded-xl2 border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="flex items-center gap-2">
        <Badge>{post.category}</Badge>
        {post.isDraft && <Badge className="bg-gold-100 text-gold-700">Draft</Badge>}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-900 group-hover:text-navy-700">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-muted">
        <span>{post.author.name}</span>
        <span aria-hidden>&middot;</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {post.readingTimeMinutes} min read
        </span>
      </div>
    </Link>
  );
}
