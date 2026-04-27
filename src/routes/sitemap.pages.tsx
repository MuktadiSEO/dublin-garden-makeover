import { createFileRoute } from "@tanstack/react-router";
import { SitemapList } from "@/components/site/SitemapList";
import { pageEntries } from "@/lib/sitemap-data";

export const Route = createFileRoute("/sitemap/pages")({
  head: () => ({ meta: [{ title: "Page Sitemap | M&J Paving and Gardening" }] }),
  component: () => (
    <SitemapList
      title="Page Sitemap"
      description="All main pages on the M&J Paving and Gardening website."
      entries={pageEntries}
    />
  ),
});
