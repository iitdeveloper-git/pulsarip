"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ArticleCard } from "@/components/sections/article-card";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

export function InsightsBrowser({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | "All">("All");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            aria-label="Search articles"
            className="focus-ring w-full rounded-lg border border-navy-200 py-2.5 pl-9 pr-3 text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat as string | "All")}
              aria-pressed={category === cat}
              className={cn(
                "focus-ring rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                category === cat ? "border-navy-900 bg-navy-900 text-white" : "border-navy-200 text-navy-700 hover:bg-navy-50",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted">No articles match your search. Try a different keyword or category.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
