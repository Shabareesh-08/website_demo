import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, FileText } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/section";
import { ShareButtons } from "@/components/blog/share-buttons";
import { blogPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${post.readTime} · ${new Date(post.date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-10 flex aspect-[16/8] items-center justify-center rounded-2xl bg-neutral-100 text-neutral-400">
              <FileText className="h-10 w-10" strokeWidth={1.2} />
            </div>
            <div className="prose-editorial space-y-5">
              {post.body.map((paragraph, i) => (
                <p key={i} className="text-[1rem] leading-relaxed text-ink-700">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-12 border-t border-neutral-200 pt-6">
              <ShareButtons title={post.title} />
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card-surface p-7">
              <h3 className="font-display text-[1.1rem] text-navy-900">Related Articles</h3>
              <div className="mt-5 flex flex-col gap-5">
                {fallbackRelated.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex flex-col gap-1">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-teal-600">
                      {r.category}
                    </span>
                    <span className="flex items-start gap-1.5 text-[0.88rem] font-medium leading-snug text-navy-900">
                      {r.title}
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </Container>
      </article>
    </>
  );
}
