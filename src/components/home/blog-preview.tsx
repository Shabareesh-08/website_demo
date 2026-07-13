import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";

export function BlogPreview() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Knowledge Centre"
            title="Policyholder rights, explained clearly"
            description="IRDAI frameworks, claim rejection categories, and Ombudsman procedure - written for policyholders, not lawyers."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.slice(0, 4).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-surface group flex flex-col overflow-hidden">
              <div className="flex aspect-[4/3] items-center justify-center bg-neutral-100 text-neutral-400">
                <FileText className="h-8 w-8" strokeWidth={1.2} />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between text-[0.72rem] text-ink-500">
                  <span className="font-semibold uppercase tracking-[0.08em] text-teal-600">{post.category}</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </time>
                </div>
                <h3 className="mt-3 flex-1 font-display text-[1.05rem] leading-snug text-navy-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-600 line-clamp-2">{post.excerpt}</p>
                <span className="mt-4 flex items-center gap-1.5 text-[0.8rem] font-medium text-teal-600">
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/blog" variant="outline">View All Articles</Button>
        </div>
      </Container>
    </section>
  );
}
