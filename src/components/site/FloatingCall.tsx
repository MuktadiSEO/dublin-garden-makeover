import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingCall() {
  return (
    <a href={SITE.phoneHref}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-105"
      aria-label="Call M&J Paving">
      <Phone className="h-5 w-5" />
      Call Now
    </a>
  );
}
