import { createFileRoute } from "@tanstack/react-router";
import { SitemapList } from "@/components/site/SitemapList";
import { postEntries } from "@/lib/sitemap-data";

export const Route = createFileRoute("/sitemap/posts")({
  head: () => ({ meta: [{ title: "Post Sitemap | M&J Paving and Gardening" }] }),
  component: () => (
    <SitemapList
      title="Post Sitemap"
      description="Every blog article published on M&J Paving and Gardening."
      entries={postEntries}
    />
  ),
});
