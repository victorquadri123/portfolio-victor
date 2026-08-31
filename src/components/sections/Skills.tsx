"use client";

import { motion } from "framer-motion";
import { SKILLS, STRENGTHS } from "@/config/data";
import { Reveal } from "@/components/animations/Reveal";

const skillCategories = [
  { title: "FRONTEND", skills: SKILLS.frontend },
  { title: "BACKEND", skills: SKILLS.backend },
  { title: "DATA & APIs", skills: SKILLS.data_apis },
  { title: "TOOLS", skills: SKILLS.tools },
  { title: "OTHER", skills: SKILLS.other },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative border-t border-white/5 bg-surface/10 overflow-hidden">
      
      {/* Abstract decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
            <Reveal>TECHNICAL</Reveal>
            <Reveal delay={0.1}><span className="text-primary italic font-serif">ARSENAL</span></Reveal>
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm">
            Tools, languages, and frameworks I use to engineer robust digital systems. No inflated metrics, just practical utility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-white/5 pb-8 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-4 text-[11px] font-mono tracking-widest text-primary pt-1">
                    [ {category.title} ]
                  </div>
                  <div className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-white text-lg font-light tracking-wide group-hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="bg-background border border-white/5 p-8 rounded-sm h-full flex flex-col">
              <div className="text-[11px] font-mono tracking-widest text-primary mb-12">
                [ PROFESSIONAL STRENGTHS ]
              </div>
              
              <div className="flex flex-col gap-6 mt-auto">
                {STRENGTHS.map((strength, i) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-sm font-medium tracking-wide">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
