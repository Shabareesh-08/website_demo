"use client";

import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogCategories, blogPosts } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

export function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof blogCategories)[number]>("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubscribing(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (res.ok) setSubscribed(true);
    } finally {
      setSubscribing(false);
    }
  }

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 py-2.5 pl-10 pr-3.5 text-[0.9rem] text-navy-900 placeholder:text-ink-400"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "focus-ring rounded-full border px-3.5 py-1.5 text-[0.78rem] font-medium transition-colors",
                category === cat
                  ? "border-teal-600 bg-teal-600 text-neutral-0"
                  : "border-neutral-300 text-ink-600 hover:border-teal-600 hover:text-teal-700"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card-surface group flex flex-col overflow-hidden">
            <div className="flex aspect-[16/10] items-center justify-center bg-neutral-100 text-neutral-400">
              <FileText className="h-8 w-8" strokeWidth={1.2} />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between text-[0.72rem] text-ink-500">
                <span className="font-semibold uppercase tracking-[0.08em] text-teal-600">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-3 flex-1 font-display text-[1.05rem] leading-snug text-navy-900">{post.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-600 line-clamp-2">{post.excerpt}</p>
              <span className="mt-4 flex items-center gap-1.5 text-[0.8rem] font-medium text-teal-600">
                Read more
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-16 text-center text-[0.9rem] text-ink-500">
            No articles match your search. Try a different keyword or category.
          </p>
        )}
      </div>

      <div className="mt-20 rounded-2xl border border-teal-600/20 bg-teal-50 p-8 sm:p-10">
        <div className="mx-auto max-w-lg text-center">
          <h3 className="font-display text-[1.4rem] text-navy-900">Get claim rights updates in your inbox</h3>
          <p className="mt-2 text-[0.88rem] text-ink-600">
            Monthly IRDAI updates, case studies, and practical claim guidance. No spam.
          </p>
          {subscribed ? (
            <p className="mt-5 flex items-center justify-center gap-2 text-[0.9rem] font-medium text-teal-700">
              <CheckCircle2 className="h-4 w-4" /> You&rsquo;re subscribed.
            </p>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="you@email.com"
                className="focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-2.5 text-[0.9rem] sm:max-w-xs"
              />
              <Button type="submit" disabled={subscribing}>
                {subscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
