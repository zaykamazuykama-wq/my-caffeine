import { Link } from "@tanstack/react-router";
import { Car as CarIcon } from "lucide-react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 bg-card border-b-4 border-b-primary shadow-elevated">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-7xl">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-ocid="header.home_link"
          >
            {/* Animated wheel icons */}
            <span
              className="text-3xl select-none"
              aria-hidden="true"
              style={{
                display: "inline-block",
                animation: "spin 3s linear infinite",
              }}
            >
              🛥️
            </span>
            <h1
              className="text-3xl md:text-4xl font-display font-extrabold tracking-tight"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.60 0.22 40), oklch(0.65 0.18 240), oklch(0.55 0.20 15), oklch(0.78 0.20 100), oklch(0.55 0.18 290))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Машины Флаш Карт
            </h1>
            <span
              className="text-3xl select-none"
              aria-hidden="true"
              style={{
                display: "inline-block",
                animation: "spin 2s linear infinite reverse",
              }}
            >
              🐘
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <CarIcon className="text-primary" size={28} />
            <span className="text-muted-foreground text-sm font-body hidden md:block">
              29 машин
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-8">
        <div className="container mx-auto px-4 py-4 max-w-7xl text-center">
          <p className="text-muted-foreground text-sm font-body">
            &copy; {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
