import { Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { formatDate, type SitemapEntry } from "@/lib/sitemap-data";

type Props = {
  title: string;
  description: string;
  entries: SitemapEntry[];
};

export function SitemapList({ title, description, entries }: Props) {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-12">
          <Link to="/sitemap" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Sitemap index
          </Link>
          <h1 className="mt-3 font-display text-3xl font-bold md:text-4xl">{title}</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
        </div>
      </section>

      <section className="container-tight py-10">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-secondary/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 w-20">Image</th>
                <th className="px-4 py-3">URL</th>
                <th className="px-4 py-3 w-40 hidden md:table-cell">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.url} className="border-b border-border last:border-b-0 hover:bg-secondary/30">
                  <td className="px-4 py-3">
                    {e.image ? (
                      <img
                        src={e.image}
                        alt={e.title}
                        loading="lazy"
                        className="h-12 w-16 rounded object-cover"
                      />
                    ) : (
                      <div className="h-12 w-16 rounded bg-muted" />
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={e.url}
                      className="inline-flex items-center gap-1 font-medium text-primary hover:underline break-all"
                    >
                      {e.url}
                      <ExternalLink className="h-3 w-3 flex-shrink-0" />
                    </a>
                    <div className="mt-0.5 text-xs text-muted-foreground">{e.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground md:hidden">
                      Updated: {formatDate(e.lastModified)}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                    {formatDate(e.lastModified)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
