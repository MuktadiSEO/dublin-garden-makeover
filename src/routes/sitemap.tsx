import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap")({
  component: () => <Outlet />,
});
