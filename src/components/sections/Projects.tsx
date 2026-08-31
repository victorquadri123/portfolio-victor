"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-8 gap-8">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
            SELECTED <br /> <span className="text-primary italic font-serif">WORKS</span>
          </h2>
          <p className="text-muted-foreground max-w-sm text-balance">
            Real-world systems and digital products built to solve practical problems.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="group relative flex flex-col gap-8">
      {/* Visual */}
      <div className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-sm bg-surface">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>
        
        {/* Floating CTA */}
        <div className="absolute z-20 bottom-8 right-8 overflow-hidden rounded-full mix-blend-difference">
           <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full hover:scale-95 transition-transform duration-300"
          >
            <ArrowUpRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="text-primary font-mono text-xs tracking-widest uppercase">
            {String(index + 1).padStart(2, '0')} // {project.category}
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
