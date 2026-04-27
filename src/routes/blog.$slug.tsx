import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { getPostBySlug, posts, type BlogPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: "Post not found | M&J Paving and Gardening" }] };
    }
    return {
      meta: [
        { title: `${post.title} | M&J Paving and Gardening` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.image },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { name: "twitter:image", content: post.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-tight py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Post not found</h1>
      <p className="mt-2 text-muted-foreground">The article you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-tight py-24 text-center">
      <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogPostPage,
});

function renderContent(content: BlogPost["content"]) {
  const blocks: JSX.Element[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return;
    blocks.push(
      <ul key={`ul-${key}`} className="my-4 list-disc space-y-2 pl-6 text-foreground/90">
        {listBuffer.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  content.forEach((line, idx) => {
    if (line.startsWith("- ")) {
      listBuffer.push(line.slice(2));
      return;
    }
    flushList(String(idx));
    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={idx} className="mt-8 font-display text-xl font-semibold">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={idx} className="mt-10 font-display text-2xl font-bold">
          {line.slice(3)}
        </h2>
      );
    } else {
      blocks.push(
        <p key={idx} className="my-4 leading-relaxed text-foreground/90">
          {line}
        </p>
      );
    }
  });
  flushList("end");
  return blocks;
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const formattedDate = new Date(post.date).toLocaleDateString("en-IE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article>
        <header className="border-b border-border bg-secondary/40">
          <div className="container-tight py-12">
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold md:text-5xl">{post.title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {formattedDate}
              {post.author ? ` · ${post.author}` : ""}
            </p>
          </div>
        </header>

        <div className="container-tight py-10">
          <div className="overflow-hidden rounded-xl bg-muted">
            <img src={post.image} alt={post.title} width={1600} height={900} className="aspect-[16/9] w-full object-cover" />
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="mt-6">{renderContent(post.content)}</div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-tight pb-16">
          <h2 className="mb-6 font-display text-2xl font-bold">More articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold leading-snug">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
