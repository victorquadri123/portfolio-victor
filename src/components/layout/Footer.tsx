import { PERSONAL_INFO, SOCIAL_LINKS } from "@/config/data";
import { Github, Linkedin } from "@/components/ui/Icons";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight mb-2 uppercase">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-muted-foreground">
              {PERSONAL_INFO.title} <br />
              {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface border border-surface-border rounded-full hover:bg-surface-hover hover:text-primary transition-colors text-muted-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface border border-surface-border rounded-full hover:bg-surface-hover hover:text-primary transition-colors text-muted-foreground"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link 
              href="#home"
              className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors ml-4"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/60">
          <p>
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 font-mono text-xs tracking-widest">
            DESIGNED & BUILT WITH <span className="text-primary mx-1">PRECISION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
