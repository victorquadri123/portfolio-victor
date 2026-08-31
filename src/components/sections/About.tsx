"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/config/data";
import { Reveal } from "@/components/animations/Reveal";

const infoCards = [
  {
    label: "EDUCATION",
    title: PERSONAL_INFO.education.degree,
    subtitle: PERSONAL_INFO.education.university,
    detail: `${PERSONAL_INFO.education.year} // ${PERSONAL_INFO.education.honors}`,
  },
  {
    label: "FOCUS",
    title: "Software Development",
    subtitle: "Web Applications",
    detail: "Backend Systems // Digital Products",
  },
  {
    label: "LOCATION",
    title: PERSONAL_INFO.location,
    subtitle: "Available for remote work",
    detail: "Worldwide",
  },
  {
    label: "CURRENT",
    title: PERSONAL_INFO.title,
    subtitle: "Independent Developer",
    detail: "Open to new opportunities",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">
              <Reveal>BEYOND</Reveal>
              <Reveal delay={0.1}>THE <span className="text-primary italic font-serif">CODE</span></Reveal>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-6 hover:bg-surface/50 transition-colors"
                >
                  <div className="text-[10px] font-mono text-primary mb-6 tracking-widest">{card.label}</div>
                  <h3 className="text-sm font-semibold text-white mb-1">{card.title}</h3>
                  <div className="text-xs text-muted-foreground mb-4">{card.subtitle}</div>
                  <div className="text-[10px] font-mono text-muted-foreground/50">{card.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-white/5 space-y-8 text-muted-foreground text-lg md:text-xl leading-relaxed text-balance font-light pt-4">
            <p>
              I am a Computer Science graduate from {PERSONAL_INFO.education.university} who became deeply interested in building practical software and digital products. My journey started with a fascination for how systems work, which evolved into a passion for creating them.
            </p>
            <p>
              I have developed expertise across the entire stack—from crafting responsive, interactive frontend experiences to architecting robust backend systems, integrating APIs, and managing databases. 
            </p>
            <p className="text-white font-medium">
              I don&apos;t just write code; I focus on taking ideas and turning them into functional, user-centric digital experiences that solve real-world problems. 
            </p>
            <p>
              Whether it&apos;s a complex web application or a streamlined automation tool, I thrive on the technical challenges of bringing software to life.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
