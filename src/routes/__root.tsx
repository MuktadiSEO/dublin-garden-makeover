import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";

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
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "M&J Paving and Gardening | Driveways & Landscaping Dublin" },
      { name: "description", content: "Trusted paving, driveways, patios, fencing, decking and landscaping across Dublin and all Leinster. Free quotes — call 085 283 4956." },
      { name: "author", content: "M&J Paving and Gardening" },
      { property: "og:title", content: "M&J Paving and Gardening | Driveways & Landscaping Dublin" },
      { property: "og:description", content: "Trusted paving, driveways, patios, fencing, decking and landscaping across Dublin and all Leinster. Free quotes — call 085 283 4956." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "M&J Paving and Gardening | Driveways & Landscaping Dublin" },
      { name: "twitter:description", content: "Trusted paving, driveways, patios, fencing, decking and landscaping across Dublin and all Leinster. Free quotes — call 085 283 4956." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/374763d2-5c30-44fb-9898-cf174d8022a1/id-preview-438d85e4--5fa7e98d-cb30-4468-b793-7caf7cd3c298.lovable.app-1777303705582.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/374763d2-5c30-44fb-9898-cf174d8022a1/id-preview-438d85e4--5fa7e98d-cb30-4468-b793-7caf7cd3c298.lovable.app-1777303705582.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
