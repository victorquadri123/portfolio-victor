"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/config/data";
import Link from "next/link";
import { ArrowUpRight, Lock, Database } from "lucide-react";

type Project = {
  id: string;
  title: string;
  link: string;
  category: string;
  description: string;
  contribution?: string;
  technologies: string[];
};

export function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-8 gap-8">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
            SELECTED <br /> <span className="text-primary italic font-serif">WORKS</span>
          </h2>
          <p className="text-muted-foreground max-w-sm text-balance">
            Real-world systems and digital products built to solve practical problems.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div ref={ref} className="group relative flex flex-col gap-8">
      {/* Visual UI Mockup instead of Image */}
      <div className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-xl border border-white/10 bg-surface/30 p-4 md:p-8 flex flex-col">
        
        {/* macOS style window controls */}
        <div className="flex items-center gap-2 mb-6 opacity-50">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-4 text-xs font-mono text-muted-foreground">{project.id}.tsx</div>
        </div>

        {/* Dynamic Mockup Content */}
        <motion.div style={{ y }} className="flex-1 w-full bg-background/50 rounded-lg border border-white/5 p-6 flex flex-col relative overflow-hidden backdrop-blur-md">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          
          {project.id === 'pythegrax' ? (
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3"><Database className="w-5 h-5 text-primary" /><span className="font-mono text-sm">ECOMMERCE_API_GATEWAY</span></div>
                <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">STATUS: ONLINE</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 rounded bg-surface/50 border border-white/5 p-4 flex flex-col justify-between">
                    <div className="w-8 h-2 bg-white/20 rounded" />
                    <div className="w-full h-8 bg-white/5 rounded" />
                  </div>
                ))}
              </div>
              <div className="flex-1 rounded bg-surface/30 border border-white/5 mt-4 p-4 font-mono text-xs text-muted-foreground overflow-hidden">
                <div>&gt; Initiating transaction sequence...</div>
                <div className="text-primary">&gt; Validating auth token... SUCCESS</div>
                <div>&gt; Fetching inventory payload [200ms]</div>
                <div className="animate-pulse mt-2">_</div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3"><Lock className="w-5 h-5 text-primary" /><span className="font-mono text-sm">BIOMETRIC_ENGINE</span></div>
                <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">MATCH: 99.8%</div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded border border-primary/20 bg-primary/5 flex items-center justify-center relative overflow-hidden">
                   {/* Abstract face mesh grid */}
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                   <div className="w-32 h-32 border border-primary/40 rounded-full flex items-center justify-center">
                     <div className="w-24 h-24 border border-primary/60 rounded-full animate-ping opacity-20" />
                   </div>
                </div>
                <div className="rounded bg-surface/30 border border-white/5 p-4 font-mono text-xs text-muted-foreground flex flex-col gap-2">
                  <div className="text-white">Analyzing facial topography...</div>
                  <div className="flex justify-between"><span>Vector_X:</span><span className="text-primary">0.9384</span></div>
                  <div className="flex justify-between"><span>Vector_Y:</span><span className="text-primary">0.1123</span></div>
                  <div className="flex justify-between"><span>Vector_Z:</span><span className="text-primary">0.5541</span></div>
                  <div className="w-full h-px bg-white/10 my-2" />
                  <div className="text-green-400">Authentication Granted.</div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
        
        {/* Floating CTA */}
        <div className="absolute z-20 bottom-12 right-12">
           <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full hover:scale-95 transition-transform duration-300 shadow-2xl"
          >
            <ArrowUpRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-4">
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="text-primary font-mono text-xs tracking-widest uppercase">
            {String(index + 1).padStart(2, '0')} {"//"} {project.category}
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-lg text-balance max-w-2xl mt-4">
            {project.description}
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6 md:pl-8 md:border-l border-white/10">
          {project.contribution && (
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase block mb-2">Role</span>
              <p className="text-sm font-medium">{project.contribution}</p>
            </div>
          )}
          
          <div>
            <span className="text-xs font-mono text-muted-foreground uppercase block mb-3">Technologies</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span key={tech} className="text-[10px] font-mono text-white/70 border border-white/10 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
