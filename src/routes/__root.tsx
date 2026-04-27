import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: "M&J Paving and Gardening | Driveways & Landscaping Dublin" },
      { name: "description", content: "Trusted paving, driveways, patios, fencing, decking and landscaping across Dublin and all Leinster. Free quotes — call 085 283 4956." },
      { name: "author", content: "M&J Paving and Gardening" },
      { name: "google-site-verification", content: "kcW1JHWPuVSlZv-OhkjPTTmbjcDi3rcsZThv1Lpikx0" },
      { property: "og:title", content: "M&J Paving and Gardening | Driveways & Landscaping Dublin" },
      { property: "og:description", content: "Trusted paving, driveways, patios, fencing, decking and landscaping across Dublin and all Leinster. Free quotes — call 085 283 4956." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "M&J Paving and Gardening | Driveways & Landscaping Dublin" },
      { name: "twitter:description", content: "Trusted paving, driveways, patios, fencing, decking and landscaping across Dublin and all Leinster. Free quotes — call 085 283 4956." },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingCall />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
