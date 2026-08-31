"use client";

import { motion } from "framer-motion";
import { EXPERIENCE, PERSONAL_INFO, CERTIFICATIONS } from "@/config/data";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface/20 border-y border-surface-border relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 rounded-xl bg-surface border border-surface-border text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">EXPERIENCE</h2>
            </div>
            
            <div className="space-y-12 border-l border-surface-border ml-6 pl-8 relative">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors z-10" />
                  
                  <div className="text-primary font-mono text-xs tracking-widest mb-2">
                    {exp.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="text-muted-foreground font-medium mb-4">{exp.company}</div>
                  <p className="text-muted-foreground/80 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground/60 bg-surface border border-surface-border px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-16">
            
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 rounded-xl bg-surface border border-surface-border text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">EDUCATION</h2>
              </div>
              
              <div className="border-l border-surface-border ml-6 pl-8 relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors z-10" />
                  
                  <div className="text-primary font-mono text-xs tracking-widest mb-2">
                    {PERSONAL_INFO.education.year}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{PERSONAL_INFO.education.degree}</h3>
                  <div className="text-white mb-2">{PERSONAL_INFO.education.university}</div>
                  <div className="text-muted-foreground">{PERSONAL_INFO.education.honors}</div>
                </motion.div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 rounded-xl bg-surface border border-surface-border text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">CERTIFICATIONS</h2>
              </div>
              
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-background border border-surface-border p-4 rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium text-muted-foreground hover:text-white transition-colors">{cert}</span>
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
