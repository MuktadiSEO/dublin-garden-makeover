import { createFileRoute } from "@tanstack/react-router";
import { SitemapList } from "@/components/site/SitemapList";
import { serviceEntries } from "@/lib/sitemap-data";

export const Route = createFileRoute("/sitemap/services")({
  head: () => ({ meta: [{ title: "Service Sitemap | M&J Paving and Gardening" }] }),
  component: () => (
    <SitemapList
      title="Service Sitemap"
      description="All paving, landscaping and garden services we offer."
      entries={serviceEntries}
    />
  ),
});
